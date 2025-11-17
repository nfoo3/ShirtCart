import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProductCard, { Product } from "@/components/ProductCard";
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

  const handleAddToCart = (product: Product, size: string, color: string) => {
    addToCart(product.id, product.name, product.price, product.image, size, color);
    toast({
      title: "Added to cart!",
      description: `${product.name} (${size}, ${color})`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={cartItemCount} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Premium T-Shirt Collection</h1>
          <p className="text-muted-foreground" data-testid="text-page-subtitle">
            High-quality essentials for your wardrobe
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
