export interface DataProvider {
  id: string;

  name: string;

  type: "scores" | "odds" | "ai" | "notifications";

  enabled: boolean;

  lastSync?: string;
}