import React from "react";
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, TrendingUp, LineChart, ArrowUpRight } from "lucide-react";

const patternTypes = [
  {
    name: "Triangle Patterns",
    description: "Ascending, Descending, and Symmetrical triangles indicating potential breakout directions. Ascending triangles often signal bullish continuation, while descending triangles suggest bearish pressure.",
    successRate: "78%",
    timeframes: ["15m", "1h", "4h", "1d"],
    profitPotential: "10-15%"
  },
  {
    name: "Channel Patterns",
    description: "Upward, Downward, and Horizontal channels showing established trend directions. Trade with the trend in channels for higher probability setups.",
    successRate: "75%",
    timeframes: ["1h", "4h", "1d"],
    profitPotential: "8-12%"
  },
  {
    name: "Wedge Patterns",
    description: "Rising and Falling wedges signaling potential trend reversals. Rising wedges in uptrends and falling wedges in downtrends are powerful reversal signals.",
    successRate: "72%",
    timeframes: ["4h", "1d"],
    profitPotential: "12-18%"
  },
  {
    name: "Head & Shoulders",
    description: "Classic reversal pattern with a higher peak (head) between two lower peaks (shoulders). Particularly reliable at market tops and bottoms.",
    successRate: "76%",
    timeframes: ["4h", "1d", "1w"],
    profitPotential: "15-20%"
  },
  {
    name: "Double Tops & Bottoms",
    description: "Reversal patterns showing two peaks or troughs at similar levels. Double bottoms indicate potential trend reversals from bearish to bullish.",
    successRate: "74%",
    timeframes: ["1h", "4h", "1d"],
    profitPotential: "10-15%"
  },
  {
    name: "Cup and Handle",
    description: "Bullish continuation pattern resembling a cup with a handle. Often forms during uptrends and signals potential continuation of the bullish move.",
    successRate: "71%",
    timeframes: ["4h", "1d", "1w"],
    profitPotential: "12-20%"
  }
];

const recentPatterns = [
  {
    coin: "BTC/USDT",
    pattern: "Ascending Triangle",
    timeframe: "4h",
    identified: "2 hours ago",
    potentialGain: "+12%",
    status: "Forming",
    confidence: "High",
    volume: "Above Average"
  },
  {
    coin: "ETH/USDT",
    pattern: "Bull Flag",
    timeframe: "1d",
    identified: "5 hours ago",
    potentialGain: "+8%",
    status: "Breakout",
    confidence: "High",
    volume: "High"
  },
  {
    coin: "SOL/USDT",
    pattern: "Cup and Handle",
    timeframe: "4h",
    identified: "1 hour ago",
    potentialGain: "+15%",
    status: "Forming",
    confidence: "Medium",
    volume: "Average"
  },
  {
    coin: "BNB/USDT",
    pattern: "Double Bottom",
    timeframe: "1d",
    identified: "3 hours ago",
    potentialGain: "+10%",
    status: "Confirmed",
    confidence: "High",
    volume: "Above Average"
  }
];

export default function Patterns() {
  return (
    <Layout>
      <Head
        title="AI Chart Pattern Recognition - Crypto Trading Patterns | CryptoTraderPro"
        description="Discover profitable crypto trading opportunities with our AI-powered chart pattern recognition. Up to 78% success rate across multiple timeframes. Expert analysis of triangles, channels, wedges, and more."
        keywords="crypto chart patterns, trading patterns, technical analysis, AI pattern recognition, cryptocurrency trading, triangle patterns, channel patterns, wedge patterns, head and shoulders, double tops and bottoms"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Analysis
          </Badge>
          <h1 className="text-4xl font-bold mb-4">AI-Powered Chart Pattern Recognition</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Maximize your trading profits with AI-identified chart patterns and technical analysis
          </p>
          <p className="text-muted-foreground">
            Our advanced AI technology identifies 26 profitable trading patterns across multiple timeframes, with success rates up to 78%. Each pattern is analyzed for optimal entry and exit points to maximize potential returns.
          </p>
        </div>

        {/* Pattern Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {patternTypes.map((pattern, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{pattern.name}</CardTitle>
                <CardDescription>{pattern.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold text-green-500">{pattern.successRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Profit Potential</p>
                      <p className="text-2xl font-bold text-green-500">{pattern.profitPotential}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Best Timeframes</p>
                    <div className="flex flex-wrap gap-2">
                      {pattern.timeframes.map((tf) => (
                        <Badge key={tf} variant="outline">{tf}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Patterns */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Pattern Alerts</CardTitle>
            <CardDescription>Latest patterns identified by our AI system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">Coin</TableHead>
                  <TableHead>Pattern</TableHead>
                  <TableHead className="w-[100px]">Timeframe</TableHead>
                  <TableHead className="w-[120px]">Identified</TableHead>
                  <TableHead className="w-[100px]">Potential</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead className="w-[100px]">Confidence</TableHead>
                  <TableHead>Volume</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPatterns.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.coin}</TableCell>
                    <TableCell>{item.pattern}</TableCell>
                    <TableCell>{item.timeframe}</TableCell>
                    <TableCell>{item.identified}</TableCell>
                    <TableCell className="text-green-500 font-medium">{item.potentialGain}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Breakout" ? "destructive" :
                              item.status === "Confirmed" ? "default" :
                              "secondary"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={item.confidence === "High" ? "default" : "secondary"}>
                        {item.confidence}
                      </Badge>
                    </TableCell>
                    <TableCell>{item.volume}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
