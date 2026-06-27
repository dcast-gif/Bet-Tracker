export interface SelectionProgress {
  selectionId: string;

  completed: boolean;

  percentage: number;

  description: string;
}

export interface BetSlipProgress {
  completedSelections: number;

  totalSelections: number;

  percentage: number;
}