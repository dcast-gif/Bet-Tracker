export interface AppSettings {
  theme: "light" | "dark" | "system";

  notificationsEnabled: boolean;

  defaultSport: string | null;

  autoTrackNewUploads: boolean;
}

export interface AppState {
  version: string;

  initialized: boolean;
}