import {
  ABComparisonReport,
  CatalogItem,
  OutfitBundle,
  SkinAnalysisProfile,
  UndertoneCategory,
  YouCamDataState,
} from "../types";
import { CATALOG_ITEMS } from "../data/catalog";

/**
 * Calcule le score d'harmonie colorimétrique d'un article par rapport au sous-ton du client
 */
export function calculateColorHarmony(
  item: CatalogItem,
  undertone: UndertoneCategory,
  selectedColorHex?: string
): number {
  // Si une couleur spécifique est sélectionnée
  if (selectedColorHex) {
    const match = item.colors.find(
      (c) => c.hex.toLowerCase() === selectedColorHex.toLowerCase()
    );
    if (match) {
      if (match.undertoneAffinity.includes(undertone)) return 95;
      if (match.undertoneAffinity.includes("neutral")) return 85;
      return 60;
    }
    // Si la couleur sélectionnée n'est pas répertoriée dans l'article, accorder 60 par défaut
    return 60;
  }

  // Sinon, évaluer la couleur signature principale (premier coloris du catalogue)
  const primaryColor = item.colors[0];
  if (primaryColor) {
    if (primaryColor.undertoneAffinity.includes(undertone)) {
      return 95;
    }
    if (primaryColor.undertoneAffinity.includes("neutral")) {
      return 85;
    }
    // Si une autre déclinaison secondaire est compatible, accorder un score intermédiaire
    const hasSecondaryMatch = item.colors.some((c) => c.undertoneAffinity.includes(undertone));
    return hasSecondaryMatch ? 75 : 60;
  }

  return 60;
}

export class PersonalShopperEngine {
  public calculateColorHarmony = calculateColorHarmony;

  /**
   * Génère une recommandation de tenue complète (Outfit Bundle) sur mesure
   */
  public generateRecommendedBundle(
    profile: SkinAnalysisProfile,
    theme: string = "Élégance Contemporaine & Harmonie Naturelle"
  ): OutfitBundle {
    const undertone = profile.undertone;

    // Filtrer et classer les articles selon l'affinité avec le profil de peau
    const scoredItems = CATALOG_ITEMS.map((item) => {
      const harmony = this.calculateColorHarmony(item, undertone);
      return { item, harmony };
    }).sort((a, b) => b.harmony - a.harmony);

    // Sélectionner un top, un bas/robe, et un accessoire
    const topOrDress = scoredItems.find(
      (si) => si.item.category === "tops" || si.item.category === "dresses"
    )?.item || CATALOG_ITEMS[0];

    const bottom = topOrDress.category === "dresses"
      ? undefined
      : scoredItems.find((si) => si.item.category === "bottoms")?.item;

    const accessory = scoredItems.find(
      (si) => si.item.category === "sunglasses" || si.item.category === "jewelry"
    )?.item || CATALOG_ITEMS[4];

    const selectedItems: CatalogItem[] = [topOrDress];
    if (bottom) selectedItems.push(bottom);
    if (accessory) selectedItems.push(accessory);

    const totalPrice = Math.round(selectedItems.reduce((acc, i) => acc + i.price, 0) * 100) / 100;
    const bundleDiscountPercent = 10;
    const finalPrice = Math.round(totalPrice * (1 - bundleDiscountPercent / 100) * 100) / 100;

    const harmonyScores = selectedItems.map((item) => this.calculateColorHarmony(item, undertone));
    const avgHarmony = Math.round(harmonyScores.reduce((a, b) => a + b, 0) / harmonyScores.length);
    const compatibilityScore = Math.min(100, Math.round(avgHarmony * 0.95 + 4));

    return {
      bundleId: `bundle_${Date.now()}_${undertone}`,
      title: `Sélection Signature ${profile.colorimetry.seasonPalette}`,
      theme,
      items: selectedItems,
      totalPrice,
      bundleDiscountPercent,
      finalPrice,
      compatibilityScore,
      skinToneHarmonyScore: avgHarmony,
      targetUndertone: undertone,
      styleRationale: `Silhouette harmonisée pour carnation ${profile.skinTone} (sous-ton ${undertone}) et profil ${profile.skinType}. Les teintes sélectionnées mettent en valeur l'éclat sans accentuer les micro-rougeurs.`,
      compositeTryOnUrl: topOrDress.tryOnAssetUrl,
    };
  }

