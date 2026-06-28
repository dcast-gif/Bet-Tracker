import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";

export function createProgressMessage(
  condition: Condition,
  result: EvaluationResult,
  unit: string
): string {
  const target = condition.targetValue;

  const current = Math.min(result.currentValue, target);

  if (result.completed) {
    return `✅ ${current} / ${target} ${unit} Complete`;
  }

  return `${current} / ${target} ${unit}`;
}