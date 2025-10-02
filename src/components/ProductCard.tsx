import { useEffect, useState } from "react";
import { StarIcon, HeartIcon } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  alt?: string;
  productTitle: string;
  productDescription: string;
  rating: number;
  reviewsCount?: number;
  price: number;
  currency?: string;
  badge?: string;
  isLoading?: boolean;
}

const Rating: React.FC<{ rating: number; reviewsCount?: number }> = ({
  rating,
  reviewsCount,
}) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
      <div className="flex">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars)
            return (
              <StarIcon
                key={i}
                className="h-3 w-3 fill-yellow-400 text-yellow-400"
              />
            );
          if (i === fullStars && hasHalf)
            return (
              <StarIcon
                key={i}
                className="h-3 w-3 fill-yellow-200 text-yellow-400"
              />
            );
          return <StarIcon key={i} className="h-3 w-3 text-gray-300" />;
        })}
      </div>
      <span>
        {reviewsCount ? `(${reviewsCount})` : `(${rating.toFixed(1)}/5)`}
      </span>
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  alt,
  productTitle,
  productDescription,
  rating,
  reviewsCount,
  price,
  currency = "USD",
  badge,
  isLoading = false,
}) => {
  const [wishlisted, setWishlisted] = useState(false);

  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [animating]);

  if (isLoading) {
    // Skeleton Loader
    return (
      <div className="w-full max-w-xs p-4 flex justify-center">
        <Card className="animate-pulse w-full max-w-xs">
          <CardContent className="p-3 space-y-2">
            <div className="aspect-square bg-gray-200 rounded-md" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/4 mt-2" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full p-2 flex justify-center">
      <Link
        to={`/products/${encodeURIComponent(productTitle)}`}
        className="w-full max-w-xs"
      >
        <Card className="hover:shadow-lg transition-transform hover:scale-105 cursor-pointer">
          <CardContent className="p-3 relative">
            {/* Badge */}
            {badge && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded z-10">
                {badge}
              </span>
            )}

            {/* Wishlist */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault(); // prevent link navigation
                setWishlisted((prev) => !prev);
                setAnimating(true); // trigger animation
              }}
              className="absolute top-2 right-2 rounded-full bg-white/80 p-1 shadow hover:bg-white z-10 cursor-pointer"
              aria-label="Add to wishlist"
            >
              <HeartIcon
                className={`h-5 w-5 transition-transform duration-200 ${
                  wishlisted ? "text-red-500 fill-red-500" : "text-gray-600"
                } ${animating ? "animate-pop" : ""}`}
              />
            </button>

            {/* Image */}
            <div className="aspect-square rounded-md bg-gray-100 mb-2 overflow-hidden">
              <img
                src={image}
                alt={alt || productTitle}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <CardTitle className="text-sm mb-1 truncate">
              {productTitle}
            </CardTitle>

            {/* Description */}
            <CardDescription className="text-xs mb-2 line-clamp-2">
              {productDescription}
            </CardDescription>

            {/* Rating */}
            <Rating rating={rating} reviewsCount={reviewsCount} />

            {/* Price + Button */}
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm font-bold">
                {price.toLocaleString("en-US", { style: "currency", currency })}
              </span>
              <Button
                size="sm"
                className="text-xs px-3 py-1 h-8 bg-black text-white hover:opacity-70 active:scale-95 transition-transform rounded cursor-pointer"
                aria-label={`Add ${productTitle} to cart`}
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
