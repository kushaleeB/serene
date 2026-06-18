import Image from "next/image";
import type { Experience } from "@/types";
import { cn } from "@/utils/cn";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <article className={cn("group flex h-full min-w-0 flex-col", className)}>
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-[1rem]">
        <Image
          src={experience.image}
          alt={experience.alt}
          fill
          loading="lazy"
          className={cn(
            "object-cover transition-transform duration-500",
            "[@media(hover:hover)]:group-hover:scale-105"
          )}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-heading shadow-sm">
          {experience.badge}
        </span>
      </div>
      <h3 className="mt-4 font-display text-[clamp(1.0625rem,2vw+0.5rem,1.25rem)] leading-tight text-primary-container">
        {experience.title}
      </h3>
      <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-body-muted md:text-[0.9375rem]">
        {experience.description}
      </p>
    </article>
  );
}
