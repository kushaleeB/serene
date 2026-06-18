import Image from "next/image";
import { memo } from "react";
import type { Experience } from "@/types";
import { cn } from "@/utils/cn";

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export const ExperienceCard = memo(function ExperienceCard({
  experience,
  className,
}: ExperienceCardProps) {
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
      <h3 className="type-display-sm mt-4 text-primary-container">{experience.title}</h3>
      <p className="type-body-sm mt-2 flex-1 text-pretty text-body-muted">
        {experience.description}
      </p>
    </article>
  );
});
