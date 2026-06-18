"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactPageContent } from "@/data";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ContactHero() {
  const { hero } = contactPageContent;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[70vh] flex-col overflow-hidden md:min-h-[75vh]"
      aria-label="Contact hero"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />
        <div className="hero-overlay-bottom absolute inset-0" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-28 md:py-32">
        <motion.div
          initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1 className="type-display-lg text-white">{hero.title}</h1>
          <p className="type-body mt-5 max-w-lg text-white/85 md:mt-6">
            {hero.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
