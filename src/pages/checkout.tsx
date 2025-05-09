
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/cart-context";
import { formatPrice, paymentMethods } from "@/data/products";
import { CustomerInfo, PaymentMethod } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { IndianRupee, CreditCard } from "lucide-react";

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(paymentMethods[0].id);
  
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.18; // 18% tax
  const total = subtotal + tax + shipping;
  
  // If cart is empty, redirect to cart page
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation logic
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || 
        !customerInfo.phone || !customerInfo.address || !customerInfo.city || 
        !customerInfo.state || !customerInfo.pincode) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    // Phone validation (Indian numbers)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(customerInfo.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian mobile number",
        variant: "destructive",
      });
      return;
    }
    
    // Pincode validation
    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(customerInfo.pincode)) {
      toast({
        title: "Invalid Pincode",
        description: "Please enter a valid 6-digit pincode",
        variant: "destructive",
      });
      return;
    }
    
    // Process checkout
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      clearCart();
      navigate("/order-success");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="bg-card rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Shipping Address */}
            <div className="bg-card rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
              
              <div className="mb-4">
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Select 
                    value={customerInfo.state}
                    onValueChange={(value) => setCustomerInfo(prev => ({ ...prev, state: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      {indianStates.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  value={customerInfo.pincode}
                  onChange={handleInputChange}
                  placeholder="6-digit pincode"
                  required
                />
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="bg-card rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div 
                    key={method.id}
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      selectedPaymentMethod === method.id
                        ? "border-bike bg-bike/5"
                        : "hover:border-muted-foreground"
                    }`}
                    onClick={() => setSelectedPaymentMethod(method.id)}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id={method.id}
                        name="paymentMethod"
                        value={method.id}
                        checked={selectedPaymentMethod === method.id}
                        onChange={() => setSelectedPaymentMethod(method.id)}
                        className="h-4 w-4 text-bike"
                      />
                      <label htmlFor={method.id} className="ml-2 flex items-center">
                        {method.icon === "credit-card" && <CreditCard className="h-5 w-5 mr-2" />}
                        {method.icon === "indian-rupee" && <IndianRupee className="h-5 w-5 mr-2" />}
                        <span className="font-medium">{method.name}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <div className="font-medium">
                      {item.brand} {item.model}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <IndianRupee className="h-3.5 w-3.5" />
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <div className="flex items-center">
                  <IndianRupee className="h-3.5 w-3.5" />
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (18%)</span>
                <div className="flex items-center">
                  <IndianRupee className="h-3.5 w-3.5" />
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>
              
              <div className="border-t pt-3 flex justify-between font-medium">
                <span>Total</span>
                <div className="flex items-center text-lg">
                  <IndianRupee className="h-4 w-4" />
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full" 
              size="lg" 
              disabled={isSubmitting} 
              onClick={handleSubmit}
            >
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
            
            <div className="mt-4 text-xs text-center text-muted-foreground">
              By placing your order, you agree to our <a href="#" className="text-bike hover:underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
