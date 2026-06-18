"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { bookingBarLabels, bookingConfig } from "@/data";
import { Button } from "@/components/ui/Button";
import { CalendarPopover } from "@/components/ui/CalendarPopover";
import { GuestSelectorPopover } from "@/components/ui/GuestSelectorPopover";
import { cn } from "@/utils/cn";
import { calculateStayTotal, formatStayPrice } from "@/utils/booking-price";
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

  const estimatedTotal = useMemo(
    () => formatStayPrice(calculateStayTotal(checkIn, checkOut)),
    [checkIn, checkOut]
  );

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
        "w-full overflow-visible bg-white shadow-[var(--shadow-booking)]",
        "rounded-2xl px-4 py-4 md:rounded-3xl md:px-5 md:py-4",
        "lg:rounded-full lg:px-6 lg:py-3.5",
        className
      )}
      role="search"
      aria-label="Check villa availability"
    >
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-x-4 md:gap-y-3 lg:flex lg:flex-row lg:items-center lg:gap-0">
        <PopoverField
          label={bookingBarLabels.checkIn}
          value={formatDisplayDate(checkIn)}
          isActive={activePopover === "checkIn"}
          onClick={() => togglePopover("checkIn")}
          className="md:col-start-1 md:row-start-1"
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
          className="md:col-start-2 md:row-start-1"
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
          className="md:col-start-1 md:row-start-2"
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

        <Divider />

        <DisplayField
          label={bookingBarLabels.price}
          value={estimatedTotal}
          className="md:col-start-2 md:row-start-2"
        />

        <div className="md:col-span-2 md:row-start-3 lg:col-span-1 lg:row-start-auto lg:ml-4 lg:shrink-0">
          <Button
            variant="primary"
            className="min-h-11 w-full whitespace-nowrap px-6 py-3 text-sm lg:w-auto lg:py-2.5"
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
  className,
}: {
  label: string;
  value: string;
  isActive: boolean;
  onClick: () => void;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative min-w-0 lg:flex-1", className)}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isActive}
        aria-haspopup="dialog"
        className={cn(
          "flex min-h-11 w-full flex-col justify-center rounded-2xl px-3 py-2 text-left transition-colors lg:rounded-2xl lg:px-5 lg:py-1",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          isActive ? "bg-surface-linen" : "hover:opacity-80"
        )}
        aria-label={`${label}: ${value}`}
      >
        <span className="label-caps text-xs text-body-muted">{label}</span>
        <span className="type-body-sm truncate font-semibold text-heading">{value}</span>
      </button>
      {children}
    </div>
  );
}

function DisplayField({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-11 flex-col justify-center rounded-2xl px-3 py-2 lg:flex-1 lg:px-5 lg:py-1",
        className
      )}
      aria-label={`${label}: ${value}`}
    >
      <span className="label-caps text-xs text-body-muted">{label}</span>
      <span className="type-body-sm truncate font-semibold text-gold">{value}</span>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden h-8 w-px shrink-0 bg-stone-200 lg:block" aria-hidden="true" />
  );
}
