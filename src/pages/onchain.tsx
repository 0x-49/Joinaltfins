import React from "react";
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart as BarChartIcon, LineChart, TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    title: "Total Revenue",
    description: "Protocol revenue from fees, staking rewards, and other sources. Higher revenue indicates stronger protocol adoption and value generation.",
    topCoins: [
      { symbol: "TRX", value: "65M", change: "+12.5%", trend: "increasing" },
      { symbol: "ETH", value: "42M", change: "+8.2%", trend: "stable" },
      { symbol: "SOL", value: "28M", change: "+15.3%", trend: "increasing" },
      { symbol: "BNB", value: "22M", change: "+6.8%", trend: "stable" }
    ]
  },
  {
    title: "Market Cap / TR",
    description: "Market capitalization to total revenue ratio. Lower ratios may indicate undervalued protocols with strong fundamentals.",
    topCoins: [
      { symbol: "TRU", value: "0.43x", change: "+56.2%", trend: "improving" },
      { symbol: "LDO", value: "1.2x", change: "+23.4%", trend: "improving" },
      { symbol: "JTO", value: "2.1x", change: "+18.7%", trend: "stable" },
      { symbol: "ARB", value: "1.8x", change: "+15.2%", trend: "improving" }
    ]
  },
  {
    title: "Total Value Locked (TVL)",
    description: "Total value of assets locked in protocol. Strong TVL growth indicates increasing trust and protocol adoption.",
    topCoins: [
      { symbol: "LDO", value: "$35B", change: "+5.2%", trend: "stable" },
      { symbol: "AAVE", value: "$12B", change: "+3.8%", trend: "stable" },
      { symbol: "MKR", value: "$8B", change: "+7.1%", trend: "increasing" },
      { symbol: "CRV", value: "$6B", change: "+4.5%", trend: "stable" }
    ]
  },
  {
    title: "Daily Active Users",
    description: "Number of unique addresses interacting with the protocol daily. Higher user activity suggests growing adoption.",
    topCoins: [
      { symbol: "DYDX", value: "125K", change: "+18.5%", trend: "increasing" },
      { symbol: "GMX", value: "82K", change: "+12.3%", trend: "increasing" },
      { symbol: "SNX", value: "45K", change: "+8.7%", trend: "stable" },
      { symbol: "PERP", value: "38K", change: "+15.2%", trend: "increasing" }
    ]
  },
  {
    title: "Protocol Growth Rate",
    description: "Combined metric of revenue growth, TVL changes, and user adoption. Higher rates indicate stronger protocol momentum.",
    topCoins: [
      { symbol: "INJ", value: "92%", change: "+28.5%", trend: "increasing" },
      { symbol: "SEI", value: "78%", change: "+22.4%", trend: "increasing" },
      { symbol: "SUI", value: "65%", change: "+18.7%", trend: "stable" },
      { symbol: "STRK", value: "58%", change: "+15.2%", trend: "increasing" }
    ]
  }
];

const insights = [
  {
    title: "Revenue Growth Leaders",
    description: "Protocols showing strongest revenue growth in the past 7 days, indicating potential market opportunities",
    items: [
      { name: "GRT", change: "+2,318%", reason: "Network usage surge from AI applications", trend: "accelerating" },
      { name: "DERI", change: "+284%", reason: "New derivatives products launch", trend: "stable" },
      { name: "AST", change: "+218%", reason: "Institutional adoption increase", trend: "accelerating" },
      { name: "HOOK", change: "+186%", reason: "Gaming ecosystem expansion", trend: "improving" }
    ]
  },
  {
    title: "TVL Momentum",
    description: "Projects with significant TVL increases, suggesting growing protocol adoption",
    items: [
      { name: "FUN", change: "+220,677%", reason: "Major protocol upgrade", trend: "accelerating" },
      { name: "PERL", change: "+2,141%", reason: "New staking incentives", trend: "stable" },
      { name: "UFI", change: "+216%", reason: "DeFi integration partnerships", trend: "improving" },
      { name: "BEAM", change: "+198%", reason: "Layer 2 scaling solution launch", trend: "improving" }
    ]
  },
  {
    title: "User Growth Trends",
    description: "Protocols experiencing rapid user base expansion and engagement",
    items: [
      { name: "BLUR", change: "+312%", reason: "NFT trading volume surge", trend: "accelerating" },
      { name: "MAGIC", change: "+245%", reason: "GameFi ecosystem growth", trend: "improving" },
      { name: "STG", change: "+189%", reason: "Cross-chain adoption", trend: "stable" },
      { name: "VELA", change: "+156%", reason: "DeFi yield optimization", trend: "improving" }
    ]
  },
  {
    title: "Protocol Development Activity",
    description: "Projects with significant developer activity and protocol improvements",
    items: [
      { name: "OP", change: "+156%", reason: "Layer 2 optimizations", trend: "improving" },
      { name: "RNDR", change: "+134%", reason: "GPU network expansion", trend: "stable" },
      { name: "CELR", change: "+128%", reason: "New bridge deployments", trend: "improving" },
      { name: "ROSE", change: "+112%", reason: "Privacy feature updates", trend: "stable" }
    ]
  }
];

export default function OnChain() {
  return (
    <Layout>
      <Head
        title="On-Chain Analytics & Metrics - Crypto Protocol Analysis | CryptoTraderPro"
        description="Track real-time on-chain metrics, protocol revenue, TVL data, and user growth for cryptocurrency projects. Comprehensive analysis of blockchain protocols and DeFi platforms."
        keywords="on-chain analytics, crypto metrics, protocol revenue, TVL analysis, blockchain data, DeFi metrics, cryptocurrency analysis, protocol growth, market insights"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <BarChartIcon className="w-4 h-4 mr-2" />
            On-Chain Analytics
          </Badge>
          <h1 className="text-4xl font-bold mb-4">On-Chain Analytics & Protocol Metrics</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Real-time analysis of blockchain protocols, revenue metrics, and market trends
          </p>
          <p className="text-muted-foreground">
            Monitor key performance indicators across multiple protocols, including revenue growth, TVL changes, user adoption, and development activity. Make data-driven decisions with comprehensive on-chain analytics.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{metric.title}</CardTitle>
                <CardDescription>{metric.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {metric.topCoins.map((coin, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="font-medium">{coin.symbol}</span>
                      <div className="flex items-center gap-3">
                        <span>{coin.value}</span>
                        <span className={coin.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                          {coin.change}
                        </span>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">View All</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Market Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>{insight.title}</CardTitle>
                  <CardDescription>{insight.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {insight.items.map((item, i) => (
                      <li key={i} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">•</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="text-green-500 font-medium">{item.change}</span>
                        </div>
                        <div className="text-sm text-muted-foreground pl-6">
                          {item.reason}
                        </div>
                        <div className="flex items-center gap-2 pl-6">
                          <Badge variant={
                            item.trend === "accelerating" ? "default" :
                            item.trend === "improving" ? "secondary" :
                            "outline"
                          }>
                            {item.trend}
                          </Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Data Disclaimer */}
        <Card className="border bg-card/50 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center gap-2">
            <Info className="w-5 h-5" />
            <CardTitle>Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              On-chain data is sourced directly from blockchain networks and updated in real-time. 
              Revenue and TVL metrics are aggregated from multiple sources to ensure accuracy.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}