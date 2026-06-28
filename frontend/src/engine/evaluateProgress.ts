import { EvaluationResult } from "../types/evaluationResult";

export function hasProgressed(result: EvaluationResult): boolean {
  return (
    result.progressed ||
    result.completed ||
    result.notificationRequired
  );
}