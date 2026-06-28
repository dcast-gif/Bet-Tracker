import { Condition } from "../types/condition";
import { StatisticsSnapshot } from "../types/statisticsSnapshot";
import { processSnapshot } from "./processSnapshot";
import { buildNotification } from "./buildNotification";

export function processMatchUpdate(
  snapshot: StatisticsSnapshot,
  condition: Condition,
  unit: string,
  context?: {
    betName?: string;
    eventName?: string;
    marketName?: string;
  }
) {
  const result = processSnapshot(snapshot, [condition])[0];

  const notification = buildNotification(
    condition,
    result,
    unit,
    context
  );

  return {
    result,
    notification,
  };
}