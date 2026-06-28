export type ConditionOperator =
  | "equals"
  | "greater_than"
  | "greater_than_or_equal"
  | "less_than"
  | "less_than_or_equal";

export interface Condition {
  id: string;

  statistic: string;

  operator: ConditionOperator;

  targetValue: number;

  currentValue: number;

  satisfied: boolean;
}