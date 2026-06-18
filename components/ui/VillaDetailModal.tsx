"use client";

import { useEffect } from "react";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Villa } from "@/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/cn";

interface VillaDetailModalProps {
  villa: Villa | null;
  onClose: () => void;
}

export function VillaDetailModal({ villa, onClose }: VillaDetailModalProps) {
  useEffect(() => {
    if (!villa) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [villa, onClose]);

  return (
    <AnimatePresence>
      {villa && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="villa-detail-title"
        >
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden",
              "rounded-t-[1.5rem] bg-white shadow-[var(--shadow-booking)] sm:rounded-[1.5rem]"
            )}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-heading shadow-sm transition-colors hover:bg-white"
              aria-label="Close villa details"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <div className="overflow-y-auto">
              <div className="relative aspect-[16/9] w-full shrink-0 sm:aspect-[21/9]">
                <Image
                  src={villa.image}
                  alt={villa.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-16 md:bottom-6 md:left-8">
                  <p className="label-caps text-white/80">{villa.details.guests}</p>
                  <h2
                    id="villa-detail-title"
                    className="mt-1 font-display text-2xl text-white md:text-3xl"
                  >
                    {villa.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <p className="flex items-center gap-1.5 text-sm text-body-muted">
                    <MapPin size={14} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
                    {villa.location}
                  </p>
                  <div className="text-right">
                    <p className="text-[0.625rem] uppercase tracking-wider text-body-muted">From</p>
                    <p className="font-display text-lg text-gold">
                      ${villa.price} <span className="text-sm text-body-muted">/ Night</span>
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-body-muted md:text-base">
                  {villa.details.longDescription}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="label-caps text-primary-container">Highlights</h3>
                    <ul className="mt-3 space-y-2">
                      {villa.details.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-body-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="label-caps text-primary-container">Included</h3>
                    <ul className="mt-3 space-y-2">
                      {villa.details.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-body-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-6">
                  <span className="rounded-full bg-surface-linen px-3 py-1.5 text-xs font-medium text-primary-container">
                    {villa.details.size}
                  </span>
                  {villa.amenities.map((amenity) => (
                    <span
                      key={amenity.label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3ef] px-3 py-1.5 text-xs font-medium text-primary-container"
                    >
                      <Icon name={amenity.icon} size={13} className="text-primary-container" />
                      {amenity.label}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={villa.cta.href} variant="primary" className="flex-1 py-3 text-sm">
                    Reserve This Villa
                  </Button>
                  <Button variant="outline" className="flex-1 py-3 text-sm" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
