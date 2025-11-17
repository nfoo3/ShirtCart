import OrderSummary from '../OrderSummary';

export default function OrderSummaryExample() {
  return (
    <div className="max-w-sm">
      <OrderSummary subtotal={89.97} tax={7.65} total={97.62} />
    </div>
  );
}
