import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    <>
      <Head>
        <title>Sign Up - CryptoTrader Pro</title>
        <meta name="description" content="Create your CryptoTrader Pro account" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Create Your Account</CardTitle>
                <CardDescription>Start your trading journey today</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                  <Button className="w-full">Sign Up</Button>
                </form>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  <p>Coming soon! Authentication is not implemented yet.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}