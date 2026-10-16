import { NextRequest, NextResponse } from "next/server";
import { YouCamClient } from "@/lib/youcam-client";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni dans le champ 'file'" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const client = new YouCamClient();
    const result = await client.uploadFile({
      buffer,
      fileName: file.name,
      mimeType: file.type,
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur lors du téléversement de fichier";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
