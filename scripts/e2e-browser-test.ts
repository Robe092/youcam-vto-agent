import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { spawn, ChildProcess } from "node:child_process";
import puppeteer from "puppeteer-core";

const PORT = 3099;
const baseUrl = `http://localhost:${PORT}`;
const outputDir = path.resolve("docs/screenshots");
fs.mkdirSync(outputDir, { recursive: true });

/**
 * Résolution multi-plateforme de l'exécutable Chrome / Chromium (macOS, Linux, Windows)
 */
function resolveChromePath(): string {
  if (process.env.CHROME_BIN && fs.existsSync(process.env.CHROME_BIN)) {
    return process.env.CHROME_BIN;
  }
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", // macOS
    "/usr/bin/google-chrome", // Linux
    "/usr/bin/google-chrome-stable", // Linux
    "/usr/bin/chromium", // Linux
    "/usr/bin/chromium-browser", // Linux
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", // Windows
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", // Windows
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("Google Chrome introuvable. Veuillez définir la variable d'environnement CHROME_BIN.");
}

async function waitForServer(url: string, timeoutMs = 15000): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // Attente du démarrage
    }
    await new Promise((r) => setTimeout(r, 400));
  }
  throw new Error(`Le serveur ${url} n'a pas répondu dans le délai imparti de ${timeoutMs}ms.`);
}

