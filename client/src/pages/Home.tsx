import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Product } from "@shared/schema";
import { products } from "@/lib/products";
import { addToCart, getCart } from "@/lib/cart";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = getCart();
      setCartItemCount(cart.reduce((sum, item) => sum + item.quantity, 0));
    };

    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    return () => window.removeEventListener("cart-updated", updateCartCount);
  }, []);

  const handleAddToCart = (product: Product, size: string, color: string, colorImage: string) => {
    addToCart(product.id, product.name, product.price, colorImage, size, color);
    toast({
      title: "Added to cart!",
      description: `${product.name} (${size}, ${color})`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={cartItemCount} />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="text-page-title">
            Premium Collection
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-page-subtitle">
            Timeless essentials crafted for everyday luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
