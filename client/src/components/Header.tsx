import { Link } from "wouter";
import { ShoppingCart, Search, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemCount: number;
}

export default function Header({ cartItemCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors" data-testid="link-mens">
              MENS
            </a>
          </Link>
          <Link href="/">
            <a className="text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors" data-testid="link-womens">
              WOMENS
            </a>
          </Link>
        </nav>
        
        <Link href="/">
          <a className="text-2xl md:text-3xl font-serif font-bold tracking-wider" data-testid="link-home">
            THREADCRAFT
          </a>
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="hover:text-muted-foreground transition-colors" data-testid="button-search">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-muted-foreground transition-colors" data-testid="button-account">
            <User className="w-5 h-5" />
          </button>
          <Link href="/cart">
            <a className="relative hover:text-muted-foreground transition-colors" data-testid="button-cart">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
                  data-testid="text-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
