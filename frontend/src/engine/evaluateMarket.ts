import { BetMarket } from "../types/betMarket";
import { StatisticsSnapshot } from "../types/statisticsSnapshot";
import { processSnapshot } from "./processSnapshot";
import { EvaluationResult } from "../types/evaluationResult";

export function evaluateMarket(
  market: BetMarket,
  snapshot: StatisticsSnapshot
): EvaluationResult[] {
  return processSnapshot(snapshot, market.conditions);
}