export type ProgressEventType =
  | "selection_progressed"
  | "selection_completed"
  | "selection_lost"
  | "bet_slip_progressed"
  | "bet_slip_completed"
  | "bet_slip_lost";

export interface ProgressEvent {
  id: string;

  type: ProgressEventType;

  betSlipId: string;

  selectionId?: string;

  title: string;

  shortMessage: string;

  detailMessage: string;

  createdAt: string;
}