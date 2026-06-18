"use client";

import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials, testimonialsContent } from "@/data";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const scrollCarousel = useCallback((direction: "prev" | "next") => {
    const node = carouselRef.current;
    if (!node) return;
    const offset = Math.max(node.clientWidth * 0.88, 280);
    node.scrollBy({
      left: direction === "next" ? offset : -offset,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [prefersReducedMotion]);

  return (
    <section
      id="testimonials"
      className="overflow-x-hidden bg-surface-linen section-py"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-caps text-gold">{testimonialsContent.eyebrow}</p>
          <h2 id="testimonials-heading" className="type-display-lg mt-3 text-primary-container">
            {testimonialsContent.title}
          </h2>
        </div>

        <ul className="mt-10 hidden items-stretch gap-6 md:mt-12 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.li
              key={testimonial.id}
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
              className={cn("flex min-w-0", i === 2 && "md:col-span-2 md:max-w-md md:justify-self-center lg:col-span-1 lg:max-w-none")}
            >
              <TestimonialCard testimonial={testimonial} className="w-full" />
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 md:hidden">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Guest testimonials"
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className="w-[min(88vw,20rem)] shrink-0 snap-center"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${testimonials.length}`}
              >
                <TestimonialCard testimonial={testimonial} className="h-full" priority={i === 0} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-heading transition-colors hover:border-primary-container hover:bg-surface-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-heading transition-colors hover:border-primary-container hover:bg-surface-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
