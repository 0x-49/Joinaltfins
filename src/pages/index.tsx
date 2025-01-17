import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LineChart, Brain, Bell, FileText, GraduationCap, BarChart, Sparkles, TrendingUp, Info } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Chart Pattern Recognition",
    description: "AltFins' advanced AI identifies 26 trading patterns across multiple time intervals, saving you hours of manual analysis."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Crypto Screener",
    description: "Find the best cryptocurrencies using AltFins' 120+ technical indicators and pre-set market filters."
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Real-Time Trading Signals",
    description: "Receive instant AltFins alerts on potential trading opportunities based on technical analysis."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Technical Analysis Simplified",
    description: "Our AltFins analysts conduct detailed technical analysis of top 50+ coins with simple, consistent insights."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "On-Chain Data Insights",
    description: "Track asset movements, understand user behavior, and measure real value with AltFins' on-chain data."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Education Hub",
    description: "Learn proven trading strategies through AltFins' comprehensive courses and become a smarter trader."
  }
];

export default function Home() {
  return (
    <Layout>
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
            Welcome to AltFins
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your premier crypto trading companion. Harness the power of AI-driven analysis, real-time data, and expert insights to navigate the dynamic cryptocurrency market
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="glow px-8">Start Free Trial</Button>
            <Button size="lg" variant="outline" className="px-8">Watch AltFins Demo</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50K+", label: "Active AltFins Traders" },
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
          <h2 className="text-4xl font-bold mb-4 text-gradient">AltFins Trading Suite</h2>
          <p className="text-xl text-muted-foreground">Everything you need to make informed trading decisions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm card-hover">
              <CardHeader>
                <div className="mb-4 text-primary">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
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
                  <div className="text-sm">AltFins on Trustpilot</div>
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
            <CardTitle className="text-4xl font-bold text-gradient mb-4">Join AltFins Today</CardTitle>
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
            Disclaimer: AltFins may receive compensation when you sign up for services using links on our platform. This doesn't affect our analysis or recommendations. We're committed to providing unbiased information to help you make informed trading decisions.
          </AlertDescription>
        </Alert>
      </section>
    </Layout>
  );
}