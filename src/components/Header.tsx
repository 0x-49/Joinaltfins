import { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from './ui/button';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { toolsNavigation, learnNavigation } from '@/types/navigation';

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-indigo-700 via-blue-700 to-purple-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center py-3 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 max-w-8xl mx-auto space-x-4">
        <div className="flex items-center gap-8">
          {/* Responsive Logo */}
          <Link 
            href="/" 
            className="hidden md:block transition-transform hover:scale-105"
            aria-label="Home"
          >
            <Logo className="h-8 w-auto md:h-9 lg:h-10" />
          </Link>
          <Link 
            href="/" 
            className="md:hidden"
            aria-label="Mobile Home"
          >
            <Logo className="h-7 w-auto" />
          </Link>

          {/* Mobile Menu Button */}
          <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden p-2.5 -ml-2 hover:bg-white/10"
                aria-label="Open navigation menu"
              >
                <Menu className="h-7 w-7 text-white" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[100vw] h-full rounded-none flex flex-col p-0">
              <DialogHeader className="px-4 py-4 border-b">
                <div className="flex items-center justify-between">
                  <Link href="/" aria-label="Home">
                    <Logo className="h-7 w-auto" />
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-gray-100 px-2">Trading Tools</h3>
                  <nav className="grid gap-2">
                    {toolsNavigation.map((item) => (
                      <Button
                        key={item.href}
                        variant="ghost"
                        onClick={() => {
                          router.push(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full justify-start text-white hover:bg-white/10"
                      >
                        {item.title}
                      </Button>
                    ))}
                  </nav>
                </div>
                <div className="space-y-3">
                  <h3 className="text-base font-semibold text-gray-100 px-2">Education</h3>
                  <nav className="grid gap-2">
                    {learnNavigation.map((item) => (
                      <Button
                        key={item.href}
                        variant="ghost"
                        onClick={() => {
                          router.push(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full justify-start text-white hover:bg-white/10"
                      >
                        {item.title}
                      </Button>
                    ))}
                  </nav>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex transition-opacity">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem className="ml-4">
                <NavigationMenuTrigger className="text-sm font-medium data-[state=open]:bg-white/10 text-white">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-full min-w-[300px] max-w-[480px] rounded-xl shadow-2xl border border-white/10 bg-gradient-to-b from-indigo-700 to-purple-700">
                    {toolsNavigation.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition-colors text-white"
                          >
                            <span className="font-medium">{item.title}</span>
                            <span className="text-sm text-white/80">
                              {item.description}
                            </span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium data-[state=open]:bg-white/10 text-white">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-full min-w-[300px] max-w-[480px] rounded-xl shadow-2xl border border-white/10 bg-gradient-to-b from-indigo-700 to-purple-700">
                    {learnNavigation.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="flex flex-col p-3 rounded-lg hover:bg-white/10 transition-colors text-white"
                          >
                            <span className="font-medium">{item.title}</span>
                            <span className="text-sm text-white/80">
                              {item.description}
                            </span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/pricing"
                  className={cn(
                    "text-sm font-medium px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-white",
                    router.pathname === "/pricing" && "bg-white/10"
                  )}
                >
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => router.push("/login")}
              className="hidden sm:inline-flex text-white hover:bg-white/10"
            >
              Log in
            </Button>
            <Button
              onClick={() => router.push("/signup")}
              className="rounded-full px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white hover:text-white/90 transform hover:scale-105"
              aria-label="Get Started with AltFins"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
