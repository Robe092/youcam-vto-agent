import { NextRequest, NextResponse } from "next/server";
import { YouCamClient } from "@/lib/youcam-client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = new YouCamClient();
    const result = await client.analyzeSkin(body);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur lors de l'analyse de peau";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
