"use client";

import { motion } from "framer-motion";
import { curatedMomentsContent, experiences } from "@/data";
import { Container } from "@/components/ui/Container";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

export function CuratedMoments() {
  return (
    <section
      id="curated-moments"
      className="overflow-x-hidden bg-white section-py"
      aria-labelledby="curated-moments-heading"
    >
      <Container>
        <h2
          id="curated-moments-heading"
          className="text-center font-display text-[clamp(1.5rem,3vw+0.75rem,2rem)] leading-[1.25] text-primary-container"
        >
          {curatedMomentsContent.title}
        </h2>

        <ul className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-12 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {experiences.map((experience, i) => (
            <motion.li
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
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
