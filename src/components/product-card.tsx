
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { formatPrice, calculateDiscountPrice } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const discountedPrice = product.discount
    ? calculateDiscountPrice(product.price, product.discount)
    : product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn("product-card", className)}
    >
      <div className="product-image-wrapper">
        {!isImageLoaded && (
          <div className="w-full h-52 bg-muted animate-pulse"></div>
        )}
        <img
          src={product.imageUrl}
          alt={`${product.brand} ${product.model}`}
          className={cn("product-image", !isImageLoaded && "hidden")}
          onLoad={() => setIsImageLoaded(true)}
        />
        
        {product.discount && (
          <Badge 
            className="product-badge" 
            variant="default"
          >
            -{product.discount}%
          </Badge>
        )}
        
        {product.newArrival && (
          <Badge 
            className="product-badge !bg-secondary !text-secondary-foreground" 
            variant="secondary"
          >
            New
          </Badge>
        )}
        
        <Button className="quick-view-btn" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.brand} {product.model}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex justify-between items-center">
          <div className="product-price">
            <IndianRupee className="h-3.5 w-3.5 mr-1" />
            {formatPrice(discountedPrice)}
            {product.discount && (
              <span className="text-xs text-muted-foreground line-through ml-2">
                <IndianRupee className="h-3 w-3 inline" />
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium ml-1">
              {product.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
