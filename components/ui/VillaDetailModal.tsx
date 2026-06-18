"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Villa } from "@/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

interface VillaDetailModalProps {
  villa: Villa | null;
  onClose: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function VillaDetailModal({ villa, onClose }: VillaDetailModalProps) {
  const articleRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isMobileSheet, setIsMobileSheet] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useFocusTrap(Boolean(villa), articleRef, onClose);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobileSheet(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!villa) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 120);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [villa]);

  if (!isMounted || !villa) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="villa-detail-backdrop"
        initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
        className={cn(
          "fixed inset-0 z-[100] flex bg-black/60",
          "items-end p-0 md:items-center md:p-6 lg:p-8"
        )}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="villa-detail-title"
      >
        <motion.article
          ref={articleRef}
          initial={{
            opacity: prefersReducedMotion ? 1 : 0,
            y: prefersReducedMotion ? 0 : isMobileSheet ? "100%" : 32,
            scale: prefersReducedMotion ? 1 : isMobileSheet ? 1 : 0.98,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: prefersReducedMotion ? 1 : 0,
            y: prefersReducedMotion ? 0 : isMobileSheet ? "100%" : 24,
            scale: prefersReducedMotion ? 1 : isMobileSheet ? 1 : 0.98,
          }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: EASE }}
          className={cn(
            "relative flex w-full flex-col overflow-hidden bg-white shadow-[var(--shadow-booking)]",
            "max-h-[92dvh] rounded-t-[1.5rem]",
            "md:max-h-[88vh] md:max-w-2xl md:rounded-[1.5rem]",
            "lg:max-w-4xl"
          )}
          onClick={(event) => event.stopPropagation()}
        >
            <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between border-b border-stone-100 bg-white px-4 py-3 md:hidden">
              <p className="text-sm font-medium text-heading">Villa Details</p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-linen text-heading transition-colors active:bg-stone-200"
                aria-label="Close villa details"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <button
              ref={isMobileSheet ? undefined : closeButtonRef}
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 hidden h-11 w-11 items-center justify-center rounded-full bg-white/90 text-heading shadow-sm transition-colors hover:bg-white md:flex"
              aria-label="Close villa details"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="relative w-full shrink-0 overflow-x-auto overscroll-x-contain">
                <div className="flex w-full snap-x snap-mandatory">
                  <div className="relative aspect-[4/3] w-full shrink-0 snap-center md:aspect-video lg:aspect-[21/9]">
                    <Image
                      src={villa.image}
                      alt={villa.alt}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 672px, 896px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 md:bottom-6 md:left-8 md:right-20">
                      <p className="label-caps text-white/80">{villa.details.guests}</p>
                      <h2 id="villa-detail-title" className="type-display-sm mt-1 text-white">
                        {villa.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <p className="flex min-w-0 items-center gap-1.5 text-sm text-body-muted">
                    <MapPin size={14} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
                    <span className="text-pretty">{villa.location}</span>
                  </p>
                  <div className="shrink-0 text-right">
                    <p className="text-xs uppercase tracking-wider text-body-muted">From</p>
                    <p className="font-display text-lg text-gold">
                      ${villa.price} <span className="text-sm text-body-muted">/ Night</span>
                    </p>
                  </div>
                </div>

                <p className="type-body-sm mt-5 text-pretty text-body-muted md:type-body">
                  {villa.details.longDescription}
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="label-caps text-primary-container">Highlights</h3>
                    <ul className="mt-3 space-y-2.5">
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
                    <ul className="mt-3 space-y-2.5">
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

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-stone-200 pt-6 sm:gap-3">
                  <span className="inline-flex min-h-8 items-center rounded-full bg-surface-linen px-3 py-1.5 text-xs font-medium text-primary-container">
                    {villa.details.size}
                  </span>
                  {villa.amenities.map((amenity) => (
                    <span
                      key={amenity.label}
                      className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-[#e8f3ef] px-3 py-1.5 text-xs font-medium text-primary-container"
                    >
                      <Icon name={amenity.icon} size={13} className="text-primary-container" />
                      {amenity.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={cn(
                "shrink-0 border-t border-stone-200 bg-white px-5 py-4 md:px-8",
                "pb-[max(1rem,env(safe-area-inset-bottom))]"
              )}
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={villa.cta.href}
                  variant="primary"
                  className="min-h-12 flex-1"
                  onClick={onClose}
                >
                  Reserve This Villa
                </Button>
                <Button variant="outline" className="min-h-12 flex-1 sm:max-w-[10rem]" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.article>
        </motion.div>
    </AnimatePresence>,
    document.body
  );
}
