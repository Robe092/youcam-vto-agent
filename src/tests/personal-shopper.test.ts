import { describe, it } from "node:test";
import assert from "node:assert";
import { PersonalShopperEngine } from "../lib/personal-shopper.js";
import { DEFAULT_MOCK_PROFILE, MOCK_PERSONAS } from "../data/mock-fixtures.js";
import { CATALOG_ITEMS } from "../data/catalog.js";

describe("🛍️ PersonalShopperEngine - Recommandation Morpho-Colorimétrique & A/B", () => {
  const engine = new PersonalShopperEngine();

  it("calcule une harmonie supérieure pour les couleurs affines au sous-ton", () => {
    // Emma a un sous-ton "warm"
    const camelCoat = CATALOG_ITEMS.find((i) => i.id === "vto_outer_03")!;
    const warmScore = engine.calculateColorHarmony(camelCoat, "warm");
    const coolScore = engine.calculateColorHarmony(camelCoat, "cool");

    assert.ok(warmScore >= 90, "Le score avec sous-ton warm doit être élevé");
    assert.ok(warmScore > coolScore, "Le score warm doit surpasser le score cool pour un article camel");
  });

  it("génère un bundle harmonisé avec calculs arithmétiques garantis", () => {
    const profile = DEFAULT_MOCK_PROFILE;
    const bundle = engine.generateRecommendedBundle(profile);

    assert.ok(bundle.bundleId.startsWith("bundle_"));
    assert.ok(bundle.items.length >= 2, "Le bundle doit comporter au moins 2 articles");
    assert.strictEqual(bundle.targetUndertone, profile.undertone);

    // Vérifier les invariants de calculs financiers
    const expectedSum = Math.round(bundle.items.reduce((acc, i) => acc + i.price, 0) * 100) / 100;
    assert.strictEqual(bundle.totalPrice, expectedSum);

    const expectedDiscounted = Math.round(expectedSum * 0.9 * 100) / 100;
    assert.strictEqual(bundle.finalPrice, expectedDiscounted);

    assert.ok(bundle.compatibilityScore >= 0 && bundle.compatibilityScore <= 100);
    assert.ok(bundle.skinToneHarmonyScore >= 0 && bundle.skinToneHarmonyScore <= 100);
  });

  it("génère un rapport comparatif A/B démontrant la supériorité de YouCam VTO", () => {
    const profile = MOCK_PERSONAS["emma-warm"].profile;
    const report = engine.generateABComparisonReport(profile, "MOCK_SIMULATED");

    assert.strictEqual(report.state, "MOCK_SIMULATED");
    assert.strictEqual(report.baselineStandardCommerce.tryOnAvailable, false);
    assert.strictEqual(report.youCamPoweredCommerce.tryOnAvailable, true);

    // Vérifier les gains mesurés
    assert.ok(
      report.youCamPoweredCommerce.conversionRate > report.baselineStandardCommerce.conversionRate,
      "Le taux de conversion avec YouCam doit être supérieur"
    );
    assert.ok(
      report.youCamPoweredCommerce.returnRate < report.baselineStandardCommerce.returnRate,
      "Le taux de retour avec YouCam doit chuter"
    );
    assert.ok(
      report.differentialGains.estimatedAnnualNetBenefitEUR > 0,
      "Le bénéfice net annuel doit être strictement positif"
    );
    assert.ok(report.executiveSummary.length > 50);
  });

  it("calcule dynamiquement l'impact ROI selon le volume de commandes et le panier réel", () => {
    const profile = MOCK_PERSONAS["emma-warm"].profile;
    const report10k = engine.generateABComparisonReport(profile, "MOCK_SIMULATED", {
      annualOrdersVolume: 10000,
      basketEUR: 100,
      harmonyScore: 90,
    });
    const report25k = engine.generateABComparisonReport(profile, "MOCK_SIMULATED", {
      annualOrdersVolume: 25000,
      basketEUR: 100,
      harmonyScore: 90,
    });

    assert.strictEqual(report10k.simulationParams.annualOrdersVolume, 10000);
    assert.strictEqual(report25k.simulationParams.annualOrdersVolume, 25000);

    // Le gain pour 25 000 commandes doit être 2.5x supérieur à celui pour 10 000 commandes
    assert.strictEqual(
      report25k.differentialGains.estimatedAnnualNetBenefitEUR,
      Math.round(report10k.differentialGains.estimatedAnnualNetBenefitEUR * 2.5)
    );
  });
});
