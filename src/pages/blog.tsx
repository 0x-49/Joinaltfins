import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, LineChart, Brain } from "lucide-react";

const articles = {
  marketTrends: [
    {
      title: "The Basics of Crypto Technical Analysis",
      description: "Learn how traders use price, volume, and indicators to identify trends and predict movements",
      category: "Technical Analysis",
      readTime: "10 min",
      date: "2024-01-08"
    },
    {
      title: "Trend Trading Strategies for Crypto",
      description: "Detail guide on identifying and profiting from uptrends using moving averages",
      category: "Trading Strategy",
      readTime: "15 min",
      date: "2024-01-07"
    }
  ],
  toolsGuides: [
    {
      title: "Maximising Profits with AltFins' Crypto Screener",
      description: "Learn how to use filters to find cryptocurrencies based on proven strategies",
      category: "Platform Guide",
      readTime: "12 min",
      date: "2024-01-06"
    },
    {
      title: "Understanding On-Chain Data for Trading",
      description: "How transactional blockchain data can help identify solid projects",
      category: "Analysis",
      readTime: "8 min",
      date: "2024-01-05"
    }
  ],
  strategies: [
    {
      title: "How to Combine Technical Indicators",
      description: "Create powerful trading signals by combining multiple technical analysis indicators",
      category: "Advanced",
      readTime: "20 min",
      date: "2024-01-04"
    },
    {
      title: "Risk Management Techniques for Crypto Trading",
      description: "Essential strategies for managing risk, including stop-loss and take-profit levels",
      category: "Risk Management",
      readTime: "15 min",
      date: "2024-01-03"
    }
  ]
};

export default function Blog() {
  return (
    <Layout
      title="Trading Blog - AltFins"
      description="Expert insights on crypto trading, technical analysis, and market trends"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Trading Insights
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Trading Blog</h1>
          <p className="text-muted-foreground">
            Expert analysis, trading strategies, and market insights from AltFins
          </p>
        </div>

        {/* Market Trends & Analysis */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5" />
            <h2 className="text-2xl font-semibold">Market Trends & Analysis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.marketTrends.map((article, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tools & Platform Guides */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Brain className="w-5 h-5" />
            <h2 className="text-2xl font-semibold">Tools & Platform Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.toolsGuides.map((article, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trading Strategies */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <LineChart className="w-5 h-5" />
            <h2 className="text-2xl font-semibold">Trading Strategies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.strategies.map((article, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardDescription>{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}