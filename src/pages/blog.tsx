// File: src/pages/blog.tsx
import React from "react";
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Announcements } from "@/components/ui/announcements"; // Example component from ShadCN Library
import { BlogList } from "@/components/ui/blog-list"; // Hypothetical BlogList component

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  link: string;
}

const blogPosts = [
  {
    title: "Understanding Crypto Market Trends",
    summary: "Dive deep into the factors that influence cryptocurrency markets, including technical analysis and market sentiment.",
    date: "2025-01-15",
    link: "/blog/understanding-crypto-market-trends"
  },
  {
    title: "Top 10 Trading Strategies for 2025",
    summary: "Explore the most effective trading strategies to maximize your profits in the evolving crypto landscape.",
    date: "2025-01-20",
    link: "/blog/top-10-trading-strategies-2025"
  },
  {
    title: "Beginner's Guide to Technical Analysis",
    summary: "Learn the basics of technical analysis to make informed trading decisions and identify profitable opportunities.",
    date: "2025-01-25",
    link: "/blog/beginners-guide-technical-analysis"
  }
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <Layout>
      <Head
        title="Crypto Blog - Insights & Analysis | CryptoTraderPro"
        description="Stay updated with the latest cryptocurrency market trends, trading strategies, and expert insights."
        keywords="crypto blog, cryptocurrency insights, market analysis, trading strategies, crypto news, blockchain trends"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Crypto Blog</h1>
          <h2 className="text-2xl font-semibold mb-4">Latest Insights and Market Analysis</h2>
          <p className="text-muted-foreground">
            Explore our comprehensive articles on cryptocurrency market trends, trading strategies, and expert insights to enhance your trading knowledge.
          </p>
        </div>

        {/* Announcements Section */}
        <Announcements
          message="New trading strategies added! Check out our latest blog posts."
          link="/blog/new-trading-strategies"
          linkText="Learn More"
        />

        {/* Blog Posts */}
        <BlogList posts={blogPosts} />
      </div>
    </Layout>
  );
}