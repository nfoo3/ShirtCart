import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-1" data-testid={`card-product-${product.id}`}>
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          data-testid={`img-product-${product.id}`}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-primary mb-3" data-testid={`text-product-price-${product.id}`}>
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-muted-foreground mb-4" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-2 block">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                  className="min-w-12"
                  data-testid={`button-size-${size}-${product.id}`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <Button
                  key={color.name}
                  variant={selectedColor === color.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedColor(color.name)}
                  data-testid={`button-color-${color.name}-${product.id}`}
                >
                  {color.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full"
          onClick={handleAddToCart}
          disabled={added}
          data-testid={`button-add-cart-${product.id}`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added!
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
