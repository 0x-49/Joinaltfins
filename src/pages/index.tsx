// File: src/pages/index.tsx
import React from "react";
import Head from "@/components/Head";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { 
  LineChart, Brain, Bell, FileText, GraduationCap, 
  BarChart, Sparkles, TrendingUp, Info, Trophy 
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Chart Pattern Recognition",
    description: "Our advanced AI identifies 26 trading patterns across multiple time intervals, saving you hours of manual analysis with up to 78% success rate."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Crypto Screener",
    description: "Find the best cryptocurrencies using our comprehensive suite of 120+ technical indicators and pre-set market filters for optimal trading."
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Real-Time Trading Signals",
    description: "Receive instant alerts on potential trading opportunities based on advanced technical analysis and market trends."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Technical Analysis Simplified",
    description: "Our expert analysts conduct detailed technical analysis of top 50+ coins, providing simple and actionable trading insights."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "On-Chain Data Insights",
    description: "Track asset movements, understand market behavior, and measure real value with comprehensive on-chain data analysis."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Education Hub",
    description: "Master proven trading strategies through our comprehensive educational resources and become a more profitable trader."
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head
        title="CryptoTraderPro - AI-Powered Crypto Trading Platform"
        description="Maximize your crypto trading potential with AI-powered analysis, real-time signals, and advanced technical tools. Join 50,000+ traders using our professional platform."
        keywords="crypto trading platform, AI trading analysis, crypto signals, cryptocurrency screener, technical analysis, chart patterns, crypto market analysis, trading tools"
      >
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cryptotraderpro.com" />
        <meta property="og:title" content="CryptoTraderPro - AI-Powered Crypto Trading Platform" />
        <meta property="og:description" content="Maximize your crypto trading potential with AI-powered analysis, real-time signals, and advanced technical tools." />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cryptotraderpro.com" />
        <meta name="twitter:title" content="CryptoTraderPro - AI-Powered Crypto Trading Platform" />
        <meta name="twitter:description" content="Maximize your crypto trading potential with AI-powered analysis, real-time signals, and advanced technical tools." />
        <meta name="twitter:image" content="/images/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "CryptoTraderPro",
            "description": "AI-Powered Crypto Trading Platform",
            "image": "/images/logo.png",
            "brand": {
              "@type": "Brand",
              "name": "AltFins"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50000"
            }
          })}
        </script>
      </Head>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl" />
        <div className="relative text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Badge className="py-2 px-4 text-sm bg-primary/10 hover:bg-primary/20 transition-colors">
              <Sparkles className="w-4 h-4 mr-2 inline-block" />
              Join 10,000+ Traders on AltFins
            </Badge>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 text-gradient animate-float">
            Outsmart Crypto Markets with <span className="underline decoration-primary/40">78% Success Rate</span> AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50,000+ traders using our AI-powered platform to find winning trades faster. Get <span className="font-semibold text-primary">real-time alerts</span>, <span className="font-semibold text-primary">pro-grade charts</span>, and <span className="font-semibold text-primary">institutional-grade analysis</span>.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <img src="/images/trusted-by/binance.png" alt="Binance" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/trusted-by/coinbase.png" alt="Coinbase" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/trusted-by/coingecko.png" alt="CoinGecko" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="glow px-8">Start Free Trial</Button>
            <Button size="lg" variant="outline" className="px-8">Watch AltFins Demo</Button>
          </div>
        </div>
      </section>

      {/* AI Pattern Showcase */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Sparkles className="w-4 h-4 mr-2 inline-block" />
            Live Pattern Recognition
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gradient">AI-Powered Chart Patterns</h2>
        </div>
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {['rising-wedge', 'head-shoulders', 'bull-flag'].map((pattern) => (
              <CarouselItem key={pattern} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <img 
                        src={`/images/patterns/${pattern}.png`} 
                        alt={pattern.replace('-', ' ')} 
                        className="rounded-lg mb-4 h-48 object-cover"
                      />
                      <CardTitle className="capitalize">{pattern.replace('-', ' ')}</CardTitle>
                      <CardDescription className="text-primary">
                        78% Historical Accuracy • 2h expiry
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Active Professional Traders" },
            { value: "$2.5B+", label: "Monthly Trading Volume" },
            { value: "99.9%", label: "Platform Uptime" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            <TrendingUp className="w-4 h-4 mr-2 inline-block" />
            Advanced Trading Tools
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-gradient">Professional Trading Suite</h2>
          <p className="text-xl text-muted-foreground">Everything you need to make informed trading decisions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(6).fill(0).map((_, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <Skeleton className="h-8 w-8 rounded-full mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mt-2" />
                </CardHeader>
              </Card>
            ))
          ) : (
            features.map((feature, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm card-hover">
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))
          )}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border bg-card/50 backdrop-blur-sm p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-gradient">The Most Trusted Crypto Trading Platform</h3>
            <div className="flex flex-wrap justify-center gap-12 items-center text-muted-foreground">
              <div className="flex items-center">
                <span className="text-4xl mr-2">⭐</span>
                <div className="text-left">
                  <div className="font-bold">4.9/5 Rating</div>
                  <div className="text-sm">on Trustpilot</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl mr-2">📈</span>
                <div className="text-left">
                  <div className="font-bold">50,000+</div>
                  <div className="text-sm">Active Users</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-4xl mr-2">🏆</span>
                <div className="text-left">
                  <div className="font-bold">Featured on</div>
                  <div className="text-sm">Major Crypto Media</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <Card className="max-w-4xl mx-auto border bg-card/50 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          <CardHeader className="relative">
            <CardTitle className="text-4xl font-bold text-gradient mb-4">Start Trading Smarter Today</CardTitle>
            <CardDescription className="text-xl">Experience the future of crypto trading with our advanced platform</CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <Button size="lg" className="glow px-12 py-6 text-lg">
              Start Your Journey
            </Button>
            <p className="text-sm text-muted-foreground mt-4">No credit card required • 14-day free trial</p>
          </CardContent>
        </Card>
      </section>

      {/* Affiliate Disclaimer */}
      <section className="container mx-auto px-4 pb-12">
        <Alert className="bg-card/50 backdrop-blur-sm">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Disclaimer: CryptoTraderPro may receive compensation when you sign up for services using links on our platform. This doesn't affect our analysis or recommendations. We're committed to providing unbiased information to help you make informed trading decisions.
          </AlertDescription>
        </Alert>
      </section>
    </>
  );
}
