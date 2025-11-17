import CartItem from '../CartItem';
import blackShirtImg from '@assets/generated_images/Black_t-shirt_product_photo_a64c865b.png';

export default function CartItemExample() {
  const item = {
    id: "cart-1",
    productId: "1",
    name: "Classic Black Tee",
    price: 29.99,
    image: blackShirtImg,
    size: "M",
    color: "Black",
    quantity: 2
  };

  return (
    <CartItem 
      item={item}
      onUpdateQuantity={(id, qty) => console.log('Update quantity:', id, qty)}
      onRemove={(id) => console.log('Remove item:', id)}
    />
  );
}
