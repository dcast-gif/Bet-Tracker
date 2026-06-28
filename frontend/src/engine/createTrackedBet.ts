import { ParsedBetSlip } from "../types/parsedBetSlip";
import { BetSlip } from "../types/betSlip";

export function createTrackedBet(
  parsedBetSlip: ParsedBetSlip
): BetSlip {
  return {
    id: parsedBetSlip.id,
    bookmaker: parsedBetSlip.bookmaker,
    createdAt: parsedBetSlip.createdAt,
    selections: [],
  };
}
