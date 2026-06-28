import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
                "Read this betting slip screenshot. Return only valid JSON with bookmaker, confidence, and selections. Each selection needs sport, market, selection, match, and status. Use status as pending, in_play, settled, or unknown.",
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

    const text = response.output_text;
    const parsed = JSON.parse(text);

    return NextResponse.json({
      bookmaker: parsed.bookmaker ?? "Unknown",
      confidence: parsed.confidence ?? "low",
      selections: parsed.selections ?? [],
      sourceImageUrl: imageUrl,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to parse betting slip" },
      { status: 500 }
    );
  }
}