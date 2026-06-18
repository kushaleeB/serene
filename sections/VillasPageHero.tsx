import { Container } from "@/components/ui/Container";

interface VillasPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function VillasPageHero({ eyebrow, title, description }: VillasPageHeroProps) {
  return (
    <section className="bg-surface-linen pt-28 pb-12 md:pt-32 md:pb-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-caps text-gold">{eyebrow}</p>
          <h1 className="mt-3 font-display text-[2rem] leading-[1.2] text-primary-container md:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-body-muted md:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
