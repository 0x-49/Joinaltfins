import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const news = [
	{
		title: "Expert Predicts Floki Token's Surge Towards New Heights",
		source: "COINTURK NEWS",
		timeAgo: "4 hours ago",
		category: "Market Analysis",
		summary: "Floki is expected to rally towards new all-time highs soon. Elliott Wave Theory predicts a five-wave movement post-correction."
	},
	{
		title: "Bitcoin Price Takes a Breather: Gains Reduced Amid Volatility",
		source: "NewsBTC",
		timeAgo: "8 hours ago",
		category: "Price Action",
		summary: "Bitcoin price failed to stay above the $100,000 zone. BTC is correcting gains and might struggle to stay above the $96,000 support zone."
	}
];

const events = [
	{
		title: "AMA with KITE AI",
		project: "Filecoin",
		date: "Jan 8, 2025",
		description: "Filecoin and KITE AI discuss AI and crypto integration",
		type: "AMA"
	},
	{
		title: "Q1 Key Priorities AMA",
		project: "PancakeSwap",
		date: "Jan 9, 2025",
		description: "Join the PancakeSwap AMA to discover top priorities",
		type: "AMA"
	}
];

export default function News() {
	return (
		<Layout
			title="Crypto News & Events - AltFins"
			description="Stay updated with the latest cryptocurrency news, market updates, and upcoming events"
		>
			<div className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<Badge className="mb-4">
						<Newspaper className="w-4 h-4 mr-2" />
						Latest Updates
					</Badge>
					<h1 className="text-3xl font-bold mb-2">News & Events</h1>
					<p className="text-muted-foreground">
						Stay informed with real-time crypto news and upcoming events
					</p>
				</div>

				{/* Latest News */}
				<section className="mb-12">
					<h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
						<Newspaper className="w-5 h-5" />
						Latest News
					</h2>
					<div className="grid gap-6">
						{news.map((item, index) => (
							<Card key={index} className="border bg-card/50 backdrop-blur-sm">
								<CardHeader>
									<div className="flex justify-between items-start mb-2">
										<CardTitle className="text-xl">{item.title}</CardTitle>
										<Badge variant="outline">{item.category}</Badge>
									</div>
									<CardDescription>{item.summary}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex justify-between items-center">
										<div className="flex items-center gap-2 text-sm text-muted-foreground">
											<span>{item.source}</span>
											<span>•</span>
											<span>{item.timeAgo}</span>
										</div>
										<Button variant="ghost" size="sm" className="gap-2">
											Read More
											<ExternalLink className="w-4 h-4" />
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Upcoming Events */}
				<section>
					<h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
						<Calendar className="w-5 h-5" />
						Upcoming Events
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{events.map((event, index) => (
							<Card key={index} className="border bg-card/50 backdrop-blur-sm">
								<CardHeader>
									<div className="flex justify-between items-start mb-2">
										<CardTitle className="text-xl">{event.title}</CardTitle>
										<Badge>{event.type}</Badge>
									</div>
									<CardDescription>{event.description}</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="flex justify-between items-center">
										<div className="flex items-center gap-2 text-sm">
											<span className="font-medium">{event.project}</span>
											<span>•</span>
											<span className="text-muted-foreground">{event.date}</span>
										</div>
										<Button variant="outline" size="sm">Add to Calendar</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</section>
			</div>
		</Layout>
	);
}