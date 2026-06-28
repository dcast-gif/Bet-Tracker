import { Condition } from "../types/condition";
import { EvaluationResult } from "../types/evaluationResult";
import { createProgressMessage } from "./createProgressMessage";

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

  return {
    title: result.completed ? "✅ Selection Complete" : "📈 Progress Update",
    message: createProgressMessage(condition, result, unit),
  };
}