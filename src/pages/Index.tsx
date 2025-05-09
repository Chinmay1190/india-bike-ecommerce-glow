
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allProducts, categories, formatPrice } from "@/data/products";
import { Category } from "@/types";
import ProductCard from "@/components/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  // Get featured products for the hero slider
  const featuredProducts = allProducts.filter((product) => product.featured);
  
  // Get products for different sections
  const newArrivals = allProducts
    .filter((product) => product.newArrival)
    .slice(0, 8);
    
  const bestSellers = [...allProducts]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
    
  const onSale = allProducts
    .filter((product) => product.discount)
    .slice(0, 8);
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all"
    ? bestSellers
    : allProducts.filter((product) => product.category === selectedCategory).slice(0, 8);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="featured-slider">
        {featuredProducts.map((product, index) => (
          <div 
            key={product.id}
            className={`featured-slide ${index === activeSlide ? 'block' : 'hidden'}`}
          >
            <div className="featured-content">
              <div className="featured-text">
                <Badge className="mb-4" variant="outline">Featured</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                  {product.brand} <span className="text-bike">{product.model}</span>
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">
                  {product.description.split('.')[0]}.
                </p>
                <div className="mb-8">
                  <div className="text-3xl font-bold mb-2">
                    {formatPrice(product.price)}
                  </div>
                  <div className="flex space-x-8 text-sm text-muted-foreground">
                    <div>
                      <div className="font-medium mb-1">Engine</div>
                      <div>{product.engine}</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Power</div>
                      <div>{product.power}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to={`/product/${product.id}`}>
                    <Button size="lg">
                      View Details
                    </Button>
                  </Link>
                  <Link to={`/category/${product.category}`}>
                    <Button variant="outline" size="lg">
                      Browse Category
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="featured-image-container">
                <img 
                  src={product.imageUrl} 
                  alt={`${product.brand} ${product.model}`}
                  className="featured-image"
                />
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeSlide 
                  ? "w-6 bg-bike" 
                  : "bg-muted hover:bg-muted-foreground"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse By Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="bg-card hover:shadow-md transition-shadow rounded-lg overflow-hidden text-center p-6 group"
              >
                <div className="mb-3 text-muted-foreground group-hover:text-bike transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M6 9v12"/></svg>
                </div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} bikes</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/category/all" className="text-bike hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} className="animate-zoom-in" />
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Best Sellers</h2>
          
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              className={`category-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.slug ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.slug)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* On Sale Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Special Offers</h2>
            <Link to="/category/all" className="text-bike hover:underline flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {onSale.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose SuperBikes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bike"><path d="m7 21 4.95-4.95a1 1 0 0 0 0-1.41l-4.24-4.24a1 1 0 0 0-1.41 0l-4.24 4.24a1 1 0 0 0 0 1.41L7 21Z"/><path d="M15.5 15.5 19 19"/><path d="M12 2h8.5L22 12h-3"/><path d="m14 8 5 10"/><path d="M4 12H2"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Premium Bikes</h3>
              <p className="text-muted-foreground">
                Hand-picked selection of the finest superbikes available in India
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bike"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Expert Service</h3>
              <p className="text-muted-foreground">
                Dedicated team of motorcycle enthusiasts providing personalized support
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bike"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple payment options with industry-standard security protocols
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bike"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"/><path d="M16 22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4Z"/></svg>
              </div>
              <h3 className="font-bold text-xl mb-2">Nationwide Delivery</h3>
              <p className="text-muted-foreground">
                Fast and reliable shipping to all major cities across India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
