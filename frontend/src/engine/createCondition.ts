import { Condition } from "../types/condition";

export function createCondition(
  id: string,
  statistic: string,
  targetValue: number
): Condition {
  return {
    id,
    statistic,
    operator: "greater_than_or_equal",
    targetValue,
    currentValue: 0,
    satisfied: false,
  };
}