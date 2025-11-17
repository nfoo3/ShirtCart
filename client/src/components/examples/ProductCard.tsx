import ProductCard from '../ProductCard';
import blackShirtImg from '@assets/generated_images/Black_t-shirt_product_photo_a64c865b.png';

export default function ProductCardExample() {
  const product = {
    id: "1",
    name: "Classic Black Tee",
    price: 29.99,
    description: "Premium cotton blend for ultimate comfort",
    image: blackShirtImg,
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" }
    ]
  };

  return (
    <div className="max-w-sm">
      <ProductCard 
        product={product} 
        onAddToCart={(product, size, color) => console.log('Added to cart:', product.name, size, color)} 
      />
    </div>
  );
}
