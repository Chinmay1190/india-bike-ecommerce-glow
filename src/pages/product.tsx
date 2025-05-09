
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allProducts, categories, formatPrice, calculateDiscountPrice } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Check, ChevronRight, IndianRupee, Minus, Plus, Star } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ProductCard from "@/components/product-card";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = allProducts.find((p) => p.id === id);
  
  useEffect(() => {
    if (!product) {
      navigate("/");
      toast({
        title: "Product not found",
        description: "The product you're looking for doesn't exist.",
        variant: "destructive",
      });
    }
    
    // Reset state when product changes
    setQuantity(1);
    setActiveImageIndex(0);
  }, [id, product, navigate]);
  
  if (!product) {
    return null;
  }
  
  const category = categories.find((c) => c.slug === product.category);
  
  const discountedPrice = product.discount
    ? calculateDiscountPrice(product.price, product.discount)
    : product.price;
    
  // Get related products from the same category
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm mb-8">
        <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <Link to={`/category/${category?.slug}`} className="text-muted-foreground hover:text-foreground">
          {category?.name}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">{product.brand} {product.model}</span>
      </nav>

      {/* Back Button (Mobile Only) */}
      <div className="md:hidden mb-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate(-1)}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-video bg-secondary/50 rounded-lg overflow-hidden">
            <img
              src={product.images[activeImageIndex]}
              alt={`${product.brand} ${product.model}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded bg-secondary/50 overflow-hidden border-2 ${
                  index === activeImageIndex ? "border-bike" : "border-transparent"
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${product.brand} ${product.model} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Badge variant="outline" className="mr-2">
                {category?.name}
              </Badge>
              {product.newArrival && (
                <Badge variant="secondary" className="mr-2">
                  New
                </Badge>
              )}
              {product.discount && (
                <Badge variant="destructive">
                  Sale
                </Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold mb-2">
              {product.brand} {product.model}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    fill={star <= Math.floor(product.rating) ? "currentColor" : "none"}
                    className={`h-4 w-4 ${
                      star <= Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium">{product.rating.toFixed(1)}</span>
              </div>
              <span className="mx-2 text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">In Stock: {product.stock}</span>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center">
                <div className="text-3xl font-bold flex items-center">
                  <IndianRupee className="h-5 w-5" />
                  {formatPrice(discountedPrice)}
                </div>
                {product.discount && (
                  <div className="ml-3 text-muted-foreground line-through flex items-center">
                    <IndianRupee className="h-3.5 w-3.5" />
                    {formatPrice(product.price)}
                  </div>
                )}
              </div>
              {product.discount && (
                <div className="text-sm text-bike">
                  You save {product.discount}% ({formatPrice(product.price - discountedPrice)})
                </div>
              )}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Specifications */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-secondary/50 p-4">
              <div className="text-sm text-muted-foreground mb-1">Engine</div>
              <div className="font-medium">{product.engine}</div>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <div className="text-sm text-muted-foreground mb-1">Power</div>
              <div className="font-medium">{product.power}</div>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <div className="text-sm text-muted-foreground mb-1">Torque</div>
              <div className="font-medium">{product.torque}</div>
            </div>
            <div className="rounded-lg bg-secondary/50 p-4">
              <div className="text-sm text-muted-foreground mb-1">Weight</div>
              <div className="font-medium">{product.weight}</div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <label className="block text-sm font-medium mb-1">Quantity</label>
                <div className="flex items-center border rounded-md">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <div className="w-10 text-center">{quantity}</div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    className="h-10 w-10 rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {product.stock < 5 ? (
                  <span className="text-red-500">Only {product.stock} left!</span>
                ) : (
                  <span>Available: {product.stock}</span>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1"
              >
                Add to Cart
              </Button>
              <Link to="/checkout" className="flex-1">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleAddToCart}
                  className="w-full"
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Delivery and Services */}
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-muted-foreground">Delivery across India</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">1 Year Warranty</p>
                <p className="text-sm text-muted-foreground">Manufacturer warranty</p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Secure Payments</p>
                <p className="text-sm text-muted-foreground">Multiple payment options available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start mb-6 border-b">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="text-muted-foreground space-y-4">
            <p>{product.description}</p>
            <p>
              Experience the thrill of riding a {product.brand} {product.model}, 
              engineered with precision and designed for performance. 
              Whether you're racing on the track or cruising on the open road, 
              this {category?.name.toLowerCase()} bike delivers an unmatched riding experience.
            </p>
            <p>
              Built with cutting-edge technology and premium components, 
              the {product.model} showcases {product.brand}'s commitment to excellence. 
              Every detail has been carefully considered to provide optimal performance, 
              comfort, and style.
            </p>
          </TabsContent>
          
          <TabsContent value="specifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-4 text-lg">Engine & Performance</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Engine</span>
                    <span>{product.engine}</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Power</span>
                    <span>{product.power}</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Torque</span>
                    <span>{product.torque}</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Transmission</span>
                    <span>6-Speed Manual</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Cooling</span>
                    <span>Liquid Cooled</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-lg">Dimensions & Weight</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Weight</span>
                    <span>{product.weight}</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Seat Height</span>
                    <span>820 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Fuel Capacity</span>
                    <span>17 Liters</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Ground Clearance</span>
                    <span>120 mm</span>
                  </div>
                  <div className="grid grid-cols-2 py-2 border-b">
                    <span className="font-medium">Wheelbase</span>
                    <span>1430 mm</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shipping" className="text-muted-foreground space-y-4">
            <h3 className="font-bold text-foreground">Delivery Information</h3>
            <p>
              We deliver across all major cities in India. Standard delivery time is 7-10 business days, 
              depending on your location. For remote areas, delivery may take longer.
            </p>
            
            <h3 className="font-bold text-foreground">Return Policy</h3>
            <p>
              If you receive a damaged or defective product, please contact our customer service within 
              48 hours of delivery. We will arrange for inspection and replacement if necessary.
            </p>
            <p>
              Please note that motorcycles cannot be returned once delivered unless there is a 
              manufacturing defect or damage during transit.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
