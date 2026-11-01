"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Camera, Check, CheckCircle2, ChevronRight, Link as LinkIcon, LoaderCircle, Palette, ShoppingBag, Shirt, SlidersHorizontal, Sparkles, TrendingUp, Upload, X } from "lucide-react";
import type { ABComparisonReport, CatalogItem, FileUploadResponse, FitMode, OutfitBundle, SkinAnalysisProfile, VtoResult, YouCamDataState } from "@/types";
import { CATALOG_ITEMS } from "@/data/catalog";
import { MOCK_PERSONAS, DEFAULT_MOCK_PROFILE } from "@/data/mock-fixtures";
import { PersonalShopperEngine, calculateColorHarmony } from "@/lib/personal-shopper";
import { DemoGarment } from "@/components/demo-garment";
import { translate, type Language } from "@/lib/studio-i18n";

type ShopperResponse = {
  state: YouCamDataState;
  skinProfile: SkinAnalysisProfile;
  recommendedBundle: OutfitBundle;
  abReport: ABComparisonReport;
};
const categories = [
  ["all", "Tous"], ["tops", "Tops"], ["dresses", "Ensembles"],
  ["outerwear", "Manteaux"], ["bottoms", "Pantalons"], ["sunglasses", "Lunettes"], ["jewelry", "Bijoux"],
];
const concernLabels: Record<string, string> = {
  spots: "Taches · spots", wrinkles: "Rides · wrinkles", texture: "Texture", dark_circles: "Cernes", redness: "Rougeurs", oiliness: "Sébum", moisture: "Hydratation", pores: "Pores", firmness: "Fermeté", radiance: "Éclat", eye_bags: "Poches sous les yeux",
};

function StudioImage({ src, alt, className = "", fallback = "Visuel indisponible" }: { src: string; alt: string; className?: string; fallback?: string }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  return failedSource === src ? (
    <div className={`${className} image-fallback`} role="img" aria-label={alt}>
      <Shirt size={26} /><span>{fallback}</span>
    </div>
  ) : <img src={src} alt={alt} className={className} onError={() => setFailedSource(src)} />;
}

