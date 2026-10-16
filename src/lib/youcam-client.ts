import {
  ColorimetryRecommendation,
  FileUploadResponse,
  FitzpatrickType,
  SkinAnalysisProfile,
  SkinAnalysisRequestSchema,
  SkinAnalysisResponse,
  SkinToneCategory,
  SkinType,
  TryOnCategory,
  UndertoneCategory,
  VtoRequest,
  VtoRequestSchema,
  VtoResult,
  YouCamDataState,
} from "../types";
import { DEFAULT_MOCK_PROFILE, MOCK_PERSONAS } from "../data/mock-fixtures";
import { CATALOG_ITEMS } from "../data/catalog";
import { YouCamLiveTransport } from "./youcam-live-transport";
import { calculateColorHarmony } from "./personal-shopper";

export interface YouCamClientConfig {
  apiKey?: string;
  baseUrl?: string;
  mode?: "auto" | "mock_only" | "live_only";
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
  pollIntervalMs?: number;
  maxPollAttempts?: number;
}

/**
 * Fonction de dérivation dynamique des recommandations colorimétriques
 * Mappe les métriques dermatologiques réelles (sous-ton, carnation) vers les palettes stylistiques
 */
export function deriveColorimetryFromSkinProfile(
  undertone: UndertoneCategory,
  skinTone: SkinToneCategory,
  _fitzpatrick: FitzpatrickType
): ColorimetryRecommendation {
  if (undertone === "warm") {
    const isLight = skinTone === "fair" || skinTone === "light";
    return {
      seasonPalette: isLight ? "Spring Warm" : "Autumn Earth",
      headline: isLight
        ? "Palette Printemps Chaud : Pêche Dorée, Blanc Ivoire & Corail Délicat"
        : "Palette Automne Chaud : Terres Brûlées, Camel Doré & Vert Kaki",
      recommendedColors: [
        { name: "Camel Doré Intense", hex: "#C19A6B", reason: "Sublime la chaleur naturelle du sous-ton sans ternir le teint." },
        { name: "Terracotta Cuivré", hex: "#C86446", reason: "Rehausse les pommettes et neutralise les rougeurs par contraste chaud." },
        { name: "Blanc Ivoire Chaud", hex: "#FFF8EE", reason: "Plus doux et lumineux que le blanc pur qui durcirait les traits." },
        { name: "Vert Kaki Poudré", hex: "#626D58", reason: "Harmonie végétale adoucissant le micro-relief cutané." },
      ],
      colorsToAvoid: [
        { name: "Gris Ardoise Glacé", hex: "#5C6B73", reason: "Refroidit excessivement le teint et marque les cernes." },
        { name: "Magenta Fluo", hex: "#FF007F", reason: "Accroît la perception des rougeurs faciales." },
      ],
      flatteringFabrics: ["Soie lavée texturée", "Laine mérinos peignée", "Cachemire camel", "Lin naturel non blanchi"],
    };
  }

  if (undertone === "cool") {
    const isVivid = skinTone === "medium" || skinTone === "deep";
    return {
      seasonPalette: isVivid ? "Winter Vivid" : "Summer Cool",
      headline: isVivid
        ? "Palette Hiver Vif : Bleu Nuit Tailleur, Gris Anthracite & Noir Onyx"
        : "Palette Été Doux : Bleu Ciel Poudré, Rose Cendré & Gris Perle",
      recommendedColors: [
        { name: "Bleu Nuit Tailleur", hex: "#151B29", reason: "Intensifie la profondeur du regard et valorise le sous-ton froid." },
        { name: "Gris Anthracite Ardoise", hex: "#3A3D40", reason: "Contraste sculptural qui structure le visage avec autorité." },
        { name: "Noir Onyx Profond", hex: "#111111", reason: "Idéal pour une allure contemporaine et incisive." },
        { name: "Bleu Minéral Froid", hex: "#4A6B82", reason: "Clarté chromatique vivifiante pour les tenues de jour." },
      ],
      colorsToAvoid: [
        { name: "Ocre Jaunâtre", hex: "#CC7722", reason: "Crée un effet terreux et fane la vivacité du teint." },
        { name: "Marron Chaud Roux", hex: "#6E260E", reason: "Jure avec la pigmentation froide de la peau." },
      ],
      flatteringFabrics: ["Laine froide italienne", "Popeline de coton d'Égypte", "Cuir mat noir", "Denim brut selvedge"],
    };
  }

  if (undertone === "olive") {
    return {
      seasonPalette: "Autumn Earth",
      headline: "Palette Olive Naturelle : Vert Émeraude, Forêt & Or Chaud",
      recommendedColors: [
        { name: "Émeraude Royale", hex: "#0E5A44", reason: "Complémente magnifiquement la pigmentation olive sans la ternir." },
        { name: "Vert Forêt Profond", hex: "#1C352D", reason: "Harmonise les reflets dorés et apporte de la profondeur." },
        { name: "Or Jaune Chaud 18K", hex: "#D4AF37", reason: "Illumine la carnation avec un éclat luxueux." },
        { name: "Terracotta Cuivré", hex: "#C86446", reason: "Contraste chaud valorisant la structure du visage." },
      ],
      colorsToAvoid: [
        { name: "Kaki Terne Délavé", hex: "#708238", reason: "Risque de sur-saturation des tons verdâtres." },
        { name: "Jaune Pâle", hex: "#FFFACD", reason: "Crée un effet cireux indésirable." },
      ],
      flatteringFabrics: ["Satin de viscose lourd", "Drap de laine peignée", "Velours de coton côtelé", "Soie sauvage"],
    };
  }

  // Neutre par défaut
  return {
    seasonPalette: "Spring Warm",
    headline: "Palette Neutre Équilibrée : Blanc Cassé, Bleu Tailleur & Rouge Rubis",
    recommendedColors: [
      { name: "Blanc Ivoire Chaud", hex: "#FFF8EE", reason: "Éclat universel adapté à la neutralité du teint." },
      { name: "Bleu Nuit Tailleur", hex: "#151B29", reason: "Base sobre mettant en valeur toutes les carnations." },
      { name: "Rouge Rubis", hex: "#9B111E", reason: "Touche vivifiante énergisante sans agressivité." },
      { name: "Camel Doré Intense", hex: "#C19A6B", reason: "Élégance feutrée contemporaine." },
    ],
    colorsToAvoid: [
      { name: "Jaune Néon", hex: "#CCFF00", reason: "Déséquilibre visuellement la neutralité naturelle du visage." },
    ],
    flatteringFabrics: ["Popeline de coton", "Laine froide", "Crêpe de soie", "Cachemire doux"],
  };
}

