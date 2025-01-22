// File: src/pages/screener.tsx
import React from "react";
import Layout from "@/components/Layout";
import Head from "@/components/Head";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterOptions {
  technicalIndicators: FilterOption[];
  presetFilters: FilterOption[];
  patterns: FilterOption[];
  timeframes: FilterOption[];
  trends: FilterOption[];
}

const filterOptions: FilterOptions = {
  technicalIndicators: [
    { value: "sma", label: "Simple Moving Average (SMA)" },
    { value: "ema", label: "Exponential Moving Average (EMA)" },
    { value: "rsi", label: "Relative Strength Index (RSI)" },
    { value: "macd", label: "MACD" },
    { value: "bollinger", label: "Bollinger Bands" },
    { value: "stochastic", label: "Stochastic Oscillator" },
    { value: "adx", label: "Average Directional Index (ADX)" },
    { value: "obv", label: "On-Balance Volume (OBV)" },
    { value: "mfi", label: "Money Flow Index (MFI)" },
    { value: "ichimoku", label: "Ichimoku Cloud" }
  ],
  presetFilters: [
    { value: "strong_uptrend", label: "Strong Uptrend" },
    { value: "pullback_uptrend", label: "Pullback in Uptrend" },
    { value: "momentum_swing", label: "Momentum Upward Swing" },
    { value: "oversold_bounce", label: "Oversold Bounce" },
    { value: "breakout_volume", label: "Breakout with Volume" },
    { value: "accumulation", label: "Accumulation Phase" }
  ],
  patterns: [
    { value: "ascending_triangle", label: "Ascending Triangle" },
    { value: "descending_triangle", label: "Descending Triangle" },
    { value: "symmetric_triangle", label: "Symmetric Triangle" },
    { value: "ascending_channel", label: "Ascending Channel" },
    { value: "descending_channel", label: "Descending Channel" },
    { value: "rising_wedge", label: "Rising Wedge" },
    { value: "falling_wedge", label: "Falling Wedge" },
    { value: "head_shoulders", label: "Head & Shoulders" },
    { value: "inverse_head_shoulders", label: "Inverse Head & Shoulders" },
    { value: "double_top", label: "Double Top" },
    { value: "double_bottom", label: "Double Bottom" },
    { value: "cup_handle", label: "Cup and Handle" }
  ],
  timeframes: [
    { value: "15m", label: "15 Minutes" },
    { value: "1h", label: "1 Hour" },
    { value: "4h", label: "4 Hours" },
    { value: "1d", label: "1 Day" },
    { value: "1w", label: "1 Week" }
  ],
  trends: [
    { value: "strong_up", label: "Strong Up (8-10)" },
    { value: "up", label: "Up (6-7)" },
    { value: "neutral", label: "Neutral (4-5)" },
    { value: "down", label: "Down (2-3)" },
    { value: "strong_down", label: "Strong Down (0-1)" }
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
    <Layout>
      <Head
        title="Crypto Screener - Advanced Cryptocurrency Trading Filters | CryptoTraderPro"
        description="Find profitable crypto trading opportunities with our advanced screener. Filter by technical indicators, chart patterns, market cap, and more. Real-time data and analysis."
        keywords="crypto screener, cryptocurrency filter, trading signals, technical analysis, chart patterns, market cap filter, crypto trading tools, cryptocurrency scanner"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Advanced Cryptocurrency Screener</h1>
          <h2 className="text-2xl font-semibold mb-4">Find High-Potential Trading Opportunities</h2>
          <p className="text-xl text-muted-foreground mb-2">
            Find high-potential trading opportunities using our comprehensive suite of technical analysis tools and market filters
          </p>
          <p className="text-muted-foreground">
            Filter through 3000+ cryptocurrencies using 120+ technical indicators, chart patterns, and market metrics. Our advanced screener helps you identify coins that match your trading strategy.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Customize your search criteria</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Use our preset filters to quickly find opportunities based on popular trading strategies, or customize your own filters below.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <label className="text-sm font-medium">Preset Filters</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preset filter" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.presetFilters.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
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
                <label className="text-sm font-medium">Timeframe</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions.timeframes.map(option => (
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