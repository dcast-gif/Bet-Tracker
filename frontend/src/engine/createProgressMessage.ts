import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";

export function createProgressMessage(
  condition: Condition,
  result: EvaluationResult,
  unit: string
): string {
  const target = condition.targetValue;

  if (result.completed) {
    return `${unit} target complete: ${result.currentValue} / ${target}`;
  }

  return `${result.currentValue} / ${target} ${unit}`;
}