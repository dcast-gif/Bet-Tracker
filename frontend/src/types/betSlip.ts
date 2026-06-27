import { BetSelection } from "./bet";

export interface BetSlip {
  id: string;

  bookmaker: string;

  uploadedAt: string;

  imageUrl?: string;

  status:
    | "uploaded"
    | "processing"
    | "parsed"
    | "tracking"
    | "completed"
    | "failed";

  selections: BetSelection[];
}