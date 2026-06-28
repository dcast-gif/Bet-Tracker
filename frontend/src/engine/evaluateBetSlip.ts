import { BetSelection } from "../types/bet";
import { StatisticsSnapshot } from "../types/statisticsSnapshot";
import { EvaluationResult } from "../types/evaluationResult";
import { evaluateMarket } from "./evaluateMarket";
import { BetMarket } from "../types/betMarket";

export function evaluateBetSlip(
  markets: BetMarket[],
  snapshot: StatisticsSnapshot
): Map<string, EvaluationResult[]> {
  const results = new Map<string, EvaluationResult[]>();

  for (const market of markets) {
    results.set(
      market.id,
      evaluateMarket(market, snapshot)
    );
  }

  return results;
}