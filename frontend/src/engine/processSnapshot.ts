import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";
import { StatisticsSnapshot } from "../types/statisticsSnapshot";
import { evaluateCondition } from "./evaluateCondition";

export function processSnapshot(
  snapshot: StatisticsSnapshot,
  conditions: Condition[]
): EvaluationResult[] {
  return conditions.map((condition) => {
    const latestValue = snapshot.values[condition.statistic] ?? 0;

    return evaluateCondition(condition, latestValue);
  });
}