/**
 * Client YouCam AI S2S (Perfect Corp) avec mode double transparent
 * - Mode MOCK_SIMULATED par défaut avec fixtures complètes pour le développement
 * - Mode LIVE_YOUCAM automatique dès qu'une clé API valide est configurée
 */
export class YouCamClient {
  private apiKey?: string;
  private baseUrl: string;
  private mode: "auto" | "mock_only" | "live_only";
  private timeoutMs: number;
  private transportConfig: YouCamClientConfig;

  constructor(config: YouCamClientConfig = {}) {
    this.transportConfig = config;
    this.apiKey = config.apiKey || process.env.YOUCAM_API_KEY;
    this.baseUrl = config.baseUrl || process.env.YOUCAM_API_BASE_URL || "https://yce-api-01.makeupar.com";
    
    const configuredMode = config.mode || process.env.YOUCAM_MODE;
    if (configuredMode === "mock_only" || configuredMode === "live_only" || configuredMode === "auto") {
      this.mode = configuredMode;
    } else {
      this.mode = "auto";
    }

    this.timeoutMs = config.timeoutMs || 10000;

    // Règle inviolable : Interdiction absolue du basculement silencieux vers MOCK en production
    const isProduction = process.env.NODE_ENV === "production";
    const allowMockFallback = process.env.YOUCAM_MOCK_FALLBACK_ALLOWED === "true";
    if (isProduction && !this.apiKey && this.mode !== "mock_only" && !allowMockFallback) {
      throw new Error(
        "[YouCamClient Sécurité] En production, l'absence de YOUCAM_API_KEY est interdite. " +
          "Le basculement silencieux vers le mode MOCK est bloqué pour garantir la transparence."
      );
    }
  }

