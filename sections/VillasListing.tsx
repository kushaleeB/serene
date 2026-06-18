"use client";

import { motion } from "framer-motion";
import type { FeaturedVillasContent } from "@/types";
import { villas } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { VillaCard } from "@/components/ui/VillaCard";
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
  return (
    <section
      id={sectionId}
      className={cn("bg-[#f5f3f3] section-py", !showHeader && "pt-0")}
      aria-labelledby="villas-heading"
    >
      <Container>
        {showHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <p className="label-caps text-gold">{content.eyebrow}</p>
            <h2
              id="villas-heading"
              className="mt-3 font-display text-[1.75rem] leading-[1.3] text-primary-container md:text-[2rem]"
            >
              {content.title}
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-body-muted">
              {content.description}
            </p>
          </div>
        )}

        <div className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6", showHeader && "mt-12")}>
          {villas.map((villa, i) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <VillaCard villa={villa} className="h-full" />
            </motion.div>
          ))}
        </div>

        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <Button href={content.viewAllCta.href} variant="primary">
              {content.viewAllCta.label}
            </Button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
