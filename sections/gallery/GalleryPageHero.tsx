import { Container } from "@/components/ui/Container";

interface GalleryPageHeroProps {
  title: string;
  description: string;
}

export function GalleryPageHero({ title, description }: GalleryPageHeroProps) {
  return (
    <section className="bg-[#f9f9f7] pt-28 pb-12 md:pt-32 md:pb-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-[2rem] leading-[1.2] text-primary-container md:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-5 font-body text-base leading-relaxed text-body-muted md:text-lg">
            {description}
          </p>
          <div className="mx-auto mt-8 h-px w-12 bg-stone-300" aria-hidden="true" />
        </div>
      </Container>
    </section>
  );
}
