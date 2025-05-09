
import { Link } from "react-router-dom";
import { useCart } from "@/context/cart-context";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, Trash2, IndianRupee } from "lucide-react";

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like you haven't added any products to your cart yet.
          Browse our collection to find your perfect ride.
        </p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg shadow-sm overflow-hidden">
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.id} className="p-4 md:p-6 flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-full md:w-32 h-32 mb-4 md:mb-0">
                    <img
                      src={item.imageUrl}
                      alt={`${item.brand} ${item.model}`}
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-grow md:ml-6">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="font-medium text-lg">
                          <Link 
                            to={`/product/${item.id}`}
                            className="hover:text-bike hover:underline"
                          >
                            {item.brand} {item.model}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Category: {item.category}
                        </p>
                      </div>
                      <div className="flex items-center md:items-start mt-2 md:mt-0">
                        <div className="flex items-center">
                          <IndianRupee className="h-4 w-4" />
                          <span className="font-medium">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-md">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8 rounded-none"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <div className="w-8 text-center text-sm">
                          {item.quantity}
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.stock}
                          className="h-8 w-8 rounded-none"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        <span className="hidden md:inline">Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Actions */}
          <div className="mt-4 flex justify-between items-center">
            <Button
              variant="outline"
              onClick={clearCart}
              className="text-muted-foreground"
            >
              Clear Cart
            </Button>
            <Link to="/">
              <Button variant="ghost">Continue Shopping</Button>
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-card rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                <div className="flex items-center">
                  <IndianRupee className="h-3.5 w-3.5" />
                  <span>{formatPrice(subtotal)}</span>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping Estimate</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax Estimate</span>
                <div className="flex items-center">
                  <IndianRupee className="h-3.5 w-3.5" />
                  <span>{formatPrice(subtotal * 0.18)}</span>
                </div>
              </div>
              
              <div className="border-t pt-3 flex justify-between font-medium">
                <span>Total</span>
                <div className="flex items-center text-lg">
                  <IndianRupee className="h-4 w-4" />
                  <span>{formatPrice(subtotal + (subtotal * 0.18))}</span>
                </div>
              </div>
            </div>
            
            <Link to="/checkout" className="block">
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
            </Link>
            
            <div className="mt-4 text-xs text-center text-muted-foreground">
              By proceeding, you agree to our <a href="#" className="text-bike hover:underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
