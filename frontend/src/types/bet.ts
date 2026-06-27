export type Sport =
  | "football"
  | "tennis"
  | "basketball"
  | "cricket"
  | "rugby"
  | "horse_racing"
  | "other";

export type BetStatus =
  | "not_started"
  | "live"
  | "won"
  | "lost";

export interface BetSelection {
  id: string;

  sport: Sport;

  eventName: string;

  marketName: string;

  status: BetStatus;

  progressText: string;
}