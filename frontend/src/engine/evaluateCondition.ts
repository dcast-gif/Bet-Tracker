import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";

export function evaluateCondition(
  condition: Condition,
  latestValue: number
): EvaluationResult {
  const previousValue = condition.currentValue;

  const progressed = latestValue !== previousValue;

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

  const progressPercentage = Math.min(
    100,
    Math.round((latestValue / condition.targetValue) * 100)
  );

  return {
    conditionId: condition.id,
    previousValue,
    currentValue: latestValue,
    progressed,
    completed,
    failed: false,
    notificationRequired: progressed,
    notificationTitle: completed
      ? "✅ Selection Complete"
      : "📈 Progress Update",
    notificationMessage: `${latestValue} / ${condition.targetValue}`,
    progressPercentage,
  } as EvaluationResult & { progressPercentage: number };
}