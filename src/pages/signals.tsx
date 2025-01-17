import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, TrendingUp, TrendingDown, LineChart } from "lucide-react";

const signalCategories = [
  {
    name: "Trend Trading",
    description: "Signals based on Strong Uptrend/Downtrend across multiple timeframes",
    indicators: ["SMA", "EMA", "Price Action"],
    timeframes: ["1h", "4h", "12h", "1d"]
  },
  {
    name: "Momentum Trading",
    description: "Signals for momentum and RSI confirmation strategies",
    indicators: ["MACD", "RSI", "Momentum"],
    timeframes: ["1h", "4h", "12h", "1d"]
  },
  {
    name: "Pullback Trading",
    description: "Identify pullbacks in established trends for optimal entry points",
    indicators: ["Support/Resistance", "Trend Lines"],
    timeframes: ["4h", "12h", "1d"]
  }
];

const recentSignals = [
  {
    coin: "BTC/USDT",
    signal: "Strong Uptrend",
    timeframe: "4h",
    trend: "Strong Up (9/10)",
    entry: "$42,350",
    target: "$45,000",
    status: "Active"
  },
  {
    coin: "ETH/USDT",
    signal: "Pullback in Uptrend",
    timeframe: "1d",
    trend: "Up (7/10)",
    entry: "$2,250",
    target: "$2,500",
    status: "Pending"
  }
];

export default function Signals() {
  return (
    <Layout
      title="Trading Signals - AltFins"
      description="Get real-time crypto trading signals based on technical analysis and AI-powered insights"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <Bell className="w-4 h-4 mr-2" />
            Real-Time Alerts
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Trading Signals</h1>
          <p className="text-muted-foreground">
            Receive instant alerts on potential trading opportunities based on technical analysis and market trends
          </p>
        </div>

        {/* Signal Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {signalCategories.map((category, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Indicators</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {category.indicators.map((indicator) => (
                        <Badge key={indicator} variant="outline">{indicator}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timeframes</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {category.timeframes.map((tf) => (
                        <Badge key={tf} variant="secondary">{tf}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Signals */}
        <Card>
          <CardHeader>
            <CardTitle>Active Trading Signals</CardTitle>
            <CardDescription>Latest trading opportunities identified by our system</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Coin</TableHead>
                  <TableHead>Signal</TableHead>
                  <TableHead>Timeframe</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Entry</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSignals.map((signal, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{signal.coin}</TableCell>
                    <TableCell>{signal.signal}</TableCell>
                    <TableCell>{signal.timeframe}</TableCell>
                    <TableCell>{signal.trend}</TableCell>
                    <TableCell>{signal.entry}</TableCell>
                    <TableCell className="text-green-500">{signal.target}</TableCell>
                    <TableCell>
                      <Badge variant={signal.status === "Active" ? "success" : "secondary"}>
                        {signal.status}
                      </Badge>
                    </TableCell>
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