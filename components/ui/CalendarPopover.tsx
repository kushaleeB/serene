"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import {
  formatDisplayDate,
  getMonthMatrix,
  isBeforeDay,
  isSameDay,
  startOfDay,
} from "@/utils/date";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarPopoverProps {
  selected: Date;
  minDate: Date;
  onSelect: (date: Date) => void;
  onClose: () => void;
  label: string;
}

export function CalendarPopover({
  selected,
  minDate,
  onSelect,
  onClose,
  label,
}: CalendarPopoverProps) {
  const [viewDate, setViewDate] = useState(
    () => new Date(selected.getFullYear(), selected.getMonth(), 1)
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const cells = getMonthMatrix(year, month);
  const today = startOfDay(new Date());

  function goToMonth(offset: number) {
    setViewDate(new Date(year, month + offset, 1));
  }

  return (
    <div
      role="dialog"
      aria-label={`${label} calendar`}
      className="absolute bottom-full left-0 z-50 mb-3 w-[min(100vw-2rem,18rem)] rounded-2xl border border-stone-200 bg-white p-4 shadow-[var(--shadow-booking)]"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="mb-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goToMonth(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-heading transition-colors hover:bg-surface-linen"
          aria-label="Previous month"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <p className="text-sm font-semibold text-heading">
          {MONTHS[month]} {year}
        </p>
        <button
          type="button"
          onClick={() => goToMonth(1)}
          className="flex h-8 w-8 items-center justify-center rounded-full text-heading transition-colors hover:bg-surface-linen"
          aria-label="Next month"
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((day) => (
          <span
            key={day}
            className="py-1 text-center text-[0.625rem] font-medium uppercase tracking-wider text-body-muted"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, index) => {
          if (!date) {
            return <span key={`empty-${index}`} aria-hidden="true" />;
          }

          const disabled = isBeforeDay(date, minDate);
          const isSelected = isSameDay(date, selected);
          const isToday = isSameDay(date, today);

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={disabled}
              onClick={() => {
                onSelect(date);
                onClose();
              }}
              aria-label={formatDisplayDate(date)}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm transition-colors",
                disabled && "cursor-not-allowed text-body-muted/40",
                !disabled && !isSelected && "text-heading hover:bg-surface-linen",
                isSelected && "bg-primary font-semibold text-on-primary",
                isToday && !isSelected && "ring-1 ring-gold/60"
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
