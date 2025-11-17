import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemCount: number;
}

export default function Header({ cartItemCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-primary-foreground hover:opacity-90 transition-opacity" data-testid="link-home">
            ThreadCraft
          </a>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <a className="text-primary-foreground hover:underline" data-testid="link-products">
              Products
            </a>
          </Link>
          <Link href="/cart">
            <a className="text-primary-foreground hover:underline" data-testid="link-cart-nav">
              Cart
            </a>
          </Link>
          <a href="#contact" className="text-primary-foreground hover:underline" data-testid="link-contact">
            Contact
          </a>
        </nav>

        <Link href="/cart">
          <a className="relative" data-testid="button-cart">
            <ShoppingCart className="w-6 h-6 text-primary-foreground" />
            {cartItemCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-destructive text-destructive-foreground"
                data-testid="text-cart-count"
              >
                {cartItemCount}
              </Badge>
            )}
          </a>
        </Link>
      </div>
    </header>
  );
}
