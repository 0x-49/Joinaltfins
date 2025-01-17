import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "@/components/theme-provider";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}
import { ModeToggle } from "@/components/mode-toggle";

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
    "@type": "SoftwareApplication",
    "name": "AltFins",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1000"
    }
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
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
        <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <div className="fixed bottom-4 right-4 z-50">
          <ModeToggle />
        </div>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
