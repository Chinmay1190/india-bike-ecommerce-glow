
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

const OrderSuccessPage = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  
  // Generate a random order ID
  const orderId = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  
  // If no items were purchased, redirect to home
  useEffect(() => {
    if (items.length > 0) {
      navigate("/");
    }
  }, [items, navigate]);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        {/* Success Animation */}
        <div className="mb-8">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto animate-zoom-in">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-green-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl mb-6">Your order has been placed successfully</p>
        
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="border-b pb-4 mb-4">
            <div className="text-sm text-muted-foreground">Order Number</div>
            <div className="font-medium text-lg">#{orderId}</div>
          </div>
          
          <div>
            <div className="text-sm text-muted-foreground mb-1">Order Status</div>
            <div className="flex items-center justify-center text-green-600">
              <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
              <span>Payment Confirmed</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8">
          We've sent a confirmation email with all the details of your order.
          Our team will contact you shortly to arrange delivery.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
