import { curatedMomentsContent, experiences } from "@/data";
import { Container } from "@/components/ui/Container";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

export function CuratedMoments() {
  return (
    <section
      id="curated-moments"
      className="scroll-section overflow-x-hidden bg-white section-py"
      aria-labelledby="curated-moments-heading"
    >
      <Container>
        <ScrollReveal>
          <h2
            id="curated-moments-heading"
            className="type-display-lg text-center text-primary-container"
          >
            {curatedMomentsContent.title}
          </h2>
        </ScrollReveal>

        <StaggerReveal
          as="ul"
          className="mt-10 grid grid-cols-1 items-stretch gap-6 md:mt-12 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8"
        >
          {experiences.map((experience) => (
            <StaggerItem key={experience.id} as="li" className="flex min-w-0">
              <ExperienceCard experience={experience} className="w-full" />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
