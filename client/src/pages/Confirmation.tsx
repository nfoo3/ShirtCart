import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Confirmation() {
  const [, setLocation] = useLocation();
  const [orderNumber, setOrderNumber] = useState("");
  const [orderData, setOrderData] = useState<any>(null);

  useEffect(() => {
    const storedOrderNumber = localStorage.getItem("orderNumber");
    const storedOrderData = localStorage.getItem("orderData");
    
    if (!storedOrderNumber) {
      setLocation("/");
      return;
    }

    setOrderNumber(storedOrderNumber);
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, [setLocation]);

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemCount={0} />
      
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <div className="text-center mb-8">
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-4" data-testid="icon-success" />
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Order Confirmed!</h1>
          <p className="text-muted-foreground">Thank you for your purchase</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="text-3xl font-mono font-bold" data-testid="text-order-number">
                #{orderNumber}
              </p>
            </div>
          </CardContent>
        </Card>

        {orderData && (
          <Card className="mb-6">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Shipping Information</h3>
                <p className="text-sm text-muted-foreground">{orderData.name}</p>
                <p className="text-sm text-muted-foreground">{orderData.email}</p>
                <p className="text-sm text-muted-foreground">{orderData.address}</p>
                <p className="text-sm text-muted-foreground">
                  {orderData.city}, {orderData.state} {orderData.zip}
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Order Items</h3>
                <div className="space-y-3">
                  {orderData.items?.map((item: any) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-16 h-16 rounded bg-muted overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            A confirmation email has been sent to your email address.
          </p>
          <Button onClick={() => setLocation("/")} data-testid="button-continue-shopping">
            Continue Shopping
          </Button>
        </div>
      </main>
    </div>
  );
}
