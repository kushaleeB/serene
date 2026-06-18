"use client";

import { useEffect, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import { bookingBarLabels } from "@/data";
import { cn } from "@/utils/cn";

interface GuestSelectorPopoverProps {
  adults: number;
  children: number;
  maxGuests: number;
  onAdultsChange: (count: number) => void;
  onChildrenChange: (count: number) => void;
  onClose: () => void;
}

export function GuestSelectorPopover({
  adults,
  children,
  maxGuests,
  onAdultsChange,
  onChildrenChange,
  onClose,
}: GuestSelectorPopoverProps) {
  const totalGuests = adults + children;

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-label="Guest selector"
      className="absolute bottom-full left-0 z-50 mb-3 w-[min(100vw-2rem,16rem)] rounded-2xl border border-stone-200 bg-white p-4 shadow-[var(--shadow-booking)]"
      onClick={(event) => event.stopPropagation()}
    >
      <GuestRow
        label={bookingBarLabels.adults}
        hint={bookingBarLabels.adultsHint}
        value={adults}
        onDecrease={() => onAdultsChange(Math.max(1, adults - 1))}
        onIncrease={() => {
          if (totalGuests < maxGuests) onAdultsChange(adults + 1);
        }}
        canDecrease={adults > 1}
        canIncrease={totalGuests < maxGuests}
      />

      <div className="my-4 h-px bg-stone-200" aria-hidden="true" />

      <GuestRow
        label={bookingBarLabels.children}
        hint={bookingBarLabels.childrenHint}
        value={children}
        onDecrease={() => onChildrenChange(Math.max(0, children - 1))}
        onIncrease={() => {
          if (totalGuests < maxGuests) onChildrenChange(children + 1);
        }}
        canDecrease={children > 0}
        canIncrease={totalGuests < maxGuests}
      />

      <button
        type="button"
        onClick={onClose}
        className="mt-4 w-full rounded-full bg-primary py-2.5 text-sm font-medium text-on-primary transition-colors hover:bg-primary-container"
      >
        {bookingBarLabels.done}
      </button>
    </div>
  );
}

function GuestRow({
  label,
  hint,
  value,
  onDecrease,
  onIncrease,
  canDecrease,
  canIncrease,
}: {
  label: string;
  hint: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  canDecrease: boolean;
  canIncrease: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-heading">{label}</p>
        <p className="text-xs text-body-muted">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <CounterButton
          label={`Decrease ${label.toLowerCase()}`}
          onClick={onDecrease}
          disabled={!canDecrease}
        >
          <Minus size={14} strokeWidth={1.5} />
        </CounterButton>
        <span className="w-5 text-center text-sm font-semibold text-heading">{value}</span>
        <CounterButton
          label={`Increase ${label.toLowerCase()}`}
          onClick={onIncrease}
          disabled={!canIncrease}
        >
          <Plus size={14} strokeWidth={1.5} />
        </CounterButton>
      </div>
    </div>
  );
}

function CounterButton({
  children,
  label,
  onClick,
  disabled,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 text-heading transition-colors",
        disabled
          ? "cursor-not-allowed opacity-40"
          : "hover:border-primary hover:bg-surface-linen"
      )}
    >
      {children}
    </button>
  );
}
