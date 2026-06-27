export function formatSportName(sport: string): string {
  return sport
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}