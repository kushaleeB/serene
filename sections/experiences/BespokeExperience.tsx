"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { bespokeExperienceContent } from "@/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function BespokeExperience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="bg-[#f5f3f3] section-py"
      aria-labelledby="bespoke-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
          >
            <p className="label-caps text-primary-container">
              {bespokeExperienceContent.eyebrow}
            </p>
            <h2 id="bespoke-heading" className="type-display-lg mt-3 text-primary-container">
              {bespokeExperienceContent.title}
            </h2>
            <p className="type-body mt-5 text-body-muted">
              {bespokeExperienceContent.description}
            </p>
            <ul className="mt-6 space-y-3">
              {bespokeExperienceContent.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-heading">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-container/10">
                    <Check size={12} className="text-primary-container" strokeWidth={2} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={bespokeExperienceContent.cta.href} variant="primary">
                {bespokeExperienceContent.cta.label}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-[var(--shadow-soft)]">
              <Image
                src={bespokeExperienceContent.image}
                alt={bespokeExperienceContent.imageAlt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
