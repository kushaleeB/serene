import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

interface StarRatingProps {
  rating: number;
  className?: string;
  size?: number;
}

export function StarRating({ rating, className, size = 16 }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={cn(
            "fill-gold text-gold",
            i < Math.floor(rating) ? "opacity-100" : "opacity-30"
          )}
        />
      ))}
    </div>
  );
}
