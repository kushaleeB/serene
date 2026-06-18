"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { bookingBarLabels, bookingConfig } from "@/data";
import { Button } from "@/components/ui/Button";
import { CalendarPopover } from "@/components/ui/CalendarPopover";
import { cn } from "@/utils/cn";
import {
  addDays,
  formatDisplayDate,
  getDefaultCheckInDate,
  getDefaultCheckOutDate,
  isBeforeDay,
  startOfDay,
} from "@/utils/date";

interface BookingBarProps {
  className?: string;
  id?: string;
}

type CalendarField = "checkIn" | "checkOut";

export function BookingBar({ className, id }: BookingBarProps) {
  const today = startOfDay(new Date());
  const [checkIn, setCheckIn] = useState(getDefaultCheckInDate);
  const [checkOut, setCheckOut] = useState(() => getDefaultCheckOutDate(getDefaultCheckInDate()));
  const [activeCalendar, setActiveCalendar] = useState<CalendarField | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeCalendar) return;

    function handlePointerDown(event: MouseEvent) {
      if (!barRef.current?.contains(event.target as Node)) {
        setActiveCalendar(null);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [activeCalendar]);

  function handleCheckInSelect(date: Date) {
    setCheckIn(date);
    const minCheckOut = addDays(date, bookingConfig.minNights);
    if (isBeforeDay(checkOut, minCheckOut)) {
      setCheckOut(minCheckOut);
    }
  }

  function handleCheckOutSelect(date: Date) {
    setCheckOut(date);
  }

  function toggleCalendar(field: CalendarField) {
    setActiveCalendar((current) => (current === field ? null : field));
  }

  const checkOutMinDate = addDays(checkIn, bookingConfig.minNights);

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
        <DateField
          label={bookingBarLabels.checkIn}
          value={formatDisplayDate(checkIn)}
          isActive={activeCalendar === "checkIn"}
          onClick={() => toggleCalendar("checkIn")}
        >
          {activeCalendar === "checkIn" && (
            <CalendarPopover
              label={bookingBarLabels.checkIn}
              selected={checkIn}
              minDate={today}
              onSelect={handleCheckInSelect}
              onClose={() => setActiveCalendar(null)}
            />
          )}
        </DateField>

        <Divider />

        <DateField
          label={bookingBarLabels.checkOut}
          value={formatDisplayDate(checkOut)}
          isActive={activeCalendar === "checkOut"}
          onClick={() => toggleCalendar("checkOut")}
        >
          {activeCalendar === "checkOut" && (
            <CalendarPopover
              label={bookingBarLabels.checkOut}
              selected={checkOut}
              minDate={checkOutMinDate}
              onSelect={handleCheckOutSelect}
              onClose={() => setActiveCalendar(null)}
            />
          )}
        </DateField>

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

function DateField({
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
