"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { bookingBarLabels, bookingConfig } from "@/data";
import { Button } from "@/components/ui/Button";
import { CalendarPopover } from "@/components/ui/CalendarPopover";
import { GuestSelectorPopover } from "@/components/ui/GuestSelectorPopover";
import { cn } from "@/utils/cn";
import {
  addDays,
  formatDisplayDate,
  getDefaultCheckInDate,
  getDefaultCheckOutDate,
  isBeforeDay,
  startOfDay,
} from "@/utils/date";
import { formatGuestSummary } from "@/utils/guests";

interface BookingBarProps {
  className?: string;
  id?: string;
}

type ActivePopover = "checkIn" | "checkOut" | "guests" | null;

const DEFAULT_ADULTS = 2;
const DEFAULT_CHILDREN = 1;

export function BookingBar({ className, id }: BookingBarProps) {
  const today = startOfDay(new Date());
  const [checkIn, setCheckIn] = useState(getDefaultCheckInDate);
  const [checkOut, setCheckOut] = useState(() => getDefaultCheckOutDate(getDefaultCheckInDate()));
  const [adults, setAdults] = useState(DEFAULT_ADULTS);
  const [children, setChildren] = useState(DEFAULT_CHILDREN);
  const [activePopover, setActivePopover] = useState<ActivePopover>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activePopover) return;

    function handlePointerDown(event: MouseEvent) {
      if (!barRef.current?.contains(event.target as Node)) {
        setActivePopover(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [activePopover]);

  function handleCheckInSelect(date: Date) {
    setCheckIn(date);
    const minCheckOut = addDays(date, bookingConfig.minNights);
    if (isBeforeDay(checkOut, minCheckOut)) {
      setCheckOut(minCheckOut);
    }
  }

  function togglePopover(field: ActivePopover) {
    setActivePopover((current) => (current === field ? null : field));
  }

  const checkOutMinDate = addDays(checkIn, bookingConfig.minNights);
  const guestSummary = formatGuestSummary(adults, children);

  return (
    <div
      ref={barRef}
      id={id}
      className={cn(
        "w-full overflow-visible rounded-full bg-white px-4 py-3 shadow-[var(--shadow-booking)] md:px-6 md:py-3.5",
        className
      )}
      role="search"
      aria-label="Check villa availability"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
        <PopoverField
          label={bookingBarLabels.checkIn}
          value={formatDisplayDate(checkIn)}
          isActive={activePopover === "checkIn"}
          onClick={() => togglePopover("checkIn")}
        >
          {activePopover === "checkIn" && (
            <CalendarPopover
              label={bookingBarLabels.checkIn}
              selected={checkIn}
              minDate={today}
              onSelect={handleCheckInSelect}
              onClose={() => setActivePopover(null)}
            />
          )}
        </PopoverField>

        <Divider />

        <PopoverField
          label={bookingBarLabels.checkOut}
          value={formatDisplayDate(checkOut)}
          isActive={activePopover === "checkOut"}
          onClick={() => togglePopover("checkOut")}
        >
          {activePopover === "checkOut" && (
            <CalendarPopover
              label={bookingBarLabels.checkOut}
              selected={checkOut}
              minDate={checkOutMinDate}
              onSelect={setCheckOut}
              onClose={() => setActivePopover(null)}
            />
          )}
        </PopoverField>

        <Divider />

        <PopoverField
          label={bookingBarLabels.guests}
          value={guestSummary}
          isActive={activePopover === "guests"}
          onClick={() => togglePopover("guests")}
        >
          {activePopover === "guests" && (
            <GuestSelectorPopover
              adults={adults}
              children={children}
              maxGuests={bookingConfig.maxGuests}
              onAdultsChange={setAdults}
              onChildrenChange={setChildren}
              onClose={() => setActivePopover(null)}
            />
          )}
        </PopoverField>

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

function PopoverField({
  label,
  value,
  isActive,
  onClick,
  children,
}: {
  label: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="relative min-w-0 flex-1">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isActive}
        aria-haspopup="dialog"
        className={cn(
          "flex w-full flex-col rounded-2xl px-3 py-1 text-left transition-colors md:px-5",
          isActive ? "bg-surface-linen" : "hover:opacity-80"
        )}
        aria-label={`${label}: ${value}`}
      >
        <span className="label-caps text-[0.625rem] text-body-muted">{label}</span>
        <span className="truncate text-sm font-semibold text-heading">{value}</span>
      </button>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden h-8 w-px shrink-0 bg-stone-200 md:block" aria-hidden="true" />
  );
}
