export type NotificationTrigger =
  | "selection_completed"
  | "selection_progressed"
  | "bet_slip_progressed"
  | "selection_lost"
  | "bet_slip_completed"
  | "bet_slip_lost";

export interface NotificationRule {
  id: string;

  trigger: NotificationTrigger;

  titleTemplate: string;

  messageTemplate: string;

  enabled: boolean;
}