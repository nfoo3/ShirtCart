import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import CartItem, { CartItemType } from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import { Button } from "@/components/ui/button";
import { getCart, updateCartItemQuantity, removeFromCart, calculateCartTotals } from "@/lib/cart";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function Cart() {
  const [, setLocation] = useLocation();
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const loadCart = () => {
      setCartItems(getCart());
    };

    loadCart();
    window.addEventListener("cart-updated", loadCart);
    return () => window.removeEventListener("cart-updated", loadCart);
  }, []);

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    updateCartItemQuantity(itemId, quantity);
  };

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
  };

  const { subtotal, tax, total } = calculateCartTotals(cartItems);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={cartItemCount} selectedGender="all" />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-page-title">Shopping Cart</h1>
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/")}
            className="uppercase text-xs tracking-wider"
            data-testid="button-continue-shopping"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Continue Shopping
          </Button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-20 h-20 mx-auto text-muted-foreground mb-6" />
            <h2 className="text-3xl font-serif font-semibold mb-3" data-testid="text-empty-cart">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 text-lg">Discover our premium collection</p>
            <Button onClick={() => setLocation("/")} size="lg" className="uppercase tracking-wider" data-testid="button-shop-now">
              Shop Now
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <OrderSummary subtotal={subtotal} tax={tax} total={total} />
                <Button 
                  className="w-full uppercase tracking-wider font-semibold" 
                  size="lg"
                  onClick={() => setLocation("/checkout")}
                  data-testid="button-proceed-checkout"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
