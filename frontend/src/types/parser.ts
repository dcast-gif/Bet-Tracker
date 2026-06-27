export interface ParsedSelection {
  sport: string;

  eventName: string;

  marketName: string;

  confidence: number;
}

export interface ParsedBetSlip {
  bookmaker: string;

  selections: ParsedSelection[];
}