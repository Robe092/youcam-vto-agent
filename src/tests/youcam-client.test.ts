import { describe, it } from "node:test";
import assert from "node:assert";
import fs from "fs";
import path from "path";
import { YouCamClient } from "../lib/youcam-client.js";
import { MOCK_PERSONAS } from "../data/mock-fixtures.js";

// Charger .env.local si existant sans écraser les variables déjà définies
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf-8");
  const match = content.match(/YOUCAM_API_KEY=([^\r\n]+)/);
  if (match && match[1].trim() && !process.env.YOUCAM_API_KEY) {
    process.env.YOUCAM_API_KEY = match[1].trim();
  }
}

describe("💄 YouCamClient - Client API YouCam AI & VTO", () => {
  it("bascule automatiquement sur MOCK_SIMULATED en l'absence de clé API", () => {
    const oldKey = process.env.YOUCAM_API_KEY;
    delete process.env.YOUCAM_API_KEY;
    try {
      const client = new YouCamClient({ mode: "auto" });
      assert.strictEqual(client.getDataState(), "MOCK_SIMULATED");
      assert.strictEqual(client.isLiveMode(), false);
    } finally {
      process.env.YOUCAM_API_KEY = oldKey;
    }
  });

  it("bloque strictement le basculement silencieux en MOCK en environnement de production", () => {
    const oldEnv = process.env.NODE_ENV;
    const oldKey = process.env.YOUCAM_API_KEY;
    const oldFallback = process.env.YOUCAM_MOCK_FALLBACK_ALLOWED;
    delete process.env.YOUCAM_API_KEY;
    delete process.env.YOUCAM_MOCK_FALLBACK_ALLOWED;

    try {
      (process.env as Record<string, string | undefined>).NODE_ENV = "production";
      assert.throws(
        () => {
          new YouCamClient({ mode: "auto", apiKey: undefined });
        },
        /En production, l'absence de YOUCAM_API_KEY est interdite/
      );
    } finally {
      (process.env as Record<string, string | undefined>).NODE_ENV = oldEnv;
      process.env.YOUCAM_API_KEY = oldKey;
      process.env.YOUCAM_MOCK_FALLBACK_ALLOWED = oldFallback;
    }
  });

  it("exécute l'analyse de peau avec diagnostic complet en mode MOCK_SIMULATED", async () => {
    const client = new YouCamClient({ mode: "mock_only" });
    const response = await client.analyzeSkin({
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    });

    assert.strictEqual(response.state, "MOCK_SIMULATED");
    assert.ok(response.profile, "Le profil de peau doit être présent");
    assert.ok(response.profile.overallHealthScore >= 0 && response.profile.overallHealthScore <= 100);
    assert.ok(response.profile.skinAge > 0 && response.profile.skinAge < 100);
    assert.ok(["warm", "cool", "neutral", "olive"].includes(response.profile.undertone));
    assert.ok(response.profile.colorimetry.recommendedColors.length >= 3);

    // Vérifier les scores de chaque préoccupation
    for (const [concern, detail] of Object.entries(response.profile.concerns)) {
      assert.ok(detail.score >= 0 && detail.score <= 100, `Score de ${concern} invalide: ${detail.score}`);
      assert.ok(detail.description.length > 0);
    }
  });

  it("exécute l'essayage virtuel de vêtement (VTO Clothing) en mode MOCK_SIMULATED", async () => {
    const client = new YouCamClient({ mode: "mock_only" });
    const result = await client.tryOn({
      userImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      garmentId: "vto_top_01",
      category: "tops",
      fitMode: "regular",
      size: "M",
    });

    assert.strictEqual(result.state, "MOCK_SIMULATED");
    assert.strictEqual(result.status, "SUCCESS");
    assert.ok(result.taskId.startsWith("task_mock_vto_"));
    assert.ok(result.outputImageUrl.length > 10);
    assert.ok((result.tryOnFidelityScore ?? -1) >= 80 && (result.tryOnFidelityScore ?? -1) <= 100);
    assert.ok((result.fitMatchScore ?? -1) >= 80 && (result.fitMatchScore ?? -1) <= 100);
    assert.ok((result.skinToneHarmonyScore ?? -1) >= 80 && (result.skinToneHarmonyScore ?? -1) <= 100);
    assert.ok(result.fitAdvice.length > 10);
    assert.ok(result.fabricDrapeAssessment.length > 10);
  });

  it("reconnaît le même sous-ton pour l’URL avatar et l’identifiant de chaque persona", async () => {
    const client = new YouCamClient({ mode: "mock_only" });
    for (const persona of Object.values(MOCK_PERSONAS)) {
      const byId = await client.tryOn({ userImageUrl: `https://example.com/${persona.id}.jpg`, garmentId: "vto_outer_03", category: "outerwear", colorHex: "#3A3D40" });
      for (const userImageUrl of [persona.avatarUrl, persona.avatarUrl.split("?")[0]]) {
        const byUrl = await client.tryOn({ userImageUrl, garmentId: "vto_outer_03", category: "outerwear", colorHex: "#3A3D40" });
        const skin = await client.analyzeSkin({ imageUrl: userImageUrl });
        assert.strictEqual(skin.profile.undertone, persona.profile.undertone);
        assert.strictEqual(byUrl.skinToneHarmonyScore, byId.skinToneHarmonyScore);
        assert.strictEqual(byUrl.fitAdvice, byId.fitAdvice);
      }
    }
  });

  it("exécute l'essayage virtuel d'accessoire (Lunettes de soleil) en mode MOCK_SIMULATED", async () => {
    const client = new YouCamClient({ mode: "mock_only" });
    const result = await client.tryOn({
      userImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      garmentId: "vto_acc_05",
      category: "sunglasses",
    });

    assert.strictEqual(result.state, "MOCK_SIMULATED");
    assert.strictEqual(result.category, "sunglasses");
    assert.ok(result.outputImageUrl.length > 10);
    assert.ok((result.tryOnFidelityScore ?? -1) >= 90);
  });

  it("calcule dynamiquement l'harmonie colorimétrique et l'avis de coupe selon la couleur et la coupe choisies", async () => {
    const client = new YouCamClient({ mode: "mock_only" });
    // Emma (warm undertone) avec Terracotta Cuivré (#C86446 - affinité warm)
    const resultWarm = await client.tryOn({
      userImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      garmentId: "vto_top_01",
      category: "tops",
      fitMode: "fitted",
      colorHex: "#C86446",
    });

    // Emma avec Bleu Minéral Froid (#4A6B82 - affinité cool uniquement)
    const resultCold = await client.tryOn({
      userImageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      garmentId: "vto_top_01",
      category: "tops",
      fitMode: "relaxed",
      colorHex: "#4A6B82",
    });

    assert.strictEqual(resultWarm.skinToneHarmonyScore, 95);
    assert.strictEqual(resultCold.skinToneHarmonyScore, 60);
    assert.ok((resultWarm.skinToneHarmonyScore ?? -1) > resultCold.skinToneHarmonyScore);
    assert.strictEqual(resultWarm.fitMatchScore, 92); // fitted = 92
    assert.strictEqual(resultCold.fitMatchScore, 90); // relaxed = 90
    assert.ok(resultWarm.fitAdvice.includes("Terracotta Cuivré"));
    assert.ok(resultWarm.fitAdvice.includes("sublime"));
    assert.ok(resultCold.fitAdvice.includes("Bleu Minéral Froid"));
    assert.ok(resultCold.fitAdvice.includes("contraste fort"));
  });

  it("rejette les requêtes avec des paramètres invalides via validation Zod", async () => {
    const client = new YouCamClient({ mode: "mock_only" });

    await assert.rejects(
      async () => {
        await client.analyzeSkin({ imageUrl: "" });
      },
      /L'URL de l'image pour analyse faciale est requise/
    );

    await assert.rejects(
      async () => {
        await client.tryOn({
          userImageUrl: "",
          category: "tops",
        });
      },
      /L'URL de l'image utilisateur est requise/
    );
  });

  it("lève une exception en mode live_only si aucune clé API n'est fournie", async () => {
    const oldKey = process.env.YOUCAM_API_KEY;
    delete process.env.YOUCAM_API_KEY;

    try {
      const client = new YouCamClient({ mode: "live_only", apiKey: undefined });
      await assert.rejects(
        async () => {
          await client.analyzeSkin({ imageUrl: "https://example.com/face.jpg" });
        },
        /Clé API YouCam manquante/
      );
    } finally {
      process.env.YOUCAM_API_KEY = oldKey;
    }
  });

  it("active le mode LIVE_YOUCAM quand une clé API est fournie", () => {
    const client = new YouCamClient({ apiKey: "test_live_key_youcam_12345" });
    assert.strictEqual(client.getDataState(), "LIVE_YOUCAM");
    assert.strictEqual(client.isLiveMode(), true);
  });

  it("gère le téléversement de fichier via l'API File en mode simulation", async () => {
    const client = new YouCamClient({ mode: "mock_only" });
    const dummyBuffer = Buffer.from("fake_image_content");
    const result = await client.uploadFile({
      buffer: dummyBuffer,
      fileName: "selfie_test.jpg",
      mimeType: "image/jpeg",
    });

    assert.strictEqual(result.state, "MOCK_SIMULATED");
    assert.ok(result.fileId.startsWith("file_mock_"));
    assert.strictEqual(result.fileName, "selfie_test.jpg");
    assert.ok(result.fileUrl.length > 10);
  });
});
