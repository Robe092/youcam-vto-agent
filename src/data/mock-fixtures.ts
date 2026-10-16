import { SkinAnalysisProfile, VtoResult } from "../types";

export interface PersonaFixture {
  id: string;
  name: string;
  avatarUrl: string;
  description: string;
  profile: SkinAnalysisProfile;
  vtoRenderings: Record<string, { outputUrl: string; fidelity: number; fitScore: number; harmony: number; advice: string; drape: string }>;
}

export const MOCK_PERSONAS: Record<string, PersonaFixture> = {
  "emma-warm": {
    id: "emma-warm",
    name: "Emma (Teint Clair & Sous-ton Chaud)",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    description: "Teint clair aux reflets dorés, peau mixte à tendance déshydratée sur les pommettes.",
    profile: {
      overallHealthScore: 88,
      skinAge: 26,
      skinType: "combination",
      fitzpatrick: "Type II",
      skinTone: "light",
      undertone: "warm",
      concerns: {
        spots: { score: 91, severity: "optimal", description: "Très peu de taches pigmentaires visibles, pigmentation homogène." },
        wrinkles: { score: 94, severity: "optimal", description: "Micro-ridules d'expression légères autour des yeux." },
        texture: { score: 86, severity: "mild", description: "Grain de peau fin, léger manque d'uniformité sur la zone médiane." },
        dark_circles: { score: 82, severity: "mild", description: "Cernes vasculaires discrets sous l'arcade orbitaire." },
        redness: { score: 79, severity: "moderate", description: "Légère réactivité cutanée et rougeurs diffuses sur les joues." },
        oiliness: { score: 76, severity: "moderate", description: "Brillance modérée sur la zone T en milieu de journée." },
        moisture: { score: 74, severity: "moderate", description: "Besoin d'hydratation accru pour restaurer la barrière lipidique." },
        pores: { score: 85, severity: "mild", description: "Pores resserrés sur 85% de la surface du visage." },
        firmness: { score: 92, severity: "optimal", description: "Excellente tonicité dermique et élasticité tissulaire." },
        radiance: { score: 87, severity: "optimal", description: "Bonne réflexion lumineuse naturelle (effet 'glow' sain)." },
        eye_bags: { score: 93, severity: "optimal", description: "Poches quasi inexistantes, drainage lymphatique efficace." },
      },
      colorimetry: {
        seasonPalette: "Autumn Earth",
        headline: "Palette Automne Chaud : Terres Brûlées, Camel Doré & Vert Kaki",
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
      },
      diagnosticTimestamp: new Date().toISOString(),
    },
    vtoRenderings: {
      "vto_top_01": {
        outputUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
        fidelity: 96,
        fitScore: 94,
        harmony: 95,
        advice: "La teinte Ivoire Chaud illumine votre teint. Taille M recommandée pour conserver l'aisance fluide du chemisier.",
        drape: "Drapé soyeux impeccable le long de la ligne d'épaules et retombée fluide sans tension.",
      },
      "vto_dress_02": {
        outputUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=85",
        fidelity: 95,
        fitScore: 92,
        harmony: 91,
        advice: "L'Émeraude Royale crée un contraste élégant avec votre carnation. Ajustement taille 38 parfait au niveau du buste.",
        drape: "Satin de viscose au tombé vertical lourd, valorisant la cambrure sans marquer les hanches.",
      },
      "vto_outer_03": {
        outputUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85",
        fidelity: 97,
        fitScore: 96,
        harmony: 98,
        advice: "Accord parfait avec votre profil colorimétrique Automne Chaud. Revers tailleur équilibrant la carrure.",
        drape: "Manteau structuré à la coupe architecturale franche en laine double face.",
      },
      "vto_acc_05": {
        outputUrl: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=85",
        fidelity: 98,
        fitScore: 95,
        harmony: 97,
        advice: "L'écaille miel s'harmonise idéalement avec votre sous-ton doré et encadre vos yeux avec raffinement.",
        drape: "Ajustement pont nasal sans glissement, branches épousant parfaitement les tempes.",
      },
      "vto_acc_06": {
        outputUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
        fidelity: 97,
        fitScore: 93,
        harmony: 99,
        advice: "L'or 18k chaud apporte une radiance immédiate à votre peau claire.",
        drape: "Pose naturelle sur la clavicule à 45cm avec effet miroir réfléchissant.",
      },
    },
  },

  "lucas-cool": {
    id: "lucas-cool",
    name: "Lucas (Teint Médium & Sous-ton Froid)",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description: "Teint mat aux reflets cendrés froids, grain de peau net et barbe taillée.",
    profile: {
      overallHealthScore: 91,
      skinAge: 29,
      skinType: "normal",
      fitzpatrick: "Type III",
      skinTone: "medium",
      undertone: "cool",
      concerns: {
        spots: { score: 95, severity: "optimal", description: "Teint uniforme sans hyperpigmentation notable." },
        wrinkles: { score: 90, severity: "optimal", description: "Front lisse, légers sillons nasogéniens dynamiques." },
        texture: { score: 89, severity: "optimal", description: "Texture cutanée dense et ferme." },
        dark_circles: { score: 85, severity: "mild", description: "Cernes ombrés atténués." },
        redness: { score: 92, severity: "optimal", description: "Aucune irritation ou couperose apparente." },
        oiliness: { score: 84, severity: "optimal", description: "Production sébacée parfaitement équilibrée." },
        moisture: { score: 88, severity: "optimal", description: "Niveau d'hydratation intracellulaire optimal." },
        pores: { score: 87, severity: "mild", description: "Pores invisibles à distance sociale." },
        firmness: { score: 93, severity: "optimal", description: "Contour mandibulaire net et tonique." },
        radiance: { score: 88, severity: "optimal", description: "Bon éclat mat naturel." },
        eye_bags: { score: 96, severity: "optimal", description: "Poches absentes." },
      },
      colorimetry: {
        seasonPalette: "Winter Vivid",
        headline: "Palette Hiver Vif : Bleu Nuit Tailleur, Gris Anthracite & Blanc Pur",
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
      },
      diagnosticTimestamp: new Date().toISOString(),
    },
    vtoRenderings: {
      "vto_top_01": {
        outputUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85",
        fidelity: 94,
        fitScore: 93,
        harmony: 90,
        advice: "La nuance Bleu Minéral correspond idéalement à votre palette Hiver. Taille L recommandée pour une carrure d'épaules athlétique.",
        drape: "Tombé fluide sans pli de tirage aux épaules.",
      },
      "vto_outer_03": {
        outputUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=85",
        fidelity: 96,
        fitScore: 95,
        harmony: 93,
        advice: "Le Gris Anthracite souligne les lignes de votre visage et votre silhouette avec une précision tailleur exemplaire.",
        drape: "Structure d'épaules semi-rigide en laine double face maintenant une posture droite.",
      },
      "vto_bottom_04": {
        outputUrl: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1000&q=85",
        fidelity: 95,
        fitScore: 94,
        harmony: 94,
        advice: "Le Bleu Nuit Tailleur taille 42 offre un tombé cassant juste sur la chaussure.",
        drape: "Plissé net sur le pli d'aisance garantissant une fluidité de marche.",
      },
      "vto_acc_05": {
        outputUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=85",
        fidelity: 98,
        fitScore: 97,
        harmony: 98,
        advice: "La finition Noir Laqué polarisée accentue vos traits froids et offre une présence contemporaine remarquable.",
        drape: "Assise parfaite sur le nez et équilibre horizontal avec la ligne des sourcils.",
      },
    },
  },
};

/**
 * Fixture par défaut pour tout utilisateur non identifié ou test unitaire
 */
export const DEFAULT_MOCK_PROFILE = MOCK_PERSONAS["emma-warm"].profile;
