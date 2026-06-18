"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Villa } from "@/types";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { VillaDetailModal } from "@/components/ui/VillaDetailModal";
import { cn } from "@/utils/cn";

interface VillaCardProps {
  villa: Villa;
  className?: string;
}

export function VillaCard({ villa, className }: VillaCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <article
        className={cn(
          "group flex flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-[var(--shadow-soft)]",
          "transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(32,58,53,0.12)]",
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={villa.image}
            alt={villa.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl leading-tight text-primary-container">
              {villa.name}
            </h3>
            <div className="shrink-0 text-right">
              <p className="text-[0.625rem] text-body-muted">From</p>
              <p className="font-display text-sm text-gold">
                ${villa.price} / Night
              </p>
            </div>
          </div>

          <p className="mt-2 flex items-center gap-1.5 text-xs text-body-muted">
            <MapPin size={14} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
            {villa.location}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-body-muted">{villa.description}</p>

          <div className="my-5 h-px bg-stone-200" aria-hidden="true" />

          <ul className="flex flex-wrap gap-2">
            {villa.amenities.map((amenity) => (
              <li
                key={amenity.label}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3ef] px-3 py-1.5 text-xs font-medium text-primary-container"
              >
                <Icon name={amenity.icon} size={13} className="text-primary-container" />
                {amenity.label}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full py-3 text-sm"
              onClick={() => setIsDetailOpen(true)}
            >
              {villa.cta.label}
            </Button>
          </div>
        </div>
      </article>

      <VillaDetailModal villa={isDetailOpen ? villa : null} onClose={() => setIsDetailOpen(false)} />
    </>
  );
}
