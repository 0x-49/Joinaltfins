import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Play, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Foundation of Crypto Technical Analysis",
    description: "Learn the basics of technical analysis, chart reading, and key indicators",
    lessons: ["Chart Types & Timeframes", "Technical Indicators", "Support & Resistance", "Trend Analysis"],
    level: "Beginner",
    duration: "2 hours"
  },
  {
    title: "Trend Trading & Moving Averages",
    description: "Master trend trading strategies using moving averages and crossovers",
    lessons: ["Trend Identification", "MA Types & Strategies", "Golden/Death Cross", "Entry/Exit Points"],
    level: "Intermediate",
    duration: "3 hours"
  },
  {
    title: "Advanced Pattern Trading",
    description: "Learn to identify and trade chart patterns with high success rates",
    lessons: ["Pattern Types", "Entry Strategies", "Risk Management", "Real Examples"],
    level: "Advanced",
    duration: "4 hours"
  }
];

const resources = [
  {
    title: "Trading Videos",
    description: "Watch practical trading examples and strategy demonstrations",
    icon: <Play className="w-6 h-6" />,
    count: "50+ Videos"
  },
  {
    title: "Market Analysis",
    description: "Weekly market analysis and trading opportunities",
    icon: <ChartBar className="w-6 h-6" />,
    count: "Updated Weekly"
  }
];

export default function Education() {
  return (
    <Layout
      title="Education Hub - AltFins"
      description="Learn crypto trading with comprehensive courses and resources from AltFins experts"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Badge className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Trading Education
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Education Hub</h1>
          <p className="text-muted-foreground">
            Master cryptocurrency trading with our comprehensive courses and resources
          </p>
        </div>

        {/* Trading Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle>{course.title}</CardTitle>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">What you'll learn:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {course.lessons.map((lesson, i) => (
                        <li key={i}>{lesson}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-sm text-muted-foreground">
                      Duration: {course.duration}
                    </span>
                    <Button variant="outline">Start Course</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {resource.icon}
                  <div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{resource.count}</span>
                  <Button variant="outline">View Resources</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}