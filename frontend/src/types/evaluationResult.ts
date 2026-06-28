export interface EvaluationResult {
  conditionId: string;

  previousValue: number;

  currentValue: number;

  progressed: boolean;

  completed: boolean;

  failed: boolean;

  notificationRequired: boolean;

  progressPercentage: number;

  notificationTitle?: string;

  notificationMessage?: string;
}