import { ParsedBetSlip } from "../types/parsedBetSlip";

export async function parseBetSlip(
  imageUrl: string
): Promise<ParsedBetSlip> {
  return {
    id: crypto.randomUUID(),
    sourceImageUrl: imageUrl,
    bookmaker: "Unknown",
    confidence: "low",
    createdAt: new Date().toISOString(),
    selections: [],
  };
}
