"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages, galleryPageContent } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";
import type { GalleryImage } from "@/types";

export function GalleryMasonry() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useFocusTrap(Boolean(activeImage), dialogRef, () => setActiveImage(null));

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 80);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeImage]);

  return (
    <>
      <section
        id="gallery-grid"
        className="overflow-x-hidden bg-[#f9f9f7] pb-12 md:pb-16 lg:pb-20"
        aria-label="Photo gallery"
      >
        <Container>
          <ul
            className={cn(
              "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5",
              "lg:grid-flow-dense lg:grid-cols-3 lg:auto-rows-[200px] lg:gap-5"
            )}
          >
            {galleryImages.map((image, i) => (
              <motion.li
                key={image.id}
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : i * 0.04,
                }}
                className={cn("min-w-0", image.gridClass)}
              >
                <button
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={cn(
                    "group relative block h-full w-full overflow-hidden rounded-2xl text-left",
                    "aspect-[4/3] lg:aspect-auto lg:min-h-full",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  )}
                  aria-label={`View photo: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading={i < 3 ? "eager" : "lazy"}
                    className={cn(
                      "object-cover transition-transform duration-500",
                      "[@media(hover:hover)]:group-hover:scale-105"
                    )}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-black/10 transition-colors duration-300",
                      "[@media(hover:hover)]:bg-black/0 [@media(hover:hover)]:group-hover:bg-black/20"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-heading",
                      "opacity-100 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100"
                    )}
                  >
                    View Photo
                  </span>
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center md:mt-12">
            <Button
              href={galleryPageContent.exploreMoreCta.href}
              variant="outline"
              className="label-caps min-h-11 w-full max-w-md border-stone-300 px-10 py-3 text-heading hover:border-primary-container sm:w-auto"
            >
              {galleryPageContent.exploreMoreCta.label}
            </Button>
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            ref={dialogRef}
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-5"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:right-5 md:top-5"
              onClick={() => setActiveImage(null)}
              aria-label="Close photo"
            >
              <X size={24} aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: prefersReducedMotion ? 1 : 0.96, opacity: prefersReducedMotion ? 1 : 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: prefersReducedMotion ? 1 : 0.96, opacity: prefersReducedMotion ? 1 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[min(85dvh,720px)] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                loading="lazy"
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
