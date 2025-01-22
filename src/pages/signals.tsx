import React from "react";
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell, TrendingUp, TrendingDown, LineChart } from "lucide-react";

const signalCategories = [
  {
    name: "Trend Trading",
    description: "High-probability signals based on Strong Uptrend/Downtrend confirmation across multiple timeframes. Perfect for catching major market moves.",
    indicators: ["SMA", "EMA", "Price Action", "Volume"],
    timeframes: ["1h", "4h", "12h", "1d"],
    successRate: "76%",
    riskReward: "1:3"
  },
  {
    name: "Momentum Trading",
    description: "Capitalize on strong market momentum with RSI and MACD confirmation strategies. Ideal for short to medium-term trades.",
    indicators: ["MACD", "RSI", "Momentum", "Volume"],
    timeframes: ["1h", "4h", "12h", "1d"],
    successRate: "72%",
    riskReward: "1:2.5"
  },
  {
    name: "Pullback Trading",
    description: "Identify optimal entry points during pullbacks in established trends. Lower risk entries with defined stop losses.",
    indicators: ["Support/Resistance", "Trend Lines", "RSI", "Volume"],
    timeframes: ["4h", "12h", "1d"],
    successRate: "74%",
    riskReward: "1:2.8"
  },
  {
    name: "Breakout Trading",
    description: "Catch powerful moves as price breaks key resistance or support levels. High reward potential with clear entry points.",
    indicators: ["Volume", "Price Action", "Support/Resistance"],
    timeframes: ["1h", "4h", "1d"],
    successRate: "68%",
    riskReward: "1:3.5"
  },
  {
    name: "Oversold/Overbought",
    description: "Trade reversals from extreme market conditions. Based on multiple technical indicators for higher accuracy.",
    indicators: ["RSI", "Stochastic", "Bollinger Bands"],
    timeframes: ["1h", "4h", "1d"],
    successRate: "70%",
    riskReward: "1:2.2"
  },
  {
    name: "Pattern Completion",
    description: "Trade completions of chart patterns with high probability setups. Combines technical analysis with volume confirmation.",
    indicators: ["Chart Patterns", "Volume", "Support/Resistance"],
    timeframes: ["4h", "12h", "1d"],
    successRate: "71%",
    riskReward: "1:2.7"
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
    stopLoss: "$41,200",
    riskReward: "1:2.2",
    confidence: "High",
    volume: "Above Average",
    status: "Active"
  },
  {
    coin: "ETH/USDT",
    signal: "Pullback in Uptrend",
    timeframe: "1d",
    trend: "Up (7/10)",
    entry: "$2,250",
    target: "$2,500",
    stopLoss: "$2,150",
    riskReward: "1:2.5",
    confidence: "Medium",
    volume: "High",
    status: "Pending"
  },
  {
    coin: "SOL/USDT",
    signal: "Breakout",
    timeframe: "4h",
    trend: "Strong Up (8/10)",
    entry: "$98.50",
    target: "$110.00",
    stopLoss: "$94.20",
    riskReward: "1:2.7",
    confidence: "High",
    volume: "Very High",
    status: "Active"
  }
];

export default function Signals() {
  return (
    <Layout>
      <Head
        title="Crypto Trading Signals - Real-Time Alerts & Analysis | CryptoTraderPro"
        description="Get professional crypto trading signals with up to 76% success rate. Real-time alerts based on technical analysis, AI insights, and market trends. Multiple timeframes and strategies."
        keywords="crypto trading signals, cryptocurrency alerts, trading opportunities, technical analysis, market trends, crypto signals, trading strategies, real-time alerts"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <Bell className="w-4 h-4 mr-2" />
            Real-Time Alerts
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Professional Crypto Trading Signals</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Make informed trading decisions with our high-accuracy signals and real-time alerts
          </p>
          <p className="text-muted-foreground">
            Our advanced system analyzes market conditions 24/7 to identify profitable trading opportunities with up to 76% success rate. Each signal includes detailed entry points, targets, and risk management guidelines.
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
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold text-green-500">{category.successRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Risk/Reward</p>
                      <p className="text-2xl font-bold text-blue-500">{category.riskReward}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Key Indicators</p>
                    <div className="flex flex-wrap gap-2">
                      {category.indicators.map((indicator) => (
                        <Badge key={indicator} variant="outline">{indicator}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Best Timeframes</p>
                    <div className="flex flex-wrap gap-2">
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
                  <TableHead className="w-[100px]">Coin</TableHead>
                  <TableHead>Signal</TableHead>
                  <TableHead className="w-[90px]">Timeframe</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead className="w-[100px]">Entry</TableHead>
                  <TableHead className="w-[100px]">Target</TableHead>
                  <TableHead className="w-[100px]">Stop Loss</TableHead>
                  <TableHead className="w-[90px]">R/R Ratio</TableHead>
                  <TableHead className="w-[90px]">Confidence</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead className="w-[90px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentSignals.map((signal, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{signal.coin}</TableCell>
                    <TableCell>{signal.signal}</TableCell>
                    <TableCell>{signal.timeframe}</TableCell>
                    <TableCell className="font-medium">{signal.trend}</TableCell>
                    <TableCell>{signal.entry}</TableCell>
                    <TableCell className="text-green-500 font-medium">{signal.target}</TableCell>
                    <TableCell className="text-red-500 font-medium">{signal.stopLoss}</TableCell>
                    <TableCell>{signal.riskReward}</TableCell>
                    <TableCell>
                      <Badge variant={signal.confidence === "High" ? "default" : "secondary"}>
                        {signal.confidence}
                      </Badge>
                    </TableCell>
                    <TableCell>{signal.volume}</TableCell>
                    <TableCell>
                      <Badge variant={signal.status === "Active" ? "default" : "secondary"}>
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