import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const imageUrl = body.imageUrl;

  if (!imageUrl) {
    return NextResponse.json(
      { error: "Missing imageUrl" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    bookmaker: "SBK",
    confidence: "low",
    selections: [],
    sourceImageUrl: imageUrl,
  });
}
