"use client";

import type { FeaturedVillasContent } from "@/types";
import { villas } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";
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
      className={cn(
        "overflow-x-hidden bg-[#f5f3f3] section-py scroll-section",
        !showHeader && "pt-0"
      )}
      {...{ "aria-labelledby": "villas-heading" }}
    >
      <Container>
        {showHeader ? (
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="label-caps text-gold">{content.eyebrow}</p>
            <h2 id="villas-heading" className="type-display-lg mt-3 text-primary-container">
              {content.title}
            </h2>
            <p className="type-body mt-4 text-pretty text-body-muted">
              {content.description}
            </p>
          </ScrollReveal>
        ) : (
          <h2 id="villas-heading" className="sr-only">
            {content.title}
          </h2>
        )}

        <StaggerReveal
          as="ul"
          className={cn(
            "grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-6",
            showHeader && "mt-10 md:mt-12"
          )}
        >
          {villas.map((villa) => (
            <StaggerItem key={villa.id} as="li" className="flex min-w-0">
              <VillaCard villa={villa} className="h-full w-full" />
            </StaggerItem>
          ))}
        </StaggerReveal>

        {showCta && (
          <ScrollReveal className="mt-10 flex justify-center md:mt-12" delay={0.1}>
            <Button
              href={content.viewAllCta.href}
              variant="primary"
              className="min-h-11 w-full max-w-md sm:w-auto"
            >
              {content.viewAllCta.label}
            </Button>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
}
