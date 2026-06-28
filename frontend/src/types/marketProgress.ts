export interface MarketProgress {
  currentValue: number;

  targetValue: number;

  unit: string;

  completed: boolean;

  percentage: number;

  displayText: string;
}