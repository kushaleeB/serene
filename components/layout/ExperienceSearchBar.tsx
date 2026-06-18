"use client";

import { Calendar, MapPin, Sparkles } from "lucide-react";
import { experienceSearchLabels } from "@/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

interface ExperienceSearchBarProps {
  className?: string;
}

export function ExperienceSearchBar({ className }: ExperienceSearchBarProps) {
  return (
    <div
      className={cn(
        "w-full max-w-4xl rounded-full bg-white px-4 py-3 shadow-[var(--shadow-booking)] md:px-6 md:py-4",
        className
      )}
      role="search"
      aria-label="Search experiences"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        <SearchField
          icon={MapPin}
          label={experienceSearchLabels.destination}
          value={experienceSearchLabels.destinationPlaceholder}
        />
        <Divider />
        <SearchField
          icon={Sparkles}
          label={experienceSearchLabels.experience}
          value={experienceSearchLabels.experiencePlaceholder}
        />
        <Divider />
        <SearchField
          icon={Calendar}
          label={experienceSearchLabels.date}
          value={experienceSearchLabels.datePlaceholder}
        />
        <div className="md:ml-4 md:shrink-0">
          <Button variant="primary" className="w-full px-8 py-3 text-sm md:w-auto">
            {experienceSearchLabels.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}

function SearchField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <button
      type="button"
      className="flex flex-1 items-center gap-3 rounded-full px-2 py-1 text-left transition-colors hover:opacity-80 md:px-4"
      aria-label={`${label}: ${value}`}
    >
      <Icon size={16} className="shrink-0 text-body-muted" strokeWidth={1.5} />
      <div className="min-w-0">
        <p className="label-caps text-[0.625rem] text-body-muted">{label}</p>
        <p className="truncate text-sm font-medium text-heading">{value}</p>
      </div>
    </button>
  );
}

function Divider() {
  return (
    <div className="hidden h-8 w-px bg-stone-200 md:block" aria-hidden="true" />
  );
}
