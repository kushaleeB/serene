import { FadeIn } from "@/components/ui/FadeIn";
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
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="label-caps text-gold">{eyebrow}</p>
          <h1 className="type-display-lg mt-3 text-primary-container">{title}</h1>
          <p className="type-body mt-4 text-body-muted">{description}</p>
        </FadeIn>
      </Container>
    </section>
  );
}
