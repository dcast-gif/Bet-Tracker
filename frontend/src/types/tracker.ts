export interface TrackingUpdate {
  betId: string;

  selectionId: string;

  progress: string;

  completed: boolean;

  lastUpdated: string;
}

export interface LiveEventUpdate {
  eventId: string;

  sport: string;

  score?: string;

  minute?: number;

  status: "scheduled" | "live" | "finished";
}