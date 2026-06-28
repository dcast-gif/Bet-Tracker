export type ParsedBetSelection = {
  id: string;
  sport: "football";
  market: string;
  selection: string;
  match: string;
  status: "pending" | "in_play" | "settled" | "unknown";
};

export type ParsedBetSlip = {
  id: string;
  sourceImageUrl: string;
  bookmaker: string;
  selections: ParsedBetSelection[];
  confidence: "low" | "medium" | "high";
  createdAt: string;
};