  /**
   * Génère le rapport comparatif A/B prouvant la valeur différentielle de l'API YouCam
   * Modélisation dynamique selon le volume annuel de commandes, le panier moyen et l'harmonie colorimétrique
   */
  public generateABComparisonReport(
    profile: SkinAnalysisProfile,
    dataState: YouCamDataState = "MOCK_SIMULATED",
    options: {
      annualOrdersVolume?: number;
      monthlyOrdersVolume?: number;
      basketEUR?: number;
      harmonyScore?: number;
    } = {}
  ): ABComparisonReport {
    const ordersVolume = options.annualOrdersVolume ?? options.monthlyOrdersVolume ?? 10000;
    const basketEUR = options.basketEUR ?? 103.0;
    const harmonyScore = options.harmonyScore ?? 94;

    // E-Commerce Classique : grille statique, zéro essayage, zéro personnalisation
    const baselineBasket = Math.round(basketEUR * 0.76 * 100) / 100;
    const baselineStandardCommerce = {
      tryOnAvailable: false,
      skinTonePersonalization: false,
      conversionRate: 2.1, // 2.1% taux standard moyen e-commerce textile
      returnRate: 38.5, // 38.5% retours textile standard
      averageBasketEUR: baselineBasket,
      decisionConfidenceScore: 34,
      customerSatisfactionScore: 52,
    };

    // E-Commerce YouCam AI VTO : modulé dynamiquement par le score d'harmonie
    const harmonyFactor = Math.max(0.7, Math.min(1.2, harmonyScore / 90));
    const dynamicConversion = Math.round((2.1 * 3.1 * harmonyFactor) * 10) / 10;
    const dynamicReturnRate = Math.round((38.5 * (0.42 / harmonyFactor)) * 10) / 10;
    const dynamicConfidence = Math.min(99, Math.round(30 + harmonyScore * 0.65));
    const dynamicSatisfaction = Math.min(99, Math.round(48 + harmonyScore * 0.51));

    const youCamPoweredCommerce = {
      tryOnAvailable: true,
      skinTonePersonalization: true,
      conversionRate: dynamicConversion,
      returnRate: dynamicReturnRate,
      averageBasketEUR: basketEUR,
      decisionConfidenceScore: dynamicConfidence,
      customerSatisfactionScore: dynamicSatisfaction,
    };

    // Calcul économique sur le volume annuel de commandes
    // Coût moyen de traitement d'un retour textile en Europe : ~12.50 €
    const baselineReturns = ordersVolume * (baselineStandardCommerce.returnRate / 100);
    const youCamReturns = ordersVolume * (youCamPoweredCommerce.returnRate / 100);
    const returnsSaved = Math.max(0, baselineReturns - youCamReturns);
    const returnCostSavingsEUR = returnsSaved * 12.5;

    // Chiffre d'affaires additionnel par l'augmentation du panier moyen
    const revenueDifferenceEUR = ordersVolume * (youCamPoweredCommerce.averageBasketEUR - baselineStandardCommerce.averageBasketEUR);

    const estimatedAnnualNetBenefitEUR = Math.round(returnCostSavingsEUR + revenueDifferenceEUR);

    const conversionMultVal = (dynamicConversion / baselineStandardCommerce.conversionRate).toFixed(1);
    const conversionGainPct = Math.round((dynamicConversion / baselineStandardCommerce.conversionRate - 1) * 100);
    const returnReductPct = Math.round((1 - dynamicReturnRate / baselineStandardCommerce.returnRate) * 1000) / 10;
    const basketGainPct = Math.round((basketEUR / baselineBasket - 1) * 1000) / 10;
    const confGainPct = Math.round((dynamicConfidence / baselineStandardCommerce.decisionConfidenceScore - 1) * 1000) / 10;

    return {
      state: dataState,
      userProfile: {
        skinTone: profile.skinTone,
        undertone: profile.undertone,
        fitzpatrick: profile.fitzpatrick,
      },
      simulationParams: {
        annualOrdersVolume: ordersVolume,
        basketEUR,
        harmonyScore,
      },
      baselineStandardCommerce,
      youCamPoweredCommerce,
      differentialGains: {
        conversionMultiplier: `${conversionMultVal}x (+${conversionGainPct}%)`,
        returnReductionPercentage: `-${returnReductPct}%`,
        basketIncreasePercentage: `+${basketGainPct}%`,
        confidenceGainPercentage: `+${confGainPct}%`,
        estimatedAnnualNetBenefitEUR,
      },
      executiveSummary: `L'intégration de la cabine d'essayage YouCam AI transforme l'e-commerce d'incertitude en expérience de certitude : pour un volume annuel de ${ordersVolume.toLocaleString()} commandes et un panier moyen de ${basketEUR.toFixed(2)} €, le taux de conversion passe de ${baselineStandardCommerce.conversionRate}% à ${dynamicConversion}% (${conversionMultVal}x), tandis que les retours s'effondrent de ${baselineStandardCommerce.returnRate}% à ${dynamicReturnRate}%, générant un bénéfice net annuel estimé à ${estimatedAnnualNetBenefitEUR.toLocaleString()} €.`,
    };
  }
}
