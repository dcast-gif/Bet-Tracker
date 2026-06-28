export interface EvaluationResult {
  conditionId: string;

  previousValue: number;

  currentValue: number;

  progressed: boolean;

  completed: boolean;

  failed: boolean;

  notificationRequired: boolean;

  notificationTitle?: string;

  notificationMessage?: string;
}