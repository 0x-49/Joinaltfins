export interface NavigationItem {
  title: string;
  description: string;
  href: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export const toolsNavigation: NavigationItem[] = [
  {
    title: "Crypto Screener",
    description: "Find the best trading opportunities",
    href: "/screener",
  },
  {
    title: "Chart Patterns",
    description: "AI-powered pattern recognition",
    href: "/patterns",
  },
  {
    title: "Trading Signals",
    description: "Real-time trading alerts",
    href: "/signals",
  },
  {
    title: "On-Chain Data",
    description: "Track asset fundamentals",
    href: "/onchain",
  },
];

export const learnNavigation: NavigationItem[] = [
  {
    title: "Education Hub",
    description: "Trading courses and tutorials",
    href: "/education",
  },
  {
    title: "Blog",
    description: "Market insights and updates",
    href: "/blog",
  },
];