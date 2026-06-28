import { StatisticsSnapshot } from "../types/statisticsSnapshot";

export function createStatisticsSnapshot(
  eventId: string,
  values: Record<string, number>
): StatisticsSnapshot {
  return {
    eventId,
    recordedAt: new Date().toISOString(),
    values,
  };
}