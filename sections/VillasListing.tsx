"use client";

import { motion } from "framer-motion";
import type { FeaturedVillasContent } from "@/types";
import { villas } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { VillaCard } from "@/components/ui/VillaCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/utils/cn";

interface VillasListingProps {
  content: FeaturedVillasContent;
  showCta?: boolean;
  showHeader?: boolean;
  sectionId?: string;
}

export function VillasListing({
  content,
  showCta = true,
  showHeader = true,
  sectionId,
}: VillasListingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={sectionId}
      className={cn(
        "overflow-x-hidden bg-[#f5f3f3] section-py",
        !showHeader && "pt-0"
      )}
      {...{ "aria-labelledby": "villas-heading" }}
    >
      <Container>
        {showHeader ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-caps text-gold">{content.eyebrow}</p>
            <h2 id="villas-heading" className="type-display-lg mt-3 text-primary-container">
              {content.title}
            </h2>
            <p className="type-body mt-4 text-pretty text-body-muted">
              {content.description}
            </p>
          </div>
        ) : (
          <h2 id="villas-heading" className="sr-only">
            {content.title}
          </h2>
        )}

        <ul
          className={cn(
            "grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-6",
            showHeader && "mt-10 md:mt-12"
          )}
        >
          {villas.map((villa, i) => (
            <motion.li
              key={villa.id}
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.55,
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
              className="flex min-w-0"
            >
              <VillaCard villa={villa} className="h-full w-full" />
            </motion.li>
          ))}
        </ul>

        {showCta && (
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.55, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="mt-10 flex justify-center md:mt-12"
          >
            <Button
              href={content.viewAllCta.href}
              variant="primary"
              className="min-h-11 w-full max-w-md sm:w-auto"
            >
              {content.viewAllCta.label}
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
