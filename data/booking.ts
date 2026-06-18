import type { BookingConfig } from "@/types";

export const bookingConfig: BookingConfig = {
  baseNightlyRate: 420,
  currency: "USD",
  maxGuests: 8,
  minNights: 2,
  cleaningFee: 85,
  serviceFeePercent: 12,
};

export const bookingBarLabels = {
  checkIn: "Check In",
  checkOut: "Check Out",
  guests: "Guests",
  checkInValue: "Oct 24, 2024",
  checkOutValue: "Oct 31, 2024",
  guestsValue: "2 Adults, 1 Child",
  cta: "Check Availability",
  adults: "Adults",
  adultsHint: "Ages 13+",
  children: "Children",
  childrenHint: "Ages 2–12",
  done: "Done",
};
