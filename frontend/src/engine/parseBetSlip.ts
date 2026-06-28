import { ParsedBetSlip } from "../types/parsedBetSlip";

export async function parseBetSlip(
  imageUrl: string
): Promise<ParsedBetSlip> {
  const response = await fetch("/api/parse-bet-slip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imageUrl }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error ?? "Failed to parse bet slip");
  }

  return {
    id: crypto.randomUUID(),
    sourceImageUrl: data.sourceImageUrl,
    bookmaker: data.bookmaker,
    confidence: data.confidence,
    createdAt: new Date().toISOString(),
    selections: data.selections,
  };
}