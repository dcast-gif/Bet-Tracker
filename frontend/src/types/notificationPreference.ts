export type NotificationLevel =
  | "minimal"
  | "balanced"
  | "detailed";

export interface NotificationPreference {
  id: string;

  betSlipId: string;

  level: NotificationLevel;

  notifyOnGoals: boolean;

  notifyOnCorners: boolean;

  notifyOnCards: boolean;

  notifyOnSelectionComplete: boolean;

  notifyOnSelectionLost: boolean;

  notifyOnBetSlipComplete: boolean;

  notifyOnBetSlipLost: boolean;
}