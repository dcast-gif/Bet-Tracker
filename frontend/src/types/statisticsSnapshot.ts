export interface StatisticsSnapshot {
  eventId: string;

  recordedAt: string;

  values: Record<string, number>;
}