export interface SportingEvent {
  id: string;

  sport: string;

  homeCompetitor: string;

  awayCompetitor: string;

  startTime: string;

  status: "scheduled" | "live" | "finished";
}