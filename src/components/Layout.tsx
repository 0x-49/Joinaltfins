import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ModeToggle } from "@/components/mode-toggle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function Layout({
  children,
  title = "AltFins - Advanced Crypto Trading Platform",
  description = "AltFins is your premier crypto trading companion with AI-driven analysis, real-time data, and expert insights for cryptocurrency trading.",
  canonicalUrl = "https://joinalfins.com",
  ogImage = "/images/og-image.png",
}: LayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": title,
    "description": description,
    "url": canonicalUrl,
  };

  return (
    <>
      {/* Skip navigation link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
        aria-label="Skip to main content"
      >
        Skip to content
      </a>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      
        <Header />
        <main
          id="main-content"
          className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl"
          role="main"
          aria-label="Main content"
        >
          {children}
        </main>
        <div 
          className="fixed bottom-4 right-4 z-50"
          role="region"
          aria-label="Theme customization"
        >
          <ModeToggle aria-label="Toggle dark mode" />
        </div>
        <Footer />
      </div>
    </>
  );
}
