export type LiveEventType =
  | "goal"
  | "corner"
  | "card"
  | "penalty"
  | "substitution"
  | "match_started"
  | "half_time"
  | "full_time";

export interface LiveEvent {
  id: string;

  eventType: LiveEventType;

  sport: string;

  eventId: string;

  minute?: number;

  team?: string;

  player?: string;

  value?: number;

  createdAt: string;
}