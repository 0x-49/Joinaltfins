// File: src/components/ui/announcements.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface AnnouncementsProps {
  message: string;
  link: string;
  linkText: string;
}

export const Announcements: React.FC<AnnouncementsProps> = ({ message, link, linkText }) => {
  return (
    <Alert className="bg-primary/10 border-primary">
      <Info className="h-4 w-4 text-primary mr-2" />
      <AlertDescription className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
        <span>{message}</span>
        <Button variant="outline" onClick={() => window.location.href = link} className="mt-2 md:mt-0">
          {linkText}
        </Button>
      </AlertDescription>
    </Alert>
  );
};