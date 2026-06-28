export type DataSourceType =
  | "sports_api"
  | "odds_api"
  | "ai_parser"
  | "manual_entry";

export interface DataSource {
  id: string;

  name: string;

  type: DataSourceType;

  sport?: string;

  enabled: boolean;

  reliability: "low" | "medium" | "high";
}