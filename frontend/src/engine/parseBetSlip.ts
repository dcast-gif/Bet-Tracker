import { ParsedBetSlip } from "../types/parsedBetSlip";

export async function parseBetSlip(
  imageUrl: string
): Promise<ParsedBetSlip> {
  return {
    id: crypto.randomUUID(),
    sourceImageUrl: imageUrl,
    bookmaker: "Sky Bet",
    confidence: "medium",
    createdAt: new Date().toISOString(),
    selections: [
      {
        id: crypto.randomUUID(),
        sport: "football",
        market: "Winner and both teams to score",
        selection: "France / Yes",
        match: "Norway vs France",
        status: "in_play",
      },
      {
        id: crypto.randomUUID(),
        sport: "football",
        market: "First half over/under 3.5 corners",
        selection: "Over 3.5 corners",
        match: "Norway vs France",
        status: "in_play",
      },
      {
        id: crypto.randomUUID(),
        sport: "football",
        market: "Both teams to score",
        selection: "Yes",
        match: "Egypt vs Iran",
        status: "pending",
      },
      {
        id: crypto.randomUUID(),
        sport: "football",
        market: "Full-time result",
        selection: "Cape Verde",
        match: "Cape Verde vs Saudi Arabia",
        status: "in_play",
      },
      {
        id: crypto.randomUUID(),
        sport: "football",
        market: "Over/under 2.5",
        selection: "Over 2.5 goals",
        match: "Uruguay vs Spain",
        status: "in_play",
      },
      {
        id: crypto.randomUUID(),
        sport: "football",
        market: "Winner and over/under 1.5",
        selection: "Senegal / over 1.5 goals",
        match: "Senegal vs Iraq",
        status: "unknown",
      },
    ],
  };
}
