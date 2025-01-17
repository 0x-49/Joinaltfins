import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart as BarChartIcon, LineChart, TrendingUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  {
    title: "Total Revenue",
    description: "Protocol revenue from fees and other sources",
    topCoins: [
      { symbol: "TRX", value: "65M", change: "+12.5%" },
      { symbol: "ETH", value: "42M", change: "+8.2%" },
      { symbol: "SOL", value: "28M", change: "+15.3%" }
    ]
  },
  {
    title: "Market Cap / TR",
    description: "Market capitalization to total revenue ratio",
    topCoins: [
      { symbol: "TRU", value: "0.43x", change: "+56.2%" },
      { symbol: "LDO", value: "1.2x", change: "+23.4%" },
      { symbol: "JTO", value: "2.1x", change: "+18.7%" }
    ]
  },
  {
    title: "Total Value Locked (TVL)",
    description: "Total value of assets locked in protocol",
    topCoins: [
      { symbol: "LDO", value: "$35B", change: "+5.2%" },
      { symbol: "AAVE", value: "$12B", change: "+3.8%" },
      { symbol: "MKR", value: "$8B", change: "+7.1%" }
    ]
  }
];

const insights = [
  {
    title: "Revenue Growth Leaders",
    description: "Protocols showing strongest revenue growth in the past 7 days",
    items: ["GRT (+2,318%)", "DERI (+284%)", "AST (+218%)"]
  },
  {
    title: "TVL Momentum",
    description: "Projects with significant TVL increases",
    items: ["FUN (+220,677%)", "PERL (+2,141%)", "UFI (+216%)"]
  }
];

export default function OnChain() {
  return (
    <Layout
      title="On-Chain Analytics - AltFins"
      description="Track on-chain metrics, protocol revenue, and TVL data for cryptocurrency projects"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <BarChartIcon className="w-4 h-4 mr-2" />
            On-Chain Analytics
          </Badge>
          <h1 className="text-3xl font-bold mb-2">On-Chain Data</h1>
          <p className="text-muted-foreground">
            Track protocol metrics, revenue, and fundamental indicators
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
                  <ul className="space-y-2">
                    {insight.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        {item}
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