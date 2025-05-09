
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts, categories } from "@/data/products";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider
} from "@/components/ui/slider";
import { ChevronRight } from "lucide-react";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Top Rated" },
];

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  
  // States for filtering and sorting
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 2500000]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [brandsFilter, setBrandsFilter] = useState<string[]>([]);
  const [displayCount, setDisplayCount] = useState(12);
  
  // Get all brands from products
  const allBrands = Array.from(new Set(allProducts.map((product) => product.brand)));
  
  // Filter and sort products
  useEffect(() => {
    let result = slug === "all" 
      ? [...allProducts]
      : [...allProducts.filter((product) => product.category === slug)];
    
    // Apply brand filter
    if (brandsFilter.length > 0) {
      result = result.filter((product) => brandsFilter.includes(product.brand));
    }
    
    // Apply price range filter
    result = result.filter((product) => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [slug, sortBy, priceRange, brandsFilter]);
  
  const toggleBrandFilter = (brand: string) => {
    if (brandsFilter.includes(brand)) {
      setBrandsFilter(brandsFilter.filter((b) => b !== brand));
    } else {
      setBrandsFilter([...brandsFilter, brand]);
    }
  };
  
  const clearFilters = () => {
    setBrandsFilter([]);
    setPriceRange([0, 2500000]);
  };
  
  const loadMore = () => {
    setDisplayCount((prev) => prev + 12);
  };
  
  const displayProducts = filteredProducts.slice(0, displayCount);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm mb-8">
        <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
        <span className="font-medium">{category?.name || "All Products"}</span>
      </nav>
      
      {/* Category Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {category?.name || "All Products"}
        </h1>
        <p className="text-muted-foreground">
          {category?.description || `Browse our complete collection of premium motorcycles.`}
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters (Desktop) */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-card rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Filters</h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
            
            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <Slider
                defaultValue={[0, 2500000]}
                max={2500000}
                step={50000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm">
                <span>₹{(priceRange[0] / 100000).toFixed(1)}L</span>
                <span>₹{(priceRange[1] / 100000).toFixed(1)}L</span>
              </div>
            </div>
            
            {/* Brand Filter */}
            <div>
              <h4 className="font-medium mb-3">Brands</h4>
              <div className="space-y-2">
                {allBrands.map((brand) => (
                  <div key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`brand-${brand}`}
                      checked={brandsFilter.includes(brand)}
                      onChange={() => toggleBrandFilter(brand)}
                      className="h-4 w-4 rounded border-gray-300 text-bike focus:ring-bike"
                    />
                    <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="lg:col-span-3">
          {/* Sort and Filter Controls */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="flex items-center">
              <span className="text-sm text-muted-foreground mr-2">
                {filteredProducts.length} products
              </span>
            </div>
            
            {/* Mobile Filters Button */}
            <div className="flex gap-2 lg:hidden">
              <Button variant="outline" className="lg:hidden">
                Filters
              </Button>
            </div>
            
            <div className="flex-1 lg:flex-none">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-[180px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Products */}
          {displayProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Load More */}
              {displayCount < filteredProducts.length && (
                <div className="text-center mt-8">
                  <Button onClick={loadMore} variant="outline">
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-3xl mb-2">😔</div>
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try changing your filters or browse our other categories
              </p>
              <Button onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
