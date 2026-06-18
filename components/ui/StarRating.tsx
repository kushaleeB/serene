import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
  label?: string;
}

export function StarRating({ rating, className, size = 16, label }: StarRatingProps) {
  const ariaLabel = label ?? `Rated ${rating} out of 5 stars`;

  return (
    <div className={cn("flex items-center gap-0.5", className)} role="img" aria-label={ariaLabel}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          className={cn(
            "fill-gold text-gold",
            i < Math.floor(rating) ? "opacity-100" : "opacity-30"
          )}
        />
      ))}
    </div>
  );
}
