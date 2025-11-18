import { Link } from "wouter";
import { ShoppingCart, Search, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  cartItemCount: number;
  selectedGender?: string;
  onGenderChange?: (gender: string) => void;
}

export default function Header({ cartItemCount, selectedGender, onGenderChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onGenderChange?.("mens")}
            className={`text-xs uppercase tracking-wider hover:text-foreground transition-colors ${
              selectedGender === "mens" ? "text-foreground font-semibold" : "text-muted-foreground"
            }`}
            data-testid="link-mens"
          >
            MENS
          </button>
          <button 
            onClick={() => onGenderChange?.("womens")}
            className={`text-xs uppercase tracking-wider hover:text-foreground transition-colors ${
              selectedGender === "womens" ? "text-foreground font-semibold" : "text-muted-foreground"
            }`}
            data-testid="link-womens"
          >
            WOMENS
          </button>
        </nav>
        
        <Link href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-wider" data-testid="link-home">
          THREADCRAFT
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="hover:text-muted-foreground transition-colors" data-testid="button-search">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-muted-foreground transition-colors" data-testid="button-account">
            <User className="w-5 h-5" />
          </button>
          <Link href="/cart" className="relative hover:text-muted-foreground transition-colors" data-testid="button-cart">
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <Badge 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
                data-testid="text-cart-count"
              >
                {cartItemCount}
              </Badge>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