export default function StudioPage() {
  const [language, setLanguage] = useState<Language>("en");
  const t = (text: string) => translate(text, language);
  const money = (value: number) => new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(value);
  const [demoStep, setDemoStep] = useState<number | null>(null);
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [selectedPersonaKey, setSelectedPersonaKey] = useState("emma-warm");
  const [customImageUrl, setCustomImageUrl] = useState("");
  const [customPreviewUrl, setCustomPreviewUrl] = useState("");
  const [shopperState, setShopperState] = useState<YouCamDataState>("MOCK_SIMULATED");
  const [vtoState, setVtoState] = useState<YouCamDataState>("MOCK_SIMULATED");
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<CatalogItem>(CATALOG_ITEMS[0]);
  const [selectedColorHex, setSelectedColorHex] = useState(CATALOG_ITEMS[0].colors[0]?.hex || "#FFF8EE");
  const [selectedSize, setSelectedSize] = useState("M");
  const [fitMode, setFitMode] = useState<FitMode>("regular");
  const [isProcessingTryOn, setIsProcessingTryOn] = useState(false);
  const [isProcessingShopper, setIsProcessingShopper] = useState(true);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [activeTab, setActiveTab] = useState<"personal_shopper" | "ab_comparison" | "skin_diagnostics">("personal_shopper");
  const [simulationOrdersVolume, setSimulationOrdersVolume] = useState(10000);
  const [currentVtoResult, setCurrentVtoResult] = useState<VtoResult | null>(null);
  const [skinProfile, setSkinProfile] = useState<SkinAnalysisProfile>(DEFAULT_MOCK_PROFILE);
  const [bundle, setBundle] = useState<OutfitBundle | null>(null);
  const [abReport, setAbReport] = useState<ABComparisonReport | null>(null);
  const [tryOnError, setTryOnError] = useState("");
  const [shopperError, setShopperError] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [retryCount, setRetryCount] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const uploadButtonRef = useRef<HTMLButtonElement>(null);
  const activeUserImageUrl = customImageUrl || MOCK_PERSONAS[selectedPersonaKey]?.avatarUrl || MOCK_PERSONAS["emma-warm"].avatarUrl;
  const activeUserPreviewUrl = customPreviewUrl || activeUserImageUrl;
  const isSimulated = currentVtoResult ? currentVtoResult.state !== "LIVE_YOUCAM" : vtoState !== "LIVE_YOUCAM";
  const previewName = selectedItem.name.replace(/ Camel$/, "");
  const colorName = selectedItem.colors.find(color => color.hex === selectedColorHex)?.name || "";
  const filteredCatalog = activeCategory === "all" ? CATALOG_ITEMS : CATALOG_ITEMS.filter(item => item.category === activeCategory);
  const isAccessory = selectedItem.category === "sunglasses" || selectedItem.category === "jewelry";

  const displayHarmony = isSimulated
    ? calculateColorHarmony(selectedItem, skinProfile.undertone, selectedColorHex)
    : currentVtoResult?.skinToneHarmonyScore;
  const displayFitScore = isSimulated
    ? (fitMode === "regular" ? 95 : fitMode === "fitted" ? 92 : 90)
    : currentVtoResult?.fitMatchScore;
  const displayFidelity = isSimulated
    ? (currentVtoResult?.tryOnFidelityScore ?? 95)
    : currentVtoResult?.tryOnFidelityScore;

  // Personal shopper fetch - separated from try-on state
  useEffect(() => {
    const controller = new AbortController();
    setIsProcessingShopper(true);
    setBundle(null); setAbReport(null);
    setShopperError("");
    async function loadShopper() {
      try {
        const response = await fetch("/api/personal-shopper", {
          method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal,
          body: JSON.stringify({ imageUrl: activeUserImageUrl, annualOrdersVolume: 10000 }),
        });
        if (!response.ok) throw new Error("Le conseil styliste est indisponible. Réessayez dans un instant.");
        const data: ShopperResponse = await response.json();
        if (controller.signal.aborted) return;
        setShopperState(data.state);
        setSkinProfile(data.skinProfile);
        setBundle(data.recommendedBundle);
        setAbReport(data.abReport);
      } catch (error: unknown) {
        if (!controller.signal.aborted) setShopperError(error instanceof Error ? error.message : "Chargement impossible.");
      } finally {
        if (!controller.signal.aborted) setIsProcessingShopper(false);
      }
    }
    void loadShopper();
    return () => controller.abort();
  }, [activeUserImageUrl, retryCount]);

  // ROI changes are local arithmetic, never an additional Skin API task.
  useEffect(() => {
    if (!bundle || !shopperState) return;
    setAbReport(new PersonalShopperEngine().generateABComparisonReport(skinProfile, shopperState, { annualOrdersVolume: simulationOrdersVolume, basketEUR: bundle.finalPrice, harmonyScore: bundle.skinToneHarmonyScore }));
  }, [bundle, shopperState, skinProfile, simulationOrdersVolume]);

  useEffect(() => () => { if (customPreviewUrl) URL.revokeObjectURL(customPreviewUrl); }, [customPreviewUrl]);

  // Execute Try-On function: isolated and controlled.
  // Never retriggered automatically on size, color or fitMode change.
  async function executeTryOn(itemToTry: CatalogItem = selectedItem, customSignal?: AbortSignal) {
    setIsProcessingTryOn(true);
    setTryOnError("");
    try {
      const response = await fetch("/api/try-on", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: customSignal,
        body: JSON.stringify({
          userImageUrl: activeUserImageUrl,
          garmentId: itemToTry.id,
          garmentImageUrl: itemToTry.imageUrl,
          category: itemToTry.category,
          fitMode,
          colorHex: selectedColorHex,
          size: selectedSize,
        }),
      });
      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.error || "L’essayage est indisponible. Réessayez dans un instant.");
      }
      const data: VtoResult = await response.json();
      if (customSignal?.aborted) return;
      setCurrentVtoResult(data);
      setVtoState(data.state);
    } catch (error: unknown) {
      if (!customSignal?.aborted) {
        setTryOnError(error instanceof Error ? error.message : "Essayage impossible.");
      }
    } finally {
      if (!customSignal?.aborted) {
        setIsProcessingTryOn(false);
      }
    }
  }


  useEffect(() => {
    if (showCustomModal) dialogRef.current?.showModal();
    else if (dialogRef.current?.open) dialogRef.current.close();
  }, [showCustomModal]);

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  function guideStep(step: number) {
    setDemoStep(step);
    if (step === 0) {
      setCustomImageUrl(""); setCustomPreviewUrl(""); setSelectedPersonaKey("emma-warm"); setActiveTab("personal_shopper");
    } else if (step === 1) {
      setActiveCategory("all"); selectItem(CATALOG_ITEMS.find(item => item.category === "outerwear") || CATALOG_ITEMS[0]);
    } else {
      setActiveTab("ab_comparison");
    }
  }
  const returnSavings = abReport ? abReport.simulationParams.annualOrdersVolume * Math.max(0, abReport.baselineStandardCommerce.returnRate - abReport.youCamPoweredCommerce.returnRate) / 100 * 12.5 : 0;
  const basketGain = abReport ? abReport.simulationParams.annualOrdersVolume * (abReport.youCamPoweredCommerce.averageBasketEUR - abReport.baselineStandardCommerce.averageBasketEUR) : 0;

  function closeModal() {
    setShowCustomModal(false);
    uploadButtonRef.current?.focus();
  }
  function selectItem(item: CatalogItem) {
    setSelectedItem(item);
    setSelectedColorHex(item.colors[0]?.hex || "#FFF8EE");
    setSelectedSize(item.sizes.includes("M") ? "M" : item.sizes[0] || "M");
    setCurrentVtoResult(null);
  }
  async function uploadPhoto(file: File) {
    setIsUploadingFile(true); setUploadError("");
    try {
      if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) throw new Error("Choisissez une image PNG, JPG ou WEBP.");
      const form = new FormData(); form.append("file", file);
      const response = await fetch("/api/file", { method: "POST", body: form });
      if (!response.ok) throw new Error("Le téléversement a échoué. Veuillez réessayer.");
      const data: FileUploadResponse = await response.json();
      setCustomImageUrl(data.fileUrl); setCustomPreviewUrl(URL.createObjectURL(file)); closeModal();
    } catch (error: unknown) {
      setUploadError(error instanceof Error ? error.message : "Téléversement impossible.");
    } finally { setIsUploadingFile(false); }
  }
  function applyUrl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setUploadError("");
    try {
      const url = new URL(inputUrl.trim());
      if (!["https:", "http:"].includes(url.protocol)) throw new Error();
      setCustomImageUrl(url.href); setCustomPreviewUrl(""); closeModal();
    } catch { setUploadError("Saisissez une URL d’image valide en https:// ou http://."); }
  }

  return (
    <div className="studio-app" lang={language} data-demo-step={demoStep ?? ""}>
      <header className="studio-header">
        <Link href="/" className="brand" aria-label={t("YouCam VTO Studio, accueil")}>
          <span className="brand-mark"><Sparkles size={21} /></span>
          <span><h1>{t("YouCam VTO Studio")}</h1><span className="brand-caption">{t("AI PERSONAL SHOPPER")}</span></span>
        </Link>
        <div className="persona-switch" aria-label={t("Choisir un mannequin")}>
          {Object.values(MOCK_PERSONAS).map(persona => (
            <button key={persona.id} className={!customImageUrl && selectedPersonaKey === persona.id ? "persona active" : "persona"} aria-pressed={!customImageUrl && selectedPersonaKey === persona.id} onClick={() => { setCustomImageUrl(""); setCustomPreviewUrl(""); setSelectedPersonaKey(persona.id); setCurrentVtoResult(null); }}>
              <img src={persona.avatarUrl} alt="" /><span>{persona.name.split(" ")[0]}{t(" (")}{persona.profile.undertone}{t(")")}</span>
            </button>
          ))}
          <button ref={uploadButtonRef} className="photo-button" onClick={() => { setUploadError(""); setShowCustomModal(true); }}><Camera size={16} /><span>{t("Tester ma photo")}</span></button>
        </div>
        <div className="header-status">
          <div className="language-switch" aria-label={t("Langue / Language")}>
            <button aria-pressed={language === "fr"} onClick={() => setLanguage("fr")}>{t("FR")}</button>
            <button aria-pressed={language === "en"} onClick={() => setLanguage("en")}>{t("EN")}</button>
          </div>
          <span className="mode-badge">
            <span className="status-dot" />
            {t(
              vtoState === "LIVE_YOUCAM" && shopperState === "LIVE_YOUCAM"
                ? "LIVE_YOUCAM"
                : vtoState === "LIVE_YOUCAM"
                ? "LIVE_YOUCAM (VTO Réel) · Profils Styliste Simulés"
                : "Mode Simulation Transparent (MOCK_SIMULATED)"
            )}
          </span>
        </div>
      </header>

      <div className="studio-intro">
        <div><p className="eyebrow">{t("L’EXPÉRIENCE SHOPPING, RÉINVENTÉE")}</p><h2>{t("Votre style. En parfaite harmonie.")}</h2><p>{t("Une cabine virtuelle qui associe essayage, analyse colorimétrique et recommandation de looks personnalisés.")}</p></div>
        <div className="powered-by"><Sparkles size={16} /><span>{t("Skin AI & eCommerce VTO")}<br /><strong>{t("Powered by YouCam API")}</strong></span></div>
      </div>

      <section className="jury-guide" aria-label={t("Parcours de démonstration jury")}>
        {demoStep === null ? <><div><strong>{t("Découvrez le projet en 60 secondes")}</strong><p>{t("Un profil, une pièce, une recommandation expliquée.")}</p></div><button className="guide-start" onClick={() => guideStep(0)}>{t("Démo jury")}<ArrowRight size={14} /></button></> : <>
          <div className="guide-content" role="status"><span className="guide-counter">{demoStep + 1}{t("/3")}</span><div><strong>{t(["1. Comparez les profils", "2. Essayez le manteau", "3. Explorez l’impact estimé"][demoStep])}</strong><p>{t(["Passez d’Emma à Lucas : le sous-ton, la palette et le look recommandé évoluent.", "Changez le coloris ou la coupe. Observez l’illustration produit et les scores simulés.", "Déplacez le slider et ouvrez les hypothèses. Les gains affichés sont une projection, pas des résultats mesurés."][demoStep])}</p></div></div>
          <div className="guide-actions">{demoStep > 0 && <button onClick={() => guideStep(demoStep - 1)}>{t("Précédent")}</button>}<button className="guide-start" onClick={() => demoStep < 2 ? guideStep(demoStep + 1) : setDemoStep(null)}>{t(demoStep < 2 ? "Étape suivante" : "Terminer")}<ArrowRight size={14} /></button><button className="icon-button" aria-label={t("Fermer le guide")} onClick={() => setDemoStep(null)}><X size={15} /></button></div>
        </>}
      </section>

      {(tryOnError || shopperError) && <div className="error-banner" role="alert">{t(tryOnError || shopperError)}<button onClick={() => { setRetryCount(value => value + 1); if (tryOnError) void executeTryOn(selectedItem); }}>{t("Réessayer")}</button></div>}

      <main className="studio-grid">
        <section className="studio-column mirror-column" aria-labelledby="mirror-title">
          <div className="column-heading"><span className="step">{t("01")}</span><h2 id="mirror-title">{t("Votre cabine virtuelle")}</h2><span className="heading-note">{t("VTO STUDIO")}</span></div>
          <div className="panel mirror-panel">
            <div className="panel-topline"><span><span className="status-dot" />{t("Miroir d’Essayage Virtuel YouCam")}</span><span className="muted">{currentVtoResult ? `${currentVtoResult.executionTimeMs} ms` : t("Préparation")}</span></div>
            <div className="mirror-visual" aria-busy={isProcessingTryOn}>
              {isSimulated ? <DemoGarment className="result-image" item={selectedItem} color={selectedColorHex} fitMode={fitMode} label={`${t("Illustration produit")} : ${t(previewName)}`} /> : <StudioImage fallback={t("Visuel indisponible")} className="result-image" src={currentVtoResult?.outputImageUrl || activeUserImageUrl} alt={`${t("Résultat YouCam")} : ${t(previewName)}`} />}
              <span className="preview-tag">{t(isSimulated ? "Illustration produit · simulation" : "Résultat YouCam")}</span>
              <div className="source-portrait"><img src={activeUserPreviewUrl} alt={t("Photo du mannequin actif")} /><span>{t("Votre photo")}</span></div>
              {isProcessingTryOn && <div className="processing-overlay" role="status"><LoaderCircle className="spin" size={26} /><span>{t("Ajustement morphologique en cours...")}</span></div>}
              <div className="mirror-caption"><span>{selectedItem.brand}</span><strong>{t(previewName)}</strong><span>{t(colorName)} · {fitMode}{t(" · Taille ")}{selectedSize}</span></div>
            </div>

            <div style={{ marginTop: "0.85rem", marginBottom: "0.5rem" }}>
              <button
                id="try-on-button"
                className="primary-button tryon-trigger-button"
                style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem" }}
                disabled={isProcessingTryOn || (vtoState === "LIVE_YOUCAM" && isAccessory)}
                onClick={() => void executeTryOn(selectedItem)}
              >
                <Shirt size={16} />
                <span>
                  {t(
                    isProcessingTryOn
                      ? "Traitement de l’essayage en cours..."
                      : vtoState === "LIVE_YOUCAM"
                      ? "Générer l’essayage YouCam"
                      : "Lancer l’essayage"
                  )}
                </span>
              </button>
            </div>

            <div className="score-grid" aria-label={t("Scores d’essayage")}>
              {([ ["Fidélité Texture", displayFidelity], ["Ajustement Fit", displayFitScore], ["Harmonie Teint", displayHarmony] ] as const).map(([label, score]) => <div key={t(label)}><span>{t(label)}</span><strong>{score == null ? "—" : `${score}%`}</strong></div>)}
            </div>
            <details className="score-explainer"><summary>{t("Comment lire les scores ?")}</summary><p>{t(isSimulated ? "Scores issus des fixtures de simulation : ils illustrent le parcours, sans évaluer réellement votre photo." : "Les scores absents de l’API sont affichés comme non disponibles, sans valeur par défaut.")}</p><ul><li>{t("Fidélité : indicateur de restitution du vêtement.")}</li><li>{t("Fit : indicateur d’ajustement selon la coupe choisie.")}</li><li>{t("Harmonie : affinité entre le coloris et le sous-ton.")}</li></ul><p>{t("100 = score le plus élevé. En simulation, la couleur et la coupe modifient les indicateurs ; la taille ne déclenche aucune mesure corporelle.")}</p></details>
            {vtoState === "LIVE_YOUCAM" && <p className="fine-print">{t("L’API vêtements ne fournit pas ces scores. Taille, coupe et recoloration sont des contrôles de simulation uniquement.")}</p>}
            {vtoState === "LIVE_YOUCAM" && isAccessory && <p className="fine-print" style={{ color: "#b91c1c" }}>{t("Accessoire indisponible en génération YouCam cloth-v4 (simulation uniquement)")}</p>}
            <div className="fit-notes"><p><CheckCircle2 size={16} /><span><strong>{t("Conseil de coupe")}</strong>{language === "fr" ? currentVtoResult?.fitAdvice || "Votre conseil personnalisé apparaît après l’essayage." : `${t(colorName)} · ${fitMode} fit. ${isSimulated ? "Illustrative fit guidance, without body measurements." : "Inspect the generated image directly; this API does not supply fit or fidelity scores."}`}</span></p><p><Palette size={16} /><span><strong>{t("Drapé & matière")}</strong>{language === "fr" ? currentVtoResult?.fabricDrapeAssessment || selectedItem.fabric : t(selectedItem.fabric)}</span></p></div>
          </div>
          <div className="profile-card" hidden={!!shopperError}><img src={activeUserPreviewUrl} alt="" /><div><strong>{customImageUrl ? t("Photo Personnalisée") : `${MOCK_PERSONAS[selectedPersonaKey]?.name.split(" ")[0]} (${skinProfile.undertone})`}</strong><span>{skinProfile.skinTone}{t(" · Sous-ton ")}{skinProfile.undertone}{" · "}{skinProfile.fitzpatrick}</span></div><span className="palette-badge">{skinProfile.colorimetry.seasonPalette}</span></div>
        </section>

        <section className="studio-column catalog-column" aria-labelledby="catalog-title">
          <div className="column-heading"><span className="step">{t("02")}</span><h2 id="catalog-title">{t("La sélection")}</h2><span className="heading-note">{CATALOG_ITEMS.length}{" "}{t("PIÈCES")}</span></div>
          <div className="panel catalog-panel">
            <div className="catalog-title"><h3>{t("Catalogue VTO")}</h3><span className="muted">{t("Pensé pour vous")}</span></div>
            <div className="category-filters" aria-label={t("Filtrer les articles")}>{categories.map(([id, label]) => <button key={id} aria-pressed={activeCategory === id} className={activeCategory === id ? "filter active" : "filter"} onClick={() => setActiveCategory(id)}>{t(label)}</button>)}</div>
            <div className="catalog-list">
              {filteredCatalog.map(item => {
                const selected = selectedItem.id === item.id;
                const match = shopperState ? calculateColorHarmony(item, skinProfile.undertone, selected ? selectedColorHex : undefined) : null;
                return <div key={item.id} role="button" tabIndex={0} aria-pressed={selected} aria-label={`${t("Essayer")} ${t(item.name)}`} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); selectItem(item); } }} onClick={() => selectItem(item)} className={`cursor-pointer product-card${selected ? " selected" : ""}`}>
                  <DemoGarment item={item} className="product-image" label={t(item.name)} />
                  <div className="product-info"><div className="product-brand">{item.brand}<span>{money(item.price)}</span></div><h4>{t(item.name)}</h4><span className="product-category">{t(item.subcategory)}</span><div className="product-bottom"><span className="mini-swatches">{item.colors.map(color => <i key={color.hex} style={{ backgroundColor: color.hex }} />)}</span><span className="match-badge" title={t("Affinité colorimétrique avec le sous-ton")}>{match === null ? "—" : String(match) + t("% d’accord")}</span></div></div>
                  {selected && <span className="selected-check"><Check size={11} /></span>}
                </div>;
              })}
              {filteredCatalog.length === 0 && <p className="empty-state">{t("De nouvelles pièces arrivent bientôt.")}</p>}
            </div>
            <div className="customizer">
              <h3><SlidersHorizontal size={15} />{t("Ajuster la Cabine d’Essayage")}</h3>
              <div className="customizer-row">
                <span>{t("Coloris")}<strong>{t(colorName)}</strong></span>
                <div className="swatches">{selectedItem.colors.map(color => <button key={color.hex} title={t(color.name)} aria-label={`${t("Coloris")} ${t(color.name)}`} aria-pressed={selectedColorHex === color.hex} className={selectedColorHex === color.hex ? "swatch active" : "swatch"} style={{ backgroundColor: color.hex }} disabled={vtoState === "LIVE_YOUCAM" || isProcessingTryOn} onClick={() => setSelectedColorHex(color.hex)} />)}</div>
              </div>
              <div className="customizer-row">
                <label htmlFor="garment-size">{t("Taille")}</label>
                <select disabled={vtoState === "LIVE_YOUCAM" || isProcessingTryOn} id="garment-size" value={selectedSize} onChange={event => setSelectedSize(event.target.value)}>
                  {selectedItem.sizes.map(size => <option key={size} value={size}>{t(size)}</option>)}
                </select>
              </div>
              <div className="fit-control" aria-label={t("Coupe")}>
                {(["fitted", "regular", "relaxed"] as const).map(mode => <button key={mode} className={fitMode === mode ? "active" : ""} aria-pressed={fitMode === mode} disabled={vtoState === "LIVE_YOUCAM" || isProcessingTryOn} onClick={() => setFitMode(mode)}>{mode}</button>)}
              </div>
              {vtoState === "LIVE_YOUCAM" && <p className="fine-print" style={{ marginTop: "0.5rem" }}>{t("Contrôle non transmis au modèle YouCam cloth-v4")}</p>}
            </div>
          </div>
        </section>

        <section className="studio-column insights-column" aria-labelledby="insights-title" aria-busy={isProcessingShopper}>
          <div className="column-heading"><span className="step">{t("03")}</span><h2 id="insights-title">{t("L’intelligence du style")}</h2><Sparkles size={16} className="heading-icon" /></div>
          <div className="insight-tabs" role="tablist" aria-label={t("Conseils et analyses")}>{([{ id: "personal_shopper", label: "Look Styliste" }, { id: "ab_comparison", label: "Impact A/B" }, { id: "skin_diagnostics", label: "Peau (11)" }] as const).map(tab => <button id={`tab-${tab.id}`} role="tab" aria-selected={activeTab === tab.id} aria-controls="insight-content" key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>{t(tab.label)}</button>)}</div>
          <div className="panel insight-panel" id="insight-content" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
            {shopperError && <p className="empty-state">{t("Profil peau indisponible : aucune analyse de démonstration n’est substituée à un échec live.")}</p>}
            {isProcessingShopper && <p className="loading-inline" role="status"><LoaderCircle className="spin" size={14} />{t("Actualisation du profil…")}</p>}
            {activeTab === "personal_shopper" && bundle && <>
              <div className="insight-kicker"><Sparkles size={14} />{t("VOTRE LOOK SIGNATURE")}<span>{bundle.compatibilityScore}{t("% d’accord")}</span></div>
              <h3 className="insight-title">{language === "fr" ? bundle.title : `Signature Selection ${skinProfile.colorimetry.seasonPalette}`}</h3><p className="bundle-theme">{language === "fr" ? bundle.theme : "Contemporary elegance & natural harmony"}</p>
              <p className="rationale">{language === "fr" ? bundle.styleRationale : `A coordinated selection for a ${skinProfile.skinTone} skin tone and ${skinProfile.undertone} undertone. The recommendation ranks catalog colors by undertone affinity.`}</p>
              <p className="fine-print">{t("Le Personal Shopper utilise des règles locales d’affinité entre couleurs et sous-tons.")}</p>
              <div className="bundle-list">{bundle.items.map(item => <div key={item.id}><DemoGarment item={item} label={t(item.name)} /><span><small>{item.brand}</small><strong>{t(item.name)}</strong></span><span>{money(item.price)}</span></div>)}</div>
              <div className="bundle-total"><p><span>{t("Prix unitaire cumulé")}</span><del>{money(bundle.totalPrice)}</del></p><p className="discount"><span>{t("Avantage Bundle VTO")}</span><span>{t("−")}{bundle.bundleDiscountPercent}{t("%")}</span></p><p className="final-price"><strong>{t("Total Look Complet")}</strong><strong>{money(bundle.finalPrice)}</strong></p></div>
              <button className="primary-button" onClick={() => { setActiveCategory("all"); selectItem(bundle.items[0]); }}><ShoppingBag size={16} />{t("Essayer le Look Complet")}<ArrowRight size={16} /></button>
              <p className="fine-print">{t("Sélectionne la première pièce du look dans votre cabine.")}</p>
            </>}
            {activeTab === "ab_comparison" && abReport && <>
              <div className="insight-kicker"><TrendingUp size={14} />{t("IMPACT E-COMMERCE")}</div><h3 className="insight-title">{t("Démonstrateur de Valeur YouCam")}</h3><p className="muted">{t("Simulez l’impact sur votre activité.")}</p>
              <div className="volume-control"><label htmlFor="orders-volume">{t("Volume annuel")}<strong>{simulationOrdersVolume.toLocaleString(language === "fr" ? "fr-FR" : "en-GB")}</strong></label><input id="orders-volume" type="range" min="2000" max="50000" step="1000" value={simulationOrdersVolume} onChange={event => setSimulationOrdersVolume(Number(event.target.value))} /><div><span>{t("2 000 commandes")}</span><span>{t("50 000")}</span></div></div>
              <div className="metric-list">{[
                ["Taux de conversion", abReport.differentialGains.conversionMultiplier, `${abReport.baselineStandardCommerce.conversionRate}%`, `${abReport.youCamPoweredCommerce.conversionRate}%`],
                ["Retours textile", abReport.differentialGains.returnReductionPercentage, `${abReport.baselineStandardCommerce.returnRate}%`, `${abReport.youCamPoweredCommerce.returnRate}%`],
                ["Confiance client", abReport.differentialGains.confidenceGainPercentage, `${abReport.baselineStandardCommerce.decisionConfidenceScore}%`, `${abReport.youCamPoweredCommerce.decisionConfidenceScore}%`],
              ].map(([label, gain, before, after]) => <div key={t(label)}><div><span>{t(label)}</span><strong>{gain}</strong></div><p>{t("Standard :")} {before}<ArrowRight size={12} /><span>{t("YouCam :")} {after}</span></p></div>)}</div>
              <div className="benefit-card"><span>{t("Gain potentiel modélisé")}</span><strong>{t("+")}{money(abReport.differentialGains.estimatedAnnualNetBenefitEUR)}</strong><small>{t("Panier de référence : ")}{money(abReport.simulationParams.basketEUR)}</small></div><p className="fine-print">{t("Projection illustrative avant coûts non modélisés. Aucun gain commercial mesuré.")}</p>
              <button className="assumptions-toggle" aria-expanded={showAssumptions} aria-controls="roi-assumptions" onClick={() => setShowAssumptions(value => !value)}>{t(showAssumptions ? "Masquer les hypothèses" : "Voir les hypothèses")}<ChevronRight size={14} /></button>
              {showAssumptions && <div className="roi-assumptions" id="roi-assumptions"><h4>{t("Hypothèses du simulateur")}</h4><p>{t("Toutes les valeurs ci-dessous sont des hypothèses internes de démonstration, sans validation par une étude commerciale.")}</p>
                <dl><div><dt>{t("Commandes annuelles")}</dt><dd>{abReport.simulationParams.annualOrdersVolume.toLocaleString(language === "fr" ? "fr-FR" : "en-GB")}</dd></div><div><dt>{t("Panier standard / personnalisé")}</dt><dd>{money(abReport.baselineStandardCommerce.averageBasketEUR)}{t("/")}{money(abReport.simulationParams.basketEUR)}</dd></div><div><dt>{t("Retours standard / personnalisés")}</dt><dd>{abReport.baselineStandardCommerce.returnRate}{t("% /")}{abReport.youCamPoweredCommerce.returnRate}{t("%")}</dd></div><div><dt>{t("Coût de traitement par retour évité")}</dt><dd>{money(12.5)}</dd></div><div><dt>{t("Revenu additionnel lié au panier")}</dt><dd>{money(basketGain)}</dd></div><div><dt>{t("Économies de traitement des retours")}</dt><dd>{money(returnSavings)}</dd></div></dl>
                <p className="formula">{t("Gain affiché = N × (panier personnalisé − panier standard) + N × (taux de retour standard − taux personnalisé) × 12,50 €.")}</p><p>{t("Les taux de retour sont exprimés en fractions dans la formule. Le total est arrondi à l’euro.")}</p>
                <p>{t("Le panier standard vaut 76 % du panier personnalisé. Les taux de conversion et de retour sont modulés par le score d’harmonie du bundle.")}</p><p>{t("La hausse de conversion affichée n’est pas monétisée dans ce total. Marge produit, coûts API, acquisition, intégration et exploitation sont exclus : le montant affiché est un gain modélisé, pas un profit net comptable.")}</p>
              </div>}
            </>}
            {activeTab === "skin_diagnostics" && !shopperError && <>
              <div className="insight-kicker"><Palette size={14} />{t("SKIN AI · 11 DIMENSIONS")}</div><h3 className="insight-title">{t("Aperçu Profil Peau (Simulé)")}</h3><p className="muted">{t("Votre profil beauté et colorimétrique.")}</p>
              <p className="fine-print">{t("Profil de démonstration : mesures illustratives issues de fixtures, sans diagnostic médical ou colorimétrique mesuré.")}</p>
              <div className="skin-summary"><span>{t("Score global")}<strong>{skinProfile.overallHealthScore}<small>{t("/100")}</small></strong></span><span>{t("Âge cutané")}<strong>{skinProfile.skinAge}<small>{t(" ans")}</small></strong></span></div>
              <div className="skin-dimensions">{Object.entries(skinProfile.concerns).map(([key, concern]) => <div key={key}><div><span>{t(concernLabels[key] || key)}</span><strong>{concern.score}<small>{t("/100")}</small></strong></div><div className="progress-track"><span style={{ width: `${concern.score}%` }} /></div></div>)}</div>
              <div className="recommended-colors"><h4>{t("Couleurs recommandées")}</h4><div>{skinProfile.colorimetry.recommendedColors.map(color => <span key={t(color.name)}><i style={{ backgroundColor: color.hex }} />{t(color.name)}</span>)}</div></div>
            </>}
          </div>
          <p className="provenance-note"><CheckCircle2 size={14} />{t(shopperState === "MOCK_SIMULATED" ? "Images et scores de démonstration simulés." : shopperState === "LIVE_YOUCAM" ? "Résultats issus de l’API YouCam." : "Profil peau non chargé.")}</p>
        </section>
      </main>
      <footer className="studio-footer"><span>{t("YouCam VTO Studio")}<span className="footer-dot">{t("·")}</span>{t("Perfect Corp API Hackathon")}</span><span>{t("La technologie au service de votre style")}<ChevronRight size={12} /></span></footer>

      <dialog aria-label={t("Tester votre photo")} ref={dialogRef} className="photo-modal" onCancel={event => { event.preventDefault(); if (!isUploadingFile) closeModal(); }} onClose={() => setShowCustomModal(false)}>
        <div className="modal-heading"><span className="modal-icon"><Camera size={22} /></span><button aria-label={t("Fermer la fenêtre")} disabled={isUploadingFile} className="icon-button" onClick={closeModal}><X size={20} /></button></div>
        <p className="eyebrow">{t("VOTRE CABINE, VOTRE PHOTO")}</p><h2>{t("Tester votre photo")}</h2><p className="modal-description">{t("Choisissez un portrait net pour personnaliser votre essayage et votre profil colorimétrique.")}</p>
        <label className="upload-zone"><Upload size={25} /><strong>{t(isUploadingFile ? "Téléversement en cours…" : "Choisir une photo")}</strong><span>{t("PNG, JPG ou WEBP")}</span><input aria-label={t("Téléverser une photo")} type="file" accept="image/png,image/jpeg,image/webp" disabled={isUploadingFile} onChange={event => { const file = event.target.files?.[0]; if (file) void uploadPhoto(file); event.target.value = ""; }} /></label>
        <div className="modal-divider"><span />{t("ou depuis un lien")}<span /></div>
        <form onSubmit={applyUrl}><label className="url-label" htmlFor="photo-url"><LinkIcon size={14} />{t("URL d’image directe")}</label><input id="photo-url" type="url" placeholder={t("https://exemple.com/mon-portrait.jpg")} value={inputUrl} onChange={event => setInputUrl(event.target.value)} required disabled={isUploadingFile} />{uploadError && <p className="field-error" role="alert">{t(uploadError)}</p>}<button className="primary-button" disabled={isUploadingFile} type="submit">{t("Appliquer la photo")}<ArrowRight size={16} /></button></form>
        <p className="fine-print">{t(vtoState === "MOCK_SIMULATED" ? "Mode simulation : les résultats sont des exemples et ne constituent pas une analyse de votre photo." : "Votre photo sera transmise à YouCam pour l’essayage vestimentaire.")}</p>
      </dialog>
    </div>
  );
}
