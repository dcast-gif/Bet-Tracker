export type EventStatus =
  | "provisional"
  | "confirmed"
  | "corrected";

export interface EventLifecycle {
  id: string;

  eventId: string;

  status: EventStatus;

  createdAt: string;
}