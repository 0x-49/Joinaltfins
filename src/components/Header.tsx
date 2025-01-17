import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from './ui/button';
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

  return (
    <div className="w-full border-b">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Logo />
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {toolsNavigation.map((item) => (
                      <li key={item.href} className="cursor-pointer" onClick={() => router.push(item.href)}>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {learnNavigation.map((item) => (
                      <li key={item.href} className="cursor-pointer" onClick={() => router.push(item.href)}>
                        <div className="font-medium">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => router.push("/pricing")}>
                  Pricing
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.push("/login")}>
            Log in
          </Button>
          <Button onClick={() => router.push("/signup")}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;