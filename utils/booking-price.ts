import { bookingConfig } from "@/data/booking";
import { startOfDay } from "@/utils/date";

export function getNightsBetween(checkIn: Date, checkOut: Date): number {
  const ms = startOfDay(checkOut).getTime() - startOfDay(checkIn).getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

export function calculateStayTotal(checkIn: Date, checkOut: Date): number {
  const nights = getNightsBetween(checkIn, checkOut);
  const subtotal = nights * bookingConfig.baseNightlyRate;
  const serviceFee = subtotal * (bookingConfig.serviceFeePercent / 100);
  return Math.round(subtotal + bookingConfig.cleaningFee + serviceFee);
}

export function formatStayPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: bookingConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
