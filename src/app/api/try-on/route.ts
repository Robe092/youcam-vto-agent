import { NextRequest, NextResponse } from "next/server";
import { YouCamClient } from "@/lib/youcam-client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = new YouCamClient();
    const result = await client.tryOn(body);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur lors de l'essayage virtuel";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
