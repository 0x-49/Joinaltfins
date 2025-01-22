import NextHead from 'next/head';
import { useRouter } from 'next/router';

interface HeadProps extends React.PropsWithChildren {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function Head({
  title = 'CryptoTraderPro - Advanced Crypto Trading Tools & Analysis',
  description = 'Professional cryptocurrency trading platform with AI-powered analysis, real-time signals, and advanced technical tools. Get access to crypto screener, chart patterns, and expert insights.',
  keywords = 'crypto trading, cryptocurrency analysis, trading signals, crypto screener, technical analysis, chart patterns, crypto AI, trading platform, cryptocurrency tools, crypto market analysis',
  ogImage = '/images/og-image.png'
}: HeadProps) {
  const router = useRouter();
  const canonicalUrl = `https://cryptotraderpro.com${router.asPath}`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
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
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Additional Meta */}
      {/* Enhanced Viewport Configuration */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content="#060a15" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta property="og:site_name" content="CryptoTraderPro" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:site" content="@cryptotraderpro" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "CryptoTraderPro",
          "url": "https://cryptotraderpro.com",
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://cryptotraderpro.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "keywords": keywords,
          "image": ogImage,
          "publisher": {
            "@type": "Organization",
            "name": "CryptoTraderPro",
            "logo": "https://cryptotraderpro.com/images/logo1.svg"
          }
        })}
      </script>
    </NextHead>
  );
}
