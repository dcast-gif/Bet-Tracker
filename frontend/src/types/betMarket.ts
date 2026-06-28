import { Condition } from "./condition";

export interface BetMarket {
  id: string;

  name: string;

  unit: string;

  conditions: Condition[];
}