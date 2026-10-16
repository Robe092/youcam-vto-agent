import { NextRequest, NextResponse } from "next/server";
import { PersonalShopperEngine } from "@/lib/personal-shopper";
import { YouCamClient } from "@/lib/youcam-client";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      imageUrl?: string;
      theme?: string;
      annualOrdersVolume?: number;
      monthlyOrdersVolume?: number;
      basketEUR?: number;
      harmonyScore?: number;
    };
    
    const client = new YouCamClient();
    const skinRes = await client.analyzeSkin({
      imageUrl: body.imageUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    });

    const shopper = new PersonalShopperEngine();
    const bundle = shopper.generateRecommendedBundle(skinRes.profile, body.theme);
    
    // Calcul dynamique de l'impact A/B basé sur le panier réel du bundle et les paramètres de simulation
    const abReport = shopper.generateABComparisonReport(skinRes.profile, skinRes.state, {
      annualOrdersVolume: body.annualOrdersVolume ?? body.monthlyOrdersVolume,
      basketEUR: body.basketEUR ?? bundle.finalPrice,
      harmonyScore: body.harmonyScore ?? bundle.skinToneHarmonyScore,
    });

    return NextResponse.json({
      state: skinRes.state,
      skinProfile: skinRes.profile,
      recommendedBundle: bundle,
      abReport,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur lors de la génération Personal Shopper";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
