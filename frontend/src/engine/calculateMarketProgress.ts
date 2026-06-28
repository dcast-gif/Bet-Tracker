import { EvaluationResult } from "../types/evaluationResult";

export function calculateMarketProgress(
  results: EvaluationResult[]
): number {
  if (results.length === 0) {
    return 0;
  }

  const totalProgress = results.reduce(
    (sum, result) => sum + result.progressPercentage,
    0
  );

  return Math.round(totalProgress / results.length);
}