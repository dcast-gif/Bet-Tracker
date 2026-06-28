import { StatCorrection } from "../types/statCorrection";

export interface CorrectionNotification {
  title: string;
  message: string;
}

export function buildCorrectionNotification(
  correction: StatCorrection,
  displayText: string
): CorrectionNotification {
  return {
    title: "🔄 Match Event Corrected",
    message: `${displayText} has been updated.`,
  };
}