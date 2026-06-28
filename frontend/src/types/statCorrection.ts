export interface StatCorrection {
  id: string;

  eventId: string;

  statistic: string;

  previousValue: number;

  correctedValue: number;

  reason:
    | "var"
    | "manual_correction"
    | "api_revision"
    | "official_update"
    | "unknown";

  createdAt: string;
}