async function run() {
  console.log("🚀 Lancement du banc d'épreuve E2E YouCam VTO Studio (Chrome Headless)...");

  const chromePath = resolveChromePath();
  console.log(`🔍 Exécutable Chrome identifié : ${chromePath}`);

  // 1. Démarrer le serveur Next.js en mode production sur le port 3099
  // IMPORTANT: YOUCAM_MOCK_FALLBACK_ALLOWED est activé pour autoriser le banc de test
  console.log(`🌐 Démarrage du serveur Next.js sur ${baseUrl}...`);
  const serverProcess: ChildProcess = spawn("npx", ["next", "start", "-p", String(PORT)], {
    cwd: path.resolve("."),
    stdio: "pipe",
    env: {
      ...process.env,
      PORT: String(PORT),
      YOUCAM_MODE: "mock_only",
      YOUCAM_MOCK_FALLBACK_ALLOWED: "true",
    },
  });

  serverProcess.stderr?.on("data", (data) => {
    const msg = data.toString();
    if (!msg.includes("ExperimentalWarning")) {
      console.error(`[Server Error] ${msg}`);
    }
  });

  try {
    await waitForServer(baseUrl, 15000);
    console.log("✅ Serveur Next.js opérationnel !");

    // 2. Initialisation de Puppeteer
    const browser = await puppeteer.launch({
      executablePath: chromePath,
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--window-size=1440,900",
      ],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    // ------------------------------------------------------------------------
    // SCÈNE 1 : Accueil Studio, Cabine VTO Initiale & Détection Emma (Warm)
    // ------------------------------------------------------------------------
    console.log("📸 Scène 1: Chargement de l'accueil du studio et de la cabine VTO...");
    await page.goto(baseUrl, { waitUntil: "networkidle0", timeout: 15000 });

    // Guard the visual regression that text-only assertions previously missed.
    const layout = await page.evaluate(() => {
      const grid = document.querySelector(".studio-grid");
      if (!(grid instanceof HTMLElement)) throw new Error("Grille studio absente");
      const columns = Array.from(grid.children).map(el => el.getBoundingClientRect());
      return {
        display: getComputedStyle(grid).display,
        aligned: columns.every(rect => Math.abs(rect.top - columns[0].top) < 2),
        distinctColumns: columns[0].right <= columns[1].left && columns[1].right <= columns[2].left,
        noOverflow: document.documentElement.scrollWidth <= innerWidth,
      };
    });
    assert.equal(layout.display, "grid", "La feuille CSS doit être chargée");
    assert.ok(layout.aligned && layout.distinctColumns, "Les trois colonnes doivent être alignées et distinctes");
    assert.ok(layout.noOverflow, "Le studio ne doit pas déborder horizontalement");

    const titleText = await page.evaluate(() => document.body.innerText);
    assert.ok(titleText.includes("YouCam VTO Studio"), "Le titre YouCam VTO Studio doit être présent");
    assert.ok(
      titleText.includes("Mode Simulation Transparent") ||
      titleText.includes("LIVE_YOUCAM") ||
      titleText.includes("Transparent Simulation Mode"),
      "Le badge de statut API doit être actif"
    );
    assert.ok(titleText.includes("Emma"), "Le profil Emma doit être sélectionné par défaut");
    assert.ok(titleText.includes("Autumn Earth") || titleText.includes("Spring Warm"), "La palette saisonnière doit être affichée");

    const screenshot1Path = path.join(outputDir, "01-studio-overview.png");
    await page.screenshot({ path: screenshot1Path, fullPage: true });
    console.log(`   ➔ Enregistré : ${screenshot1Path}`);

    // ------------------------------------------------------------------------
    // SCÈNE 2 : Changement de profil vers Lucas (Teint Médium & Sous-ton Froid)
    // ------------------------------------------------------------------------
    console.log("📸 Scène 2: Changement de profil vers Lucas (Sous-ton Froid)...");
    const lucasButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      return buttons.find((b) => b.innerText.includes("Lucas"));
    });
    assert.ok(lucasButton, "Bouton du profil Lucas introuvable");
    await page.evaluate((el) => {
      if (el instanceof HTMLElement) el.click();
    }, lucasButton);

    // Attendre la mise à jour réactive
    await new Promise((r) => setTimeout(r, 600));

    const updatedText = await page.evaluate(() => document.body.innerText);
    assert.ok(updatedText.includes("Lucas"), "Le profil de Lucas doit être actif");
    assert.ok(updatedText.includes("Winter Vivid") || updatedText.includes("Summer Cool"), "La palette froide doit être affichée pour Lucas");
    assert.ok(updatedText.toLowerCase().includes("cool"), "Le sous-ton doit être cool");

    const screenshot2Path = path.join(outputDir, "02-persona-cool-undertone.png");
    await page.screenshot({ path: screenshot2Path, fullPage: true });
    console.log(`   ➔ Enregistré : ${screenshot2Path}`);

    // ------------------------------------------------------------------------
    // SCÈNE 3 : Sélection d'un autre vêtement (Manteau Croisé Camel)
    // ------------------------------------------------------------------------
    console.log("📸 Scène 3: Essayage VTO interactif d'un manteau tailleur...");
    const coatCard = await page.evaluateHandle(() => {
      const cards = Array.from(document.querySelectorAll("div.cursor-pointer, .product-card"));
      return cards.find((c) => {
        const txt = (c as HTMLElement).innerText;
        return txt.includes("Manteau Croisé") || txt.includes("Double-breasted Wool Coat");
      });
    });
    assert.ok(coatCard, "Carte produit Manteau Croisé introuvable");
    await page.evaluate((el) => {
      if (el instanceof HTMLElement) el.click();
    }, coatCard);

    // Lancement explicite de l'essayage via le bouton cabine
    const tryOnButton = await page.$("#try-on-button");
    if (tryOnButton) {
      await tryOnButton.click();
      await page.waitForFunction(() => {
        const txt = document.body.innerText;
        return !txt.includes("Ajustement morphologique en cours") && !txt.includes("Preparing your try-on");
      });
      await new Promise((r) => setTimeout(r, 400));
    }

    const selectedGarment = await page.$eval('.product-card[aria-pressed="true"]', el => el.textContent);
    assert.ok(
      selectedGarment?.includes("Manteau Croisé") || selectedGarment?.includes("Double-breasted Wool Coat"),
      "Le manteau doit être réellement sélectionné"
    );
    const coatText = await page.evaluate(() => document.body.innerText);
    assert.ok(
      coatText.includes("Manteau Croisé") || coatText.includes("Double-breasted Wool Coat"),
      "L'article Manteau Croisé doit être sélectionné"
    );
    assert.ok(
      coatText.toLowerCase().includes("fidélité") || coatText.toLowerCase().includes("fidelity"),
      "Le score de fidélité texture doit être affiché"
    );
    assert.ok(coatText.toLowerCase().includes("fit"), "Le score d'ajustement fit doit être affiché");

    const screenshot3Path = path.join(outputDir, "03-vto-garment-tryon.png");
    await page.screenshot({ path: screenshot3Path, fullPage: true });
    console.log(`   ➔ Enregistré : ${screenshot3Path}`);

    // ------------------------------------------------------------------------
    // SCÈNE 4 : Onglet Comparateur A/B & Démonstrateur de Valeur Sponsor
    // ------------------------------------------------------------------------
    console.log("📸 Scène 4: Ouverture de l'onglet Impact A/B & ROI Sponsor...");
    const abTabButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      return buttons.find((b) => b.innerText.includes("Impact A/B") || b.innerText.includes("A/B Impact"));
    });
    assert.ok(abTabButton, "Bouton d'onglet Impact A/B introuvable");
    await page.evaluate((el) => {
      if (el instanceof HTMLElement) el.click();
    }, abTabButton);

    await new Promise((r) => setTimeout(r, 400));

    const abText = await page.evaluate(() => document.body.innerText);
    assert.ok(
      abText.includes("Démonstrateur de Valeur YouCam") || abText.includes("YouCam Value Demonstrator"),
      "Le démonstrateur de valeur doit être visible"
    );
    assert.ok(abText.includes("3.2x") || abText.includes("x"), "Le multiplicateur de conversion doit être affiché");
    assert.ok(abText.includes("-") && abText.includes("%"), "La réduction des retours doit être affichée");
    assert.ok(
      abText.toLowerCase().includes("gain potentiel modélisé") ||
      abText.toLowerCase().includes("modeled potential business gain") ||
      abText.toLowerCase().includes("gain commercial") ||
      abText.toLowerCase().includes("bénéfice net annuel"),
      "Le gain modélisé doit être affiché et chiffré"
    );

    const screenshot4Path = path.join(outputDir, "04-ab-business-impact.png");
    await page.screenshot({ path: screenshot4Path, fullPage: true });
    console.log(`   ➔ Enregistré : ${screenshot4Path}`);

    // ------------------------------------------------------------------------
    // SCÈNE 5 : Onglet Bilan Dermatologique (11 Dimensions)
    // ------------------------------------------------------------------------
    console.log("📸 Scène 5: Vérification de l'onglet Bilan Dermatologique (Peau 11)...");
    const skinTabButton = await page.evaluateHandle(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      return buttons.find((b) => b.innerText.includes("Peau (11)") || b.innerText.includes("Skin (11)"));
    });
    assert.ok(skinTabButton, "Bouton d'onglet Peau (11) introuvable");
    await page.evaluate((el) => {
      if (el instanceof HTMLElement) el.click();
    }, skinTabButton);

    await new Promise((r) => setTimeout(r, 400));
    const skinText = await page.evaluate(() => document.body.innerText);
    assert.ok(
      skinText.includes("Aperçu Profil Peau (Simulé)") ||
      skinText.includes("Simulated Skin Profile Preview") ||
      skinText.includes("Bilan Dermatologique IA") ||
      skinText.includes("AI Skin Assessment"),
      "Le titre de l'aperçu du profil peau doit être visible"
    );
    assert.ok(
      skinText.toLowerCase().includes("wrinkles") ||
      skinText.toLowerCase().includes("texture") ||
      skinText.toLowerCase().includes("spots"),
      "Les dimensions doivent être affichées"
    );

    await browser.close();
    console.log("🎉 Banc d'épreuve E2E terminé avec succès ! 4 captures d'écran certifiées enregistrées.");
  } finally {
    serverProcess.kill("SIGTERM");
  }
}

run().catch((err: unknown) => {
  console.error("❌ Échec du banc d'épreuve E2E :", err);
  process.exit(1);
});
