import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

export interface CartItemType {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <Card className="p-4" data-testid={`card-cart-item-${item.id}`}>
      <div className="flex gap-4">
        <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-muted">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover"
            data-testid={`img-cart-item-${item.id}`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold" data-testid={`text-cart-item-name-${item.id}`}>
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Size: {item.size} • Color: {item.color}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(item.id)}
              data-testid={`button-remove-${item.id}`}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                data-testid={`button-decrease-${item.id}`}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="w-8 text-center font-medium" data-testid={`text-quantity-${item.id}`}>
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                data-testid={`button-increase-${item.id}`}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
            <p className="font-bold" data-testid={`text-item-total-${item.id}`}>
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
