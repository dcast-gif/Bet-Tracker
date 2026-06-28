import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";

export function evaluateCondition(
  condition: Condition,
  latestValue: number
): EvaluationResult {
  const previousValue = condition.currentValue;

  let completed = false;

  switch (condition.operator) {
    case "equals":
      completed = latestValue === condition.targetValue;
      break;

    case "greater_than":
      completed = latestValue > condition.targetValue;
      break;

    case "greater_than_or_equal":
      completed = latestValue >= condition.targetValue;
      break;

    case "less_than":
      completed = latestValue < condition.targetValue;
      break;

    case "less_than_or_equal":
      completed = latestValue <= condition.targetValue;
      break;
  }

  return {
    conditionId: condition.id,
    previousValue,
    currentValue: latestValue,
    progressed: latestValue !== previousValue,
    completed,
    failed: false,
    notificationRequired: latestValue !== previousValue,
    notificationTitle: undefined,
    notificationMessage: undefined,
  };
}