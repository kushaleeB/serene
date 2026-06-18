"use client";

import { motion } from "framer-motion";
import { curatedMomentsContent, experiences } from "@/data";
import { Container } from "@/components/ui/Container";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

export function CuratedMoments() {
  return (
    <section
      id="curated-moments"
      className="bg-white section-py"
      aria-labelledby="curated-moments-heading"
    >
      <Container>
        <h2
          id="curated-moments-heading"
          className="text-center font-display text-[1.75rem] text-primary-container md:text-[2rem]"
        >
          {curatedMomentsContent.title}
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {experiences.map((experience, i) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
