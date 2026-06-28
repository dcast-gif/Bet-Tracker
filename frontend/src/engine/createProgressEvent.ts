import { ProgressEvent } from "../types/progressEvent";
import { EvaluationResult } from "../types/evaluationResult";

export function createProgressEvent(
  betSlipId: string,
  selectionId: string,
  result: EvaluationResult
): ProgressEvent {
  return {
    id: crypto.randomUUID(),

    type: result.completed
      ? "selection_completed"
      : "selection_progressed",

    betSlipId,

    selectionId,

    title: result.completed
      ? "Selection Complete"
      : "Selection Progressed",

    shortMessage: result.completed
      ? "Completed"
      : "Progress updated",

    detailMessage: result.completed
      ? "Selection has been completed."
      : "Selection progress has changed.",

    createdAt: new Date().toISOString(),
  };
}