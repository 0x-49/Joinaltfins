import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/theme.css'
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Global error handler
    window.onerror = (message, source, lineno, colno, error) => {
      window.parent.postMessage({
        type: 'ERROR',
        error: {
          source,
          lineno,
          colno,
          message,
          stack: error?.stack
        }
      }, '*');
    };

    // Add unhandledrejection handler for async errors
    window.onunhandledrejection = (event) => {
      window.parent.postMessage({
        type: 'ERROR',
        error: event.reason
      }, '*');
    };

    // Add fetch error handler
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          const error = new Error(`HTTP error! status: ${response.status}`);
          error.stack = `${args[0]}\n    at ${window.location.href}:${new Error().stack?.split('\n')[2]?.match(/:\d+/)?.[0] || ''}`;
          throw error;
        }
        return response;
      } catch (error) {
        window.parent.postMessage({
          type: 'ERROR',
          error: {
            message: (error as Error).message,
            stack: (error as Error).stack,
            url: args[0]?.toString()
          }
        }, '*');
        throw error;
      }
    };

    // Handle React errors
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const errorText = args.join(' ');
      if (errorText.includes('Error:') && (
        errorText.includes('Minified React error') || 
        errorText.includes('Error rendering page') ||
        errorText.includes('client-side exception')
      )) {
        window.parent.postMessage({
          type: 'ERROR',
          error: {
            message: errorText,
            stack: new Error().stack,
            isReactError: true
          }
        }, '*');
      }
      originalConsoleError.apply(console, args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  // Send URL to parent on navigation changes
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.parent.postMessage({
        type: 'URL_CHANGE',
        url: window.location.href,
      }, '*');
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="altfins-theme">
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ThemeProvider>
  )
}