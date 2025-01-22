// File: src/components/ui/blog-list.tsx
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  summary: string;
  date: string;
  link: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <Card key={index} className="border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.summary}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <Button variant="outline" onClick={() => window.location.href = post.link}>
                Read More
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};