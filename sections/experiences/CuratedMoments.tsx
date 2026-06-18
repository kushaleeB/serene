"use client";

import { motion } from "framer-motion";
import { curatedMomentsContent, experiences } from "@/data";
import { Container } from "@/components/ui/Container";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CuratedMoments() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="curated-moments"
      className="overflow-x-hidden bg-white section-py"
      aria-labelledby="curated-moments-heading"
    >
      <Container>
        <h2
          id="curated-moments-heading"
          className="type-display-lg text-center text-primary-container"
        >
          {curatedMomentsContent.title}
        </h2>

        <ul className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-12 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {experiences.map((experience, i) => (
            <motion.li
              key={experience.id}
              initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                delay: prefersReducedMotion ? 0 : i * 0.08,
              }}
              className="flex min-w-0"
            >
              <ExperienceCard experience={experience} className="w-full" />
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
