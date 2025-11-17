import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
}

export default function OrderSummary({ subtotal, tax, total }: OrderSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-serif">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium" data-testid="text-subtotal">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (8.5%)</span>
          <span className="font-medium" data-testid="text-tax">${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="font-serif text-lg font-semibold">Total</span>
          <span className="font-serif text-lg font-bold" data-testid="text-total">${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
