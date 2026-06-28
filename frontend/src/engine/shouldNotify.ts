import { ProgressEvent } from "../types/progressEvent";
import { NotificationPreference } from "../types/notificationPreference";

export function shouldNotify(
  event: ProgressEvent,
  preference: NotificationPreference
): boolean {
  switch (event.type) {
    case "selection_completed":
      return preference.notifyOnSelectionComplete;

    case "selection_lost":
      return preference.notifyOnSelectionLost;

    case "bet_slip_completed":
      return preference.notifyOnBetSlipComplete;

    case "bet_slip_lost":
      return preference.notifyOnBetSlipLost;

    case "selection_progressed":
    case "bet_slip_progressed":
      return preference.level !== "minimal";

    default:
      return false;
  }
}