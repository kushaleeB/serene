"use client";

import { bookingBarLabels } from "@/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

interface BookingBarProps {
  className?: string;
}

export function BookingBar({ className }: BookingBarProps) {
  return (
    <div
      className={cn(
        "w-full rounded-full bg-white px-4 py-3 shadow-[var(--shadow-booking)] md:px-6 md:py-3.5",
        className
      )}
      role="search"
      aria-label="Check villa availability"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        <BookingField label={bookingBarLabels.checkIn} value={bookingBarLabels.checkInValue} />
        <Divider />
        <BookingField label={bookingBarLabels.checkOut} value={bookingBarLabels.checkOutValue} />
        <Divider />
        <BookingField label={bookingBarLabels.guests} value={bookingBarLabels.guestsValue} />
        <div className="shrink-0 md:ml-4">
          <Button
            variant="primary"
            className="w-full whitespace-nowrap px-6 py-2.5 text-sm md:w-auto"
          >
            {bookingBarLabels.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}

function BookingField({ label, value }: { label: string; value: string }) {
  return (
    <button
      type="button"
      className="flex min-w-0 flex-1 flex-col px-3 py-1 text-left transition-opacity hover:opacity-80 md:px-5"
      aria-label={`${label}: ${value}`}
    >
      <span className="label-caps text-[0.625rem] text-body-muted">{label}</span>
      <span className="truncate text-sm font-semibold text-heading">{value}</span>
    </button>
  );
}

function Divider() {
  return (
    <div className="hidden h-8 w-px shrink-0 bg-stone-200 md:block" aria-hidden="true" />
  );
}
