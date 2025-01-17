import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "Basic market analysis",
      "Limited pattern recognition",
      "Daily trading signals",
      "Community access"
    ]
  },
  {
    name: "Pro",
    price: "$49",
    description: "For serious traders",
    features: [
      "Advanced market analysis",
      "Full pattern recognition",
      "Real-time trading signals",
      "Priority support",
      "Educational content"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For institutions",
    features: [
      "Custom solutions",
      "Dedicated support",
      "API access",
      "Custom integrations",
      "Team management"
    ]
  }
];

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Pricing - CryptoTrader Pro</title>
        <meta name="description" content="Choose the perfect plan for your trading needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">Choose the plan that best fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={index === 1 ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2 text-green-500"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}