import { z } from "zod";

// ============================================================================
// ÉTAT DE PROVENANCE DES DONNÉES (RÈGLE STRICTE ANTI-FAUX POSITIFS)
// ============================================================================
export type YouCamDataState = "MOCK_SIMULATED" | "LIVE_YOUCAM";

// ============================================================================
// 1. ANALYSE DE PEAU (YOUCAM SKIN AI)
// ============================================================================

export type SkinConcernName =
  | "spots"
  | "wrinkles"
  | "texture"
  | "dark_circles"
  | "redness"
  | "oiliness"
  | "moisture"
  | "pores"
  | "firmness"
  | "radiance"
  | "eye_bags";

export interface SkinConcernDetail {
  score: number; // 0 - 100 (100 = parfait, 0 = sévère)
  severity: "optimal" | "mild" | "moderate" | "significant";
  description: string;
}

export type FitzpatrickType =
  | "Type I"
  | "Type II"
  | "Type III"
  | "Type IV"
  | "Type V"
  | "Type VI";

export type SkinToneCategory = "fair" | "light" | "medium" | "tan" | "deep";
export type UndertoneCategory = "warm" | "cool" | "neutral" | "olive";
export type SkinType = "normal" | "dry" | "oily" | "combination" | "sensitive";

export interface ColorimetryRecommendation {
  seasonPalette: "Spring Warm" | "Summer Cool" | "Autumn Earth" | "Winter Vivid";
  headline: string;
  recommendedColors: Array<{ name: string; hex: string; reason: string }>;
  colorsToAvoid: Array<{ name: string; hex: string; reason: string }>;
  flatteringFabrics: string[];
}

export interface SkinAnalysisProfile {
  overallHealthScore: number; // 0 - 100
  skinAge: number; // ex: 27 ans
  skinType: SkinType;
  fitzpatrick: FitzpatrickType;
  skinTone: SkinToneCategory;
  undertone: UndertoneCategory;
  concerns: Record<SkinConcernName, SkinConcernDetail>;
  colorimetry: ColorimetryRecommendation;
  diagnosticTimestamp: string;
}

export interface SkinAnalysisResponse {
  state: YouCamDataState;
  profile: SkinAnalysisProfile;
  imageUrl: string;
  sourceFaceId?: string;
}

// ============================================================================
// 2. VIRTUAL TRY-ON (YOUCAM VTO & LOOK AI)
// ============================================================================

export type GarmentCategory = "tops" | "bottoms" | "dresses" | "outerwear" | "suits";
export type AccessoryCategory = "sunglasses" | "hats" | "jewelry" | "scarves" | "bags";
export type TryOnCategory = GarmentCategory | AccessoryCategory;

export type FitMode = "fitted" | "regular" | "relaxed";
export type VtoTaskStatus = "INIT" | "PENDING" | "PROCESSING" | "SUCCESS" | "FAILED";

export interface VtoRequest {
  userImageUrl: string;
  garmentId?: string;
  garmentImageUrl?: string;
  category: TryOnCategory;
  fitMode?: FitMode;
  size?: string;
  colorHex?: string;
  colorName?: string;
}

export interface VtoResult {
  state: YouCamDataState;
  taskId: string;
  status: VtoTaskStatus;
  userImageUrl: string;
  garmentImageUrl: string;
  outputImageUrl: string;
  category: TryOnCategory;
  tryOnFidelityScore: number | null; // 0 - 100 (réalisme photoréaliste)
  fitMatchScore: number | null; // 0 - 100 (adaptation morphologique)
  skinToneHarmonyScore: number | null; // absent when not supplied by the live API
  fitAdvice: string;
  fabricDrapeAssessment: string;
  executionTimeMs: number;
  metadata?: Record<string, unknown>;
}

// ============================================================================
// 3. CATALOGUE E-COMMERCE & ARTICLES
// ============================================================================

export interface CatalogColorVariant {
  name: string;
  hex: string;
  undertoneAffinity: UndertoneCategory[];
}

export interface CatalogItem {
  id: string;
  name: string;
  brand: string;
  category: TryOnCategory;
  subcategory: string;
  price: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  tryOnAssetUrl: string;
  colors: CatalogColorVariant[];
  sizes: string[];
  fabric: string;
  styleTags: string[];
  description: string;
  inStock: boolean;
}

// ============================================================================
// 4. PERSONAL SHOPPER & COMPARAISON A/B
// ============================================================================

export interface OutfitBundle {
  bundleId: string;
  title: string;
  theme: string;
  items: CatalogItem[];
  totalPrice: number;
  bundleDiscountPercent: number;
  finalPrice: number;
  compatibilityScore: number; // 0 - 100
  skinToneHarmonyScore: number; // 0 - 100
  targetUndertone: UndertoneCategory;
  styleRationale: string;
  compositeTryOnUrl: string;
}

export interface CommerceMetrics {
  tryOnAvailable: boolean;
  skinTonePersonalization: boolean;
  conversionRate: number; // ex: 2.1 (%)
  returnRate: number; // ex: 38.5 (%)
  averageBasketEUR: number; // ex: 85
  decisionConfidenceScore: number; // ex: 35 (%)
  customerSatisfactionScore: number; // ex: 54 / 100
}

export interface FileUploadResponse {
  state: YouCamDataState;
  fileId: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  uploadedAt: string;
}

export interface ABComparisonReport {
  state: YouCamDataState;
  userProfile: {
    skinTone: SkinToneCategory;
    undertone: UndertoneCategory;
    fitzpatrick: FitzpatrickType;
  };
  simulationParams: {
    annualOrdersVolume: number;
    basketEUR: number;
    harmonyScore: number;
  };
  baselineStandardCommerce: CommerceMetrics;
  youCamPoweredCommerce: CommerceMetrics;
  differentialGains: {
    conversionMultiplier: string; // "+223%" (3.2x)
    returnReductionPercentage: string; // "-63%"
    basketIncreasePercentage: string; // "+32%"
    confidenceGainPercentage: string; // "+160%"
    estimatedAnnualNetBenefitEUR: number; // Gain net calculé dynamiquement
  };
  executiveSummary: string;
}

// ============================================================================
// SCHÉMAS ZOD DE VALIDATION STRICTE
// ============================================================================

export const VtoRequestSchema = z.object({
  userImageUrl: z.string().min(5, "L'URL de l'image utilisateur est requise"),
  garmentId: z.string().optional(),
  garmentImageUrl: z.string().optional(),
  category: z.enum([
    "tops",
    "bottoms",
    "dresses",
    "outerwear",
    "suits",
    "sunglasses",
    "hats",
    "jewelry",
    "scarves",
    "bags",
  ]),
  fitMode: z.enum(["fitted", "regular", "relaxed"]).optional().default("regular"),
  size: z.string().optional(),
  colorHex: z.string().optional(),
  colorName: z.string().optional(),
});

export const SkinAnalysisRequestSchema = z.object({
  imageUrl: z.string().min(5, "L'URL de l'image pour analyse faciale est requise"),
  preferHighPrecision: z.boolean().optional().default(true),
});
