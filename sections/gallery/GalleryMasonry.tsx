"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages, galleryPageContent } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";
import type { GalleryImage } from "@/types";

export function GalleryMasonry() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section
        id="gallery-grid"
        className="bg-[#f9f9f7] pb-16 md:pb-20"
        aria-label="Photo gallery"
      >
        <Container>
          <div className="grid grid-flow-dense grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:auto-rows-[200px]">
            {galleryImages.map((image, i) => (
              <motion.button
                key={image.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => setActiveImage(image)}
                className={cn(
                  "group relative min-h-[220px] overflow-hidden rounded-2xl text-left lg:min-h-0",
                  image.gridClass
                )}
                aria-label={`View photo: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-heading opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View Photo
                </span>
              </motion.button>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              href={galleryPageContent.exploreMoreCta.href}
              variant="outline"
              className="label-caps border-stone-300 px-10 py-3 text-heading hover:border-primary-container"
            >
              {galleryPageContent.exploreMoreCta.label}
            </Button>
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5"
            onClick={() => setActiveImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setActiveImage(null)}
              aria-label="Close photo"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
