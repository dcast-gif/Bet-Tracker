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
  unit: string,
  context?: {
    betName?: string;
    eventName?: string;
    marketName?: string;
  }
): NotificationPayload | null {
  if (!result.notificationRequired) {
    return null;
  }

  const progressMessage = createProgressMessage(condition, result, unit);

  const isCorrection = result.currentValue < result.previousValue;

  const title = isCorrection
    ? "🔄 Progress Corrected"
    : result.completed
      ? "✅ Selection Complete"
      : "📈 Progress Update";

  const parts = [
    context?.betName,
    context?.eventName,
    context?.marketName,
    progressMessage,
  ].filter(Boolean);

  return {
    title,
    message: parts.join("\n"),
  };
}