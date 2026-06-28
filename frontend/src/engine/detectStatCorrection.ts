import { StatCorrection } from "../types/statCorrection";

export function detectStatCorrection(
  eventId: string,
  statistic: string,
  previousValue: number,
  newValue: number
): StatCorrection | null {
  if (newValue >= previousValue) {
    return null;
  }

  return {
    id: crypto.randomUUID(),
    eventId,
    statistic,
    previousValue,
    correctedValue: newValue,
    reason: "api_revision",
    createdAt: new Date().toISOString(),
  };
}