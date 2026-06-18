export function formatGuestSummary(adults: number, children: number): string {
  const adultLabel = adults === 1 ? "Adult" : "Adults";
  const adultPart = `${adults} ${adultLabel}`;

  if (children === 0) return adultPart;

  const childLabel = children === 1 ? "Child" : "Children";
  return `${adultPart}, ${children} ${childLabel}`;
}
