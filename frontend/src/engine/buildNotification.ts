import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";

export interface NotificationPayload {
  title: string;
  message: string;
}

export function buildNotification(
  condition: Condition,
  result: EvaluationResult,
  unit: string
): NotificationPayload | null {
  if (!result.notificationRequired) {
    return null;
  }

  if (result.completed) {
    return {
      title: "✅ Selection Complete",
      message: `${result.currentValue} / ${condition.targetValue} ${unit}`,
    };
  }

  return {
    title: "📈 Progress Update",
    message: `${result.currentValue} / ${condition.targetValue} ${unit}`,
  };
}