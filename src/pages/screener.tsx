import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const filterOptions = {
  technicalIndicators: [
    { value: "sma", label: "Simple Moving Average (SMA)" },
    { value: "ema", label: "Exponential Moving Average (EMA)" },
    { value: "rsi", label: "Relative Strength Index (RSI)" },
    { value: "macd", label: "MACD" }
  ],
  trends: [
    { value: "strong_up", label: "Strong Up (8-10)" },
    { value: "up", label: "Up (6-7)" },
    { value: "neutral", label: "Neutral (4-5)" },
    { value: "down", label: "Down (2-3)" },
    { value: "strong_down", label: "Strong Down (0-1)" }
  ],
  patterns: [
    { value: "triangle", label: "Triangle" },
    { value: "channel", label: "Channel" },
    { value: "wedge", label: "Wedge" },
    { value: "head_shoulders", label: "Head & Shoulders" }
  ]
};

const mockData = [
  {
    symbol: "BTC/USDT",
    price: "42,356.78",
    change24h: "+2.45%",
    volume24h: "1.2B",
    marketCap: "824.5B",
    trend: "Strong Up (9/10)",
    signal: "Buy",
    patterns: "Triangle Breakout"
  },
  {
    symbol: "ETH/USDT",
    price: "2,245.90",
    change24h: "+1.87%",
    volume24h: "789.3M",
    marketCap: "269.8B",
    trend: "Up (7/10)",
    signal: "Hold",
    patterns: "Channel"
  },
  {
    symbol: "BNB/USDT",
    price: "312.45",
    change24h: "-0.92%",
    volume24h: "456.7M",
    marketCap: "48.2B",
    trend: "Down (3/10)",
    signal: "Sell",
    patterns: "Head & Shoulders"
  }
];

export default function Screener() {
  return (
    <Layout 
      title="Crypto Screener - CryptoTrader Pro" 
      description="Find the best cryptocurrency trading opportunities with our advanced screener"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Crypto Screener</h1>
          <p className="text-muted-foreground">
            Find the best trading opportunities using our advanced filters and technical indicators
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Customize your search criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
              <label className="text-sm font-medium">Market Cap Range</label>
              <Select>
                <SelectTrigger>
                <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="large">Large Cap ($10B+)</SelectItem>
                <SelectItem value="mid">Mid Cap ($1B-$10B)</SelectItem>
                <SelectItem value="small">Small Cap (&lt;$1B)</SelectItem>
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2">
              <label className="text-sm font-medium">Technical Indicators</label>
              <Select>
                <SelectTrigger>
                <SelectValue placeholder="Select indicator" />
                </SelectTrigger>
                <SelectContent>
                {filterOptions.technicalIndicators.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                  {option.label}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2">
              <label className="text-sm font-medium">Trend Rating</label>
              <Select>
                <SelectTrigger>
                <SelectValue placeholder="Select trend" />
                </SelectTrigger>
                <SelectContent>
                {filterOptions.trends.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                  {option.label}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2">
              <label className="text-sm font-medium">Chart Patterns</label>
              <Select>
                <SelectTrigger>
                <SelectValue placeholder="Select pattern" />
                </SelectTrigger>
                <SelectContent>
                {filterOptions.patterns.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                  {option.label}
                  </SelectItem>
                ))}
                </SelectContent>
              </Select>
              </div>
              <div className="space-y-2">
              <label className="text-sm font-medium">Trading Signal</label>
              <Select>
                <SelectTrigger>
                <SelectValue placeholder="Select signal" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="all">All Signals</SelectItem>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
                <SelectItem value="hold">Hold</SelectItem>
                </SelectContent>
              </Select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button>Apply Filters</Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Table */}
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
            <CardDescription>Showing top cryptocurrencies matching your criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>24h Change</TableHead>
                    <TableHead>24h Volume</TableHead>
                    <TableHead>Market Cap</TableHead>
                    <TableHead>Trend</TableHead>
                    <TableHead>Signal</TableHead>
                    <TableHead>Patterns</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.map((coin, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{coin.symbol}</TableCell>
                      <TableCell>${coin.price}</TableCell>
                      <TableCell className={coin.change24h.startsWith("+") ? "text-green-600" : "text-red-600"}>
                        {coin.change24h}
                      </TableCell>
                      <TableCell>${coin.volume24h}</TableCell>
                        <TableCell>${coin.marketCap}</TableCell>
                        <TableCell>{coin.trend}</TableCell>
                        <TableCell>{coin.signal}</TableCell>
                        <TableCell>{coin.patterns}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}