"use client";

import { useState } from "react";
import Image from "next/image";
import type { Testimonial } from "@/types";
import { StarRating } from "@/components/ui/StarRating";
import { cn } from "@/utils/cn";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  priority?: boolean;
}

function getInitials(name: string): string {
  return name
    .split(/[&\s]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function TestimonialCard({ testimonial, className, priority = false }: TestimonialCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-[1.25rem] bg-white p-6 shadow-[var(--shadow-soft)] md:p-7",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e8f3ef]">
          {!imageError ? (
            <Image
              src={testimonial.image}
              alt={testimonial.alt}
              fill
              loading={priority ? "eager" : "lazy"}
              className="object-cover"
              sizes="56px"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-sm font-semibold text-primary-container">
              {getInitials(testimonial.name)}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="type-display-sm truncate text-primary-container">{testimonial.name}</h3>
          <p className="type-body-sm text-body-muted">{testimonial.country}</p>
        </div>
      </div>

      <div className="mt-4">
        <StarRating rating={testimonial.rating} size={14} label={`Rated ${testimonial.rating} out of 5`} />
      </div>

      <blockquote className="type-body-sm mt-4 flex-1 text-pretty text-body-muted">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>
    </article>
  );
}
