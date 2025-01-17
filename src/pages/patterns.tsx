import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, TrendingUp, ChartLineUp } from "lucide-react";

const patternTypes = [
  {
    name: "Triangle Patterns",
    description: "Ascending, Descending, and Symmetrical triangles indicating continuation or reversal",
    successRate: "78%",
    timeframes: ["15m", "1h", "4h", "1d"]
  },
  {
    name: "Channel Patterns",
    description: "Upward, Downward, and Horizontal channels showing trend direction",
    successRate: "75%",
    timeframes: ["1h", "4h", "1d"]
  },
  {
    name: "Wedge Patterns",
    description: "Rising and Falling wedges signaling potential reversals",
    successRate: "72%",
    timeframes: ["4h", "1d"]
  }
];

const recentPatterns = [
  {
    coin: "BTC/USDT",
    pattern: "Ascending Triangle",
    timeframe: "4h",
    identified: "2 hours ago",
    potentialGain: "+12%",
    status: "Forming"
  },
  {
    coin: "ETH/USDT",
    pattern: "Bull Flag",
    timeframe: "1d",
    identified: "5 hours ago",
    potentialGain: "+8%",
    status: "Breakout"
  }
];

export default function Patterns() {
  return (
    <Layout
      title="AI Chart Patterns - AltFins"
      description="Discover trading opportunities with AI-powered chart pattern recognition. Up to 78% success rate across multiple timeframes."
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Analysis
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Chart Pattern Recognition</h1>
          <p className="text-muted-foreground">
            Our AI identifies 26 trading patterns across multiple time intervals, with up to 78% success rate
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
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold text-green-500">{pattern.successRate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timeframes</p>
                    <div className="flex gap-2">
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
                  <TableHead>Coin</TableHead>
                  <TableHead>Pattern</TableHead>
                  <TableHead>Timeframe</TableHead>
                  <TableHead>Identified</TableHead>
                  <TableHead>Potential</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPatterns.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.coin}</TableCell>
                    <TableCell>{item.pattern}</TableCell>
                    <TableCell>{item.timeframe}</TableCell>
                    <TableCell>{item.identified}</TableCell>
                    <TableCell className="text-green-500">{item.potentialGain}</TableCell>
                    <TableCell>{item.status}</TableCell>
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
