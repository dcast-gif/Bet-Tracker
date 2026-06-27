export type ProcessingStage =
  | "idle"
  | "uploading"
  | "uploaded"
  | "parsing"
  | "parsed"
  | "matching"
  | "tracking"
  | "completed"
  | "error";

export interface ProcessingState {
  stage: ProcessingStage;

  progress: number;

  message: string;

  updatedAt: string;
}