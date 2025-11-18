import { CartItemType } from "@/components/CartItem";

const CART_STORAGE_KEY = "threadcraft_cart";

export function getCart(): CartItemType[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveCart(cart: CartItemType[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(
  productId: string,
  name: string,
  price: number,
  image: string,
  size: string,
  color: string
): void {
  const cart = getCart();
  const existingItem = cart.find(
    (item) =>
      item.productId === productId &&
      item.size === size &&
      item.color === color
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: `${productId}-${size}-${color}-${Date.now()}`,
      productId,
      name,
      price,
      image,
      size,
      color,
      quantity: 1,
    });
  }

  saveCart(cart);
  window.dispatchEvent(new Event("cart-updated"));
}

export function updateCartItemQuantity(itemId: string, quantity: number): void {
  const cart = getCart();
  const item = cart.find((i) => i.id === itemId);
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
    window.dispatchEvent(new Event("cart-updated"));
  }
}

export function removeFromCart(itemId: string): void {
  const cart = getCart();
  const filtered = cart.filter((item) => item.id !== itemId);
  saveCart(filtered);
  window.dispatchEvent(new Event("cart-updated"));
}

export function clearCart(): void {
  saveCart([]);
  window.dispatchEvent(new Event("cart-updated"));
}

export function calculateCartTotals(cart: CartItemType[]) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.085;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}
