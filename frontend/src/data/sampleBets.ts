import { BetSelection } from "../types/bet";

export const sampleBets: BetSelection[] = [
  {
    id: "1",
    sport: "football",
    eventName: "Uruguay vs Spain",
    marketName: "Over 2.5 Goals",
    status: "live",
    progressText: "1 / 3 Goals",
  },
  {
    id: "2",
    sport: "football",
    eventName: "Cape Verde vs Saudi Arabia",
    marketName: "Cape Verde to Win",
    status: "not_started",
    progressText: "Match has not started",
  },
];