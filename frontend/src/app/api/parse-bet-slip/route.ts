import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function extractJson(text: string) {
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
}

export async function POST(request: Request) {
  try {
    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Missing imageUrl" },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text:
                "Read this betting slip screenshot. Return only valid JSON. Do not use markdown. Do not wrap the JSON in a code block. Return an object with bookmaker, confidence, and selections. Each selection must include sport, market, selection, match, and status. Use status as pending, in_play, settled, or unknown. If unsure, use unknown. Do not invent selections.",
            },
            {
              type: "input_image",
              image_url: imageUrl,
              detail: "high",
            },
          ],
        },
      ],
    });

    const parsed = extractJson(response.output_text);

    return NextResponse.json({
      bookmaker: parsed.bookmaker ?? "Unknown",
      confidence: parsed.confidence ?? "low",
      selections: parsed.selections ?? [],
      sourceImageUrl: imageUrl,
    });
  } catch (error) {
    console.error(error);

    const message =
      error instanceof Error
        ? error.message
        : "Failed to parse betting slip";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}