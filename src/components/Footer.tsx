import { useRouter } from 'next/router';
import Logo from './Logo';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Advanced cryptocurrency trading platform with AI-powered tools and insights
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => router.push('/screener')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Crypto Screener
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/patterns')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Chart Patterns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/signals')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Trading Signals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/onchain')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  On-Chain Data
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => router.push('/education')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Education Hub
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/blog')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/pricing')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Pricing
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => router.push('/login')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Log in
                </button>
              </li>
              <li>
                <button 
                  onClick={() => router.push('/signup')}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CryptoTrader Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;