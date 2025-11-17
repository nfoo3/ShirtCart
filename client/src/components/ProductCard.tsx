import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  sizes: string[];
  colors: { name: string; value: string }[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [added, setAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Card 
      className="group overflow-hidden border-border hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid={`img-product-${product.id}`}
        />
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              className="uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4"
              onClick={handleAddToCart}
              disabled={added}
              data-testid={`button-quick-add-${product.id}`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Added!
                </>
              ) : (
                "Quick Add"
              )}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-lg font-serif font-semibold mb-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-base font-medium mb-4" data-testid={`text-product-price-${product.id}`}>
          ${product.price.toFixed(2)}
        </p>

        <div className="space-y-3">
          <div>
            <label className="text-xs uppercase tracking-wider font-medium mb-2 block">Size</label>
            <div className="flex flex-wrap gap-2 justify-center">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                  className="min-w-12 text-xs uppercase"
                  data-testid={`button-size-${size}-${product.id}`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-medium mb-2 block">Color</label>
            <div className="flex flex-wrap gap-2 justify-center">
              {product.colors.map((color) => (
                <Button
                  key={color.name}
                  variant={selectedColor === color.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedColor(color.name)}
                  className="text-xs uppercase"
                  data-testid={`button-color-${color.name}-${product.id}`}
                >
                  {color.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Button 
          className="w-full mt-4 uppercase tracking-wider font-semibold text-xs"
          variant="outline"
          onClick={handleAddToCart}
          disabled={added}
          data-testid={`button-add-cart-${product.id}`}
        >
          {added ? "Added to Cart!" : "Add to Cart"}
        </Button>
      </div>
    </Card>
  );
}
