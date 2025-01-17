import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const faqs = [
	{
		question: "What are crypto trading signals and how do they work?",
		answer: "AltFins' trading signals are AI-generated alerts based on technical analysis of cryptocurrency markets. Our system analyzes price action, volume, and 120+ technical indicators across multiple timeframes to identify potential trading opportunities with up to 78% success rate."
	},
	{
		question: "How accurate and reliable are your crypto signals?",
		answer: "Our AI-powered pattern recognition achieves up to 78% accuracy in identifying profitable trading patterns. Each signal is validated using multiple technical indicators and timeframes to ensure reliability."
	},
	{
		question: "What makes AltFins different from other platforms?",
		answer: "AltFins combines AI-powered analysis, real-time data, and comprehensive educational resources. We offer 26 trading patterns, 120+ technical indicators, and analysis of 3,000+ cryptocurrencies, all integrated into an intuitive platform."
	},
	{
		question: "What kind of educational resources do you offer?",
		answer: "We provide comprehensive trading courses, video tutorials, webinars, and detailed guides covering everything from basic technical analysis to advanced trading strategies. All content is designed for both beginners and experienced traders."
	},
	{
		question: "How much does AltFins cost?",
		answer: "AltFins offers flexible pricing plans starting with a free tier. Our paid plans (Basic, Essential, Premium) range from $20 to $60 per month, with discounts available for annual subscriptions. Each plan includes different levels of access to our tools and features."
	}
];

export default function FAQ() {
	return (
		<Layout
			title="FAQ - AltFins Trading Platform"
			description="Find answers to common questions about AltFins' crypto trading platform, signals, and features"
		>
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<Badge className="mb-4">
						<HelpCircle className="w-4 h-4 mr-2" />
						Help Center
					</Badge>
					<h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
					<p className="text-muted-foreground">
						Find answers to common questions about our platform and services
					</p>
				</div>

				<div className="grid gap-6">
					{faqs.map((faq, index) => (
						<Card key={index} className="border bg-card/50 backdrop-blur-sm">
							<CardHeader>
								<CardTitle className="text-xl">{faq.question}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{faq.answer}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</Layout>
	);
}