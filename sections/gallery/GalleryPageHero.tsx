import { Container } from "@/components/ui/Container";

interface GalleryPageHeroProps {
  title: string;
  description: string;
}

export function GalleryPageHero({ title, description }: GalleryPageHeroProps) {
  return (
    <section className="bg-[#f9f9f7] pt-28 pb-10 md:pt-32 md:pb-12 lg:pb-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="type-display-lg text-primary-container">{title}</h1>
          <p className="type-body mt-4 text-pretty text-body-muted md:mt-5">
            {description}
          </p>
          <div className="mx-auto mt-6 h-px w-12 bg-stone-300 md:mt-8" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
