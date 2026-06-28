export interface TrackingProfile {
  id: string;

  name: string;

  description: string;

  notificationLevel: "minimal" | "balanced" | "detailed";

  notifyGoals: boolean;

  notifyCorners: boolean;

  notifyCards: boolean;

  notifyPlayerEvents: boolean;

  notifyMilestones: boolean;

  notifyCompletions: boolean;

  notifyFailures: boolean;
}