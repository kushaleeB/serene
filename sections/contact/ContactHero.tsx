import Image from "next/image";
import { contactPageContent } from "@/data";
import { Container } from "@/components/ui/Container";

export function ContactHero() {
  const { hero } = contactPageContent;

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden md:min-h-[65vh]">
      <div className="absolute inset-0">
        <Image
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>
      <Container className="relative z-10 py-28 md:py-32">
        <div className="max-w-xl">
          <h1 className="font-display text-[2rem] leading-[1.2] text-white md:text-[2.75rem]">
            {hero.title}
          </h1>
          <p className="mt-4 font-body text-base leading-relaxed text-white/85 md:text-lg">
            {hero.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
