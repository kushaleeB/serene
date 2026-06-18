import Image from "next/image";
import type { Experience } from "@/types";
import { cn } from "@/utils/cn";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <article className={cn("group", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem]">
        <Image
          src={experience.image}
          alt={experience.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-wider text-heading shadow-sm">
          {experience.badge}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg text-primary-container md:text-xl">
        {experience.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body-muted">{experience.description}</p>
    </article>
  );
}
