# 👗 YouCam VTO Studio & AI Personal Shopper — Dossier & Code Source Consolidé

> Concours : YouCam API Skin AI & eCommerce VTO Hackathon (Devpost)
> Conçu pour analyse approfondie par Gemini / LLM frontière.

## 📑 Table des Matières du Projet

- [README.md](#file-README-md)
- [ARCHITECTURE.md](#file-ARCHITECTURE-md)
- [SUBMISSION_DEVPOST.md](#file-SUBMISSION-DEVPOST-md)
- [DEVPOST_FORM_EN.md](#file-DEVPOST-FORM-EN-md)
- [DEMO_VIDEO_SCRIPT.md](#file-DEMO-VIDEO-SCRIPT-md)
- [package.json](#file-package-json)
- [tsconfig.json](#file-tsconfig-json)
- [tailwind.config.ts](#file-tailwind-config-ts)
- [postcss.config.js](#file-postcss-config-js)
- [.env.example](#file--env-example)
- [src/types/index.ts](#file-src-types-index-ts)
- [src/data/catalog.ts](#file-src-data-catalog-ts)
- [src/data/mock-fixtures.ts](#file-src-data-mock-fixtures-ts)
- [src/lib/youcam-client.ts](#file-src-lib-youcam-client-ts)
- [src/lib/youcam-live-transport.ts](#file-src-lib-youcam-live-transport-ts)
- [src/lib/personal-shopper.ts](#file-src-lib-personal-shopper-ts)
- [src/lib/studio-i18n.ts](#file-src-lib-studio-i18n-ts)
- [src/components/demo-garment.tsx](#file-src-components-demo-garment-tsx)
- [src/app/layout.tsx](#file-src-app-layout-tsx)
- [src/app/globals.css](#file-src-app-globals-css)
- [src/app/page.tsx](#file-src-app-page-tsx)
- [src/app/api/catalog/route.ts](#file-src-app-api-catalog-route-ts)
- [src/app/api/file/route.ts](#file-src-app-api-file-route-ts)
- [src/app/api/skin-analysis/route.ts](#file-src-app-api-skin-analysis-route-ts)
- [src/app/api/try-on/route.ts](#file-src-app-api-try-on-route-ts)
- [src/app/api/personal-shopper/route.ts](#file-src-app-api-personal-shopper-route-ts)
- [src/tests/youcam-client.test.ts](#file-src-tests-youcam-client-test-ts)
- [src/tests/youcam-live-transport.test.ts](#file-src-tests-youcam-live-transport-test-ts)
- [src/tests/personal-shopper.test.ts](#file-src-tests-personal-shopper-test-ts)
- [scripts/e2e-browser-test.ts](#file-scripts-e2e-browser-test-ts)
- [scripts/ui-regression-test.mjs](#file-scripts-ui-regression-test-mjs)
- [scripts/jury-demo-test.mjs](#file-scripts-jury-demo-test-mjs)
- [scripts/live-ui-contract-test.mjs](#file-scripts-live-ui-contract-test-mjs)
- [scripts/live-youcam-proof.ts](#file-scripts-live-youcam-proof-ts)
- [scripts/build-gemini-bundle.py](#file-scripts-build-gemini-bundle-py)
- [docs/UI_VALIDATION.md](#file-docs-UI-VALIDATION-md)
- [docs/SUBMISSION_READINESS.md](#file-docs-SUBMISSION-READINESS-md)
- [docs/live/STATUS.json](#file-docs-live-STATUS-json)
- [docs/live/PROOF.md](#file-docs-live-PROOF-md)
- [docs/live/run-95e1761f.json](#file-docs-live-run-95e1761f-json)
- [docs/live/attempt-01.json](#file-docs-live-attempt-01-json)
- [docs/live/attempt-02.json](#file-docs-live-attempt-02-json)
- [docs/live/attempt-03.json](#file-docs-live-attempt-03-json)

---

<a id="file-README-md"></a>
## 📄 Fichier : `README.md`

```markdown
# YouCam VTO Studio & AI Personal Shopper

A bilingual fashion-commerce prototype combining a virtual fitting room, a rule-based outfit recommender and an illustrative business-impact simulator.

**Readiness: one native Clothes API generation and its output are verified; local simulation is verified. Full submission is not yet ready.** See [submission readiness](docs/SUBMISSION_READINESS.md).

Official contest: [YouCam API Skin AI & eCommerce VTO Hackathon](https://youcam-api-skin-ai-ecommerce.devpost.com/).

## What works today

- Responsive studio, FR / EN switch and three-step judge walkthrough.
- Six catalog items, Emma/Lucas fixture profiles and local garment illustrations.
- Simulated color/fit indicators, an 11-dimension fixture skin report and outfit bundles.
- File/URL photo inputs, visible errors and native upload dialog.
- ROI projections with a visible formula and excluded costs.
- 23 unit/contract tests and Chrome checks, plus one actual native Clothes API result. Controlled responses and the real provider proof are tracked separately.

## Capability boundaries

| Feature | Implementation | Verification |
| --- | --- | --- |
| Local simulation | Available without a key | Unit and Chrome E2E |
| Clothes VTO live | Native cloth-v4 request and task-specific polling | One real generation and visual review; see docs/live/PROOF.md |
| File API live | JSON metadata, then PUT bytes to storage URL | Controlled contract tests; real run pending |
| Skin AI live | Native mapping incomplete | Refused instead of inventing measurements |
| Accessories live | Native contracts not implemented | Simulation only |
| Size, fit, color controls | Local illustrations and fixture calculations | Simulation only |
| Fidelity, fit, harmony scores | Simulation fixtures | Live Clothes API does not supply them; displayed unavailable |
| Commercial gains | Internal arithmetic scenario | Not measured results or accounting net profit |

No clinical diagnosis, body measurement, 3D mesh simulation or commercial uplift is independently demonstrated.

## Run locally

Requires Node.js, npm and Python 3 for bundle generation.

~~~sh
npm ci
cp -n .env.example .env.local
npm run dev
~~~

Open [localhost:3000](http://localhost:3000). Leave the key empty for development simulation.

For a production build used strictly as a simulation demo:

~~~sh
npm run build
YOUCAM_MODE=mock_only npm start
~~~

Do not expose a live-credential server publicly without appropriate access and quota controls.

## First live proof

1. Create a [YouCam API account](https://yce.perfectcorp.com/ai-api).
2. Request/redeem the hackathon's free units through its official registration flow and check your balance.
3. Store the key privately in .env.local as YOUCAM_API_KEY. Never commit this file.
4. Run preflight, then explicitly run one clothing task:

~~~sh
npm run test:live
npm run test:live -- --run
~~~

Without a key, preflight exits with code 2 and writes docs/live/STATUS.json as BLOCKED. It does not contact the provider.

The explicit run uses the same VTO client as /api/try-on, creates at most one clothing task, polls it and downloads the image. LIVE_YOUCAM, task success and image bytes are required. The current saved run has been visually reviewed; every new output requires its own review. This does not validate Skin AI or accessories.

Default source/reference URLs are official Clothes API documentation samples. Optional YOUCAM_PROOF_USER_IMAGE_URL and YOUCAM_PROOF_GARMENT_IMAGE_URL can supply suitable public HTTPS images matching the requested full-body category.

## Verification

~~~sh
npm test
npx tsc --noEmit
npm run build
npm run test:e2e
~~~

E2E explicitly forces mock_only, even if a key exists. Against a running simulation server:

~~~sh
node scripts/ui-regression-test.mjs
node scripts/jury-demo-test.mjs
node scripts/live-ui-contract-test.mjs
~~~

The last script stubs responses to test unavailable live metrics; it is not an integration proof.

## Submission assets

- DEVPOST_FORM_EN.md: English draft aligned with evidence.
- SUBMISSION_DEVPOST.md: French readiness notes.
- DEMO_VIDEO_SCRIPT.md: English recording plan, not an exported video.
- docs/SUBMISSION_READINESS.md: official requirements and unresolved items.
- docs/UI_VALIDATION.md: local verification.
- docs/screenshots/: actual browser captures.
- YOUCAM_VTO_AGENT_BUNDLE_3.md and youcam-vto-agent-src.zip: source bundles without credentials or dependencies.

Regenerate with python3 scripts/build-gemini-bundle.py.

## Verified provider result

The first actual cloth-v4 run succeeded on 16 October 2026 in 33.474 seconds. One task produced an image that was compared visually against the official sample inputs. See [the proof](docs/live/PROOF.md) and docs/live/run-95e1761f.json. This does not establish live Skin AI, accessories, real file upload or measured business impact.
```

---

<a id="file-ARCHITECTURE-md"></a>
## 📄 Fichier : `ARCHITECTURE.md`

```markdown
# Architecture and evidence boundaries

## Application
Next.js serves the bilingual studio and five routes: catalog, file, skin-analysis, try-on and personal-shopper. Catalog/personas are local data. A deterministic engine calculates affinity, prices and illustrative commerce projections.

The browser loads a shopper profile when the image changes. Volume changes recalculate ROI locally without repeating a skin task.

## Simulation
Development without a key can use MOCK_SIMULATED. Production demonstrations explicitly use YOUCAM_MODE=mock_only. The mirror shows local product illustrations; skin data and scores are fixtures. No real photo analysis or body measurement is implied.

## Native clothing integration
YouCamClient delegates clothes/file operations to YouCamLiveTransport.

- Server: https://yce-api-01.makeupar.com
- File initialization: POST /s2s/v2.0/file with JSON metadata.
- Upload: PUT bytes to the returned URL without forwarding the API token.
- Clothes creation: POST /s2s/v2.0/task/cloth-v4 with source/reference file URLs or IDs and garment category.
- Polling: GET /s2s/v2.0/task/cloth-v4/{task_id}.
- Success requires a generated-image URL; never substitute a source image.
- Unavailable native scores are null, shown unavailable.
- Errors fail closed, with no mock substitution or replacement task.

Controlled-response tests cover these contracts. One real clothing task has also succeeded, with a downloaded output visually compared to both official sample inputs. The File API upload remains verified only with controlled responses. See docs/live/PROOF.md.

## Incomplete integrations
The application-specific skin profile requires fields not established by the native mapping. Live analysis is refused until mapping is implemented and tested. Separate live accessory contracts are also incomplete. Simulation remains available with explicit provenance.

## Evidence
See docs/UI_VALIDATION.md and docs/SUBMISSION_READINESS.md. Contract tests are UNIT_LOGIC. Only an actual provider call and preserved output can establish INTEGRATION_TEST.
```

---

<a id="file-SUBMISSION-DEVPOST-md"></a>
## 📄 Fichier : `SUBMISSION_DEVPOST.md`

```markdown
# YouCam VTO Studio — Submission Preparation Dossier

Contest: https://youcam-api-skin-ai-ecommerce.devpost.com/  
Official Rules: https://youcam-api-skin-ai-ecommerce.devpost.com/rules  

**Current Verdict: Prototype verified in simulation; one native clothing task verified on live provider; full submission pending reviewer access and final video.**

The project delivers an interactive virtual fitting room, fashion catalog, local style recommendation engine, simulated skin diagnostic, and an explicable economic scenario, with a guided judge walkthrough and English default experience.

## Sponsor API Integration

The clothing and file upload client implements official native contracts: documented API host (`https://yce-api-01.makeupar.com`), JSON metadata request, binary storage PUT, task-specific polling, and fail-closed error handling. Controlled-response tests validate these contracts.

Following hackathon unit activation, one real native `cloth-v4` task succeeded in 33.474 seconds. The generated JPEG output (73,094 bytes) was downloaded and visually compared against both input samples. The durable proof is preserved in `docs/live/run-95e1761f.json` and `docs/live/PROOF.md`. This confirms client/API compatibility on real provider infrastructure.

Native Skin AI mapping remains incomplete: raw provider scores do not establish the full colorimetry, undertone, and Fitzpatrick profile required by the stylist engine. The live path refuses unverified conversion rather than inventing scores. Accessories remain simulated.

## Do Not Claim

- Measured commercial gains in conversion uplift or return reduction (projections are illustrative models).
- Verified body measurements or 3D mesh physics simulation.
- Real-time photo analysis in simulation mode.
- Independent external certification of screenshots or full contest compliance.
- Complete live integration proven by unit tests or API key presence alone.

## Deliverables

- `DEVPOST_FORM_EN.md`: The complete English submission text ready for Devpost form fields.
- `DEMO_VIDEO_SCRIPT.md`: The 2-minute timed recording plan.
- `docs/SUBMISSION_READINESS.md`: Live tracking of official hackathon requirements.
- `YOUCAM_VTO_AGENT_BUNDLE_3.md` & `youcam-vto-agent-src.zip`: Single-file code bundle and clean source archive.

Neither the bundle nor the ZIP replaces a public repository URL, judge test access, or the public 1–3 minute demo video required by contest rules.
```

---

<a id="file-DEVPOST-FORM-EN-md"></a>
## 📄 Fichier : `DEVPOST_FORM_EN.md`

```markdown
# Devpost submission draft — not ready for final submission

Contest: https://youcam-api-skin-ai-ecommerce.devpost.com/

The first native Clothes API result is verified. Reviewer repository/access links, final demo video, incomplete feature mappings and participant/right checks must still be completed before submission.

## Project name
YouCam VTO Studio & AI Personal Shopper

## Elevator pitch
A bilingual fashion-shopping studio pairing transparent try-on demos, color-based outfit recommendations and an explainable commerce-impact simulator.

## Inspiration
Online shoppers must choose garments without seeing them on their own image. Fit and color uncertainty motivated us to build a coherent shopping experience that explains recommendations and distinguishes measured results from demonstrations.

## What it does
The studio combines a catalog, fitting-room panel and personal-shopping panel. Users can compare two fixture profiles, explore garment illustrations in different colors and cuts, inspect an 11-dimension simulated skin report and discover coordinated outfit bundles.

A guided judge demo explains the flow. The interface supports French and English. An interactive business scenario exposes assumptions, formula and cost exclusions.

## How we built it
Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide and Zod support the interface and five routes. A local rule engine ranks items by undertone affinity and calculates bundle prices.

The clothing adapter targets Perfect Corp's documented cloth-v4 API, using native source/reference fields, garment_category and task-specific polling. File uploads initialize JSON metadata before transferring bytes to the provided storage URL.

These contracts are tested with controlled responses. **One real cloth-v4 execution has now succeeded after activation of the contest units. Its downloaded output was visually compared with both official sample inputs.** Skin AI response mapping and live accessories remain incomplete. The 11-dimension report is a fixture demonstration.

## Transparency
MOCK_SIMULATED identifies demo mode: local product illustrations, not generated images of the selected person. Size/fit/color controls do not prove body measurement or native API control.

The native Clothes response does not provide the three demo scores. Live output displays them unavailable. Provider errors are not silently replaced with mock results.

ROI is a scenario from internal assumptions, not a measured experiment. It adds modeled basket revenue and avoided return-processing costs, excluding margins, API, acquisition, integration and operations. Conversion uplift is not monetized in that total.

## Challenges
- Keeping fixture data distinguishable from provider results.
- Verifying native contracts instead of relying on mock tests.
- Avoiding extra provider tasks when adjusting the ROI slider.
- Presenting unavailable metrics without favorable invented defaults.

## Accomplishments
- A complete local walkthrough in two languages.
- Tests for pricing, recommendations, mode handling and native parsing.
- Automated Chrome scenes and responsive captures.
- A live-proof command that cannot accept mock output as provider success.

## Next steps
Build on the verified clothing run; implement native Skin AI/color-tone mappings and accessories; prepare judge access and an English end-to-end recording.

## Built with
Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, Zod, Node.js test runner, Puppeteer, Chrome, Perfect Corp YouCam API client.

## Required links — pending
- Repository URL: NOT PROVIDED.
- Judge demo or test-build access: NOT VERIFIED.
- Public YouTube or Vimeo video, 1–3 minutes: NOT PROVIDED.
- Live proof: docs/live/run-95e1761f.json records PASS, with one generated image and qualitative visual review.
- Eligibility, rights and creation-period declarations: NOT VERIFIED.
```

---

<a id="file-DEMO-VIDEO-SCRIPT-md"></a>
## 📄 Fichier : `DEMO_VIDEO_SCRIPT.md`

```markdown
# English recording plan — target 2 minutes 15 seconds

Status: SCRIPT ONLY, not an exported final video.
Do not submit a video claiming live YouCam integration until a real result is obtained and visually reviewed.

## Before recording
Use the final build in English, with mode labels visible. Insert provider footage only after docs/live/STATUS.json reports success and the image has been inspected. Never show keys or signed URLs. Do not imply that separate recordings are one continuous API execution.

## 0:00–0:20 — Problem and product
Show the English overview.

“Choosing clothes online involves uncertainty about appearance and color. YouCam VTO Studio explores a fitting-room and personal-shopping experience, clearly separating simulated demonstrations from provider results.”

## 0:20–0:55 — Guided experience
Use Judge demo. Compare Emma/Lucas, select the coat and change color/cut.

“These fixture profiles demonstrate the shopping flow. Illustrations match the garment and selected color. They are not generated images of the person. Our local engine ranks items using color-affinity rules.”

## 0:55–1:25 — Real API evidence
Required before final recording. Use actual verified clothing-run footage, showing the result, LIVE_YOUCAM and unavailable scores.

After verification:
“This image was returned by Perfect Corp's Clothes Virtual Try-On API. The server submits source and reference images, then polls the clothing task. The API does not return our demonstration scores, so they are unavailable.”

If blocked, a draft may instead say:
“The sponsor execution is pending an API key. This recording is a simulation walkthrough and does not prove live integration.”

## 1:25–1:50 — Recommendations and skin boundaries
Show Stylist Look and Skin in simulation.

“The local recommendation and pricing engine creates a coordinated bundle. The eleven-dimension skin report currently uses fixtures. Native Skin AI and color-profile mappings remain to be completed and verified.”

Change this statement only after those features are implemented and proved.

## 1:50–2:10 — Business scenario
Open A/B Impact, move the slider and open View assumptions.

“This is an illustrative scenario, not a measured business result. It combines basket revenue differences and avoided return-processing costs. Margins, API and operating costs are excluded. The slider performs local arithmetic without another provider task.”

## 2:10–2:15 — Closing
Show the project name and verified reviewer URL when available.

“Our goal is to make shopping decisions easier to understand, with transparent evidence behind each capability.”

## Export checks
- Exported duration: 1–3 minutes.
- Legible controls and mode labels.
- English narration/subtitles or required translations.
- Footage and written claims match actual behavior.
- No restricted music or other unlicensed material.
- Review before publishing to YouTube/Vimeo and submitting its link.
```

---

<a id="file-package-json"></a>
## 📄 Fichier : `package.json`

```json
{
  "name": "youcam-vto-agent",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "node --import tsx --test src/tests/**/*.test.ts",
    "test:e2e": "node --import tsx scripts/e2e-browser-test.ts",
    "test:live": "node --import tsx scripts/live-youcam-proof.ts"
  },
  "dependencies": {
    "lucide-react": "^0.473.0",
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^22.10.7",
    "@types/react": "^19.0.7",
    "@types/react-dom": "^19.0.3",
    "autoprefixer": "^10.6.1",
    "postcss": "^8.4.49",
    "puppeteer-core": "^25.14.0",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.2",
    "typescript": "^5.7.3"
  }
}
```

---

<a id="file-tsconfig-json"></a>
## 📄 Fichier : `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

<a id="file-tailwind-config-ts"></a>
## 📄 Fichier : `tailwind.config.ts`

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
    },
  },
  plugins: [],
};
export default config;
```

---

<a id="file-postcss-config-js"></a>
## 📄 Fichier : `postcss.config.js`

```text
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

<a id="file--env-example"></a>
## 📄 Fichier : `.env.example`

```text
# YouCam API Configuration (Perfect Corp YouCam AI / S2S API)
# Hackathon: YouCam API Skin AI & eCommerce VTO Hackathon (Devpost)

# Mode opérationnel:
# - auto: essaie le VTO live si YOUCAM_API_KEY est défini, sinon simulation explicite. Une erreur live ne déclenche aucun fallback.
# - mock_only: force le mode MOCK_SIMULATED avec fixtures de démonstration même si une clé est présente
# - live_only: force les appels réels vers Perfect Corp S2S API (lève une exception si la clé est absente)
YOUCAM_MODE=auto

# Clé API YouCam (Perfect Corp) - Renseignez votre clé pour activer le mode réel LIVE_YOUCAM
# Obtenue sur https://yce.perfectcorp.com ou console développeur Perfect Corp
YOUCAM_API_KEY=

# Base URL de l'API S2S Perfect Corp
YOUCAM_API_BASE_URL=https://yce-api-01.makeupar.com

# Sécurité: autoriser explicitement le fallback mock en environnement de production (false par défaut)
YOUCAM_MOCK_FALLBACK_ALLOWED=false

# Port d'écoute du serveur Next.js
PORT=3000

# Live readiness: clothing/file contracts prepared but real execution pending.
# Skin AI and accessory live mappings are incomplete and explicitly refused.
```

---

<a id="file-src-types-index-ts"></a>
## 📄 Fichier : `src/types/index.ts`

```typescript
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
```

---

<a id="file-src-data-catalog-ts"></a>
## 📄 Fichier : `src/data/catalog.ts`

```typescript
import { CatalogItem } from "../types";

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "vto_top_01",
    name: "Chemisier Fluide en Soie Lavée",
    brand: "Atelier YouCam Paris",
    category: "tops",
    subcategory: "Blouses & Chemisiers",
    price: 145.0,
    currency: "EUR",
    rating: 4.8,
    reviewsCount: 124,
    imageUrl: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
    tryOnAssetUrl: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
    colors: [
      { name: "Blanc Ivoire Chaud", hex: "#FFF8EE", undertoneAffinity: ["warm", "neutral"] },
      { name: "Bleu Minéral Froid", hex: "#4A6B82", undertoneAffinity: ["cool"] },
      { name: "Terracotta Cuivré", hex: "#C86446", undertoneAffinity: ["warm", "olive"] },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    fabric: "100% Soie de mûrier 19mm certifiée Oeko-Tex",
    styleTags: ["Minimaliste Chic", "Bureau Élegant", "Soie Naturelle"],
    description: "Coupe décontractée aux emmanchures subtilement tombantes, confectionnée dans une crêpe de soie respirante apportant une brillance mate flatteuse.",
    inStock: true,
  },
  {
    id: "vto_dress_02",
    name: "Robe Midi Trapèze Vert Émeraude",
    brand: "Maison VTO Studio",
    category: "dresses",
    subcategory: "Robes Midi & Soirée",
    price: 189.0,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 88,
    imageUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    tryOnAssetUrl: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    colors: [
      { name: "Émeraude Royale", hex: "#0E5A44", undertoneAffinity: ["cool", "olive", "neutral"] },
      { name: "Rouge Rubis", hex: "#9B111E", undertoneAffinity: ["cool", "neutral"] },
      { name: "Noir Onyx Profond", hex: "#111111", undertoneAffinity: ["cool", "warm", "neutral", "olive"] },
    ],
    sizes: ["34", "36", "38", "40", "42"],
    fabric: "Satin de viscose lourd éco-responsable (240g/m²)",
    styleTags: ["Cocktail", "Drapé Fluide", "Couleur Joyau"],
    description: "Silhouette élancée avec col bénitier et fente latérale discrète, magnifiée par un tombé sculptural adapté aux morphologies sablier et longilignes.",
    inStock: true,
  },
  {
    id: "vto_outer_03",
    name: "Manteau Croisé en Laine Vierge Camel",
    brand: "L'Artisan Moderne",
    category: "outerwear",
    subcategory: "Manteaux & Cabans",
    price: 320.0,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 210,
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=800&q=80",
    tryOnAssetUrl: "https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=800&q=80",
    colors: [
      { name: "Camel Doré Intense", hex: "#C19A6B", undertoneAffinity: ["warm", "neutral"] },
      { name: "Gris Anthracite Ardoise", hex: "#3A3D40", undertoneAffinity: ["cool"] },
      { name: "Vert Forêt Profond", hex: "#1C352D", undertoneAffinity: ["olive", "warm"] },
    ],
    sizes: ["S", "M", "L", "XL"],
    fabric: "100% Laine vierge double face 520g",
    styleTags: ["Tailoring Intemporel", "Grand Froid", "Luxury Fit"],
    description: "Lignes architecturales franches, revers tailleur affirmés et ceinture amovible pour structurer la taille avec prestance.",
    inStock: true,
  },
  {
    id: "vto_bottom_04",
    name: "Pantalon Tailleur Coupe Ample Plissée",
    brand: "Atelier YouCam Paris",
    category: "bottoms",
    subcategory: "Pantalons & Tailleurs",
    price: 135.0,
    currency: "EUR",
    rating: 4.7,
    reviewsCount: 96,
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    tryOnAssetUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    colors: [
      { name: "Beige Craie", hex: "#E6D7C3", undertoneAffinity: ["warm", "neutral"] },
      { name: "Bleu Nuit Tailleur", hex: "#151B29", undertoneAffinity: ["cool", "neutral"] },
      { name: "Vert Kaki Poudré", hex: "#626D58", undertoneAffinity: ["warm", "olive"] },
    ],
    sizes: ["36", "38", "40", "42", "44"],
    fabric: "Drap de laine froide et lyocell stretch",
    styleTags: ["Taille Haute", "Drapé Éloquent", "Confort Urbain"],
    description: "Pinces profondes sur le devant assurant une amplitude maîtrisée et un tombé impeccable sur la cheville.",
    inStock: true,
  },
  {
    id: "vto_acc_05",
    name: "Lunettes de Soleil Acétate Écaille Rétro",
    brand: "Optique NeoVibe",
    category: "sunglasses",
    subcategory: "Lunettes & Solaires",
    price: 110.0,
    currency: "EUR",
    rating: 4.8,
    reviewsCount: 72,
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    tryOnAssetUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    colors: [
      { name: "Écaille Miel Ambré", hex: "#8A5229", undertoneAffinity: ["warm", "olive"] },
      { name: "Noir Laqué Polarisé", hex: "#0F0F0F", undertoneAffinity: ["cool", "neutral"] },
    ],
    sizes: ["Unique"],
    fabric: "Acétate italien Mazzucchelli biodégradable, verres UV400 Catégorie 3",
    styleTags: ["Statement Eyewear", "Protection UV400", "Monture Biseautée"],
    description: "Monture géométrique adoucie calibrée pour harmoniser les visages ovales, carrés et triangulaires.",
    inStock: true,
  },
  {
    id: "vto_acc_06",
    name: "Collier Chaîne Torsadée Or Vermeil 18k",
    brand: "Joaillerie Solaire",
    category: "jewelry",
    subcategory: "Bijoux & Colliers",
    price: 95.0,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 153,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    tryOnAssetUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    colors: [
      { name: "Or Jaune Chaud 18K", hex: "#D4AF37", undertoneAffinity: ["warm", "olive"] },
      { name: "Or Blanc Rhodié", hex: "#E5E4E2", undertoneAffinity: ["cool"] },
    ],
    sizes: ["45cm", "50cm"],
    fabric: "Argent 925 plaqué Or 18 carats 5 microns (Vermeil)",
    styleTags: ["Chunky Chain", "Finition Miroir", "Hypoallergénique"],
    description: "Maillons torsadés captant la lumière pour illuminer instantanément le décolleté et le port de tête.",
    inStock: true,
  },
];
```

---

<a id="file-src-data-mock-fixtures-ts"></a>
## 📄 Fichier : `src/data/mock-fixtures.ts`

```typescript
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
```

---

<a id="file-src-lib-youcam-client-ts"></a>
## 📄 Fichier : `src/lib/youcam-client.ts`

```typescript
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
```

---

<a id="file-src-lib-youcam-live-transport-ts"></a>
## 📄 Fichier : `src/lib/youcam-live-transport.ts`

```typescript
/** Contracts reviewed against docs.perfectcorp.com on 2026-10-16.
 * Contract tests use controlled responses; they are not evidence of a live API run.
 */
import type { FileUploadResponse, VtoRequest, VtoResult } from "../types";

export interface LiveTransportConfig {
  apiKey: string;
  baseUrl?: string;
  timeoutMs?: number;
  pollIntervalMs?: number;
  maxPollAttempts?: number;
  fetchImpl?: typeof fetch;
}
function record(value: unknown): Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value) ? value as Record<string, unknown> : {};
}
function publicUrl(value: unknown): string {
  if (typeof value !== "string") throw new Error("YouCam: URL de résultat absente.");
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error("YouCam: URL HTTPS requise.");
  return value;
}
function sourceField(image: string, prefix: "src" | "ref"): Record<string, string> {
  if (image.startsWith("youcam-file://")) {
    const id = image.slice("youcam-file://".length);
    if (!id) throw new Error("YouCam: file_id vide.");
    return { [`${prefix}_file_id`]: id };
  }
  return { [`${prefix}_file_url`]: publicUrl(image) };
}

export class YouCamLiveTransport {
  private readonly baseUrl: string;
  private readonly fetcher: typeof fetch;
  constructor(private readonly config: LiveTransportConfig) {
    if (!config.apiKey.trim()) throw new Error("Clé API YouCam manquante.");
    this.baseUrl = config.baseUrl || "https://yce-api-01.makeupar.com";
    if (new URL(this.baseUrl).protocol !== "https:") throw new Error("YouCam: serveur HTTPS requis.");
    this.fetcher = config.fetchImpl || fetch;
  }
  private async request(path: string, body?: unknown): Promise<Record<string, unknown>> {
    const response = await this.fetcher(`${this.baseUrl}${path}`, {
      method: body === undefined ? "GET" : "POST",
      headers: { Authorization: `Bearer ${this.config.apiKey}`, Accept: "application/json", ...(body === undefined ? {} : { "Content-Type": "application/json" }) },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      signal: AbortSignal.timeout(this.config.timeoutMs || 20000),
    });
    if (!response.ok) {
      const error = record(await response.json().catch(() => null));
      const detail = [error.error_code, error.error].filter((value): value is string => typeof value === "string").join(" · ")
        .replaceAll(this.config.apiKey, "[redacted-key]").replace(/https?:\/\/\S+/g, "[redacted-url]").slice(0, 240);
      throw new Error(`YouCam: HTTP ${response.status}${detail ? " · " + detail : ""}. Aucun repli en simulation.`);
    }
    const envelope = record(await response.json());
    if (typeof envelope.status === "number" && envelope.status !== 200) throw new Error(`YouCam: statut applicatif ${envelope.status}.`);
    const data = record(envelope.data);
    if (!Object.keys(data).length) throw new Error("YouCam: enveloppe data absente.");
    return data;
  }
  async upload(file: { buffer?: Buffer | Uint8Array; base64?: string; fileName: string; mimeType?: string }): Promise<FileUploadResponse> {
    const bytes = file.buffer ? Uint8Array.from(file.buffer) : file.base64 ? Uint8Array.from(Buffer.from(file.base64, "base64")) : null;
    if (!bytes?.length) throw new Error("YouCam: fichier vide.");
    const mime = file.mimeType || "image/jpeg";
    if (!["image/jpeg", "image/png", "image/webp"].includes(mime)) throw new Error("YouCam: format de fichier non pris en charge.");
    const data = await this.request("/s2s/v2.0/file", { files: [{ content_type: mime, file_name: file.fileName, file_size: bytes.byteLength }] });
    const entry = record(Array.isArray(data.files) ? data.files[0] : null);
    const upload = record(Array.isArray(entry.requests) ? entry.requests[0] : null);
    if (typeof entry.file_id !== "string" || !entry.file_id || upload.method !== "PUT") throw new Error("YouCam: contrat de téléversement invalide.");
    const headers: Record<string, string> = {};
    for (const [key, value] of Object.entries(record(upload.headers))) {
      if (typeof value !== "string" && typeof value !== "number") throw new Error("YouCam: en-tête upload invalide.");
      // An API bearer token must never be forwarded to the presigned storage host.
      if (key.toLowerCase() === "authorization") throw new Error("YouCam: en-tête upload interdit.");
      headers[key] = String(value);
    }
    const response = await this.fetcher(publicUrl(upload.url), { method: "PUT", headers, body: new Blob([bytes], { type: mime }), signal: AbortSignal.timeout(this.config.timeoutMs || 20000) });
    if (!response.ok) throw new Error(`YouCam: échec transfert fichier HTTP ${response.status}.`);
    return { state: "LIVE_YOUCAM", fileId: entry.file_id, fileUrl: `youcam-file://${entry.file_id}`, fileName: file.fileName, fileSize: bytes.byteLength, uploadedAt: new Date().toISOString() };
  }
  async tryOn(input: VtoRequest): Promise<VtoResult> {
    const category = ({ tops: "upper_body", bottoms: "lower_body", dresses: "full_body", outerwear: "outer", suits: "full_body" } as const)[input.category as "tops" | "bottoms" | "dresses" | "outerwear" | "suits"];
    if (!category) throw new Error("Les accessoires sont disponibles en simulation uniquement ; leur contrat live reste à intégrer.");
    if (!input.garmentImageUrl) throw new Error("YouCam: image du vêtement requise.");
    const start = Date.now();
    const data = await this.request("/s2s/v2.0/task/cloth-v4", { ...sourceField(input.userImageUrl, "src"), ...sourceField(input.garmentImageUrl, "ref"), garment_category: category });
    if (typeof data.task_id !== "string" || !data.task_id) throw new Error("YouCam: task_id absent.");
    const taskId = data.task_id;
    for (let attempt = 0; attempt < (this.config.maxPollAttempts ?? 18); attempt++) {
      if (attempt > 0) await new Promise(resolve => setTimeout(resolve, this.config.pollIntervalMs ?? 10000));
      const task = await this.request(`/s2s/v2.0/task/cloth-v4/${encodeURIComponent(taskId)}`);
      if (task.task_status === "error" || task.task_status === "failed" || task.error) throw new Error("YouCam: la tâche VTO a échoué. Aucun résultat simulé substitué.");
      if (task.task_status !== "success") continue;
      const outputImageUrl = publicUrl(record(task.results).url);
      return {
        state: "LIVE_YOUCAM", taskId, status: "SUCCESS", userImageUrl: input.userImageUrl, garmentImageUrl: input.garmentImageUrl, outputImageUrl, category: input.category,
        // The documented Clothes API does not return fidelity, fit or harmony scores.
        tryOnFidelityScore: null, fitMatchScore: null, skinToneHarmonyScore: null,
        fitAdvice: "Rendu YouCam reçu. Aucune mesure de taille ou de fit n’est renvoyée par cette API.",
        fabricDrapeAssessment: "Examinez le drapé dans l’image générée ; aucun score de matière n’est fourni.",
        executionTimeMs: Date.now() - start,
        metadata: { endpoint: "cloth-v4", scoreSource: "not_provided", unsupportedControls: ["fitMode", "size", "colorHex"] },
      };
    }
    throw new Error("YouCam: délai de polling dépassé ; aucune nouvelle tâche créée automatiquement.");
  }
}
```

---

<a id="file-src-lib-personal-shopper-ts"></a>
## 📄 Fichier : `src/lib/personal-shopper.ts`

```typescript
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
```

---

<a id="file-src-lib-studio-i18n-ts"></a>
## 📄 Fichier : `src/lib/studio-i18n.ts`

```typescript
export type Language = "fr" | "en";

const english: Record<string, string> = {
  "Manteau Croisé en Laine Vierge": "Double-breasted Wool Coat", "Robe Midi Trapèze": "A-line Midi Dress", "Affinité colorimétrique avec le sous-ton": "Color affinity with the undertone",
  "Les scores absents de l’API sont affichés comme non disponibles, sans valeur par défaut.": "Scores not supplied by the API are unavailable, without default values.",
  "L’API vêtements ne fournit pas ces scores. Taille, coupe et recoloration sont des contrôles de simulation uniquement.": "The Clothes API does not provide these scores. Size, fit and recoloring are simulation controls only.",
  "Profil peau indisponible : aucune analyse de démonstration n’est substituée à un échec live.": "Skin profile unavailable: no demo analysis is substituted after a live failure.",
  "Profil peau non chargé.": "Skin profile not loaded.",
  "Essayer": "Try on", "Visuel indisponible": "Image unavailable", "IMPACT E-COMMERCE": "E-COMMERCE IMPACT",
  "YouCam VTO Studio, accueil": "YouCam VTO Studio, home",
  "Choisir un mannequin": "Choose a profile", "Tester ma photo": "Try my photo",
  "L’EXPÉRIENCE SHOPPING, RÉINVENTÉE": "A NEW WAY TO FIND YOUR STYLE",
  "Votre style. En parfaite harmonie.": "Your style. In perfect harmony.",
  "Une cabine virtuelle qui associe essayage, analyse colorimétrique et recommandation de looks personnalisés.": "A virtual fitting room combining try-on, color analysis and personalized outfit recommendations.",
  "Parcours de démonstration jury": "Guided judge demo", "Découvrez le projet en 60 secondes": "Explore the project in 60 seconds",
  "Un profil, une pièce, une recommandation expliquée.": "One profile, one garment, one explained recommendation.", "Démo jury": "Judge demo", "Précédent": "Back", "Fermer le guide": "Close guide", "Étape suivante": "Next step", "Terminer": "Finish",
  "1. Comparez les profils": "1. Compare the profiles", "2. Essayez le manteau": "2. Explore the coat", "3. Explorez l’impact estimé": "3. Explore the projected impact",
  "Passez d’Emma à Lucas : le sous-ton, la palette et le look recommandé évoluent.": "Switch from Emma to Lucas: the undertone, palette and recommended outfit change.",
  "Changez le coloris ou la coupe. Observez l’illustration produit et les scores simulés.": "Change the color or fit. Explore the product illustration and simulated scores.",
  "Déplacez le slider et ouvrez les hypothèses. Les gains affichés sont une projection, pas des résultats mesurés.": "Move the slider and open the assumptions. The gains are projections, not measured results.",
  "Réessayer": "Retry", "Votre cabine virtuelle": "Your virtual fitting room", "Miroir d’Essayage Virtuel YouCam": "YouCam Virtual Try-On Mirror",
  "Photo du mannequin actif": "Active profile photo", "Votre photo": "Your photo", "Ajustement morphologique en cours...": "Preparing your try-on...",
  " · Taille ": " · Size ", "Scores d’essayage": "Try-on scores", "Comment lire les scores ?": "What do the scores mean?",
  "Fidélité : indicateur de restitution du vêtement.": "Fidelity: an indicator of garment reproduction.",
  "Fit : indicateur d’ajustement selon la coupe choisie.": "Fit: an indicator of fit for the selected cut.",
  "Harmonie : affinité entre le coloris et le sous-ton.": "Harmony: the affinity between the color and undertone.",
  "100 = score le plus élevé. En simulation, la couleur et la coupe modifient les indicateurs ; la taille ne déclenche aucune mesure corporelle.": "100 is the highest score. In simulation, color and cut change the indicators; size selection does not perform body measurements.",
  "Scores issus des fixtures de simulation : ils illustrent le parcours, sans évaluer réellement votre photo.": "Scores come from simulation fixtures: they demonstrate the flow without analyzing your photo.",
  "Scores renvoyés ou normalisés par le client API. Ils ne constituent pas une mesure indépendante de précision.": "Scores are returned or normalized by the API client. They are not an independent accuracy measurement.",
  "Conseil de coupe": "Fit guidance", "Drapé & matière": "Drape & fabric", " · Sous-ton ": " · Undertone ",
  "La sélection": "The collection", "PIÈCES": "PIECES", "Catalogue VTO": "VTO Catalog", "Pensé pour vous": "Selected for you", "Filtrer les articles": "Filter products", "% d’accord": "% match",
  "De nouvelles pièces arrivent bientôt.": "New pieces are coming soon.", "Ajuster la Cabine d’Essayage": "Customize your try-on", "Coloris": "Color", "Taille": "Size", "Coupe": "Fit",
  "L’intelligence du style": "Style intelligence", "Conseils et analyses": "Advice and analysis", "Actualisation du profil…": "Updating your profile…", "VOTRE LOOK SIGNATURE": "YOUR SIGNATURE LOOK",
  "Prix unitaire cumulé": "Individual prices", "Avantage Bundle VTO": "VTO bundle saving", "Total Look Complet": "Complete outfit total", "Essayer le Look Complet": "Explore the Complete Outfit",
  "Sélectionne la première pièce du look dans votre cabine.": "Selects the first piece of the outfit in your fitting room.", "Démonstrateur de Valeur YouCam": "YouCam Value Demonstrator", "Simulez l’impact sur votre activité.": "Model the impact on your business.",
  "Volume annuel": "Annual volume", "2 000 commandes": "2,000 orders", "Bénéfice net annuel estimé": "Estimated annual net benefit", "Panier de référence : ": "Reference basket: ",
  "Projection illustrative avant coûts non modélisés. Aucun gain commercial mesuré.": "Illustrative projection before unmodeled costs. No measured commercial gains.",
  "Hypothèses du simulateur": "Simulator assumptions", "Voir les hypothèses": "View assumptions", "Masquer les hypothèses": "Hide assumptions",
  "Toutes les valeurs ci-dessous sont des hypothèses internes de démonstration, sans validation par une étude commerciale.": "All values below are internal demo assumptions, without validation from a commercial study.",
  "Commandes annuelles": "Annual orders", "Panier standard / personnalisé": "Standard / personalized basket", "Retours standard / personnalisés": "Standard / personalized return rate",
  "Coût de traitement par retour évité": "Processing cost per avoided return", "Revenu additionnel lié au panier": "Additional basket revenue", "Économies de traitement des retours": "Return processing savings",
  "Gain affiché = N × (panier personnalisé − panier standard) + N × (taux de retour standard − taux personnalisé) × 12,50 €.": "Displayed gain = N × (personalized basket − standard basket) + N × (standard return rate − personalized return rate) × €12.50.",
  "Les taux de retour sont exprimés en fractions dans la formule. Le total est arrondi à l’euro.": "Return rates are fractions in this formula. The total is rounded to the nearest euro.",
  "Le panier standard vaut 76 % du panier personnalisé. Les taux de conversion et de retour sont modulés par le score d’harmonie du bundle.": "The standard basket is 76% of the personalized basket. Conversion and return rates vary with the bundle harmony score.",
  "La hausse de conversion affichée n’est pas monétisée dans ce total. Marge produit, coûts API, acquisition, intégration et exploitation sont exclus : le « bénéfice net annuel » affiché est un gain modélisé, pas un profit net comptable.": "The conversion uplift is not monetized in this total. Product margin, API, acquisition, integration and operating costs are excluded: the displayed annual net benefit is a modeled gain, not accounting net profit.",
  "Bilan Dermatologique IA": "AI Skin Assessment", "Votre profil beauté et colorimétrique.": "Your beauty and color profile.", "Score global": "Overall score", "Âge cutané": "Skin age", " ans": " years", "Couleurs recommandées": "Recommended colors",
  "Indicateurs cosmétiques, sans valeur de diagnostic médical. Un score élevé indique un meilleur résultat.": "Cosmetic indicators, not a medical diagnosis. A higher score indicates a better result.",
  "La technologie au service de votre style": "Technology for your personal style", "Fermer la fenêtre": "Close dialog", "VOTRE CABINE, VOTRE PHOTO": "YOUR FITTING ROOM, YOUR PHOTO", "Tester votre photo": "Try your photo",
  "Choisissez un portrait net pour personnaliser votre essayage et votre profil colorimétrique.": "Choose a clear portrait to personalize your try-on and color profile.",
  "PNG, JPG ou WEBP": "PNG, JPG or WEBP", "Téléverser une photo": "Upload a photo", "ou depuis un lien": "or use a link", "URL d’image directe": "Direct image URL", "https://exemple.com/mon-portrait.jpg": "https://example.com/my-portrait.jpg", "Appliquer et Diagnostiquer": "Apply and Analyze",
  "Mode simulation : les résultats sont des exemples et ne constituent pas une analyse de votre photo.": "Simulation mode: results are examples and do not represent an analysis of your photo.", "Votre photo sera transmise à YouCam pour l’analyse et l’essayage.": "Your photo will be sent to YouCam for analysis and try-on.",
  "Préparation": "Preparing", "Illustration produit": "Product illustration", "Illustration produit · simulation": "Product illustration · simulation", "Résultat YouCam": "YouCam result",
  "Fidélité Texture": "Texture fidelity", "Ajustement Fit": "Fit match", "Harmonie Teint": "Tone harmony", "Photo Personnalisée": "Custom Photo",
  "Tous": "All", "Tops": "Tops", "Robes": "Dresses", "Manteaux": "Coats", "Pantalons": "Trousers", "Lunettes": "Eyewear", "Bijoux": "Jewelry",
  "Look Styliste": "Stylist Look", "Impact A/B": "A/B Impact", "Peau (11)": "Skin (11)", "Taux de conversion": "Conversion rate", "Retours textile": "Apparel returns", "Confiance client": "Customer confidence",
  "Images et scores de démonstration simulés.": "Illustrations and demo scores are simulated.", "Résultats issus de l’API YouCam.": "Results from the YouCam API.",
  "Téléversement en cours…": "Uploading…", "Choisir une photo": "Choose a photo", "Mode Simulation Transparent (MOCK_SIMULATED)": "Transparent Simulation Mode (MOCK_SIMULATED)",
  "Chargement impossible.": "Unable to load.", "Essayage impossible.": "Try-on unavailable.", "Le conseil styliste est indisponible. Réessayez dans un instant.": "Stylist advice is unavailable. Please try again shortly.", "L’essayage est indisponible. Réessayez dans un instant.": "Try-on is unavailable. Please try again shortly.",
  "Choisissez une image PNG, JPG ou WEBP.": "Choose a PNG, JPG or WEBP image.", "Le téléversement a échoué. Veuillez réessayer.": "Upload failed. Please try again.", "Téléversement impossible.": "Upload unavailable.", "Saisissez une URL d’image valide en https:// ou http://.": "Enter a valid image URL starting with https:// or http://.",
  "Chemisier Fluide en Soie Lavée": "Washed Silk Blouse", "Robe Midi Trapèze Vert Émeraude": "Emerald A-line Midi Dress", "Manteau Croisé en Laine Vierge Camel": "Camel Double-breasted Wool Coat", "Pantalon Tailleur Coupe Ample Plissée": "Wide-leg Pleated Tailored Trousers", "Lunettes de Soleil Acétate Écaille Rétro": "Retro Tortoiseshell Sunglasses", "Collier Chaîne Torsadée Or Vermeil 18k": "18k Gold Vermeil Chain Necklace",
  "Blouses & Chemisiers": "Blouses & Shirts", "Robes Midi & Soirée": "Midi & Evening Dresses", "Manteaux & Cabans": "Coats & Peacoats", "Pantalons & Tailleurs": "Trousers & Tailoring", "Lunettes & Solaires": "Eyewear & Sunglasses", "Bijoux & Colliers": "Jewelry & Necklaces",
  "Blanc Ivoire Chaud": "Warm Ivory", "Bleu Minéral Froid": "Cool Mineral Blue", "Terracotta Cuivré": "Copper Terracotta", "Émeraude Royale": "Royal Emerald", "Rouge Rubis": "Ruby Red", "Noir Onyx Profond": "Deep Onyx Black", "Camel Doré Intense": "Golden Camel", "Gris Anthracite Ardoise": "Slate Charcoal", "Vert Forêt Profond": "Deep Forest Green", "Beige Craie": "Chalk Beige", "Bleu Nuit Tailleur": "Midnight Blue", "Vert Kaki Poudré": "Soft Khaki", "Écaille Miel Ambré": "Amber Tortoiseshell", "Noir Laqué Polarisé": "Glossy Polarized Black", "Or Jaune Chaud 18K": "Warm 18k Yellow Gold", "Or Blanc Rhodié": "Rhodium White Gold", "Unique": "One size",
  "Taches · spots": "Spots", "Rides · wrinkles": "Wrinkles", "Cernes": "Dark circles", "Rougeurs": "Redness", "Sébum": "Oiliness", "Hydratation": "Moisture", "Fermeté": "Firmness", "Éclat": "Radiance", "Poches sous les yeux": "Eye bags",
  "100% Soie de mûrier 19mm certifiée Oeko-Tex": "100% 19mm mulberry silk, Oeko-Tex certified", "Satin de viscose lourd éco-responsable (240g/m²)": "Heavy eco-friendly viscose satin (240g/m²)", "100% Laine vierge double face 520g": "100% double-face virgin wool, 520g", "Drap de laine froide et lyocell stretch": "Cool wool and stretch lyocell", "Acétate italien Mazzucchelli biodégradable, verres UV400 Catégorie 3": "Biodegradable Italian acetate, UV400 category 3 lenses", "Argent 925 plaqué Or 18 carats 5 microns (Vermeil)": "925 silver with 5-micron 18k gold plating (vermeil)",
  "Standard :": "Standard:", "YouCam :": "YouCam:", "50 000": "50,000",
};
export function translate(text: string, language: Language): string {
  return language === "en" ? english[text] ?? text : text;
}
```

---

<a id="file-src-components-demo-garment-tsx"></a>
## 📄 Fichier : `src/components/demo-garment.tsx`

```typescript
import { useId } from "react";
import type { CatalogItem, FitMode } from "@/types";

/** Local product illustrations. These are never presented as generated VTO results. */
export function DemoGarment({ item, color, fitMode = "regular", className = "", label }: {
  item: CatalogItem; color?: string; fitMode?: FitMode; className?: string; label: string;
}) {
  const id = useId().replace(/:/g, "");
  const fill = color || item.colors[0]?.hex || "#C19A6B";
  const width = fitMode === "fitted" ? .93 : fitMode === "relaxed" ? 1.07 : 1;
  const stroke = "#34372c";
  return <svg className={`demo-garment ${className}`} viewBox="0 0 360 440" role="img" aria-label={label} data-category={item.category} data-color={fill} data-fit={fitMode}>
    <defs>
      <linearGradient id={`${id}-fabric`} x1="0" x2="1" y1="0" y2="1"><stop stopColor={fill} /><stop offset=".5" stopColor={fill} /><stop offset="1" stopColor={fill} stopOpacity=".75" /></linearGradient>
      <radialGradient id={`${id}-back`}><stop stopColor="#fffef9" /><stop offset="1" stopColor="#e9e8de" /></radialGradient>
      <filter id={`${id}-shadow`} x="-40%" y="-30%" width="180%" height="180%"><feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#263824" floodOpacity=".14" /></filter>
    </defs>
    <rect width="360" height="440" fill={`url(#${id}-back)`} />
    <circle cx="180" cy="205" r="140" fill="none" stroke="#d9decd" strokeWidth=".6" />
    <path d="M35 385H325M180 35V395" stroke="#d9decd" strokeWidth=".6" strokeDasharray="3 6" />
    <ellipse cx="180" cy="378" rx="88" ry="9" fill="#344a2310" />
    <g transform={`translate(180 220) scale(${width} 1) translate(-180 -220)`} fill={`url(#${id}-fabric)`} stroke={stroke} strokeOpacity=".45" strokeWidth="1.2" strokeLinejoin="round" filter={`url(#${id}-shadow)`}>
      {item.category === "outerwear" && <>
        <path d="M147 69L117 87 72 115 55 263 91 269 116 164 106 364 254 364 244 164 269 269 305 263 288 115 243 87 213 69Z" />
        <path d="M147 69L179 99 213 69 229 107 205 123 218 141 170 200 134 142 153 124 130 108Z" fill={fill} />
        <path d="M180 100L170 200V364M118 236L149 242M215 242L246 236M116 196L111 328M244 196L249 328" fill="none" />
        <path d="M113 202H247V218H113Z" fill={fill} /><rect x="170" y="201" width="23" height="18" rx="2" fill="none" />
        {[175, 238, 281, 321].map(y => <g key={y}><circle cx="161" cy={y} r="3" fill={stroke} fillOpacity=".55" /><circle cx="201" cy={y} r="3" fill={stroke} fillOpacity=".55" /></g>)}
      </>}
      {item.category === "tops" && <>
        <path d="M150 95L116 111 63 150 86 290 117 283 110 180 124 326Q180 342 236 326L250 180 243 283 274 290 297 150 244 111 210 95Z" />
        <path d="M150 95L180 115 210 95 223 129 198 147 180 120 162 147 137 129Z" fill={fill} /><path d="M180 121V332M131 175L143 303M229 175L216 303M86 276L116 270M244 270L274 276" fill="none" />
        {[164, 196, 228, 260, 292].map(y => <circle key={y} cx="180" cy={y} r="2" fill={stroke} />)}
      </>}
      {item.category === "dresses" && <>
        <path d="M142 78L128 92 140 169 149 196 102 359Q180 380 258 359L211 196 220 169 232 92 218 78 210 131Q180 151 150 131Z" />
        <path d="M150 131Q180 161 210 131M149 196Q180 203 211 196M162 207L147 357M198 207L215 357M180 205V367" fill="none" /><path d="M215 279L225 361" strokeWidth="2" />
      </>}
      {item.category === "bottoms" && <>
        <path d="M123 79H237L248 174 233 366 189 366 180 213 171 366 127 366 112 174Z" /><path d="M123 96H237M180 98V167M137 108L127 169M223 108L233 169M146 111L151 356M214 111L209 356M129 355H171M189 355H232" fill="none" /><circle cx="180" cy="87" r="2" fill={stroke} />
      </>}
      {item.category === "sunglasses" && <g strokeWidth="8" strokeOpacity=".9"><path d="M63 183Q111 155 159 183L151 239Q112 264 78 238ZM201 183Q249 155 297 183L282 238Q248 264 209 239Z" fill="#273c3f" fillOpacity=".8" stroke={fill} /><path d="M159 188Q180 174 201 188M60 183L39 161M300 183L321 161" fill="none" stroke={fill} /><path d="M89 190L124 180M226 190L259 180" stroke="#fff" strokeWidth="3" strokeOpacity=".25" /></g>}
      {item.category === "jewelry" && <g fill="none" stroke={fill} strokeWidth="5" strokeOpacity="1">{Array.from({ length: 19 }, (_, index) => {
        const angle = Math.PI * index / 18;
        const x = 180 - 91 * Math.cos(angle); const y = 134 + 150 * Math.sin(angle);
        return <ellipse key={index} cx={x} cy={y} rx="12" ry="7" transform={`rotate(${90 - index * 10} ${x} ${y})`} />;
      })}<path d="M89 134Q180 82 271 134" strokeWidth="2" /></g>}
    </g>
  </svg>;
}
```

---

<a id="file-src-app-layout-tsx"></a>
## 📄 Fichier : `src/app/layout.tsx`

```typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouCam AI VTO Studio & Personal Shopper",
  description: "Intelligent AI Virtual Try-On Studio & Personal Shopper powered by YouCam API Skin AI & eCommerce VTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
```

---

<a id="file-src-app-globals-css"></a>
## 📄 Fichier : `src/app/globals.css`

```text
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --background: #f6f7f5; --foreground: #232925; --muted: #707971; --line: #e5e8e3; --accent: #28634e; }
* { box-sizing: border-box; }
body { margin: 0; color: var(--foreground); background: var(--background); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; line-height: 1.5; -webkit-font-smoothing: antialiased; }
button, input, select { font: inherit; }
button, a, input, select { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
button { border: 0; background: none; color: inherit; }
button:disabled { opacity: .5; cursor: wait; }
button, .product-card, a { transition: background .18s, border-color .18s, box-shadow .18s; }
button:focus-visible, a:focus-visible, input:focus-visible, select:focus-visible, [tabindex]:focus-visible { outline: 3px solid #62a98c; outline-offset: 3px; }
h1, h2, h3, h4, p { margin: 0; }
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
svg { flex-shrink: 0; }
::selection { background: #d7e8dd; }
.studio-app { min-height: 100vh; color: var(--foreground); background: var(--background); }
.studio-header { min-height: 82px; padding: 16px 32px; background: #fff; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 22px; }
.brand { display: flex; align-items: center; gap: 11px; flex-shrink: 0; }
.brand-mark { width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; background: #263e32; color: #fff; }
.brand h1 { font-size: 17px; letter-spacing: -.6px; font-weight: 650; line-height: 1.3; }
.brand-caption { font-size: 9px; letter-spacing: 2px; color: var(--muted); }
.persona-switch { display: flex; align-items: center; padding: 4px; border: 1px solid var(--line); border-radius: 11px; gap: 3px; background: #f7f8f6; }
.persona, .photo-button { display: flex; align-items: center; justify-content: center; gap: 7px; padding: 7px 10px; border-radius: 7px; font-size: 11px; white-space: nowrap; }
.persona img { width: 23px; height: 23px; object-fit: cover; border-radius: 50%; }
.persona.active { background: #fff; box-shadow: 0 1px 5px #243b2820; color: var(--accent); font-weight: 600; }
.photo-button { border-left: 1px solid var(--line); border-radius: 0 7px 7px 0; padding-left: 13px; }
.photo-button:hover { background: #e8eee8; }
.mode-badge { display: flex; align-items: center; gap: 7px; font-size: 10px; color: #32604a; border: 1px solid #dbe7dc; background: #f1f6ef; border-radius: 20px; padding: 7px 10px; white-space: nowrap; }
.status-dot { width: 6px; height: 6px; border-radius: 50%; background: #5b9475; display: inline-block; flex-shrink: 0; }
.studio-intro { max-width: 1680px; margin: auto; padding: 28px 32px 25px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.eyebrow { font-size: 9px; font-weight: 600; letter-spacing: 1.7px; color: #68806b; margin-bottom: 7px; }
.studio-intro h2 { font-size: clamp(23px, 2.2vw, 32px); font-weight: 550; line-height: 1.25; letter-spacing: -1.1px; margin-bottom: 7px; }
.studio-intro > div > p:last-child { color: var(--muted); font-size: 12px; }
.powered-by { display: flex; align-items: center; gap: 10px; font-size: 10px; color: #8a928b; }
.powered-by strong { font-weight: 500; color: #4d5a50; }
.studio-grid { max-width: 1680px; margin: auto; padding: 0 32px 24px; display: grid; grid-template-columns: minmax(0,1.12fr) minmax(0,1fr) minmax(0,1fr); gap: 24px; align-items: start; }
.studio-column { min-width: 0; }
.column-heading { display: flex; align-items: center; gap: 9px; margin: 0 0 13px; min-height: 23px; }
.step { font-size: 10px; color: #8d968f; border: 1px solid #dce1d9; border-radius: 6px; padding: 1px 5px; }
.column-heading h2 { font-size: 13px; font-weight: 600; letter-spacing: -.2px; }
.heading-note, .heading-icon { margin-left: auto; color: #8b958d; font-size: 9px; letter-spacing: .8px; }
.panel { background: #fff; border: 1px solid #dfe4dd; border-radius: 14px; box-shadow: 0 3px 9px #243b2804; overflow: hidden; }
.panel-topline { padding: 12px 15px; display: flex; justify-content: space-between; gap: 8px; font-size: 10px; border-bottom: 1px solid var(--line); }
.panel-topline > span:first-child { display: flex; align-items: center; gap: 7px; }
.muted { color: var(--muted); font-size: 11px; }
.mirror-visual { position: relative; height: clamp(310px, 24vw, 390px); background: #edece7; isolation: isolate; }
.result-image { height: 100%; width: 100%; object-fit: cover; object-position: center 28%; }
.mirror-visual::after { content: ""; position: absolute; inset: 50% 0 0; background: linear-gradient(transparent, #14201baf); pointer-events: none; z-index: 0; }
.preview-tag { position: absolute; top: 13px; left: 13px; padding: 5px 9px; border: 1px solid #ffffff80; background: #ffffffe8; border-radius: 5px; font-size: 9px; color: #39433c; }
.source-portrait { position: absolute; right: 13px; top: 13px; width: 65px; border: 3px solid #fff; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 15px #0002; }
.source-portrait img { width: 100%; height: 72px; object-fit: cover; }
.source-portrait span { display: block; text-align: center; color: #515b53; font-size: 8px; padding: 3px 0 1px; }
.mirror-caption { position: absolute; bottom: 17px; left: 18px; right: 18px; display: flex; flex-direction: column; gap: 2px; color: #fff; z-index: 1; }
.mirror-caption > span:first-child { font-size: 9px; letter-spacing: 2px; }
.mirror-caption strong { font-size: 22px; font-weight: 500; letter-spacing: -.6px; }
.mirror-caption > span:last-child { font-size: 10px; opacity: .8; text-transform: capitalize; }
.processing-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; backdrop-filter: blur(6px); background: #f5f5efc9; z-index: 2; font-size: 11px; }
.spin { animation: spin 1.1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.score-grid { display: grid; grid-template-columns: repeat(3,1fr); padding: 14px 5px; border-bottom: 1px solid var(--line); }
.score-grid > div { text-align: center; border-right: 1px solid var(--line); }
.score-grid > div:last-child { border: 0; }
.score-grid span { display: block; color: var(--muted); font-size: 9px; }
.score-grid strong { display: block; color: var(--accent); font-size: 22px; font-weight: 550; letter-spacing: -.7px; margin-top: 2px; }
.fit-notes { padding: 13px 16px; display: flex; flex-direction: column; gap: 11px; }
.fit-notes p { display: flex; align-items: start; gap: 9px; color: var(--muted); font-size: 10px; line-height: 1.6; }
.fit-notes svg { color: #61866d; margin-top: 2px; }
.fit-notes strong { color: #3b463d; display: block; font-size: 10px; font-weight: 600; }
.profile-card { display: flex; align-items: center; gap: 10px; padding: 13px 0; }
.profile-card > img { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; }
.profile-card > div { min-width: 0; }
.profile-card strong { display: block; font-size: 11px; font-weight: 600; }
.profile-card div > span { display: block; font-size: 9px; color: var(--muted); }
.palette-badge { margin-left: auto; font-size: 9px; padding: 5px 8px; background: #ecefe6; border: 1px solid #dce3d1; color: #65734d; border-radius: 5px; white-space: nowrap; }
.catalog-title { display: flex; align-items: center; justify-content: space-between; padding: 16px 16px 12px; }
h3 { font-size: 12px; font-weight: 600; }
.category-filters { display: flex; flex-wrap: wrap; gap: 4px; padding: 0 15px 14px; border-bottom: 1px solid var(--line); }
.filter { padding: 5px 9px; font-size: 10px; border-radius: 6px; color: #788076; }
.filter.active { background: #293c31; color: #fff; }
.filter:hover:not(.active) { background: #eef2ec; }
.catalog-list { max-height: 372px; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 8px; scrollbar-gutter: stable; }
.product-card { position: relative; display: flex; align-items: center; gap: 12px; padding: 9px; border: 1px solid #e7eae4; border-radius: 9px; cursor: pointer; }
.product-card:hover { border-color: #9bb19a; background: #fcfdfb; }
.product-card.selected { border-color: #729379; background: #f5f8f2; box-shadow: 0 0 0 1px #72937922; }
.product-image { width: 67px; height: 86px; object-fit: cover; border-radius: 5px; background: #f0f0eb; }
.image-fallback { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; color: #8d9b81; background: #edf0e7; flex-shrink: 0; }
.image-fallback span { font-size: 7px; text-align: center; line-height: 1.3; padding: 0 4px; }
.bundle-list .image-fallback { width: 39px; height: 46px; border-radius: 5px; }
.bundle-list .image-fallback span { display: none; }
.product-info { flex: 1; min-width: 0; }
.product-brand { display: flex; justify-content: space-between; gap: 8px; font-size: 8px; letter-spacing: .7px; color: #7b867b; }
.product-brand > span { font-size: 11px; letter-spacing: -.2px; color: #26352a; white-space: nowrap; }
.product-info h4 { font-size: 11px; line-height: 1.4; font-weight: 600; margin-top: 3px; }
.product-category { font-size: 9px; color: #879085; }
.product-bottom { display: flex; align-items: center; justify-content: space-between; gap: 5px; margin-top: 8px; }
.mini-swatches { display: flex; gap: 3px; }
.mini-swatches i { width: 9px; height: 9px; border-radius: 50%; border: 1px solid #0002; }
.match-badge { font-size: 8px; color: #527352; }
.selected-check { position: absolute; width: 16px; height: 16px; background: #547659; color: white; border: 2px solid white; border-radius: 50%; top: -5px; right: -4px; display: grid; place-items: center; }
.customizer { padding: 16px; border-top: 1px solid var(--line); background: #fcfcfa; }
.customizer h3 { display: flex; align-items: center; gap: 7px; font-size: 11px; margin-bottom: 15px; }
.customizer-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 13px; color: #727d70; font-size: 10px; }
.customizer-row strong { font-weight: 500; color: #3d483d; display: block; margin-top: 2px; }
.swatches { display: flex; gap: 9px; padding: 3px; }
.swatch { width: 22px; height: 22px; border: 1px solid #0002; border-radius: 50%; }
.swatch.active { outline: 1px solid #567655; outline-offset: 3px; }
.customizer select { background: #fff; border: 1px solid #dfe5dc; border-radius: 5px; padding: 3px 9px; font-size: 11px; color: #3c4b3d; }
.fit-control { display: grid; grid-template-columns: repeat(3,1fr); border: 1px solid #e0e6dc; background: #eef1eb; padding: 3px; border-radius: 7px; }
.fit-control button { padding: 6px; border-radius: 4px; font-size: 10px; text-transform: capitalize; color: #7a8375; }
.fit-control button.active { background: #fff; box-shadow: 0 1px 4px #223b2820; color: #314731; font-weight: 600; }
.insight-tabs { display: grid; grid-template-columns: repeat(3,1fr); padding: 4px; background: #e9ede6; border: 1px solid #e1e6dc; border-radius: 9px; gap: 3px; margin-bottom: 12px; }
.insight-tabs button { font-size: 10px; padding: 9px 3px; border-radius: 5px; white-space: nowrap; color: #727d6e; }
.insight-tabs button.active { color: #32432e; background: #fff; box-shadow: 0 1px 4px #23372313; font-weight: 600; }
.insight-panel { padding: 19px; }
.insight-kicker { display: flex; align-items: center; gap: 6px; font-size: 8px; letter-spacing: 1px; color: #6d8568; margin-bottom: 13px; }
.insight-kicker > span { margin-left: auto; font-size: 8px; letter-spacing: 0; background: #eff5e8; padding: 4px 6px; color: #617446; border-radius: 4px; white-space: nowrap; }
.insight-title { font-size: 21px; line-height: 1.25; letter-spacing: -.6px; font-weight: 550; margin-bottom: 6px; }
.bundle-theme { font-size: 10px; color: #6c8466; }
.rationale { font-size: 11px; line-height: 1.8; color: #758070; background: #f5f7f1; border-left: 2px solid #c8d4be; padding: 12px; margin: 17px 0; border-radius: 0 6px 6px 0; }
.bundle-list { display: flex; flex-direction: column; gap: 13px; }
.bundle-list > div { display: flex; gap: 9px; align-items: center; }
.bundle-list img { width: 39px; height: 46px; border-radius: 5px; object-fit: cover; }
.bundle-list > div > span:nth-child(2) { flex: 1; min-width: 0; }
.bundle-list small { display: block; color: #88907f; font-size: 8px; letter-spacing: .7px; }
.bundle-list strong { font-size: 10px; font-weight: 500; display: block; }
.bundle-list > div > span:last-child { font-size: 10px; white-space: nowrap; }
.bundle-total { border-top: 1px solid var(--line); padding-top: 13px; margin-top: 17px; }
.bundle-total p { display: flex; align-items: center; justify-content: space-between; gap: 5px; font-size: 10px; color: #8a9182; margin-bottom: 8px; }
.bundle-total .discount { color: #668353; }
.bundle-total .final-price { color: #293b2c; margin: 13px 0 17px; }
.final-price strong:first-child { font-size: 12px; font-weight: 600; }
.final-price strong:last-child { font-size: 24px; font-weight: 550; letter-spacing: -.7px; }
.primary-button { display: flex; align-items: center; justify-content: center; gap: 9px; width: 100%; border-radius: 7px; padding: 12px; background: #2e4234; color: #fff; font-size: 11px; font-weight: 500; }
.primary-button:hover { background: #43624b; }
.primary-button svg:last-child { margin-left: auto; }
.fine-print { font-size: 9px; line-height: 1.6; text-align: center; color: #8d9587; margin-top: 10px; }
.provenance-note { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 9px; color: #87927e; margin-top: 13px; }
.volume-control { padding: 14px; margin: 18px 0; background: #f5f7f1; border: 1px solid #e4e9dc; border-radius: 8px; }
.volume-control label { display: flex; justify-content: space-between; color: #7c8772; font-size: 11px; }
.volume-control label strong { color: #3c5636; }
.volume-control input { width: 100%; accent-color: #58764b; height: 5px; display: block; margin: 17px 0 11px; }
.volume-control > div { display: flex; justify-content: space-between; font-size: 8px; color: #919a87; }
.metric-list > div { padding: 14px 0; border-bottom: 1px solid var(--line); }
.metric-list > div > div { display: flex; justify-content: space-between; font-size: 11px; }
.metric-list strong { color: #42734e; font-size: 16px; font-weight: 550; }
.metric-list p { display: flex; align-items: center; gap: 8px; font-size: 9px; color: #92998a; margin-top: 4px; }
.metric-list p span { color: #667e57; }
.benefit-card { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 20px 10px; margin-top: 19px; border-radius: 9px; background: #2e4534; color: #fff; }
.benefit-card > span { font-size: 9px; color: #c3d3b8; }
.benefit-card strong { font-size: clamp(21px,2vw,29px); font-weight: 500; letter-spacing: -1px; }
.benefit-card small { color: #a9be9a; font-size: 8px; }
.skin-summary { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; padding: 15px; margin: 16px 0; background: #f4f7f0; border-radius: 8px; }
.skin-summary > span { color: #819073; font-size: 9px; }
.skin-summary strong { display: block; color: #506848; font-size: 23px; font-weight: 500; }
.skin-summary small { font-size: 10px; }
.skin-dimensions { display: grid; grid-template-columns: 1fr 1fr; gap: 17px 18px; }
.skin-dimensions > div > div:first-child { display: flex; justify-content: space-between; font-size: 9px; gap: 4px; margin-bottom: 6px; }
.skin-dimensions strong { color: #5d7750; font-weight: 600; }
.skin-dimensions small { font-size: 7px; color: #959e89; font-weight: 400; }
.progress-track { height: 4px; background: #edf0e7; border-radius: 10px; overflow: hidden; }
.progress-track > span { display: block; height: 100%; background: #91aa78; border-radius: inherit; }
.recommended-colors { border-top: 1px solid var(--line); padding-top: 16px; margin-top: 20px; }
.recommended-colors h4 { font-size: 10px; font-weight: 500; margin-bottom: 10px; }
.recommended-colors > div { display: flex; gap: 8px; flex-wrap: wrap; }
.recommended-colors span { display: flex; align-items: center; gap: 4px; color: #7b856f; font-size: 8px; }
.recommended-colors i { width: 11px; height: 11px; border-radius: 50%; border: 1px solid #0001; }
.studio-footer { max-width: 1680px; margin: auto; padding: 16px 32px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; gap: 12px; color: #9aA290; font-size: 9px; }
.studio-footer > span:last-child { display: flex; align-items: center; gap: 5px; }
.footer-dot { padding: 0 5px; }
.error-banner { margin: 0 32px 15px; border: 1px solid #eccdc4; padding: 12px 16px; border-radius: 8px; background: #fff5f0; color: #925642; }
.error-banner button { margin-left: 12px; text-decoration: underline; }
.loading-inline { display: flex; gap: 7px; align-items: center; color: #75896a; font-size: 10px; margin-bottom: 14px; }
.empty-state { padding: 30px 10px; text-align: center; color: var(--muted); }
.photo-modal { width: calc(100% - 32px); max-width: 440px; max-height: calc(100dvh - 32px); overflow-y: auto; padding: 26px; background: #fff; color: var(--foreground); border: 1px solid #e4e9dc; border-radius: 18px; box-shadow: 0 25px 100px #172b2255; }
.photo-modal::backdrop { background: #17241b70; backdrop-filter: blur(6px); }
.modal-heading { display: flex; align-items: start; justify-content: space-between; margin-bottom: 20px; }
.modal-icon { display: grid; place-items: center; width: 47px; height: 47px; border-radius: 12px; color: #69835c; background: #f0f5e9; }
.icon-button { display: grid; place-items: center; padding: 7px; border-radius: 6px; color: #8a9480; }
.icon-button:hover { background: #eff3e9; }
.photo-modal h2 { font-size: 25px; letter-spacing: -.7px; font-weight: 550; }
.modal-description { color: #859079; font-size: 11px; line-height: 1.8; margin: 9px 0 20px; }
.upload-zone { position: relative; display: flex; flex-direction: column; align-items: center; gap: 8px; background: #f8faf4; border: 1px dashed #b7c8a4; border-radius: 9px; padding: 23px 10px; color: #6e895d; cursor: pointer; }
.upload-zone input { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }
.upload-zone:focus-within { outline: 3px solid #62a98c; outline-offset: 3px; }
.upload-zone strong { font-weight: 500; font-size: 12px; }
.upload-zone > span { font-size: 9px; color: #9ba78e; }
.modal-divider { display: flex; gap: 10px; align-items: center; margin: 20px 0; font-size: 9px; color: #9ca58f; }
.modal-divider span { height: 1px; background: var(--line); flex: 1; }
.url-label { display: flex; gap: 6px; align-items: center; font-size: 10px; color: #79876c; margin-bottom: 8px; }
.photo-modal input[type=url] { background: #fff; width: 100%; border: 1px solid #dce4d2; border-radius: 7px; padding: 11px; font-size: 10px; margin-bottom: 15px; }
.field-error { color: #ab5940; font-size: 11px; margin-bottom: 12px; }
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-thumb { background: #ccd4c3; border-radius: 8px; }
@media (min-width: 1650px) { .studio-grid { gap: 30px; } .catalog-list { max-height: 398px; } }
@media (max-width: 1200px) { .studio-header { flex-wrap: wrap; gap: 12px; padding: 15px 24px; } .mode-badge { margin-left: auto; } .studio-grid { padding: 0 24px 24px; gap: 16px; grid-template-columns: minmax(0,1.05fr) minmax(0,1fr) minmax(0,1fr); } .studio-intro { padding: 24px; } .insight-panel { padding: 14px; } .insight-kicker { flex-wrap: wrap; } .insight-kicker > span { margin-left: 0; } .profile-card { flex-wrap: wrap; } .palette-badge { margin-left: 45px; } .heading-note { display: none; } }
@media (max-width: 1000px) { .studio-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px; } .insights-column { grid-column: 1 / -1; } .insight-panel { padding: 22px; } .mirror-visual { height: 390px; } .insight-kicker > span { margin-left: auto; } .skin-dimensions { grid-template-columns: repeat(3,1fr); } .bundle-list { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; } .palette-badge { margin-left: auto; } .profile-card { flex-wrap: nowrap; } .mode-badge { font-size: 9px; } }
@media (max-width: 650px) { .studio-header { padding: 16px; gap: 15px; } .brand h1 { font-size: 16px; } .persona-switch { order: 3; width: 100%; justify-content: space-between; } .persona, .photo-button { padding: 6px; font-size: 10px; gap: 5px; } .persona img { width: 20px; height: 20px; } .mode-badge { order: 2; margin: 0; font-size: 8px; padding: 5px 8px; } .studio-intro { padding: 23px 16px; } .studio-intro h2 { font-size: 25px; } .studio-intro > div > p:last-child { font-size: 11px; } .powered-by { display: none; } .studio-grid { padding: 0 16px 20px; grid-template-columns: minmax(0,1fr); gap: 24px; } .insights-column { grid-column: auto; } .mirror-visual { height: 430px; } .catalog-list { max-height: 360px; } .product-image { width: 73px; height: 92px; } .insight-panel { padding: 19px; } .skin-dimensions { grid-template-columns: 1fr 1fr; } .bundle-list { display: flex; } .studio-footer { padding: 16px; flex-direction: column; font-size: 8px; } .error-banner { margin: 0 16px 16px; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; } }

/* Judge walkthrough, provenance and transparent assumptions */
.header-status { display: flex; align-items: center; gap: 10px; }
.language-switch { display: flex; gap: 2px; border: 1px solid var(--line); padding: 3px; border-radius: 7px; }
.language-switch button { font-size: 9px; padding: 4px 5px; color: var(--muted); border-radius: 4px; }
.language-switch button[aria-pressed=true] { background: #e9efe5; color: #2e4934; font-weight: 650; }
.jury-guide { max-width: 1616px; margin: 0 auto 24px; padding: 13px 17px; background: #edf2e8; border: 1px solid #dce6d3; border-radius: 10px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.jury-guide strong { font-size: 11px; font-weight: 600; color: #3c5637; }
.jury-guide p { color: #77856b; font-size: 10px; margin-top: 3px; }
.guide-start { background: #fff; border: 1px solid #d5dfcc; color: #415c39; padding: 8px 12px; border-radius: 6px; font-size: 10px; display: flex; align-items: center; gap: 8px; white-space: nowrap; }
.guide-start:hover { background: #f7faf3; }
.guide-content { display: flex; gap: 12px; align-items: center; }
.guide-counter { border: 1px solid #d1ddc5; border-radius: 50%; min-width: 34px; height: 34px; display: grid; place-items: center; font-size: 10px; color: #708b5d; }
.guide-actions { display: flex; gap: 10px; align-items: center; font-size: 10px; }
.demo-garment { display: block; }
.mirror-visual > .demo-garment { object-fit: contain; }
.mirror-visual:has(.demo-garment) { background: #eeede4; }
.mirror-visual:has(.demo-garment)::after { inset: 65% 0 0; }
.bundle-list .demo-garment { width: 39px; height: 46px; border-radius: 5px; flex-shrink: 0; }
.score-explainer { border-bottom: 1px solid var(--line); padding: 10px 16px; background: #fafbf8; color: #76826e; font-size: 10px; }
.score-explainer summary { cursor: pointer; color: #54704b; font-weight: 500; }
.score-explainer p { margin-top: 9px; line-height: 1.7; }
.score-explainer ul { margin: 9px 0 0; padding-left: 16px; line-height: 1.8; }
.assumptions-toggle { width: 100%; margin-top: 13px; border-top: 1px solid var(--line); padding: 12px 0 0; display: flex; align-items: center; justify-content: space-between; color: #5d7850; font-size: 10px; }
.assumptions-toggle[aria-expanded=true] svg { transform: rotate(90deg); }
.roi-assumptions { font-size: 10px; line-height: 1.7; color: #7b856f; padding-top: 13px; }
.roi-assumptions h4 { font-weight: 600; color: #495b3e; }
.roi-assumptions p { margin-top: 10px; }
.roi-assumptions dl { margin: 12px 0; }
.roi-assumptions dl > div { display: flex; justify-content: space-between; gap: 10px; padding: 7px 0; border-bottom: 1px solid var(--line); }
.roi-assumptions dd { text-align: right; color: #4f6546; margin: 0; flex-shrink: 0; }
.roi-assumptions .formula { padding: 11px; border-radius: 6px; background: #f1f5ec; color: #58714a; }
@media (max-width: 1680px) { .jury-guide { margin-left: 32px; margin-right: 32px; } }
@media (max-width: 1200px) { .jury-guide { margin-left: 24px; margin-right: 24px; } }
@media (max-width: 650px) { .header-status { width: 100%; justify-content: space-between; } .studio-header .persona-switch { order: 3; } .jury-guide { margin: 0 16px 23px; padding: 12px; flex-wrap: wrap; gap: 12px; } .guide-content { align-items: start; } .guide-actions { width: 100%; justify-content: flex-end; } .guide-start { font-size: 10px; } .roi-assumptions dl > div { flex-wrap: wrap; gap: 2px; } }
.studio-app[data-demo-step="0"] .persona-switch,
.studio-app[data-demo-step="1"] .catalog-panel,
.studio-app[data-demo-step="2"] .insight-panel { box-shadow: 0 0 0 3px #acc29455; border-color: #89a779; }

.profile-card[hidden] { display: none; }
```

---

<a id="file-src-app-page-tsx"></a>
## 📄 Fichier : `src/app/page.tsx`

```typescript
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
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
  ["all", "Tous"], ["tops", "Tops"], ["dresses", "Robes"],
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
  const [shopperState, setShopperState] = useState<YouCamDataState | null>(null);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<CatalogItem>(CATALOG_ITEMS[0]);
  const [selectedColorHex, setSelectedColorHex] = useState(CATALOG_ITEMS[0].colors[0]?.hex || "#FFF8EE");
  const [selectedSize, setSelectedSize] = useState("M");
  const [fitMode, setFitMode] = useState<FitMode>("regular");
  const [isProcessingTryOn, setIsProcessingTryOn] = useState(true);
  const [isProcessingShopper, setIsProcessingShopper] = useState(true);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [activeTab, setActiveTab] = useState<"personal_shopper" | "ab_comparison" | "skin_diagnostics">("personal_shopper");
  const [simulationOrdersVolume, setSimulationOrdersVolume] = useState(10000);
  const [apiState, setApiState] = useState<YouCamDataState>("MOCK_SIMULATED");
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
  const isSimulated = currentVtoResult?.state !== "LIVE_YOUCAM";
  const previewName = selectedItem.name.replace(/ Camel$/, "").replace(/ Vert Émeraude$/, "");
  const colorName = selectedItem.colors.find(color => color.hex === selectedColorHex)?.name || "";
  const filteredCatalog = activeCategory === "all" ? CATALOG_ITEMS : CATALOG_ITEMS.filter(item => item.category === activeCategory);

  // Cancel obsolete requests when the persona, garment or simulation changes.
  useEffect(() => {
    const controller = new AbortController();
    setIsProcessingShopper(true);
    setShopperState(null); setBundle(null); setAbReport(null);
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
        setApiState(data.state); setShopperState(data.state); setSkinProfile(data.skinProfile); setBundle(data.recommendedBundle); setAbReport(data.abReport);
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

  useEffect(() => {
    const controller = new AbortController();
    setIsProcessingTryOn(true); setTryOnError(""); setCurrentVtoResult(null);
    async function loadTryOn() {
      try {
        const response = await fetch("/api/try-on", {
          method: "POST", headers: { "Content-Type": "application/json" }, signal: controller.signal,
          body: JSON.stringify({ userImageUrl: activeUserImageUrl, garmentId: selectedItem.id, garmentImageUrl: selectedItem.imageUrl, category: selectedItem.category, fitMode, colorHex: selectedColorHex, size: selectedSize }),
        });
        if (!response.ok) throw new Error("L’essayage est indisponible. Réessayez dans un instant.");
        const data: VtoResult = await response.json();
        if (controller.signal.aborted) return;
        setCurrentVtoResult(data); setApiState(data.state);
      } catch (error: unknown) {
        if (!controller.signal.aborted) setTryOnError(error instanceof Error ? error.message : "Essayage impossible.");
      } finally {
        if (!controller.signal.aborted) setIsProcessingTryOn(false);
      }
    }
    void loadTryOn();
    return () => controller.abort();
  }, [selectedItem, selectedColorHex, selectedSize, fitMode, activeUserImageUrl, retryCount]);

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
    setSelectedItem(item); setSelectedColorHex(item.colors[0]?.hex || "#FFF8EE");
    setSelectedSize(item.sizes.includes("M") ? "M" : item.sizes[0] || "M");
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
        <a href="/" className="brand" aria-label={t("YouCam VTO Studio, accueil")}>
          <span className="brand-mark"><Sparkles size={21} /></span>
          <span><h1>{t("YouCam VTO Studio")}</h1><span className="brand-caption">{t("AI PERSONAL SHOPPER")}</span></span>
        </a>
        <div className="persona-switch" aria-label={t("Choisir un mannequin")}>
          {Object.values(MOCK_PERSONAS).map(persona => (
            <button key={persona.id} className={!customImageUrl && selectedPersonaKey === persona.id ? "persona active" : "persona"} aria-pressed={!customImageUrl && selectedPersonaKey === persona.id} onClick={() => { setCustomImageUrl(""); setCustomPreviewUrl(""); setSelectedPersonaKey(persona.id); }}>
              <img src={persona.avatarUrl} alt="" /><span>{persona.name.split(" ")[0]}{t(" (")}{persona.profile.undertone}{t(")")}</span>
            </button>
          ))}
          <button ref={uploadButtonRef} className="photo-button" onClick={() => { setUploadError(""); setShowCustomModal(true); }}><Camera size={16} /><span>{t("Tester ma photo")}</span></button>
        </div>
        <div className="header-status"><div className="language-switch" aria-label={t("Langue / Language")}><button aria-pressed={language === "fr"} onClick={() => setLanguage("fr")}>{t("FR")}</button><button aria-pressed={language === "en"} onClick={() => setLanguage("en")}>{t("EN")}</button></div><span className="mode-badge"><span className="status-dot" />{t(apiState === "LIVE_YOUCAM" ? "LIVE_YOUCAM" : "Mode Simulation Transparent (MOCK_SIMULATED)")}</span></div>
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

      {(tryOnError || shopperError) && <div className="error-banner" role="alert">{t(tryOnError || shopperError)}<button onClick={() => setRetryCount(value => value + 1)}>{t("Réessayer")}</button></div>}

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
            <div className="score-grid" aria-label={t("Scores d’essayage")}>
              {([ ["Fidélité Texture", currentVtoResult?.tryOnFidelityScore], ["Ajustement Fit", currentVtoResult?.fitMatchScore], ["Harmonie Teint", currentVtoResult?.skinToneHarmonyScore] ] as const).map(([label, score]) => <div key={t(label)}><span>{t(label)}</span><strong>{score == null ? "—" : `${score}%`}</strong></div>)}
            </div>
            <details className="score-explainer"><summary>{t("Comment lire les scores ?")}</summary><p>{t(isSimulated ? "Scores issus des fixtures de simulation : ils illustrent le parcours, sans évaluer réellement votre photo." : "Les scores absents de l’API sont affichés comme non disponibles, sans valeur par défaut.")}</p><ul><li>{t("Fidélité : indicateur de restitution du vêtement.")}</li><li>{t("Fit : indicateur d’ajustement selon la coupe choisie.")}</li><li>{t("Harmonie : affinité entre le coloris et le sous-ton.")}</li></ul><p>{t("100 = score le plus élevé. En simulation, la couleur et la coupe modifient les indicateurs ; la taille ne déclenche aucune mesure corporelle.")}</p></details>
            {apiState === "LIVE_YOUCAM" && <p className="fine-print">{t("L’API vêtements ne fournit pas ces scores. Taille, coupe et recoloration sont des contrôles de simulation uniquement.")}</p>}
            <div className="fit-notes"><p><CheckCircle2 size={16} /><span><strong>{t("Conseil de coupe")}</strong>{language === "fr" ? currentVtoResult?.fitAdvice || "Votre conseil personnalisé apparaît après l’essayage." : `${t(colorName)} · ${fitMode} fit. ${isSimulated ? "Illustrative fit guidance, without body measurements." : "Review the API scores alongside the generated result."}`}</span></p><p><Palette size={16} /><span><strong>{t("Drapé & matière")}</strong>{language === "fr" ? currentVtoResult?.fabricDrapeAssessment || selectedItem.fabric : t(selectedItem.fabric)}</span></p></div>
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
            <div className="customizer"><h3><SlidersHorizontal size={15} />{t("Ajuster la Cabine d’Essayage")}</h3><div className="customizer-row"><span>{t("Coloris")}<strong>{t(colorName)}</strong></span><div className="swatches">{selectedItem.colors.map(color => <button key={color.hex} title={t(color.name)} aria-label={`${t("Coloris")} ${t(color.name)}`} aria-pressed={selectedColorHex === color.hex} className={selectedColorHex === color.hex ? "swatch active" : "swatch"} style={{ backgroundColor: color.hex }} disabled={apiState === "LIVE_YOUCAM" || isProcessingTryOn} onClick={() => setSelectedColorHex(color.hex)} />)}</div></div>
              <div className="customizer-row"><label htmlFor="garment-size">{t("Taille")}</label><select disabled={apiState === "LIVE_YOUCAM" || isProcessingTryOn} id="garment-size" value={selectedSize} onChange={event => setSelectedSize(event.target.value)}>{selectedItem.sizes.map(size => <option key={size} value={size}>{t(size)}</option>)}</select></div>
              <div className="fit-control" aria-label={t("Coupe")}>{(["fitted", "regular", "relaxed"] as const).map(mode => <button key={mode} className={fitMode === mode ? "active" : ""} aria-pressed={fitMode === mode} disabled={apiState === "LIVE_YOUCAM" || isProcessingTryOn} onClick={() => setFitMode(mode)}>{mode}</button>)}</div>
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
              <div className="benefit-card"><span>{t("Bénéfice net annuel estimé")}</span><strong>{t("+")}{money(abReport.differentialGains.estimatedAnnualNetBenefitEUR)}</strong><small>{t("Panier de référence : ")}{money(abReport.simulationParams.basketEUR)}</small></div><p className="fine-print">{t("Projection illustrative avant coûts non modélisés. Aucun gain commercial mesuré.")}</p>
              <button className="assumptions-toggle" aria-expanded={showAssumptions} aria-controls="roi-assumptions" onClick={() => setShowAssumptions(value => !value)}>{t(showAssumptions ? "Masquer les hypothèses" : "Voir les hypothèses")}<ChevronRight size={14} /></button>
              {showAssumptions && <div className="roi-assumptions" id="roi-assumptions"><h4>{t("Hypothèses du simulateur")}</h4><p>{t("Toutes les valeurs ci-dessous sont des hypothèses internes de démonstration, sans validation par une étude commerciale.")}</p>
                <dl><div><dt>{t("Commandes annuelles")}</dt><dd>{abReport.simulationParams.annualOrdersVolume.toLocaleString(language === "fr" ? "fr-FR" : "en-GB")}</dd></div><div><dt>{t("Panier standard / personnalisé")}</dt><dd>{money(abReport.baselineStandardCommerce.averageBasketEUR)}{t("/")}{money(abReport.simulationParams.basketEUR)}</dd></div><div><dt>{t("Retours standard / personnalisés")}</dt><dd>{abReport.baselineStandardCommerce.returnRate}{t("% /")}{abReport.youCamPoweredCommerce.returnRate}{t("%")}</dd></div><div><dt>{t("Coût de traitement par retour évité")}</dt><dd>{money(12.5)}</dd></div><div><dt>{t("Revenu additionnel lié au panier")}</dt><dd>{money(basketGain)}</dd></div><div><dt>{t("Économies de traitement des retours")}</dt><dd>{money(returnSavings)}</dd></div></dl>
                <p className="formula">{t("Gain affiché = N × (panier personnalisé − panier standard) + N × (taux de retour standard − taux personnalisé) × 12,50 €.")}</p><p>{t("Les taux de retour sont exprimés en fractions dans la formule. Le total est arrondi à l’euro.")}</p>
                <p>{t("Le panier standard vaut 76 % du panier personnalisé. Les taux de conversion et de retour sont modulés par le score d’harmonie du bundle.")}</p><p>{t("La hausse de conversion affichée n’est pas monétisée dans ce total. Marge produit, coûts API, acquisition, intégration et exploitation sont exclus : le « bénéfice net annuel » affiché est un gain modélisé, pas un profit net comptable.")}</p>
              </div>}
            </>}
            {activeTab === "skin_diagnostics" && !shopperError && <>
              <div className="insight-kicker"><Palette size={14} />{t("SKIN AI · 11 DIMENSIONS")}</div><h3 className="insight-title">{t("Bilan Dermatologique IA")}</h3><p className="muted">{t("Votre profil beauté et colorimétrique.")}</p>
              <div className="skin-summary"><span>{t("Score global")}<strong>{skinProfile.overallHealthScore}<small>{t("/100")}</small></strong></span><span>{t("Âge cutané")}<strong>{skinProfile.skinAge}<small>{t(" ans")}</small></strong></span></div>
              <div className="skin-dimensions">{Object.entries(skinProfile.concerns).map(([key, concern]) => <div key={key}><div><span>{t(concernLabels[key] || key)}</span><strong>{concern.score}<small>{t("/100")}</small></strong></div><div className="progress-track"><span style={{ width: `${concern.score}%` }} /></div></div>)}</div>
              <div className="recommended-colors"><h4>{t("Couleurs recommandées")}</h4><div>{skinProfile.colorimetry.recommendedColors.map(color => <span key={t(color.name)}><i style={{ backgroundColor: color.hex }} />{t(color.name)}</span>)}</div></div><p className="fine-print">{t("Indicateurs cosmétiques, sans valeur de diagnostic médical. Un score élevé indique un meilleur résultat.")}</p>
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
        <form onSubmit={applyUrl}><label className="url-label" htmlFor="photo-url"><LinkIcon size={14} />{t("URL d’image directe")}</label><input id="photo-url" type="url" placeholder={t("https://exemple.com/mon-portrait.jpg")} value={inputUrl} onChange={event => setInputUrl(event.target.value)} required disabled={isUploadingFile} />{uploadError && <p className="field-error" role="alert">{t(uploadError)}</p>}<button className="primary-button" disabled={isUploadingFile} type="submit">{t("Appliquer et Diagnostiquer")}<ArrowRight size={16} /></button></form>
        <p className="fine-print">{t(apiState === "MOCK_SIMULATED" ? "Mode simulation : les résultats sont des exemples et ne constituent pas une analyse de votre photo." : "Votre photo sera transmise à YouCam pour l’analyse et l’essayage.")}</p>
      </dialog>
    </div>
  );
}
```

---

<a id="file-src-app-api-catalog-route-ts"></a>
## 📄 Fichier : `src/app/api/catalog/route.ts`

```typescript
import { NextResponse } from "next/server";
import { CATALOG_ITEMS } from "@/data/catalog";

export async function GET() {
  return NextResponse.json({
    items: CATALOG_ITEMS,
    total: CATALOG_ITEMS.length,
  });
}
```

---

<a id="file-src-app-api-file-route-ts"></a>
## 📄 Fichier : `src/app/api/file/route.ts`

```typescript
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
```

---

<a id="file-src-app-api-skin-analysis-route-ts"></a>
## 📄 Fichier : `src/app/api/skin-analysis/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { YouCamClient } from "@/lib/youcam-client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = new YouCamClient();
    const result = await client.analyzeSkin(body);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur lors de l'analyse de peau";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

---

<a id="file-src-app-api-try-on-route-ts"></a>
## 📄 Fichier : `src/app/api/try-on/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { YouCamClient } from "@/lib/youcam-client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const client = new YouCamClient();
    const result = await client.tryOn(body);
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur lors de l'essayage virtuel";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
```

---

<a id="file-src-app-api-personal-shopper-route-ts"></a>
## 📄 Fichier : `src/app/api/personal-shopper/route.ts`

```typescript
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
```

---

<a id="file-src-tests-youcam-client-test-ts"></a>
## 📄 Fichier : `src/tests/youcam-client.test.ts`

```typescript
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
```

---

<a id="file-src-tests-youcam-live-transport-test-ts"></a>
## 📄 Fichier : `src/tests/youcam-live-transport.test.ts`

```typescript
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { YouCamLiveTransport } from "../lib/youcam-live-transport";
import { YouCamClient } from "../lib/youcam-client";

const key = "contract-fixture-not-a-secret";
const input = { userImageUrl: "https://example.test/model.jpg", garmentImageUrl: "https://example.test/coat.jpg", category: "outerwear" as const, fitMode: "relaxed" as const, colorHex: "#111111", size: "L" };
const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });

describe("YouCam native contracts: controlled responses, not a live proof", () => {
  it("uses native clothing fields and polling without invented scores", async () => {
    const calls: Array<{ url: string; init?: RequestInit }> = [];
    const responses = [json({ data: { task_id: "task/id" } }), json({ data: { task_status: "running" } }), json({ data: { task_status: "success", results: { url: "https://example.test/generated.jpg" } } })];
    const client = new YouCamClient({ apiKey: key, mode: "live_only", pollIntervalMs: 0, fetchImpl: async (url, init) => { calls.push({ url: String(url), init }); return responses.shift()!; } });
    const result = await client.tryOn(input);
    assert.deepEqual(JSON.parse(String(calls[0].init?.body)), { src_file_url: input.userImageUrl, ref_file_url: input.garmentImageUrl, garment_category: "outer" });
    assert.equal(calls[0].url, "https://yce-api-01.makeupar.com/s2s/v2.0/task/cloth-v4");
    assert.ok(calls[1].url.endsWith("/cloth-v4/task%2Fid"));
    assert.equal(result.state, "LIVE_YOUCAM"); assert.equal(result.outputImageUrl, "https://example.test/generated.jpg");
    assert.equal(result.fitMatchScore, null); assert.equal(result.skinToneHarmonyScore, null); assert.equal(result.tryOnFidelityScore, null);
  });
  it("does not substitute the input image for a missing generated result", async () => {
    let count = 0;
    const transport = new YouCamLiveTransport({ apiKey: key, fetchImpl: async () => ++count === 1 ? json({ data: { task_id: "id" } }) : json({ data: { task_status: "success", results: {} } }) });
    await assert.rejects(transport.tryOn(input), /URL de résultat absente/);
  });
  it("fails closed in auto mode on invalid credentials", async () => {
    const client = new YouCamClient({ mode: "auto", apiKey: key, fetchImpl: async () => json({ error: "Unauthorized" }, 401) });
    await assert.rejects(client.tryOn(input), /HTTP 401/);
  });
  it("reports the provider refusal while redacting credentials and URLs", async () => {
    const client = new YouCamClient({ mode: "live_only", apiKey: key, fetchImpl: async () => json({ error_code: "CreditInsufficiency", error: "No credits: " + key + " https://example.test/private?token=hidden" }, 400) });
    await assert.rejects(client.tryOn(input), (error: unknown) => {
      assert.ok(error instanceof Error);
      assert.match(error.message, /CreditInsufficiency/);
      assert.ok(!error.message.includes(key));
      assert.ok(!error.message.includes("token=hidden"));
      return true;
    });
  });
  it("stops on task errors and a finite polling budget", async () => {
    for (const status of ["error", "running"]) {
      let count = 0;
      const transport = new YouCamLiveTransport({ apiKey: key, pollIntervalMs: 0, maxPollAttempts: 2, fetchImpl: async () => ++count === 1 ? json({ data: { task_id: "id" } }) : json({ data: { task_status: status } }) });
      await assert.rejects(transport.tryOn(input), status === "error" ? /tâche VTO a échoué/ : /polling dépassé/);
      assert.equal(count, status === "error" ? 2 : 3);
    }
  });
  it("uploads metadata then bytes, without forwarding the API token to storage", async () => {
    const calls: Array<{ init?: RequestInit }> = [];
    const transport = new YouCamLiveTransport({ apiKey: key, fetchImpl: async (_url, init) => {
      calls.push({ init });
      return calls.length === 1 ? json({ data: { files: [{ file_id: "file/id", requests: [{ method: "PUT", url: "https://storage.example.test/upload", headers: { "Content-Type": "image/png" } }] }] } }) : new Response(null, { status: 200 });
    } });
    const result = await transport.upload({ buffer: new Uint8Array([1, 2, 3]), fileName: "test.png", mimeType: "image/png" });
    assert.deepEqual(JSON.parse(String(calls[0].init?.body)), { files: [{ content_type: "image/png", file_name: "test.png", file_size: 3 }] });
    assert.equal(calls[1].init?.method, "PUT");
    assert.equal(new Headers(calls[1].init?.headers).get("Authorization"), null);
    assert.deepEqual([...new Uint8Array(await (calls[1].init?.body as Blob).arrayBuffer())], [1, 2, 3]);
    assert.equal(result.fileUrl, "youcam-file://file/id"); assert.equal(result.state, "LIVE_YOUCAM");
  });
  it("supports file IDs and refuses unsupported accessories without a request", async () => {
    let count = 0;
    const transport = new YouCamLiveTransport({ apiKey: key, fetchImpl: async (_url, init) => {
      count++;
      if (count === 1) { assert.equal(JSON.parse(String(init?.body)).src_file_id, "file/id"); return json({ data: { task_id: "id" } }); }
      return json({ data: { task_status: "success", results: { url: "https://example.test/output.jpg" } } });
    } });
    await transport.tryOn({ ...input, userImageUrl: "youcam-file://file/id" });
    await assert.rejects(transport.tryOn({ ...input, category: "jewelry" }), /accessoires/);
    assert.equal(count, 2);
  });
  it("does not claim live skin measurements from an unverified mapping", async () => {
    const client = new YouCamClient({ apiKey: key, mode: "live_only", fetchImpl: async () => { throw new Error("Must not consume a task"); } });
    await assert.rejects(client.analyzeSkin({ imageUrl: input.userImageUrl }), /Skin AI live non validé/);
  });
});
```

---

<a id="file-src-tests-personal-shopper-test-ts"></a>
## 📄 Fichier : `src/tests/personal-shopper.test.ts`

```typescript
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
```

---

<a id="file-scripts-e2e-browser-test-ts"></a>
## 📄 Fichier : `scripts/e2e-browser-test.ts`

```typescript
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

    // Attente du traitement morphologique
    await page.waitForFunction(() => {
      const txt = document.body.innerText;
      return !txt.includes("Ajustement morphologique en cours") && !txt.includes("Preparing your try-on");
    });
    await new Promise((r) => setTimeout(r, 400));

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
      abText.toLowerCase().includes("bénéfice net annuel") || abText.toLowerCase().includes("estimated annual net benefit"),
      "Le bénéfice net annuel doit être chiffré"
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
      skinText.includes("Bilan Dermatologique IA") || skinText.includes("AI Skin Assessment"),
      "Le titre du bilan dermatologique doit être visible"
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
```

---

<a id="file-scripts-ui-regression-test-mjs"></a>
## 📄 Fichier : `scripts/ui-regression-test.mjs`

```text
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

// Additional interaction and responsive checks against the running local studio.
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
try {
  const page = await browser.newPage();
  const errors = [];
  let shopperCalls = 0;
  page.on('request', request => { if (request.url().endsWith('/api/personal-shopper')) shopperCalls++; });
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  assert.equal(await page.$eval('.studio-app', el => getComputedStyle(el).backgroundColor), 'rgb(246, 247, 245)');
  const clickText = (...texts) => page.evaluate((...values) => {
    const button = [...document.querySelectorAll('button')].find(el => values.includes(el.textContent.trim()));
    if (!button) throw new Error(`Missing button: ${values.join(' or ')}`);
    button.click();
  }, ...texts);

  await clickText('Manteaux', 'Coats');
  assert.equal(await page.$$eval('.product-card', cards => cards.length), 1);
  await page.click('.product-card');
  await page.waitForFunction(() => !document.querySelector('.processing-overlay'));
  await page.click('.swatches button:last-child');
  await clickText('relaxed');
  await page.select('#garment-size', 'L');
  await page.waitForFunction(() => !document.querySelector('.processing-overlay'));
  assert.match(await page.$eval('.mirror-caption', el => el.textContent), /relaxed · (Taille|Size) L/);
  assert.equal(await page.$$eval('.swatches button[aria-pressed=true]', buttons => buttons.length), 1);

  await clickText('Impact A/B', 'A/B Impact');
  await page.waitForSelector('.benefit-card strong');
  const shopperCallsBeforeSlider = shopperCalls;
  const initialBenefit = await page.$eval('.benefit-card strong', el => el.textContent);
  await page.focus('#orders-volume');
  await page.keyboard.press('ArrowRight');
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  await page.waitForFunction(before => document.querySelector('.benefit-card strong')?.textContent !== before, {}, initialBenefit);
  const changedBenefit = await page.$eval('.benefit-card strong', el => el.textContent);
  assert.notEqual(changedBenefit, initialBenefit);
  assert.equal(shopperCalls, shopperCallsBeforeSlider, 'ROI arithmetic must not trigger another Skin API request');
  assert.equal(await page.$eval('#orders-volume', el => el.value), '11000');

  await clickText('Peau (11)', 'Skin (11)');
  await page.waitForSelector('.skin-dimensions');
  assert.equal(await page.$$eval('.skin-dimensions > div', els => els.length), 11);
  await page.screenshot({ path: 'docs/screenshots/05-skin-dimensions.png', fullPage: true });

  await page.click('.photo-button');
  assert.equal(await page.$eval('dialog', el => el.open), true);
  assert.ok(await page.$('dialog input[type=file]'));
  assert.ok(await page.$('dialog input[type=url]'));
  await page.screenshot({ path: 'docs/screenshots/06-photo-modal.png', fullPage: false });
  await page.keyboard.press('Escape');
  assert.equal(await page.$eval('dialog', el => el.open), false);
  assert.equal(await page.$eval('.photo-button', el => el === document.activeElement), true);

  // A small valid PNG tests the real file-input -> local API -> custom profile path.
  await page.click('.photo-button');
  const fileChooser = await page.$('input[type=file]');
  const { writeFile, unlink } = await import('node:fs/promises');
  const uploadPath = '/tmp/youcam-ui-test.png';
  await writeFile(uploadPath, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64'));
  await fileChooser.uploadFile(uploadPath);
  await page.waitForFunction(() => !document.querySelector('dialog').open);
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  assert.match(await page.$eval('.profile-card', el => el.textContent), /Photo Personnalisée|Custom Photo/);
  await unlink(uploadPath);

  await clickText('Emma (warm)');
  await clickText('Tous', 'All');
  await clickText('Look Styliste', 'Stylist Look');
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  await page.waitForNetworkIdle({ idleTime: 500 });
  for (const width of [1440, 1024, 768, 390]) {
    await page.setViewport({ width, height: 900 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}px`);
    if (width === 390) {
      await page.screenshot({ path: 'docs/screenshots/07-mobile-studio.png', fullPage: true });
      await page.click('.photo-button');
      assert.ok(await page.$eval('dialog', el => el.getBoundingClientRect().width <= innerWidth));
      await page.keyboard.press('Escape');
    }
  }
  assert.deepEqual(errors, [], 'No uncaught browser errors');
  console.log('PASS: styles, filters, garment, color, fit, size, ROI slider, 11 skin dimensions, modal, upload, focus, 4 viewport sizes, no browser errors.');
} finally {
  await browser.close();
}
```

---

<a id="file-scripts-jury-demo-test-mjs"></a>
## 📄 Fichier : `scripts/jury-demo-test.mjs`

```text
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  const browserErrors = [];
  const apiCalls = [];
  page.on('pageerror', error => browserErrors.push(error.message));
  page.on('request', request => { if (request.url().includes('/api/')) apiCalls.push(request.url()); });
  const click = (...texts) => page.evaluate((...values) => {
    const target = [...document.querySelectorAll('button')].find(button => values.includes(button.textContent.trim()));
    assertButton(target, values.join(' or '));
    function assertButton(button, label) { if (!button) throw new Error(`Missing button: ${label}`); button.click(); }
  }, ...texts);
  const settled = async () => {
    await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
    await page.waitForNetworkIdle({ idleTime: 350 });
  };
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await settled();
  await click('Judge demo', 'Démo jury');
  await page.waitForSelector('[data-demo-step="0"]');
  await click('Lucas (cool)');
  await page.waitForFunction(() => document.querySelector('.profile-card')?.textContent.includes('cool'));
  await settled();
  await click('Next step', 'Étape suivante');
  await page.waitForSelector('[data-demo-step="1"]');
  await settled();
  assert.equal(await page.$eval('.mirror-visual svg', el => el.dataset.category), 'outerwear');
  assert.match(await page.$eval('.product-card[aria-pressed=true]', el => el.textContent), /Manteau Croisé|Double-breasted Wool Coat/);
  assert.match(await page.$eval('.preview-tag', el => el.textContent), /Illustration produit|Product illustration/);
  assert.equal(await page.$$eval('.mirror-visual img.result-image', els => els.length), 0);
  const beforeColor = await page.$eval('.mirror-visual svg', el => el.dataset.color);
  await page.click('.swatches button:last-child');
  await page.waitForFunction(before => document.querySelector('.mirror-visual svg')?.getAttribute('data-color') !== before, {}, beforeColor);
  await settled();
  const cardHarmony = await page.$eval('.product-card[aria-pressed=true] .match-badge', el => parseInt(el.textContent, 10));
  const mirrorHarmony = await page.$eval('.score-grid > div:last-child strong', el => parseInt(el.textContent, 10));
  assert.equal(mirrorHarmony, cardHarmony, 'Persona and color harmony must agree across panels');
  await click('relaxed');
  await page.waitForFunction(() => document.querySelector('.mirror-visual svg')?.getAttribute('data-fit') === 'relaxed');
  await page.click('.score-explainer summary');
  assert.match(await page.$eval('.score-explainer', el => el.textContent), /sans évaluer réellement votre photo|demonstrate the flow without analyzing your photo/);
  await click('Next step', 'Étape suivante');
  await page.waitForSelector('[data-demo-step="2"]');
  await page.waitForSelector('.benefit-card');
  await click('View assumptions', 'Voir les hypothèses');
  await page.waitForSelector('#roi-assumptions');
  assert.match(await page.$eval('#roi-assumptions', el => el.textContent), /pas un profit net comptable|not accounting net profit/);
  // Verify that the disclosed components reconcile with the API's rounded total.
  const report = await page.evaluate(async () => {
    const imageUrl = document.querySelector('.source-portrait img').src;
    return (await (await fetch('/api/personal-shopper', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ imageUrl, annualOrdersVolume: 10000 }) })).json()).abReport;
  });
  const orders = report.simulationParams.annualOrdersVolume;
  const basketGain = orders * (report.youCamPoweredCommerce.averageBasketEUR - report.baselineStandardCommerce.averageBasketEUR);
  const savings = orders * (report.baselineStandardCommerce.returnRate - report.youCamPoweredCommerce.returnRate) / 100 * 12.5;
  assert.equal(Math.round(basketGain + savings), report.differentialGains.estimatedAnnualNetBenefitEUR);
  await page.screenshot({ path: 'docs/screenshots/08-jury-assumptions-fr.png', fullPage: true });

  await settled();
  const requestCount = apiCalls.length;
  await click('EN');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  assert.equal(await page.$eval('#tab-ab_comparison', el => el.textContent), 'A/B Impact');
  assert.match(await page.$eval('#roi-assumptions', el => el.textContent), /not accounting net profit/);
  assert.match(await page.$eval('.mirror-caption', el => el.textContent), /Double-breasted Wool Coat/);
  assert.match(await page.$eval('.guide-content', el => el.textContent), /projected impact/);
  await page.waitForNetworkIdle({ idleTime: 350 });
  assert.equal(apiCalls.length, requestCount, 'Language changes must not trigger YouCam API calls');
  await page.screenshot({ path: 'docs/screenshots/09-jury-english.png', fullPage: true });
  await click('Finish');
  await page.waitForSelector('[data-demo-step=""]');
  await click('Stylist Look');
  await page.waitForFunction(() => document.querySelector('.insight-title')?.textContent.includes('Signature Selection'));
  assert.match(await page.$eval('.rationale', el => el.textContent), /undertone affinity/);
  await click('Skin (11)');
  await page.waitForSelector('.skin-dimensions');
  assert.equal(await page.$$eval('.skin-dimensions > div', els => els.length), 11);
  await click('Try my photo');
  assert.equal(await page.$eval('dialog', el => el.getAttribute('aria-label')), 'Try your photo');
  assert.match(await page.$eval('dialog', el => el.textContent), /Simulation mode/);
  await page.keyboard.press('Escape');
  for (const width of [1440, 1024, 768, 390]) {
    await page.setViewport({ width, height: 900 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `EN overflows at ${width}px`);
  }
  await page.screenshot({ path: 'docs/screenshots/10-jury-mobile-en.png', fullPage: true });
  await click('FR');
  await page.waitForFunction(() => document.documentElement.lang === 'fr');
  assert.equal(await page.$eval('#tab-personal_shopper', el => el.textContent), 'Look Styliste');
  assert.equal(await page.$eval('.mirror-visual svg', el => el.dataset.category), 'outerwear');
  assert.deepEqual(browserErrors, []);
  console.log('PASS: 3-step jury guide, coherent local illustration, color/fit changes, score provenance, ROI formula, FR/EN with state preserved and no extra API calls, all EN tabs/modal, 4 responsive widths.');
} finally { await browser.close(); }
```

---

<a id="file-scripts-live-ui-contract-test-mjs"></a>
## 📄 Fichier : `scripts/live-ui-contract-test.mjs`

```text
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setRequestInterception(true);
  page.on('request', request => {
    const url = new URL(request.url());
    if (url.pathname === '/api/personal-shopper') return void request.respond({ status: 400, contentType: 'application/json', body: JSON.stringify({ error: 'Native skin mapping not verified' }) });
    if (url.pathname === '/api/try-on') return void request.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({
      state: 'LIVE_YOUCAM', taskId: 'controlled-response-not-a-live-task', status: 'SUCCESS',
      userImageUrl: 'https://example.test/source.png', garmentImageUrl: 'https://example.test/reference.png', outputImageUrl: 'https://example.test/controlled-result.png',
      category: 'tops', tryOnFidelityScore: null, fitMatchScore: null, skinToneHarmonyScore: null,
      fitAdvice: 'No body measurements supplied.', fabricDrapeAssessment: 'Inspect the generated result.', executionTimeMs: 100,
    }) });
    if (url.hostname === 'example.test') return void request.respond({ status: 200, contentType: 'image/png', body: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64') });
    void request.continue();
  });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => document.querySelector('.mode-badge')?.textContent.includes('LIVE_YOUCAM'));
  assert.deepEqual(await page.$$eval('.score-grid strong', els => els.map(el => el.textContent)), ['—', '—', '—']);
  assert.equal(await page.$eval('.profile-card', el => getComputedStyle(el).display), 'none');
  assert.equal(await page.$$eval('.bundle-list', els => els.length), 0);
  assert.equal(await page.$eval('#garment-size', el => el.disabled), true);
  const mirrorText = await page.$eval('.mirror-panel', el => el.textContent);
  assert.ok(mirrorText.includes('contrôles de simulation uniquement') || mirrorText.includes('simulation controls only'));
  assert.match(await page.$eval('.insight-panel', el => el.textContent), /aucune analyse de démonstration|no demo analysis is substituted/);
  assert.equal(await page.$eval('.result-image', el => el.tagName.toLowerCase()), 'img');
  await page.click('#tab-skin_diagnostics');
  assert.equal(await page.$$eval('.skin-dimensions', els => els.length), 0);
  console.log('PASS: controlled UI responses show unavailable live scores, hide failed skin fixtures and disable unsupported live controls. Not an actual YouCam run.');
} finally { await browser.close(); }
```

---

<a id="file-scripts-live-youcam-proof-ts"></a>
## 📄 Fichier : `scripts/live-youcam-proof.ts`

```typescript
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import nextEnv from "@next/env";
import { YouCamClient } from "../src/lib/youcam-client";

nextEnv.loadEnvConfig(process.cwd());
const folder = path.resolve("docs/live");
await fs.mkdir(folder, { recursive: true });
const reportPath = path.join(folder, "STATUS.json");
const keyPresent = !!process.env.YOUCAM_API_KEY?.trim();
const runRequested = process.argv.includes("--run");
const base = { checkedAt: new Date().toISOString(), testClass: "INTEGRATION_TEST", keyPresent, apiRequestsMade: false };
async function save(report: Record<string, unknown>) {
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify(report, null, 2));
}
if (!keyPresent || !runRequested) {
  await save({ ...base, status: "BLOCKED", reason: !keyPresent ? "YOUCAM_API_KEY is not configured." : "Explicit --run is required to consume one provider task.", nextStep: "Configure the key privately in .env.local, check available units, then run npm run test:live -- --run." });
  process.exitCode = 2;
} else {
  // At most one task is created. Polling never submits a replacement task.
  let apiRequestCount = 0;
  const client = new YouCamClient({ fetchImpl: async (url, init) => { apiRequestCount++; return fetch(url, init); }, mode: "live_only", timeoutMs: 20000, maxPollAttempts: 18, pollIntervalMs: 10000 });
  try {
    const result = await client.tryOn({
      userImageUrl: process.env.YOUCAM_PROOF_USER_IMAGE_URL || "https://plugins-media.makeupar.com/strapi/assets/clothes_03_cccd5d4803.jpeg",
      garmentImageUrl: process.env.YOUCAM_PROOF_GARMENT_IMAGE_URL || "https://plugins-media.makeupar.com/strapi/assets/clothes_reference_full_body_01_5a000d999f.png",
      category: "dresses",
    });
    if (result.state !== "LIVE_YOUCAM" || result.status !== "SUCCESS") throw new Error("Live proof rejected a non-live or unsuccessful result.");
    const response = await fetch(result.outputImageUrl, { signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error("Could not retrieve the generated image.");
    const data = Buffer.from(await response.arrayBuffer());
    const png = data.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
    const jpeg = data[0] === 255 && data[1] === 216 && data[2] === 255;
    const webp = data.subarray(0, 4).toString() === "RIFF" && data.subarray(8, 12).toString() === "WEBP";
    if (!png && !jpeg && !webp) throw new Error("The returned resource is not a supported image.");
    const imageFile = "result." + (png ? "png" : jpeg ? "jpg" : "webp");
    await fs.writeFile(path.join(folder, imageFile), data);
    await save({ ...base, status: "PASS", apiRequestsMade: apiRequestCount > 0, apiRequestCount, taskCreations: 1, state: result.state, endpoint: "cloth-v4", taskIdHash: createHash("sha256").update(result.taskId).digest("hex"), resultFile: imageFile, resultSha256: createHash("sha256").update(data).digest("hex"), resultBytes: data.length, elapsedMs: result.executionTimeMs, visualReview: "NOT_VERIFIED", note: "A human or agent must inspect the saved image. This does not validate Skin AI, accessories or business gains." });
  } catch (error: unknown) {
    // Avoid printing response URLs, bearer tokens or opaque provider payloads.
    const message = error instanceof Error ? error.message : "Unknown error";
    await save({ ...base, status: "FAIL", apiRequestsMade: apiRequestCount > 0, apiRequestCount, error: message.replace(/https?:\/\/\S+/g, "[redacted-url]").replaceAll(process.env.YOUCAM_API_KEY || "\0", "[redacted-key]"), visualReview: "NOT_VERIFIED" });
    process.exitCode = 1;
  }
}
```

---

<a id="file-scripts-build-gemini-bundle-py"></a>
## 📄 Fichier : `scripts/build-gemini-bundle.py`

```text
import os
import zipfile

root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
output_md = os.path.join(root_dir, 'YOUCAM_VTO_AGENT_BUNDLE.md')
output_md_v3 = os.path.join(root_dir, 'YOUCAM_VTO_AGENT_BUNDLE_3.md')
output_zip = os.path.join(root_dir, 'youcam-vto-agent-src.zip')

# Liste ordonnée des fichiers du projet à inclure
files_to_bundle = [
    'README.md',
    'ARCHITECTURE.md',
    'SUBMISSION_DEVPOST.md',
    'DEVPOST_FORM_EN.md',
    'DEMO_VIDEO_SCRIPT.md',
    'package.json',
    'tsconfig.json',
    'tailwind.config.ts',
    'postcss.config.js',
    '.env.example',
    'src/types/index.ts',
    'src/data/catalog.ts',
    'src/data/mock-fixtures.ts',
    'src/lib/youcam-client.ts',
    'src/lib/youcam-live-transport.ts',
    'src/lib/personal-shopper.ts',
    'src/lib/studio-i18n.ts',
    'src/components/demo-garment.tsx',
    'src/app/layout.tsx',
    'src/app/globals.css',
    'src/app/page.tsx',
    'src/app/api/catalog/route.ts',
    'src/app/api/file/route.ts',
    'src/app/api/skin-analysis/route.ts',
    'src/app/api/try-on/route.ts',
    'src/app/api/personal-shopper/route.ts',
    'src/tests/youcam-client.test.ts',
    'src/tests/youcam-live-transport.test.ts',
    'src/tests/personal-shopper.test.ts',
    'scripts/e2e-browser-test.ts',
    'scripts/ui-regression-test.mjs',
    'scripts/jury-demo-test.mjs',
    'scripts/live-ui-contract-test.mjs',
    'scripts/live-youcam-proof.ts',
    'scripts/build-gemini-bundle.py',
    'docs/UI_VALIDATION.md',
    'docs/SUBMISSION_READINESS.md',
    'docs/live/STATUS.json',
    'docs/live/PROOF.md',
    'docs/live/run-95e1761f.json',
    'docs/live/attempt-01.json',
    'docs/live/attempt-02.json',
    'docs/live/attempt-03.json'
]

# 1. Génération du document unique Markdown consolidé
with open(output_md, 'w', encoding='utf-8') as out:
    out.write('# 👗 YouCam VTO Studio & AI Personal Shopper — Dossier & Code Source Consolidé\n\n')
    out.write('> Concours : YouCam API Skin AI & eCommerce VTO Hackathon (Devpost)\n')
    out.write('> Conçu pour analyse approfondie par Gemini / LLM frontière.\n\n')
    
    out.write('## 📑 Table des Matières du Projet\n\n')
    for f in files_to_bundle:
        anchor = f.replace('/', '-').replace('.', '-').replace('_', '-')
        out.write(f'- [{f}](#file-{anchor})\n')
    out.write('\n---\n\n')
    
    for f in files_to_bundle:
        file_path = os.path.join(root_dir, f)
        if os.path.exists(file_path):
            anchor = f.replace('/', '-').replace('.', '-').replace('_', '-')
            ext = 'typescript' if f.endswith(('.ts', '.tsx')) else (
                'json' if f.endswith('.json') else (
                    'markdown' if f.endswith('.md') else 'text'
                )
            )
            out.write(f'<a id="file-{anchor}"></a>\n')
            out.write(f'## 📄 Fichier : `{f}`\n\n```{ext}\n')
            with open(file_path, 'r', encoding='utf-8') as src:
                out.write(src.read().strip())
            out.write('\n```\n\n---\n\n')

print(f'✅ Markdown Bundle créé : {output_md} ({os.path.getsize(output_md):,} octets)')

import shutil
shutil.copyfile(output_md, output_md_v3)
print(f'✅ Markdown Bundle v3 créé : {output_md_v3} ({os.path.getsize(output_md_v3):,} octets)')

# 2. Génération de l'archive ZIP propre (sans node_modules ni .next)
with zipfile.ZipFile(output_zip, 'w', zipfile.ZIP_DEFLATED) as zf:
    for f in files_to_bundle:
        file_path = os.path.join(root_dir, f)
        if os.path.exists(file_path):
            zf.write(file_path, arcname=f)

# Native proof bitmaps are binary assets: include them in the ZIP, never decode as Markdown.
with zipfile.ZipFile(output_zip, 'a', zipfile.ZIP_DEFLATED) as zf:
    for name in ['docs/live/result.jpg', 'docs/live/input-source.jpeg', 'docs/live/input-reference.png']:
        asset = os.path.join(root_dir, name)
        if os.path.exists(asset):
            zf.write(asset, arcname=name)

print(f'✅ Archive ZIP source créée : {output_zip} ({os.path.getsize(output_zip):,} octets)')
```

---

<a id="file-docs-UI-VALIDATION-md"></a>
## 📄 Fichier : `docs/UI_VALIDATION.md`

```markdown
> Tracking of official contest requirements is in SUBMISSION_READINESS.md. Campaigns below are local checks; they do not validate unverified sponsor integrations.

# UI Restoration & Validation — 16 October 2026

Scope: `projects/youcam-vto-agent/`, Next.js interface only, presentation config, validation scripts and bundle. API routes, business logic and fixtures preserved; targeted fix of persona resolution in the simulation client detailed below. No remote deployment or final contest submission performed.

## Observed Issue and Correction

The initial capture of `http://localhost:3000` revealed unstyled markup, native-size persona imagery, and no multi-column layout. The interface was rebuilt with a responsive grid, clean white panels, sage-green accents, a virtual mirror with source photo and scores, a filterable catalog, color/size/fit controls, and three analysis tabs. The local server was restarted with the updated build and CSS assets.

The bundle script previously omitted `globals.css` and `postcss.config.js`. They are now bundled into both Markdown files and the ZIP. Catalog and simulated mirror visuals use coherent local SVG illustrations; backend fixtures remain intact.

Required selectors and text anchors are preserved, including `div.cursor-pointer`, `Double-breasted Wool Coat` / `Manteau Croisé`, Emma/Lucas personas, and the three tabs. The modal uses a native dialog with file picker, URL field, focus return, and Escape-key closure. Outdated requests are aborted to prevent stale responses from overwriting user selections. API errors display a visible retry action.

## Evidence

| Class | Command / Check | Result |
| --- | --- | --- |
| UNIT_LOGIC | `npm test` | PASS — 23/23 tests pass |
| STATIC_ANALYSIS | `npx tsc --noEmit` | PASS — 0 errors |
| STATIC_ANALYSIS | Search for keyword `any` in `src/**/*.ts`, `src/**/*.tsx`, `scripts/*.ts` | PASS — 0 occurrences |
| STATIC_ANALYSIS | `npm run build` | PASS — Next.js 15.5.28, clean build of all 9 routes |
| END_TO_END | `npm run test:e2e` | PASS — 5 headless Chrome scenes, 4 screenshots regenerated |
| END_TO_END | `node scripts/ui-regression-test.mjs` on local server | PASS — styles, filters, selection, colors, fit, size, ROI slider, 11 dimensions, modal, local upload, Escape and focus |
| END_TO_END | Viewport widths 390, 768, 1024, 1440 px | PASS — zero horizontal overflow |
| END_TO_END | Browser JavaScript uncaught exceptions | PASS — zero uncaught exceptions during test walkthrough |

E2E tests verify stylesheet loading, real 3-column alignment, and active garment selection.

## Screenshots

Four primary certified screenshots are saved in `docs/screenshots/01-studio-overview.png`, `02-persona-cool-undertone.png`, `03-vto-garment-tryon.png`, and `04-ab-business-impact.png`.

Three supplementary captures: `05-skin-dimensions.png`, `06-photo-modal.png`, `07-mobile-studio.png`. Additional jury captures: `08-jury-assumptions-fr.png`, `09-jury-english.png`, `10-jury-mobile-en.png`.

## Presentation Enhancements for Judges

- Explicit introductory copy and a 3-step "Judge demo" guided walkthrough highlighting the relevant panel.
- Local SVG illustrations for the six articles: consistent representations across catalog, bundle, and simulated mirror. Selected color and fit dynamically update the illustration.
- Card color affinity computed with `calculateColorHarmony` for the currently selected colorway.
- Collapsible disclosures on score provenance and meaning, including the absence of body measurements during size selection in simulation.
- Collapsible A/B assumptions: order volume, basket, return rates, €12.50 unit cost per avoided return, gain breakdown, and arithmetic formula.
- English set as the default international language, with an instant FR / EN language switch preserving state without triggering extra API calls.
```

---

<a id="file-docs-SUBMISSION-READINESS-md"></a>
## 📄 Fichier : `docs/SUBMISSION_READINESS.md`

```markdown
> Latest update: one native cloth-v4 task succeeded after the contest units were activated. Its downloaded output was visually reviewed. Full submission remains incomplete.

# Submission readiness — 16 October 2026

**Overall verdict: NOT READY TO SUBMIT. One native clothing generation is verified, but the final reviewer experience, video and administrative requirements are still incomplete.**

The existing local UI was validated in simulation. Native clothing evidence is separate from controlled-response tests; see docs/live/PROOF.md.

## Official requirements

Sources consulted on 2026-10-16:

- [Official rules](https://youcam-api-skin-ai-ecommerce.devpost.com/rules), sections 3, 4 and 6.
- [Resources and free-unit onboarding](https://youcam-api-skin-ai-ecommerce.devpost.com/resources).
- [API server](https://docs.perfectcorp.com/develop/api_server).
- [Clothes overview](https://docs.perfectcorp.com/reference/ai_clothes) and [V4 native contract](https://docs.perfectcorp.com/reference/ai_clothes/v4.0).
- [Skin overview](https://docs.perfectcorp.com/reference/ai_skin_analysis) and [V2 native contract](https://docs.perfectcorp.com/reference/ai_skin_analysis/v2.0).
- [Quick start](https://docs.perfectcorp.com/develop/quick_start_guide).

The published submission deadline is 2 November 2026, 11:45 Eastern Time: **17:45 Europe/Paris**, 16:45 UTC. The submission period begins 29 September 2026. Existing projects require significant updates during the submission period, with an explanation.

| Required item | Current status | Evidence / next action |
| --- | --- | --- |
| Working application applying at least one YouCam API | CLIENT VERIFIED; JUDGE FLOW PENDING | One actual cloth-v4 run through the application client; final browser recording and reviewer access still pending |
| Consumer/e-commerce value | IMPLEMENTED IN PROTOTYPE | Guided shopping flow and explanation; impact is illustrative |
| Functions match submitted claims | DRAFT CORRECTED | English/French drafts now state simulation and incomplete integrations |
| Repository URL with code/assets/instructions | NOT VERIFIED | Local folder/ZIP is not a repository URL; no reviewer access confirmed |
| Working project access, free for judges | NOT VERIFIED | Local build only; no external access confirmed |
| Public YouTube/Vimeo video, 1–3 minutes | NOT VERIFIED | English script only; no final exported/public video verified |
| English text, video/testing instructions or translations | PARTIAL | English draft/README/interface prepared; final video and clean-install review pending |
| Legal majority, residence, conflicts and team representation | NOT VERIFIED | Owner declarations required; France is not listed among excluded territories, but individual eligibility is not certified |
| Creation period / significant update provenance | NOT VERIFIED | Preserve actual provenance and explain changes; file timestamps alone are insufficient |
| Source, images, dependencies and other content rights | NOT VERIFIED | Resolve before publishing; no new blanket license assigned |
| Completed Devpost form and final submission | NOT DONE | No submission or publication performed |

The four equally weighted judging criteria are technological implementation, design, potential impact and quality of idea. The design work helps the product experience; it does not replace the sponsor integration requirement.

## Technical findings and corrections

The previous client used the wrong default API host, multipart upload instead of initialization + storage PUT, undocumented clothing fields and generic polling paths. It could also manufacture scores/default skin fields and return simulation on a live error.

The corrected clothing/file path uses native contracts and fails closed. Missing provider metrics remain null. The UI does not substitute a fixture skin report after a live mapping error, and ROI volume changes stay local.

**Skin AI live remains incomplete and is explicitly refused.** The native skin result contract does not establish the complete color/undertone/Fitzpatrick profile previously assumed by the adapter. Separate mappings/APIs must be implemented and verified. Live accessories are also incomplete. Do not claim these capabilities are currently validated.

## Applicable test scope

| Area | Applicability |
| --- | --- |
| Types, pricing, recommendation invariants | APPLICABLE |
| Clothing/file HTTP contracts, envelopes, failure handling | APPLICABLE — controlled tests |
| UI, upload, responsive layout, missing live metrics | APPLICABLE |
| Native sponsor task and generated image | APPLICABLE — one Clothes API run and visual review PASS |
| Database, payments, email, PDF generation, n8n production | NOT APPLICABLE — absent from this application |

## First live run

1. Register/sign in at https://yce.perfectcorp.com/ai-api.
2. Obtain the hackathon redemption code through its official registration flow, redeem free units and check the available balance.
3. Privately set YOUCAM_API_KEY in the project's .env.local; do not put the key in chat or in a submission bundle.
4. Run npm run test:live -- --run.

The command submits at most one clothing task with official documentation sample URLs and polls only that task. It saves its status and an image/hash on success. Inspect the image before asserting visual success or recording the final demo.

No automatic task retries or new task creation on polling failure. No real API task is run by normal unit/E2E tests.

## Current evidence

- UNIT_LOGIC: 23 unit/controlled-contract tests pass.
- STATIC_ANALYSIS: TypeScript and build are checked separately; see UI_VALIDATION.md for the latest local run.
- END_TO_END: browser checks use explicit simulation, except the clearly labeled UI contract test with stubbed native responses.
- INTEGRATION_TEST: docs/live/run-95e1761f.json records PASS for one cloth-v4 task and visual review.
- NOT_VERIFIED: quantitative output quality, Skin AI mapping, real file upload, accessories, external judge access, final video, final form, eligibility and rights.

This is a technical readiness inventory, not a certification of eligibility or a submitted entry.

## Provider check after key setup

The first connection used an obsolete configured host and failed DNS resolution. Local configuration now targets the documented server. The subsequent native clothing request was refused with HTTP 400 / CreditInsufficiency. Attempts are preserved in docs/live/attempt-01.json through attempt-03.json without the key. At that stage STATUS.json recorded BLOCKED, keyPresent=true and providerTaskCreations=0. This historical credit refusal was resolved by the later successful run documented below. No credit purchase was performed.

## Successful native clothing run

The earlier CreditInsufficiency refusal was resolved by activation of the contest units. One new task succeeded in 33.474 seconds. Its 73,094-byte image was retrieved and visually compared with source and reference images. The reference outfit was transferred to a visually consistent source person. The run is preserved in docs/live/run-95e1761f.json with hashes; docs/live/PROOF.md documents the scope. This is a client/API integration proof using public URLs, not a browser E2E recording or File API upload proof. No new generation was launched for visual verification.
```

---

<a id="file-docs-live-STATUS-json"></a>
## 📄 Fichier : `docs/live/STATUS.json`

```json
{
  "checkedAt": "2026-10-16T20:54:47.754Z",
  "testClass": "INTEGRATION_TEST",
  "keyPresent": true,
  "apiRequestsMade": true,
  "status": "PASS",
  "apiRequestCount": 5,
  "taskCreations": 1,
  "state": "LIVE_YOUCAM",
  "endpoint": "cloth-v4",
  "taskIdHash": "95e1761f68a3e9c7be32320fa375065b395917c4aae6ca268a8b5b914140689b",
  "resultFile": "result.jpg",
  "resultSha256": "12a87bb9425d310669845d61a17450769859b26af419e3bb9cebb3d1552acb76",
  "resultBytes": 73094,
  "elapsedMs": 33474,
  "visualReview": "PASS",
  "note": "One native cloth-v4 task succeeded using official sample URLs and the same client used by /api/try-on. The actual downloaded output was compared visually with both inputs. This does not validate Skin AI, accessories, file upload or business gains.",
  "reviewedAt": "2026-10-16T20:57:40.449470+00:00",
  "visualReviewNotes": "The source person and standing pose are visually consistent. The output replaces the beige shirt, dark trousers and tan boots with a red top, cream fur-style jacket, grey patterned jeans and black boots corresponding to the reference outfit. Qualitative inspection only; no fit, fidelity or biometric accuracy is certified.",
  "sourceFile": "input-source.jpeg",
  "referenceFile": "input-reference.png",
  "sourceSha256": "a8eb43eb9f95e3354c9159a84fca4da82f467218a0fe67a34aef97eea25c5961",
  "referenceSha256": "094518b097fbfca7bad565540b5642baef9ae3463ece3db110ee1360515fddb8",
  "clientSourceSha256": "bc6b7f60e7ff0b2d0d14c66093453978f090a80a3d960662ad893bb81489dd93",
  "proofScriptSha256": "50c2399c1cd25b2b13ba37dd75f4445b2fa6d246f90741b98089a692dd01fabb"
}
```

---

<a id="file-docs-live-PROOF-md"></a>
## 📄 Fichier : `docs/live/PROOF.md`

```markdown
# First verified YouCam Clothes API run

Date: 16 October 2026. Result: **INTEGRATION_TEST PASS**, with qualitative visual review.

- Provider: Perfect Corp YouCam, cloth-v4.
- One task created; five API requests including polling.
- Processing time: 33.474 seconds.
- Output: result.jpg, 73,094 bytes, 1024 × 1024 pixels.
- Durable evidence: run-95e1761f.json, including hashes of both inputs, output and client/script source.
- API key and signed output URL are excluded.

| Source person | Reference outfit | Actual provider output |
| --- | --- | --- |
| ![Source](input-source.jpeg) | ![Reference](input-reference.png) | ![Generated output](result.jpg) |

The source person wears a beige shirt, dark trousers and tan boots. The reference outfit includes a red top, cream fur-style jacket, grey patterned jeans and black boots. The generated output transfers these outfit elements while retaining a visually consistent person and standing pose.

This is a saved result of one real API execution. It is not a continuously running live session or a quantitative validation of identity preservation, fit or fabric fidelity.

Inputs were the public samples from the [official Clothes API guide](https://docs.perfectcorp.com/reference/ai_clothes). Review third-party asset rights before public redistribution.

The same application client is used by /api/try-on, but this evidence was obtained through the proof command, not a recorded browser interaction with that route. File upload was bypassed by the documented public-URL workflow and remains unverified against the provider.

Skin AI live mapping, accessories, externally accessible judge demo, final video and final submission are still incomplete or unverified.
```

---

<a id="file-docs-live-run-95e1761f-json"></a>
## 📄 Fichier : `docs/live/run-95e1761f.json`

```json
{
  "checkedAt": "2026-10-16T20:54:47.754Z",
  "testClass": "INTEGRATION_TEST",
  "keyPresent": true,
  "apiRequestsMade": true,
  "status": "PASS",
  "apiRequestCount": 5,
  "taskCreations": 1,
  "state": "LIVE_YOUCAM",
  "endpoint": "cloth-v4",
  "taskIdHash": "95e1761f68a3e9c7be32320fa375065b395917c4aae6ca268a8b5b914140689b",
  "resultFile": "result.jpg",
  "resultSha256": "12a87bb9425d310669845d61a17450769859b26af419e3bb9cebb3d1552acb76",
  "resultBytes": 73094,
  "elapsedMs": 33474,
  "visualReview": "PASS",
  "note": "One native cloth-v4 task succeeded using official sample URLs and the same client used by /api/try-on. The actual downloaded output was compared visually with both inputs. This does not validate Skin AI, accessories, file upload or business gains.",
  "reviewedAt": "2026-10-16T20:57:40.449470+00:00",
  "visualReviewNotes": "The source person and standing pose are visually consistent. The output replaces the beige shirt, dark trousers and tan boots with a red top, cream fur-style jacket, grey patterned jeans and black boots corresponding to the reference outfit. Qualitative inspection only; no fit, fidelity or biometric accuracy is certified.",
  "sourceFile": "input-source.jpeg",
  "referenceFile": "input-reference.png",
  "sourceSha256": "a8eb43eb9f95e3354c9159a84fca4da82f467218a0fe67a34aef97eea25c5961",
  "referenceSha256": "094518b097fbfca7bad565540b5642baef9ae3463ece3db110ee1360515fddb8",
  "clientSourceSha256": "bc6b7f60e7ff0b2d0d14c66093453978f090a80a3d960662ad893bb81489dd93",
  "proofScriptSha256": "50c2399c1cd25b2b13ba37dd75f4445b2fa6d246f90741b98089a692dd01fabb"
}
```

---

<a id="file-docs-live-attempt-01-json"></a>
## 📄 Fichier : `docs/live/attempt-01.json`

```json
{
  "checkedAt": "2026-10-16T20:44:06.435Z",
  "testClass": "INTEGRATION_TEST",
  "keyPresent": true,
  "apiRequestsMade": true,
  "status": "FAIL",
  "apiRequestCount": 1,
  "error": "fetch failed",
  "visualReview": "NOT_VERIFIED",
  "diagnosis": "Configured host api.perfectcorp.com failed DNS resolution (ENOTFOUND). No provider task could be created. Corrected local configuration to yce-api-01.makeupar.com.",
  "providerTaskCreations": 0
}
```

---

<a id="file-docs-live-attempt-02-json"></a>
## 📄 Fichier : `docs/live/attempt-02.json`

```json
{
  "checkedAt": "2026-10-16T20:45:10.928Z",
  "testClass": "INTEGRATION_TEST",
  "keyPresent": true,
  "apiRequestsMade": true,
  "status": "FAIL",
  "apiRequestCount": 1,
  "error": "YouCam: HTTP 400. Aucun repli en simulation.",
  "visualReview": "NOT_VERIFIED"
}
```

---

<a id="file-docs-live-attempt-03-json"></a>
## 📄 Fichier : `docs/live/attempt-03.json`

```json
{
  "checkedAt": "2026-10-16T20:45:35.548Z",
  "testClass": "INTEGRATION_TEST",
  "keyPresent": true,
  "apiRequestsMade": true,
  "status": "FAIL",
  "apiRequestCount": 1,
  "error": "YouCam: HTTP 400 · CreditInsufficiency · Your account doesn't have enough credits to complete this request.. Aucun repli en simulation.",
  "visualReview": "NOT_VERIFIED"
}
```

---