  /**
   * Retourne l'état de provenance effectif des données
   */
  public getDataState(): YouCamDataState {
    if (this.mode === "mock_only" || (!this.apiKey && this.mode === "auto")) {
      return "MOCK_SIMULATED";
    }
    return "LIVE_YOUCAM";
  }

  public isLiveMode(): boolean {
    return this.getDataState() === "LIVE_YOUCAM";
  }

  /**
   * Téléversement de fichier vers l'API YouCam (/s2s/v2.0/file)
   */
  public async uploadFile(fileData: {
    buffer?: Buffer | Uint8Array;
    base64?: string;
    fileName: string;
    mimeType?: string;
  }): Promise<FileUploadResponse> {
    if (this.getDataState() === "MOCK_SIMULATED") {
      return {
        state: "MOCK_SIMULATED",
        fileId: `file_mock_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        fileUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        fileName: fileData.fileName,
        fileSize: fileData.buffer?.byteLength || 102400,
        uploadedAt: new Date().toISOString(),
      };
    }

    if (!this.apiKey) {
      throw new Error("Clé API YouCam manquante (YOUCAM_API_KEY). Impossible de téléverser le fichier.");
    }

    return this.liveTransport().upload(fileData);
  }

  /**
   * Analyse faciale IA de la peau (Skin AI Diagnostics & Colorimétrie)
   */
  public async analyzeSkin(params: { imageUrl: string; preferHighPrecision?: boolean }): Promise<SkinAnalysisResponse> {
    SkinAnalysisRequestSchema.parse(params);

    if (this.getDataState() === "MOCK_SIMULATED") {
      return this.simulateSkinAnalysis(params.imageUrl);
    }

    if (!this.apiKey) {
      throw new Error("Clé API YouCam manquante (YOUCAM_API_KEY). Impossible d'exécuter l'appel en direct.");
    }

    // The native Skin API is asynchronous and does not supply this application's
    // complete color/undertone/Fitzpatrick profile. Until its mapping is verified,
    // refuse a live claim instead of labeling default values as measured data.
    throw new Error("Skin AI live non validé : mapping des résultats natifs requis. Aucune donnée de peau simulée n’est présentée comme réelle.");
  }

  /**
   * Essayage virtuel IA (Clothing / Apparel / Accessories VTO)
   */
  public async tryOn(request: VtoRequest): Promise<VtoResult> {
    const validated = VtoRequestSchema.parse(request);

    if (this.getDataState() === "MOCK_SIMULATED") {
      return this.simulateVto(validated as VtoRequest);
    }

    if (!this.apiKey) {
      throw new Error("Clé API YouCam manquante (YOUCAM_API_KEY). Impossible d'exécuter l'appel en direct.");
    }

    return this.liveTransport().tryOn(validated as VtoRequest);
  }

  private liveTransport(): YouCamLiveTransport {
    return new YouCamLiveTransport({ ...this.transportConfig, apiKey: this.apiKey || "", baseUrl: this.baseUrl, timeoutMs: this.timeoutMs });
  }

  // ============================================================================
  // MÉTHODES DE SIMULATION RÉALISTE (MOCK TRANSPARENT)
  // ============================================================================

  private simulateSkinAnalysis(imageUrl: string): SkinAnalysisResponse {
    let chosenProfile: SkinAnalysisProfile = DEFAULT_MOCK_PROFILE;

    for (const persona of Object.values(MOCK_PERSONAS)) {
      if (imageUrl.includes(persona.id) || (persona.avatarUrl && imageUrl.includes(persona.avatarUrl.split("?")[0]))) {
        chosenProfile = persona.profile;
        break;
      }
    }

    return {
      state: "MOCK_SIMULATED",
      profile: chosenProfile,
      imageUrl,
      sourceFaceId: "face_simulated_youcam_8832",
    };
  }

  private simulateVto(request: VtoRequest): VtoResult {
    const catalogItem = CATALOG_ITEMS.find((item) => item.id === request.garmentId);

    // Résolution d'avatar persona
    let persona = MOCK_PERSONAS["emma-warm"];
    for (const p of Object.values(MOCK_PERSONAS)) {
      if (request.userImageUrl.includes(p.id) || (p.avatarUrl && request.userImageUrl.includes(p.avatarUrl.split("?")[0]))) {
        persona = p;
        break;
      }
    }

    const specificRendering = request.garmentId ? persona.vtoRenderings[request.garmentId] : undefined;

    const outputUrl = specificRendering?.outputUrl ||
      catalogItem?.tryOnAssetUrl ||
      request.garmentImageUrl ||
      request.userImageUrl;

    const fidelity = specificRendering?.fidelity ?? 95;

    // Calcul dynamique de l'harmonie selon la déclinaison de couleur choisie et le sous-ton du mannequin
    let harmony: number;
    if (catalogItem && request.colorHex) {
      harmony = calculateColorHarmony(catalogItem, persona.profile.undertone, request.colorHex);
    } else {
      harmony = specificRendering?.harmony ?? 94;
    }

    // Calcul dynamique du score de fit selon l'aisance choisie
    const fitMode = request.fitMode || "regular";
    const fitScore = fitMode === "regular"
      ? (specificRendering?.fitScore ?? 95)
      : (fitMode === "fitted" ? 92 : 90);

    // Détermination dynamique du nom de couleur et conseil de coupe sur mesure
    const matchedColor = catalogItem?.colors.find(
      (c) => c.hex.toLowerCase() === (request.colorHex || "").toLowerCase()
    );
    const colorLabel = matchedColor ? matchedColor.name : (request.colorName || "cette teinte");

    let fitAdvice: string;
    if (harmony >= 90) {
      fitAdvice = `La nuance ${colorLabel} sublime votre sous-ton ${persona.profile.undertone}. Coupe ${fitMode} parfaitement proportionnée aux épaules.`;
    } else if (harmony >= 75) {
      fitAdvice = `La nuance ${colorLabel} offre un contraste intéressant avec votre carnation. Ajustement ${fitMode} agréable pour un usage quotidien.`;
    } else {
      fitAdvice = `Attention : la nuance ${colorLabel} contraste fort avec votre sous-ton ${persona.profile.undertone}. Privilégiez nos coloris signatures pour illuminer votre teint.`;
    }

    const fabricDrape = specificRendering?.drape ??
      (catalogItem
        ? `Le tissu (${catalogItem.fabric}) offre un tombé ${fitMode === "fitted" ? "près du corps" : (fitMode === "relaxed" ? "ample et fluide" : "naturel")} avec modélisation 3D dynamique.`
        : "Tombé réaliste avec restitution photoréaliste des ombres de contact.");

    return {
      state: "MOCK_SIMULATED",
      taskId: `task_mock_vto_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      status: "SUCCESS",
      userImageUrl: request.userImageUrl,
      garmentImageUrl: request.garmentImageUrl || catalogItem?.imageUrl || "",
      outputImageUrl: outputUrl,
      category: request.category as TryOnCategory,
      tryOnFidelityScore: fidelity,
      fitMatchScore: fitScore,
      skinToneHarmonyScore: harmony,
      fitAdvice,
      fabricDrapeAssessment: fabricDrape,
      executionTimeMs: 145 + Math.floor(Math.random() * 80),
    };
  }

}
