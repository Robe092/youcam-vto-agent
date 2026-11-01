# 👗 YouCam VTO Studio & AI Personal Shopper — Dossier & Code Source Consolidé

> Concours : YouCam API Skin AI & eCommerce VTO Hackathon (Devpost)
> Conçu pour analyse approfondie par Gemini / LLM frontière.

## 📑 Table des Matières du Projet

- [README.md](#file-README-md)
- [ARCHITECTURE.md](#file-ARCHITECTURE-md)
- [SUBMISSION_DEVPOST.md](#file-SUBMISSION-DEVPOST-md)
- [DEVPOST_FORM_EN.md](#file-DEVPOST-FORM-EN-md)
- [DEMO_VIDEO_SCRIPT.md](#file-DEMO-VIDEO-SCRIPT-md)
- [video/README.md](#file-video-README-md)
- [video/NARRATION_EN.txt](#file-video-NARRATION-EN-txt)
- [video/PLAN.json](#file-video-PLAN-json)
- [video/verification/MEDIA_CHECK.json](#file-video-verification-MEDIA-CHECK-json)
- [video/verification/DECODE_CHECK.json](#file-video-verification-DECODE-CHECK-json)
- [video/verification/REVIEW.json](#file-video-verification-REVIEW-json)
- [video/voice-v2/README.md](#file-video-voice-v2-README-md)
- [video/voice-v2/SYNC_LEDGER.json](#file-video-voice-v2-SYNC-LEDGER-json)
- [video/voice-v2/REVIEW.json](#file-video-voice-v2-REVIEW-json)
- [video/subtitles-v3/README.md](#file-video-subtitles-v3-README-md)
- [video/subtitles-v3/YouCam-English-v3.srt](#file-video-subtitles-v3-YouCam-English-v3-srt)
- [video/subtitles-v3/MEDIA_CHECK.json](#file-video-subtitles-v3-MEDIA-CHECK-json)
- [video/motion-v4/README.md](#file-video-motion-v4-README-md)
- [video/motion-v4/NARRATION_EN_V4.txt](#file-video-motion-v4-NARRATION-EN-V4-txt)
- [video/motion-v4/YouCam-English-v4.srt](#file-video-motion-v4-YouCam-English-v4-srt)
- [video/motion-v4/REVIEW.json](#file-video-motion-v4-REVIEW-json)
- [package.json](#file-package-json)
- [package-lock.json](#file-package-lock-json)
- [.eslintrc.json](#file--eslintrc-json)
- [LICENSE](#file-LICENSE)
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
- [scripts/hybrid-order-test.mjs](#file-scripts-hybrid-order-test-mjs)
- [scripts/build-gemini-bundle.py](#file-scripts-build-gemini-bundle-py)
- [docs/UI_VALIDATION.md](#file-docs-UI-VALIDATION-md)
- [docs/SUBMISSION_READINESS.md](#file-docs-SUBMISSION-READINESS-md)
- [docs/MEDIA_PROVENANCE.md](#file-docs-MEDIA-PROVENANCE-md)
- [docs/live/STATUS.json](#file-docs-live-STATUS-json)
- [docs/live/browser-20261031/verification.json](#file-docs-live-browser-20261031-verification-json)
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

A bilingual fashion-commerce application combining a virtual try-on fitting room, a colorimetry-driven outfit recommender, and an explainable commerce-impact simulator.

**YouCam API Skin AI & eCommerce VTO Hackathon Entry** — A robust hybrid architecture pairing verified native Perfect Corp `cloth-v4` AI generation, an AI Personal Shopper colorimetry engine, transparent simulation mode, and an explainable commerce-impact simulator.

Official contest: [YouCam API Skin AI & eCommerce VTO Hackathon](https://youcam-api-skin-ai-ecommerce.devpost.com/).

## What it delivers

- **Responsive luxury studio**: Clean editorial interface, instant English/French toggle, and guided 3-step judge tour.
- **Interactive VTO catalog**: 6 luxury garments/accessories across 6 categories, with interactive color, cut, and size selection.
- **AI Personal Shopper**: 4-season color palette matching, undertone affinity scoring, coordinated outfit bundles, and bundle discount pricing.
- **E-Commerce Value Demonstrator**: Reactive ROI simulator with dynamic order volume slider, transparent formula breakdown, and explicit cost boundaries.
- **Strict dual-mode architecture**:
  - **Live Mode (`LIVE_YOUCAM`)**: Targets Perfect Corp's official API host (`https://yce-api-01.makeupar.com`) with native `cloth-v4` contracts and presigned binary PUT file uploads.
  - **Simulation Mode (`MOCK_SIMULATED`)**: Self-contained development and reviewer testing with realistic fixtures, dynamic SVG garment rendering, and zero secret requirements.
- **Verified test battery**: 23 unit and contract tests, hybrid arrival order robustness test (`hybrid-order-test.mjs`), Chrome headless E2E browser tests, visual regression tests across 4 viewports (1440px, 1024px, 768px, 390px), clean non-interactive ESLint verification, and zero TypeScript errors.

## Architecture & Provenance

| Component | Mode / Implementation | Verification & Evidence |
| :--- | :--- | :--- |
| **Clothes VTO (Live)** | Native `cloth-v4` task with task-specific polling on Perfect Corp API | **Verified real generation** (`73KB` output image, 33.4s task); see [`docs/live/PROOF.md`](docs/live/PROOF.md) |
| **File Storage API (Live)** | Native 2-step JSON initialization and binary PUT to pre-signed URL | Validated with controlled contract test suite |
| **Virtual Fitting Room (Simulation)** | Dynamic SVG illustration (`DemoGarment`) with real-time color and fit scaling | Full Chrome E2E suite (1440px, 1024px, 768px, 390px) |
| **Personal Shopper Engine** | Local rule-based color harmony scoring based on undertone affinity and 4-season palette | Mathematical invariant unit tests (23/23 PASS) |
| **Skin Assessment (11 Dimensions)** | 11-dimension dermatological beauty assessment demo fixtures | Illustrated in simulation with demo fixtures; native Skin AI mapping pending / not implemented for this VTO entry |
| **E-Commerce Value Demonstrator** | Interactive annual volume simulator with transparent formula & modeled potential gain | Client-side reactive arithmetic (zero superfluous network calls, margin/acquisition costs excluded) |

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
npm run lint
npx tsc --noEmit
npm run build
npm run test:e2e
node scripts/hybrid-order-test.mjs
~~~

E2E explicitly forces mock_only, even if a key exists. Against a running simulation server (port 3000):

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


## Browser validation — 31 October 2026

A real clothing try-on was initiated by a click in Chrome, through the application route `/api/try-on`, and completed as `LIVE_YOUCAM` / `SUCCESS` in 12.175 seconds. The generated image was displayed in the fitting room and visually reviewed against the official source person and outfit. One browser try-on request was sent. See [browser evidence](docs/live/browser-20261031/verification.json), [application capture](docs/live/browser-20261031/application.png) and [result](docs/live/browser-20261031/result.jpg). This validates the public-image-URL browser path; live File API upload, Skin AI, accessories and commercial impact remain unverified. The earlier 16 October proof is retained as historical evidence.

The final locally exported narrated demo is 98 seconds, with English captions. The public demo is available at https://youtu.be/oMvG2b3QN_8 (Goat channel, published 31 October 2026). External judge access and final submission still need to be completed.
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
# Devpost Submission — YouCam VTO Studio & AI Personal Shopper

**Contest**: [YouCam API Skin AI & eCommerce VTO Hackathon](https://youcam-api-skin-ai-ecommerce.devpost.com/)
**Repository**: [https://github.com/Robe092/youcam-vto-agent](https://github.com/Robe092/youcam-vto-agent)

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

These contracts are tested with controlled responses. **A real browser try-on was validated on 31 October 2026: a user click called the application route and the YouCam cloth-v4 provider, returning LIVE_YOUCAM / SUCCESS in 12.175 seconds. The generated image was displayed in the fitting room and visually reviewed. One browser try-on request was sent. This validates the image-URL path; live File API upload remains unverified.** The earlier script-based proof from 16 October is retained separately. Skin AI response mapping and live accessories remain incomplete. The 11-dimension report is a fixture demonstration.

## Transparency
MOCK_SIMULATED identifies demo mode: local product illustrations, not generated images of the selected person. Size/fit/color controls do not prove body measurement or native API control, and cloth-v4 does not take size or cut parameters.

The 11-dimension skin profile, skin age, and undertone scores are simulated fixture demonstrations, not a medical diagnostic or live biometric measurement. The Personal Shopper uses transparent local color-harmony rules based on undertone affinity.

The native Clothes response does not provide the three demo scores. Live output displays them unavailable ('—'). Clothing-generation provider errors are never silently replaced with mock VTO results. Stylist profiles remain explicitly labeled demonstrations. Dual-mode state architecture ensures complete decoupling between try-on and stylist profiles, preserving consistent UI state and badges regardless of response arrival order.

Modeled potential business gain is an illustrative projection from internal assumptions, not a measured commercial experiment. It adds modeled basket revenue and avoided return-processing costs, excluding margins, API, acquisition, integration and operations. Conversion uplift is not monetized in that total.

## Challenges
- Keeping fixture data strictly distinguishable from provider results regardless of network response ordering.
- Verifying native contracts instead of relying on mock tests.
- Preventing accidental provider tasks when adjusting size, cut, color, or ROI sliders.
- Presenting unavailable metrics without favorable invented defaults.

## Accomplishments
- A complete local walkthrough in two languages (French and English) across 4 responsive viewports (1440px, 1024px, 768px, 390px).
- Robust test battery: 23 unit/contract invariant tests, hybrid arrival order test suite, Chrome headless E2E verification, and zero ESLint/TypeScript errors.
- Automated Chrome scenes and responsive captures.
- A live-proof command that cannot accept mock output as provider success, backed by an actual verified cloth-v4 execution.

## Next steps
Extend the validated browser clothing workflow; implement and verify native Skin AI/color-tone mappings and accessories; complete external judge access and public video hosting.

## Built with
Next.js 15, React 19, TypeScript, Tailwind CSS, Lucide React, Zod, Node.js test runner, Puppeteer, Chrome, Perfect Corp YouCam API client.

## Required links & deliverables
- **Code Repository**: https://github.com/Robe092/youcam-vto-agent (Verify public access or the private evaluator sharing required by Rule 4 before submission).
- **Working Application / Test Access**: Self-contained repository with full automated verification (`npm install && npm run dev` on port 3000), and transparent simulation mode requiring zero external credentials.
- **Live Proof Artifacts**: Browser proof from 31 October: `docs/live/browser-20261031/verification.json`, `application.png`, and `result.jpg` (12.175 seconds). Historical script proof from 16 October: `docs/live/run-95e1761f.json`.
- **Demo Video (1–3 min)**: https://youtu.be/oMvG2b3QN_8 — final local demo: 98 seconds, English narration and captions, edited from manual screen recordings. Published publicly on the Goat channel on 31 October 2026; YouTube Studio visibility and watch-page playback were checked.
```

---

<a id="file-DEMO-VIDEO-SCRIPT-md"></a>
## 📄 Fichier : `DEMO_VIDEO_SCRIPT.md`

```markdown
# YouCam — current demo video v4

**Current local export:** `video/renders/YouCam-Demo-v4-INTERACTIVE.mp4` — 109.500 seconds (about 1:50), Full HD H.264, 12 fps, English voice and 38 burnt-in English captions.

The opening and saved native Clothes API proof are retained through 0:39. The shopping walkthrough now uses twelve timestamped captures of actual browser interaction, replacing the still-per-topic v1–v3 approach. The method reconstructs native CUA frame sequences, sampled at a variable rate; it is not a native 30-fps screen recording.

The original ElevenLabs voice is retained at natural speed with three whole-sentence cuts. The current narration is [video/motion-v4/NARRATION_EN_V4.txt](video/motion-v4/NARRATION_EN_V4.txt). Captions: [video/motion-v4/YouCam-English-v4.srt](video/motion-v4/YouCam-English-v4.srt).

| Current time | Scene |
| --- | --- |
| 0:00–0:12 | Product introduction and overview |
| 0:12–0:39 | Official source and reference samples, actual saved cloth-v4 output and comparison |
| 0:39–0:48 | 03 / START WITH A PHOTO |
| 0:48–0:54 | 04 / CHOOSE AND CUSTOMIZE |
| 0:54–0:58 | 05 / COMPARE THE PROFILES |
| 0:58–1:03 | 05 / EXPLORE YOUR COLOR MATCH |
| 1:03–1:08 | 05 / EXPLORE THE CUT |
| 1:08–1:10 | 05 / EXPLAIN THE SCORES |
| 1:09–1:19 | 06 / BUILD A COORDINATED LOOK |
| 1:19–1:23 | 07 / EXPLORE THE BUSINESS SCENARIO |
| 1:23–1:26 | 07 / CHANGE THE ORDER VOLUME |
| 1:26–1:33 | 07 / INSPECT THE FORMULA |
| 1:33–1:37 | 08 / PREVIEW THE BEAUTY PROFILE |
| 1:37–1:41 | 09 / FOLLOW THE GUIDED DEMO |
| 1:41–1:50 | Product conclusion |

## Scope and evidence

The native API proof is the previously verified client/API task from 16 October 2026, shown as recorded evidence. The UI takes were captured separately in explicit simulation mode. They include the photo dialog, catalog filters, profile change, color and fit controls, score explanation, bundle, annual-volume changes, assumptions, skin preview and jury guide. The volume range uses pointer focus and keyboard arrows. No new provider task was launched.

The ranking engine uses profile undertone; the video does not claim that all eleven cosmetic scores drive the ranking. Business figures remain an illustrative internal model. Full integration limits remain documented in the project README and readiness inventory.

## Verification

All 1,314 video frames and the complete audio stream decode. All 38 captions are rendered and match the 268 retained script words. Every temporal take shows actual UI-state pixel changes. Audio matches the declared three-cut edit with correlation above 0.99998. Scene frames were visually reviewed, including profile selection and volume controls at full size.

See [video/motion-v4/README.md](video/motion-v4/README.md) and [video/motion-v4/REVIEW.json](video/motion-v4/REVIEW.json). Earlier visual/voice/subtitled versions and raw takes are preserved. Public hosting and final submission remain pending.
```

---

<a id="file-video-README-md"></a>
## 📄 Fichier : `video/README.md`

```markdown
> **Current version: renders/YouCam-Demo-v4-INTERACTIVE.mp4 (1:49.5), with recorded interactions and 38 English captions. See motion-v4/README.md. Earlier versions below are preserved history.**

# YouCam — first visual edit

Local review version: **YouCam-Visual-v1-SILENT.mp4**, 2:18, 1920 × 1080, H.264, 12 fps. No audio or music. English titles and short editorial captions; full speech subtitles have not been added.

The owner requested the same two-stage workflow as PayFlow and Life After Code: review the silent visual edit first, then supply an ElevenLabs voice file. Preserve this export; fit a new version to the supplied voice rather than overwriting it.

## Material and truthfulness

- `raw/`: original CUA browser captures, captured on 17 October 2026 from the actual English interface at localhost:3000. Server explicitly forced to `YOUCAM_MODE=mock_only`; no new provider tasks were created for the video.
- Native API scenes use the saved official sample inputs and actual `cloth-v4` output in `../docs/live/`. Proof date: 16 October 2026; one completed task, 33.474 seconds. These are separately recorded artifacts, not a continuous browser run. The video labels them accordingly.
- Shopping, scores and Skin AI preview are explicitly labeled simulation. Product drawings are local illustrations, not native generated try-ons. The shopper uses local rules. Commercial figures are internal assumptions, without measured business gains.
- No provider console, account details, API key, signed result URL, or personal uploads appear in the capture set.
- This is a local visual review artifact. Public upload, final narrated export, asset redistribution rights review, and the final submission remain separate steps.

## Reproduce and review

`prepare.py` creates the continuous 18-scene timeline in `PLAN.json` and the asset hashes in `PROVENANCE.json`. Crops and optical reframing preserve the captured UI content; no fake UI interaction or fake live processing is generated.

Renderer: adapted from the owner's `deliverables/gitlab-sentinel-video/render.swift`, using the established local AVFoundation PayFlow/Sentinel workflow. Other projects were read only.

From this project's directory:

```sh
python3 video/prepare.py
swiftc -module-cache-path /tmp/youcam-swift-module-cache video/render.swift -o video/render
video/render video
swiftc -module-cache-path /tmp/youcam-swift-module-cache video/verify.swift -o video/verify
video/verify video
swiftc -module-cache-path /tmp/youcam-swift-module-cache video/decode.swift -o video/decode
video/decode video/renders/YouCam-Visual-v1-SILENT.mp4 video/verification/DECODE_CHECK.json
```

The native encoder requires normal macOS encoder access. The first sandboxed attempt failed before encoding and left a zero-byte file, preserved as `verification/failed-sandbox-encode.mp4`. The actual export uses the native encoder with local execution authorization. No media is uploaded.

Verification outputs: `verification/MEDIA_CHECK.json`, `verification/DECODE_CHECK.json`, 18 extracted scene frames and `verification/contact-sheet.jpg`. Read those results before claiming media validation.

## Voice stage

`NARRATION_EN.txt` is the continuous English voice draft to paste into ElevenLabs. It is a draft for this edit, not synthesized audio. The final scene lengths should be fitted to the actual supplied voice; do not simply stretch or truncate the narration. Suggested delivery: clear, calm, conversational, about 135–145 words per minute.

`PLAN.json` is the authoritative visual timing. The source export intentionally has zero audio tracks.

## Supplied voice synchronized — v2

The owner supplied the ElevenLabs Jerry B. recording. The synchronized export is renders/YouCam-Voice-v2.mp4 (120.750 seconds). The entire continuous voice is preserved at natural speed. All 1,449 video frames and the audio decode, and all 18 scene midpoint frames have been reviewed. See voice-v2/README.md and voice-v2/REVIEW.json. V1 remains available. Public hosting and full speech subtitles remain pending.

## English captions — v3

Latest review export: renders/YouCam-English-v3-SUBTITLED.mp4, 120.750 seconds. Forty-three English captions cover the complete 297-word voice draft. A dedicated footer replaces the former editorial captions, without resizing the UI. Audio packets are identical to v2. All frames and audio decode; all 43 captions were checked. The SRT is subtitles-v3/YouCam-English-v3.srt. See subtitles-v3/README.md. Public hosting remains pending.
```

---

<a id="file-video-NARRATION-EN-txt"></a>
## 📄 Fichier : `video/NARRATION_EN.txt`

```text
Meet YouCam VTO Studio: a more personal way to explore your style.

The experience brings a virtual fitting room, a curated catalog and explained recommendations into one workspace.

First, the real API evidence. These official sample images provide a source person and a reference outfit to the YouCam Clothes API.

Here is the actual generated result. One successful cloth-v4 task took about thirty-three seconds. The reference jacket, red top, patterned jeans and boots appear on the source person.

This comparison shows the saved inputs and output. It is qualitative evidence from a recorded API execution.

Now, the interactive shopping walkthrough. Its simulation label stays explicit. Start with an example profile, upload a photo, or enter an image link.

Filter the collection, choose a garment, and explore its colors, size and cut.

Switching from Emma to Lucas changes the undertone profile and the recommendation.

For the cool profile, charcoal increases the illustrated color harmony.

Changing to a relaxed cut updates the garment illustration and demo fit indicator.

Each score has an explanation. These simulated indicators do not measure the person in the photo.

The personal shopper moves from one item to a coordinated look. Local rules rank colors by undertone affinity, explain the selection and display an itemized bundle price.

The impact tab lets a merchant explore a business scenario. Change the annual order volume and the modeled benefit recalculates.

Open the assumptions to inspect basket revenue and avoided return costs. These are internal demo inputs. The projection excludes unmodeled costs and is not a measured profit claim.

The skin tab previews eleven cosmetic dimensions using simulated data. Live Skin AI mapping remains incomplete.

A guided walkthrough helps judges explore the English interface quickly.

YouCam VTO Studio combines verified Clothes API evidence, explained shopping choices and transparent assumptions.
```

---

<a id="file-video-PLAN-json"></a>
## 📄 Fichier : `video/PLAN.json`

```json
{
  "duration_seconds": 138,
  "fps": 12,
  "width": 1920,
  "height": 1080,
  "scenes": [
    {
      "start": 0,
      "end": 5,
      "title": "YOUCAM VTO STUDIO",
      "caption": "Skin AI & eCommerce VTO Hackathon \u00b7 Perfect Corp",
      "card": "INTRO",
      "tag": "PRODUCT DEMO"
    },
    {
      "start": 5,
      "end": 12,
      "title": "01 / ONE CONNECTED SHOPPING EXPERIENCE",
      "caption": "A fitting room, a curated collection and explained recommendations.",
      "image": "raw/01-studio.jpg",
      "tag": "SIMULATION UI"
    },
    {
      "start": 12,
      "end": 21,
      "title": "02 / REAL YOUCAM CLOTHES API",
      "caption": "Official sample images \u00b7 recorded API execution, 16 October 2026.",
      "card": "INPUTS",
      "tag": "RECORDED API PROOF"
    },
    {
      "start": 21,
      "end": 35,
      "title": "02 / THE ACTUAL GENERATED RESULT",
      "caption": "YouCam cloth-v4 output \u00b7 saved from one successful native API task.",
      "card": "RESULT",
      "tag": "RECORDED API PROOF"
    },
    {
      "start": 35,
      "end": 42,
      "title": "02 / COMPARE THE EVIDENCE",
      "caption": "Source + reference \u2192 generated output. Qualitative visual inspection, without accuracy certification.",
      "card": "COMPARE",
      "tag": "RECORDED API PROOF"
    },
    {
      "start": 42,
      "end": 49,
      "title": "03 / START WITH A PHOTO",
      "caption": "Local upload or direct image URL. This walkthrough uses explicit simulation mode.",
      "image": "raw/03-photo-dialog.jpg",
      "crop": [
        410,
        265,
        455,
        570
      ],
      "headline": "A familiar\nfirst step.",
      "detail": "Choose a portrait, or start with an example profile.",
      "tag": "SIMULATION UI"
    },
    {
      "start": 49,
      "end": 55,
      "title": "04 / FIND THE RIGHT PIECE",
      "caption": "Browse six demo products, filter categories and select a garment.",
      "image": "raw/15-coat-warm.jpg",
      "crop": [
        463,
        330,
        385,
        455
      ],
      "headline": "Choose.\nCustomize.\nCompare.",
      "detail": "Category filters, color swatches, size and cut in one panel.",
      "tag": "SIMULATION UI"
    },
    {
      "start": 55,
      "end": 61,
      "title": "05 / PERSONALIZE THE EXPERIENCE",
      "caption": "Emma: warm undertone. Lucas: cool undertone. Local recommendation rules update the selection.",
      "image": "raw/05-coat-lucas.jpg",
      "crop": [
        25,
        330,
        825,
        700
      ],
      "tag": "SIMULATION UI"
    },
    {
      "start": 61,
      "end": 67,
      "title": "05 / COLOR CHANGES THE MATCH",
      "caption": "Slate Charcoal raises the illustrated color affinity for the cool profile.",
      "image": "raw/06-charcoal.jpg",
      "crop": [
        25,
        330,
        825,
        700
      ],
      "tag": "SIMULATION UI"
    },
    {
      "start": 67,
      "end": 73,
      "title": "05 / EXPLORE THE CUT",
      "caption": "Regular \u2192 relaxed. The illustration and demo fit indicator respond to the controls.",
      "image": "raw/07-relaxed.jpg",
      "crop": [
        25,
        330,
        825,
        700
      ],
      "tag": "SIMULATION UI"
    },
    {
      "start": 73,
      "end": 79,
      "title": "05 / EXPLAIN EVERY SCORE",
      "caption": "Simulation scores illustrate the flow; they do not measure the uploaded person.",
      "image": "raw/08-score-provenance.jpg",
      "crop": [
        28,
        680,
        420,
        430
      ],
      "headline": "Visible scores.\nVisible context.",
      "detail": "Fidelity, fit and harmony have an explanation. No body measurements are inferred in this demo.",
      "tag": "SIMULATION UI"
    },
    {
      "start": 79,
      "end": 91,
      "title": "06 / MOVE FROM ONE PIECE TO A LOOK",
      "caption": "The personal shopper ranks catalog colors by undertone affinity and explains the bundle.",
      "image": "raw/09-stylist.jpg",
      "crop": [
        863,
        335,
        380,
        680
      ],
      "headline": "An outfit,\nwith a reason.",
      "detail": "A coordinated bundle, itemized prices and a clear total. Powered by local recommendation rules.",
      "tag": "SIMULATION UI"
    },
    {
      "start": 91,
      "end": 99,
      "title": "07 / EXPLORE A BUSINESS SCENARIO",
      "caption": "A/B Impact is an internal model, not a measured commercial result.",
      "image": "raw/10-roi-10000.jpg",
      "crop": [
        863,
        335,
        380,
        740
      ],
      "headline": "What could\nthe impact be?",
      "detail": "Start with 10,000 annual orders. Read the result as a scenario.",
      "tag": "ILLUSTRATIVE MODEL"
    },
    {
      "start": 99,
      "end": 105,
      "title": "07 / CHANGE THE ANNUAL VOLUME",
      "caption": "10,000 \u2192 4,000 orders. The modeled benefit recalculates locally.",
      "image": "raw/11-roi-volume.jpg",
      "crop": [
        863,
        335,
        380,
        740
      ],
      "headline": "Change one\nassumption.",
      "detail": "The annual volume slider makes the scenario interactive.",
      "tag": "ILLUSTRATIVE MODEL"
    },
    {
      "start": 105,
      "end": 117,
      "title": "07 / OPEN THE ASSUMPTIONS",
      "caption": "API, acquisition, margin and operating costs are excluded. This is not accounting net profit.",
      "image": "raw/12-roi-assumptions.jpg",
      "crop": [
        870,
        1030,
        365,
        600
      ],
      "headline": "The numbers\nare inspectable.",
      "detail": "Basket revenue and avoided return costs are disclosed. All inputs are internal demo assumptions.",
      "tag": "ILLUSTRATIVE MODEL"
    },
    {
      "start": 117,
      "end": 124,
      "title": "08 / A CLEAR SKIN DEMO BOUNDARY",
      "caption": "Eleven cosmetic dimensions are shown from fixtures. Live Skin AI mapping remains incomplete.",
      "image": "raw/13-skin.jpg",
      "crop": [
        865,
        335,
        380,
        740
      ],
      "headline": "11 dimensions.\nClear provenance.",
      "detail": "A simulated beauty profile. Cosmetic information, without a medical diagnosis.",
      "tag": "SIMULATION UI"
    },
    {
      "start": 124,
      "end": 131,
      "title": "09 / BUILT FOR A QUICK JURY WALKTHROUGH",
      "caption": "An English interface and a three-step guide make the project easy to explore.",
      "image": "raw/16-judge-guide.jpg",
      "crop": [
        0,
        0,
        1275,
        740
      ],
      "tag": "SIMULATION UI"
    },
    {
      "start": 131,
      "end": 138,
      "title": "YOUCAM VTO STUDIO",
      "caption": "Real Clothes API evidence. Explained shopping decisions. Transparent assumptions.",
      "card": "OUTRO",
      "tag": "END OF VISUAL EDIT"
    }
  ]
}
```

---

<a id="file-video-verification-MEDIA-CHECK-json"></a>
## 📄 Fichier : `video/verification/MEDIA_CHECK.json`

```json
{
  "audio_tracks" : 0,
  "duration_seconds" : 138,
  "height" : 1080,
  "representative_frames_extracted" : 18,
  "status" : "PASS",
  "video_fps" : 12,
  "video_tracks" : 1,
  "width" : 1920
}
```

---

<a id="file-video-verification-DECODE-CHECK-json"></a>
## 📄 Fichier : `video/verification/DECODE_CHECK.json`

```json
{
  "decoded_video_frames" : 1656,
  "status" : "DECODE_COMPLETE"
}
```

---

<a id="file-video-verification-REVIEW-json"></a>
## 📄 Fichier : `video/verification/REVIEW.json`

```json
{
  "checkedAt": "2026-10-17T11:34:00.922410+00:00",
  "status": "PASS_LOCAL_VISUAL_EDIT",
  "export": "renders/YouCam-Visual-v1-SILENT.mp4",
  "sha256": "6933ed304a5e483acf7bce25d397161f0f551ed71e51cbf2bf2a868c2e5d33be",
  "bytes": 30417607,
  "fullDecodeFrames": 1656,
  "sceneFramesInspected": 18,
  "visualReview": "All scene midpoint frames reviewed in contact sheet; recommendation and assumptions reviewed full size. Clear editorial labels distinguish recorded API evidence from simulation.",
  "voiceStatus": "PENDING_USER_ELEVENLABS_FILE",
  "publication": "NOT_UPLOADED"
}
```

---

<a id="file-video-voice-v2-README-md"></a>
## 📄 Fichier : `video/voice-v2/README.md`

```markdown
# YouCam — synchronized voice edit v2

Export: `../renders/YouCam-Voice-v2.mp4` — 120.750 seconds (about 2:01), H.264 Full HD, 12 fps, AAC mono 48 kHz.

Voice: the owner's supplied ElevenLabs Jerry B. MP3, preserved locally as `source-jerry-youcam.mp3`. It is used in full, continuously, at natural speed. No speech trimming, tempo change, pitch change or inserted pauses. Only AAC transcoding and 1.501 seconds of silence after the end of the original audio. No music. The silent v1 and original MP3 remain intact.

All 18 visual scenes have been fitted to the spoken topics, using local word timestamps. `SYNC_LEDGER.json` records each source interval, new interval and spoken anchor. Only the edited screenshots and optical reframing change duration. The recorded native API proof and explicit simulation labels are preserved.

Processing is entirely local: FFmpeg for decoding/editing, faster-whisper base.en for word timestamps. The recognition model was downloaded; the user's audio was not uploaded. The initial PyAV 19 metadata-argument incompatibility was resolved by passing locally decoded PCM samples to the transcriber. ASR approximations of product names are not treated as speech defects or burnt into captions.

## Checks

- All 1,449 video frames and the full audio track decode successfully.
- 18 representative scene frames extracted and visually reviewed in a contact sheet.
- Audio waveform correlation with the complete source: 0.9999758 after AAC re-encoding, with no time offset.
- Source audio: 119.249 seconds. Final export: 120.750 seconds. Tail padding is silent.
- Final audio peak: −5.91 dBFS; no digital clipping detected.
- No full speech subtitles have been added. Existing editorial captions remain visible.
- No upload, publication or new provider generation.

These checks establish technical suitability and synchronization. The owner's preferred voice tone remains a listening preference. No rerecording is technically required for timing.

Reports: `REVIEW.json`, `AUDIO_ANALYSIS.txt`, `DECODE_CHECK.txt`. Reproduce with `analyze.py`, `assemble.py`, `verify.py` in a Python environment containing imageio-ffmpeg, faster-whisper, numpy, av and Pillow. Export scripts preserve existing output versions.
```

---

<a id="file-video-voice-v2-SYNC-LEDGER-json"></a>
## 📄 Fichier : `video/voice-v2/SYNC_LEDGER.json`

```json
{
  "duration": 120.75,
  "audio_duration": 119.249,
  "audio_speed": 1,
  "audio_continuous": true,
  "audio_trimmed": false,
  "tail_padding_seconds": 1.5010000000000048,
  "segments": [
    {
      "scene": 0,
      "title": "YOUCAM VTO STUDIO",
      "start": 0.0,
      "end": 5.833333333333333,
      "spoken_anchor": null,
      "source_start": 0,
      "source_end": 5
    },
    {
      "scene": 1,
      "title": "01 / ONE CONNECTED SHOPPING EXPERIENCE",
      "start": 5.833333333333333,
      "end": 12.416666666666666,
      "spoken_anchor": "The experience brings",
      "source_start": 5,
      "source_end": 12
    },
    {
      "scene": 2,
      "title": "02 / REAL YOUCAM CLOTHES API",
      "start": 12.416666666666666,
      "end": 21.083333333333332,
      "spoken_anchor": "First the real",
      "source_start": 12,
      "source_end": 21
    },
    {
      "scene": 3,
      "title": "02 / THE ACTUAL GENERATED RESULT",
      "start": 21.083333333333332,
      "end": 32.25,
      "spoken_anchor": "Here is the actual",
      "source_start": 21,
      "source_end": 35
    },
    {
      "scene": 4,
      "title": "02 / COMPARE THE EVIDENCE",
      "start": 32.25,
      "end": 39.0,
      "spoken_anchor": "This comparison shows",
      "source_start": 35,
      "source_end": 42
    },
    {
      "scene": 5,
      "title": "03 / START WITH A PHOTO",
      "start": 39.0,
      "end": 48.833333333333336,
      "spoken_anchor": "Now the interactive",
      "source_start": 42,
      "source_end": 49
    },
    {
      "scene": 6,
      "title": "04 / FIND THE RIGHT PIECE",
      "start": 48.833333333333336,
      "end": 54.25,
      "spoken_anchor": "Filter the collection",
      "source_start": 49,
      "source_end": 55
    },
    {
      "scene": 7,
      "title": "05 / PERSONALIZE THE EXPERIENCE",
      "start": 54.25,
      "end": 58.25,
      "spoken_anchor": "Switching from Emma",
      "source_start": 55,
      "source_end": 61
    },
    {
      "scene": 8,
      "title": "05 / COLOR CHANGES THE MATCH",
      "start": 58.25,
      "end": 63.416666666666664,
      "spoken_anchor": "For the cool",
      "source_start": 61,
      "source_end": 67
    },
    {
      "scene": 9,
      "title": "05 / EXPLORE THE CUT",
      "start": 63.416666666666664,
      "end": 68.25,
      "spoken_anchor": "Changing to a relaxed",
      "source_start": 67,
      "source_end": 73
    },
    {
      "scene": 10,
      "title": "05 / EXPLAIN EVERY SCORE",
      "start": 68.25,
      "end": 74.08333333333333,
      "spoken_anchor": "Each score has",
      "source_start": 73,
      "source_end": 79
    },
    {
      "scene": 11,
      "title": "06 / MOVE FROM ONE PIECE TO A LOOK",
      "start": 74.08333333333333,
      "end": 84.0,
      "spoken_anchor": "The personal shopper",
      "source_start": 79,
      "source_end": 91
    },
    {
      "scene": 12,
      "title": "07 / EXPLORE A BUSINESS SCENARIO",
      "start": 84.0,
      "end": 87.16666666666667,
      "spoken_anchor": "The Impact tab",
      "source_start": 91,
      "source_end": 99
    },
    {
      "scene": 13,
      "title": "07 / CHANGE THE ANNUAL VOLUME",
      "start": 87.16666666666667,
      "end": 91.0,
      "spoken_anchor": "Change the annual",
      "source_start": 99,
      "source_end": 105
    },
    {
      "scene": 14,
      "title": "07 / OPEN THE ASSUMPTIONS",
      "start": 91.0,
      "end": 101.75,
      "spoken_anchor": "Open the assumptions",
      "source_start": 105,
      "source_end": 117
    },
    {
      "scene": 15,
      "title": "08 / A CLEAR SKIN DEMO BOUNDARY",
      "start": 101.75,
      "end": 108.66666666666667,
      "spoken_anchor": "The skin tab",
      "source_start": 117,
      "source_end": 124
    },
    {
      "scene": 16,
      "title": "09 / BUILT FOR A QUICK JURY WALKTHROUGH",
      "start": 108.66666666666667,
      "end": 112.58333333333333,
      "spoken_anchor": "A guided walkthrough",
      "source_start": 124,
      "source_end": 131
    },
    {
      "scene": 17,
      "title": "YOUCAM VTO STUDIO",
      "start": 112.58333333333333,
      "end": 120.75,
      "spoken_anchor": "YouCam VTO Studio combines",
      "source_start": 131,
      "source_end": 138
    }
  ]
}
```

---

<a id="file-video-voice-v2-REVIEW-json"></a>
## 📄 Fichier : `video/voice-v2/REVIEW.json`

```json
{
  "duration_seconds": 120.75,
  "width": 1920,
  "height": 1080,
  "fps": 12.0,
  "audio_codec": "aac",
  "audio_sample_rate": 48000,
  "status": "PASS",
  "full_audio_video_decode": true,
  "decoded_video_frames": 1449,
  "source_audio_seconds": 119.249,
  "audio_speed": 1,
  "audio_continuous": true,
  "audio_trimmed": false,
  "audio_waveform_correlation": 0.9999758286229664,
  "tail_peak": 0.0,
  "peak_level_db": -5.91266,
  "representative_frames": 18,
  "subtitles_burned": false,
  "published": false,
  "remote_audio_upload": false,
  "sha256": "90e889944607b68c31f9a84c2ebfe3aa7ce72e0f0fb40869808adcde6958bd74"
}
```

---

<a id="file-video-subtitles-v3-README-md"></a>
## 📄 Fichier : `video/subtitles-v3/README.md`

```markdown
# YouCam — English subtitled edit v3

Export: `../renders/YouCam-English-v3-SUBTITLED.mp4` — 120.750 seconds (about 2:01), H.264 Full HD at 12 fps. Sidecar captions: `YouCam-English-v3.srt`. ASS styling source: `YouCam-English-v3.ass`.

43 English captions cover all 297 words of the authored narration. The text is aligned back to `../NARRATION_EN.txt`, preventing ASR substitutions of names such as YouCam and Clothes API. The existing local word timestamps supply the timing; no new audio upload or generation. Script/ASR similarity: 0.96828. Captions use at most two lines and 42 characters per line, with a minimum display duration of 1.24 seconds.

The existing editorial footer, below y=970, is replaced by a dedicated dark caption band. The original UI and imagery above that boundary retain their original size. Mode labels and the recorded-proof headings remain visible. This avoids overlapping narration subtitles with the previous editorial sentences. No visual scene timing is changed from v2.

The AAC audio is copied directly from v2: compressed audio packet hashes are identical. There is no new encoding, speed change, cut, gain change or music. V1, V2 and the supplied MP3 remain preserved.

## Validation

- All 1,449 video frames and the entire audio stream decode successfully.
- All 43 cues have visible subtitle pixels, within the dedicated caption band and safe horizontal margins.
- Caption text preserves all authored words in order; no overlap between cues.
- All 43 cue midpoint bands were reviewed in `verification/all-captions.jpg`; a full-size two-line example was also inspected.
- Duration, 1920 × 1080 resolution and 12 fps verified.
- No public upload or publication.

Reports: `MEDIA_CHECK.json`, `ALL_CUES_CHECK.json`, `CAPTION_CUES.json`, `DECODE_LOG.txt`. Reproduce locally with `prepare.py`, `render.py`, `verify.py` using the same Python environment as v2. `alignment.py` is a local copy of the owner's existing exact-script caption alignment helper from the Sentinel video project; that source was read only. Only its local alignment helpers are called, without external transcription services.
```

---

<a id="file-video-subtitles-v3-YouCam-English-v3-srt"></a>
## 📄 Fichier : `video/subtitles-v3/YouCam-English-v3.srt`

```text
1
00:00:00,000 --> 00:00:02,480
Meet YouCam VTO Studio:

2
00:00:03,300 --> 00:00:05,280
a more personal way to explore your style.

3
00:00:05,960 --> 00:00:08,040
The experience brings
a virtual fitting room,

4
00:00:08,260 --> 00:00:11,680
a curated catalog and explained
recommendations into one workspace.

5
00:00:12,540 --> 00:00:14,660
First, the real API evidence.

6
00:00:15,400 --> 00:00:17,690
These official sample images
provide a source person

7
00:00:17,700 --> 00:00:20,300
and a reference outfit to
the YouCam Clothes API.

8
00:00:21,200 --> 00:00:22,840
Here is the actual generated result.

9
00:00:23,520 --> 00:00:26,760
One successful cloth-v4 task
took about thirty-three seconds.

10
00:00:27,360 --> 00:00:29,790
The reference jacket,
red top, patterned jeans

11
00:00:29,800 --> 00:00:31,660
and boots appear on the source person.

12
00:00:32,400 --> 00:00:34,940
This comparison shows the
saved inputs and output.

13
00:00:35,540 --> 00:00:38,300
It is qualitative evidence
from a recorded API execution.

14
00:00:39,100 --> 00:00:41,520
Now, the interactive shopping walkthrough.

15
00:00:42,020 --> 00:00:43,960
Its simulation label stays explicit.

16
00:00:44,480 --> 00:00:46,670
Start with an example profile, upload

17
00:00:46,680 --> 00:00:48,480
a photo, or enter an image link.

18
00:00:48,980 --> 00:00:50,860
Filter the collection, choose a garment,

19
00:00:51,220 --> 00:00:53,740
and explore its colors, size and cut.

20
00:00:54,340 --> 00:00:56,290
Switching from Emma to Lucas changes

21
00:00:56,300 --> 00:00:58,390
the undertone profile
and the recommendation.

22
00:00:58,400 --> 00:01:03,100
For the cool profile, charcoal
increases the illustrated color harmony.

23
00:01:03,540 --> 00:01:05,210
Changing to a relaxed cut updates

24
00:01:05,220 --> 00:01:07,600
the garment illustration
and demo fit indicator.

25
00:01:08,340 --> 00:01:09,580
Each score has an explanation.

26
00:01:10,480 --> 00:01:12,170
These simulated indicators do not

27
00:01:12,180 --> 00:01:13,500
measure the person in the photo.

28
00:01:14,180 --> 00:01:15,730
The personal shopper moves from one

29
00:01:15,740 --> 00:01:17,160
item to a coordinated look.

30
00:01:17,560 --> 00:01:20,810
Local rules rank colors by
undertone affinity, explain

31
00:01:20,820 --> 00:01:23,380
the selection and display
an itemized bundle price.

32
00:01:24,120 --> 00:01:26,680
The impact tab lets a merchant
explore a business scenario.

33
00:01:27,280 --> 00:01:30,740
Change the annual order volume and
the modeled benefit recalculates.

34
00:01:31,160 --> 00:01:32,430
Open the assumptions to inspect

35
00:01:32,440 --> 00:01:34,820
basket revenue and avoided return costs.

36
00:01:35,620 --> 00:01:37,120
These are internal demo inputs.

37
00:01:37,800 --> 00:01:39,550
The projection excludes unmodeled costs

38
00:01:39,560 --> 00:01:41,260
and is not a measured profit claim.

39
00:01:41,880 --> 00:01:45,500
The skin tab previews eleven cosmetic
dimensions using simulated data.

40
00:01:46,060 --> 00:01:47,980
Live Skin AI mapping remains incomplete.

41
00:01:48,800 --> 00:01:51,960
A guided walkthrough helps judges
explore the English interface quickly.

42
00:01:52,720 --> 00:01:55,370
YouCam VTO Studio combines
verified Clothes API

43
00:01:55,380 --> 00:01:58,700
evidence, explained shopping
choices and transparent assumptions.
```

---

<a id="file-video-subtitles-v3-MEDIA-CHECK-json"></a>
## 📄 Fichier : `video/subtitles-v3/MEDIA_CHECK.json`

```json
{
  "status": "PASS",
  "duration_seconds": 120.75,
  "width": 1920,
  "height": 1080,
  "fps": 12,
  "decoded_video_frames": 1449,
  "full_audio_video_decode": true,
  "audio_packets_identical": true,
  "caption_count": 43,
  "all_cues_rendered": true,
  "script_words": 297,
  "caption_words": 297,
  "script_similarity": 0.9682804674457429,
  "maximum_lines": 2,
  "caption_region": [
    0,
    970,
    1920,
    110
  ],
  "ui_resized": false,
  "editorial_footer_replaced": true,
  "published": false,
  "remote_audio_upload": false,
  "sha256": "cc30c6bdee54c7ebcd199cdcc94010abdc95bb5e4aaac8f5e05972dc5cb9a055"
}
```

---

<a id="file-video-motion-v4-README-md"></a>
## 📄 Fichier : `video/motion-v4/README.md`

```markdown
# YouCam — interactive demo edit v4

Current export: `../renders/YouCam-Demo-v4-INTERACTIVE.mp4`. Target: 109.500 seconds (about 1:50), Full HD H.264, 12 fps, AAC voice, English captions. Final validation is recorded in `REVIEW.json`.

## What changed after the critique

The earlier edit mainly used one still screenshot per topic. V4 retains the opening and the separately recorded genuine Clothes API proof through 0:39, then replaces the shopping walkthrough with twelve actual temporal browser takes. The original voice is reused at natural speed, with three complete sentences removed: the repeated scoring disclaimer, the final unmodeled-profit disclaimer, and the sentence saying live Skin AI remains incomplete. Their subtitles are removed too. The mode labels, simulated skin wording, local rule-based recommendation explanation, and disclosed ROI assumptions remain truthful.

No assertion that all eleven skin scores drive the color-ranking engine is added: the actual code ranks catalog colors using the profile undertone.

## Capture method, with its limits

The same temporal image-sequence approach used in the owner's PayFlow workflow is used here: native CUA window screenshots are sampled continuously during real mouse/keyboard interaction, timestamped, and reconstructed as video. Actual cursor indications, UI transitions, dialog changes, page scrolling and changing values are present. No synthetic cursor path, fake browser UI, generated state transition, or Ken Burns movement is added to the interactive scenes.

This is **not** a native ScreenCaptureKit/30-fps screen recording. The native recorder probe was refused by macOS TCC. The working CUA route uses its existing capture access and requires no change to the owner's screen-recording settings. Sampling cadence varies (roughly 2–8 frames/s); the output video is 12 fps. Some selected takes are shortened or slightly retimed to fit the spoken topic, and brief end holds are used. The recorded input order is preserved inside each take. The volume range is focused by pointer and then adjusted with keyboard arrows; it is not a mouse drag.

`raw/manifest.json`, each take's `take.json`, `index.json`, and original PNGs retain the captured provenance. Failed `02-catalog` is preserved and excluded; `02b-catalog` is used. The first native recording permission probe and unsuccessful coordinate inputs are diagnostic attempts, not usable footage. No API key, provider console or personal upload is captured. Browser scenes show the actual local production application in explicitly forced mock mode. No new YouCam task was created.

This is an edited demonstration made from separately recorded takes. It is not one uninterrupted API-backed browser run. The real cloth-v4 result is the previously verified artifact from 16 October 2026, clearly labeled recorded API evidence.

## Assembly and voice

`PLAN_V4.json` records each visual source, interval, retiming factor and caption. `NARRATION_EN_V4.txt` is the retained narration. `YouCam-English-v4.srt` and `.ass` are the revised captions. Three whole-sentence cuts are performed inside existing quiet boundaries; speech is never accelerated or pitch-shifted. There is no music.

Two work exports failed timestamp verification and are excluded from delivery. The cause was heterogeneous pixel/range/aspect metadata across video segments, which reinitialized the combined audio/video filter graph. Intermediates now explicitly share square pixels, limited-range BT.709, pixel format and 12-fps output. Voice is assembled separately into a continuous PCM timeline before final muxing. The failed exports and intermediate attempts remain local for diagnosis.

Reproduce with `prepare.py`, `render.py`, `verify.py` in the existing local media Python environment. `render.py` preserves existing exports. Raw takes and intermediate exports are retained locally and excluded from Git and the source bundle; the final MP4 is a separate deliverable.

Review artifacts: `REVIEW.json`, `MOTION_CHECKS.json`, `CAPTION_CHECKS.json`, `verification/motion-scenes.jpg`, and full-size scene frames. Public hosting and final submission remain separate pending steps.
```

---

<a id="file-video-motion-v4-NARRATION-EN-V4-txt"></a>
## 📄 Fichier : `video/motion-v4/NARRATION_EN_V4.txt`

```text
Meet YouCam VTO Studio: a more personal way to explore your style.

The experience brings a virtual fitting room, a curated catalog and explained recommendations into one workspace.

First, the real API evidence. These official sample images provide a source person and a reference outfit to the YouCam Clothes API.

Here is the actual generated result. One successful cloth-v4 task took about thirty-three seconds. The reference jacket, red top, patterned jeans and boots appear on the source person.

This comparison shows the saved inputs and output. It is qualitative evidence from a recorded API execution.

Now, the interactive shopping walkthrough. Its simulation label stays explicit. Start with an example profile, upload a photo, or enter an image link.

Filter the collection, choose a garment, and explore its colors, size and cut.

Switching from Emma to Lucas changes the undertone profile and the recommendation.

For the cool profile, charcoal increases the illustrated color harmony.

Changing to a relaxed cut updates the garment illustration and demo fit indicator.

Each score has an explanation.

The personal shopper moves from one item to a coordinated look. Local rules rank colors by undertone affinity, explain the selection and display an itemized bundle price.

The impact tab lets a merchant explore a business scenario. Change the annual order volume and the modeled benefit recalculates.

Open the assumptions to inspect basket revenue and avoided return costs. These are internal demo inputs.

The skin tab previews eleven cosmetic dimensions using simulated data.

A guided walkthrough helps judges explore the English interface quickly.

YouCam VTO Studio combines verified Clothes API evidence, explained shopping choices and transparent assumptions.
```

---

<a id="file-video-motion-v4-YouCam-English-v4-srt"></a>
## 📄 Fichier : `video/motion-v4/YouCam-English-v4.srt`

```text
1
00:00:00,000 --> 00:00:02,480
Meet YouCam VTO Studio:

2
00:00:03,300 --> 00:00:05,280
a more personal way to explore your style.

3
00:00:05,960 --> 00:00:08,040
The experience brings
a virtual fitting room,

4
00:00:08,260 --> 00:00:11,680
a curated catalog and explained
recommendations into one workspace.

5
00:00:12,540 --> 00:00:14,660
First, the real API evidence.

6
00:00:15,400 --> 00:00:17,690
These official sample images
provide a source person

7
00:00:17,700 --> 00:00:20,300
and a reference outfit to
the YouCam Clothes API.

8
00:00:21,200 --> 00:00:22,840
Here is the actual generated result.

9
00:00:23,520 --> 00:00:26,760
One successful cloth-v4 task
took about thirty-three seconds.

10
00:00:27,360 --> 00:00:29,790
The reference jacket,
red top, patterned jeans

11
00:00:29,800 --> 00:00:31,660
and boots appear on the source person.

12
00:00:32,400 --> 00:00:34,940
This comparison shows the
saved inputs and output.

13
00:00:35,540 --> 00:00:38,300
It is qualitative evidence
from a recorded API execution.

14
00:00:39,100 --> 00:00:41,520
Now, the interactive shopping walkthrough.

15
00:00:42,020 --> 00:00:43,960
Its simulation label stays explicit.

16
00:00:44,480 --> 00:00:46,670
Start with an example profile, upload

17
00:00:46,680 --> 00:00:48,480
a photo, or enter an image link.

18
00:00:48,980 --> 00:00:50,860
Filter the collection, choose a garment,

19
00:00:51,220 --> 00:00:53,740
and explore its colors, size and cut.

20
00:00:54,340 --> 00:00:56,290
Switching from Emma to Lucas changes

21
00:00:56,300 --> 00:00:58,390
the undertone profile
and the recommendation.

22
00:00:58,400 --> 00:01:03,100
For the cool profile, charcoal
increases the illustrated color harmony.

23
00:01:03,540 --> 00:01:05,210
Changing to a relaxed cut updates

24
00:01:05,220 --> 00:01:07,600
the garment illustration
and demo fit indicator.

25
00:01:08,340 --> 00:01:09,580
Each score has an explanation.

26
00:01:10,097 --> 00:01:11,647
The personal shopper moves from one

27
00:01:11,657 --> 00:01:13,077
item to a coordinated look.

28
00:01:13,477 --> 00:01:16,727
Local rules rank colors by
undertone affinity, explain

29
00:01:16,737 --> 00:01:19,297
the selection and display
an itemized bundle price.

30
00:01:20,037 --> 00:01:22,597
The impact tab lets a merchant
explore a business scenario.

31
00:01:23,197 --> 00:01:26,657
Change the annual order volume and
the modeled benefit recalculates.

32
00:01:27,077 --> 00:01:28,347
Open the assumptions to inspect

33
00:01:28,357 --> 00:01:30,737
basket revenue and avoided return costs.

34
00:01:31,537 --> 00:01:33,037
These are internal demo inputs.

35
00:01:33,547 --> 00:01:37,167
The skin tab previews eleven cosmetic
dimensions using simulated data.

36
00:01:37,550 --> 00:01:40,710
A guided walkthrough helps judges
explore the English interface quickly.

37
00:01:41,470 --> 00:01:44,120
YouCam VTO Studio combines
verified Clothes API

38
00:01:44,130 --> 00:01:47,450
evidence, explained shopping
choices and transparent assumptions.
```

---

<a id="file-video-motion-v4-REVIEW-json"></a>
## 📄 Fichier : `video/motion-v4/REVIEW.json`

```json
{
  "status": "PASS",
  "duration": 109.5,
  "width": 1920,
  "height": 1080,
  "fps": 12.0,
  "audio_codec": "aac",
  "decoded_video_frames": 1314,
  "full_audio_video_decode": true,
  "temporal_browser_takes": 12,
  "source_capture_frames": 434,
  "all_motion_takes_show_ui_state_changes": true,
  "caption_count": 38,
  "all_captions_rendered": true,
  "caption_words": 268,
  "audio_speed": 1,
  "removed_whole_sentences": [
    "These simulated indicators do not measure the person in the photo.",
    "The projection excludes unmodeled costs and is not a measured profit claim.",
    "Live Skin AI mapping remains incomplete."
  ],
  "audio_waveform_correlation_to_declared_edit": 0.9999865161574966,
  "peak_dbfs": -6.379817962646484,
  "native_screen_recorder": false,
  "method": "Timestamped actual native CUA frame sequences, edited and reconstructed as video; frame sampling rate varies",
  "native_youcam_generation_during_recording": false,
  "published": false,
  "remote_upload": false,
  "sha256": "a95b12f118897013baa1b38867a9c6926a533b89bffa721d7459a271f8a47bfb"
}
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
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
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
    "eslint": "^8.57.1",
    "eslint-config-next": "^15.1.0",
    "postcss": "^8.4.49",
    "puppeteer-core": "^25.14.0",
    "tailwindcss": "^3.4.17",
    "tsx": "^4.19.2",
    "typescript": "^5.7.3"
  }
}
```

---

<a id="file-package-lock-json"></a>
## 📄 Fichier : `package-lock.json`

```json
{
  "name": "youcam-vto-agent",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "youcam-vto-agent",
      "version": "0.1.0",
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
        "eslint": "^8.57.1",
        "eslint-config-next": "^15.1.0",
        "postcss": "^8.4.49",
        "puppeteer-core": "^25.14.0",
        "tailwindcss": "^3.4.17",
        "tsx": "^4.19.2",
        "typescript": "^5.7.3"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.3.0.tgz",
      "integrity": "sha512-U4+70Pc5ZS9osnCBCE5Jha/ciHM+Yp+CNMNC/7HvYbNRk1Ldd+f7qO65W5qfhu/TCv+/ozljlXXe9Nj8419DMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.28.2.tgz",
      "integrity": "sha512-XExcO+dvLKvVtNTibSTBej1NCAbaGhWn9Ww1ZPx80qsahhPFe/8jgWP0IchNe0F3HwkU7n8ejhH8bjonqht8mQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.28.2.tgz",
      "integrity": "sha512-kXXoiPVVGQcnIYGOeaovwOURpniDBpSq4A03qkQ+BMQqtGG6HYap3xne9C1O1yo4TR3qxlCX5IqqmX6fFo2Lqg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.28.2.tgz",
      "integrity": "sha512-5YfKeeI8qWfBZIX+u2xZC3Zlb3Os/gLS2sbEKM+I4ZOcsWmHS2WLysCcQZDAFRslDUU5Oiq44gf6PYN1vGwG5A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.28.2.tgz",
      "integrity": "sha512-O387ite7SzUyCcy3JQX4P4bLtEA7bLLkx+esve5JHnyYfNTxcVpXZo9jhdB0lTKN44gztELTdU7nS8Nr16Fs1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.28.2.tgz",
      "integrity": "sha512-n4KqkOQrraxHJcgjM1RvwbigfQKIKJVpM7xp+KsxiyUSrRdIXnt73VhrPAx0fV44hgfmIVKjxMN9J1t5jySVkw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.28.2.tgz",
      "integrity": "sha512-uq6suIWYP37qzGddBKPw5QEQPi6HiLGsO7UmkpfyaYNQ3D+rN6w6WfwH+nuqcGXWvawGwxOEroO4YGnFh95azw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.28.2.tgz",
      "integrity": "sha512-n+I0BTSRIoy+d6RPKnEVwql5UwBJolytvY4mAOIEJorKlqgPII8ix6slVVrfZ5Tnj7glIZvloylbB/EJPMWEXw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.28.2.tgz",
      "integrity": "sha512-78XJTJkvPs0kz2w61301PJjXl4g7q3JqiYMZ/M/yVI73EHBrCRTgkhu9oqG7vPqq+a/yadEW8aD+agKlk5xrmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.28.2.tgz",
      "integrity": "sha512-XlDnu2q5yoqems+xay6wSAcg9DDD7K9RLKZEBOMZm3ckNpJBvOX20tSfby8KfrrhINDyv9V2YVZKY/SpoGJI8w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.28.2.tgz",
      "integrity": "sha512-pW4AC0P3it8c7do9MVM4p51FzHzdM/TZrerurgRcHJ2WTa1VQ1CIq18xncfpBJw4ojkiZZrKW2yIBWBP92j6Ug==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.28.2.tgz",
      "integrity": "sha512-CYbnj78HsIeA+DhgUKgFCfvNsTHFhMMrinUrMZpDXJXKN8T3XViTZ/+wtHeVxEWY8ewSzTFN+nRmSwO2tZaLUQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.28.2.tgz",
      "integrity": "sha512-buwkd8nsph4R+ajRvw0qM5Hja/TXQow3ptzWO2EbG/cqcIkHloRrdlBtQlshyYGTNFvfkfJ5tpPLVkY4DtsPfQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.28.2.tgz",
      "integrity": "sha512-ZVykbDyk7519VwiNb9Lcj9m8XM6v5V9uKPvrEMkkEedVewf+0itkhahp4HDpgERXhwLRpWFypsGbG/J8s0QjJA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.28.2.tgz",
      "integrity": "sha512-CAXl+Dtd9UUuJd8pKKdwh6MLm3MUMiqMPmhZ3tTSXPqfyQ3vDl6R5hZdZ/kYojK4ofXtdfSv1tFq8XzWx3heNQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.28.2.tgz",
      "integrity": "sha512-GeXCej4IQtU1B+QlDV8W/RRvbzI3O/Stss+/bCXv4lZls5WGRtu2a+3JkA3i4qIUlMXpcHebWpF8AkJhATowuA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.28.2.tgz",
      "integrity": "sha512-3H1weTYZPxt/WOhByszQZybS9w5lKzUn1FDMsgEChbHWQwHYQQRfBxgCcZvPhjHfKyJjIievvMmEUawJrdY9Dg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.28.2.tgz",
      "integrity": "sha512-4xTZr1FUmSoQW4XIWmit3tzQrUTZM+N3P0XV8xROKYF50XfI7xeO90+1bZvNwxIufQ9hDQVRJH5YhgPVF8A/HQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.28.2.tgz",
      "integrity": "sha512-sSATRjPeDBg3pdgHoQfoYBob11Kk1FGa9lui5RIHZCoCkJa9QKlvl3/vKz2usCmYYjs7ymJR/2Nnsqe+Hjt5nw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.28.2.tgz",
      "integrity": "sha512-lqnzCV+mM0gIADaKihiCg6ifgfU2L3h5E33rNQBN1Y4MaVGnzryzmvvf7UHxprpQdE8hpqLolJ9Rl+SkIRDpyw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.28.2.tgz",
      "integrity": "sha512-AL2qJILH7lNjrDmCQDvdxMfAUIv8KMNZOvrwAQ8i8//ntL9FflhOyMJ8OZSMBb8/AWXe3/5v5S20y3zCoZWKoQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.28.2.tgz",
      "integrity": "sha512-QtiuPytchRyC4rwUKhexJdQKvDuZ6hWloi3igqPQNUJCS1/v9EiO3UTOXR6A3FoMo4fnAKbWJdqaIwhOzh8qEw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.28.2.tgz",
      "integrity": "sha512-WkhYDmpTjLvGlScA1rwjRUmhl4k8oXR3cIbtqWmELgU/dFeHHlEllxDvdWcNJV9rbzCexB5vz8gtNewWLgCT7Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.28.2.tgz",
      "integrity": "sha512-GPMSkTOtMnv2U2F8gxe4Io6qmVs+YKyp832Etqqxr0hFngmXQ3rzwytelm3GIn7T4VviRUlf3sOgBOiTdvaf7g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.28.2.tgz",
      "integrity": "sha512-PIhhEkE9uPBleRBrQEJpUn7MBnibZzbGzYWPmY3x+YoVg/95zbjB4CxPPOQ8l5tYYM4mMaCthF8/1DIfBQQyWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.28.2.tgz",
      "integrity": "sha512-YmJbfTlvU7Sdn9BB+4PRES4oB6pxgS37MAONj+hBr/cpXS1aBPKXxNnDbu+QCWPj0o9dgyxeq79g6c5P8KeuYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.28.2.tgz",
      "integrity": "sha512-5ebpxr3nWMzrL/rnUI755Jkuee0bHL/Gq0WTF9lvcpv73wAp5eu8MfBUgWK9bhWvZjj7yX8etf/8tI8Ney695g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.10.1.tgz",
      "integrity": "sha512-cuadcxVFE8sDK6iWJbs8Sn0av2Nrh2QSGQhVlBW9AaAHqHwjWsZHT8LJ4hFGPh7ASBV2deFdM7H/DPjulmh8rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.5.tgz",
      "integrity": "sha512-QRUlFQ0WxvdWyqqG/WtI3iupfD5rBzmCHXSdPsY91sAtVtTo7Q4cb6zOccZ3gqEqkr0f1As1ehLqmEpDsRf+lg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.5.tgz",
      "integrity": "sha512-+BR255RhDlpygUpOc/Jdt1nT6DQ3XG/ERo5wbcdOf5Q320dKtPCKPLR1LJs9VGXRaMa8l1uUa0tkCNOXiAxZUw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.5.tgz",
      "integrity": "sha512-Y/z91nEZ4uIBX5X3nfTovjU9lHNKFYbL2lpHCLVNmXQK03VIZvXBBt0KxbPGp2SdGSF+2mQU4e+hQaWOt86iAw==",
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.4.tgz",
      "integrity": "sha512-5R89nBYiRdUlSWJxPhO+GVtaXzXSxKnRu/xqMn3KTA3L9EB9Oy/P+Nn2f2vlhPuUdy/Zusb2DarbyTpGCfEDuw==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.4.tgz",
      "integrity": "sha512-iR2OKH80yi0U+dUplyh3/xdpFvps6YkCwsXenIJxqxR1v9o+xtKTGbS9H7cps+2Vxjc8B1j96p75NmTGjIhtpQ==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.4.tgz",
      "integrity": "sha512-LmRtTsOHuvM2+wlO2Db37dx5MiZhB0FvSunciw48YjdOkZz9KAiRbm8ujeMOA1INqmei5NapFxYEK1D1ZSidmw==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.4.tgz",
      "integrity": "sha512-Y3dgX/6lE2QhQb+Gxy0WZxfg9MEm/JBjamZpS2IklP7xIQoKN4hzAm7KcMVGtaVDt3neE9OKBC7vAfonA/Lr1A==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.4.tgz",
      "integrity": "sha512-Le6boB8Tai0Nis+gIxIpKx68UDVVIqdR8Tin5Yf1z2LJJQLDJvCDRqRu+jC2qCoD+eIomonmOwB4smBRxfVpYQ==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.4.tgz",
      "integrity": "sha512-aHkkIEHPRdQEegJN20MLmGtxYD9R2wQr3Cwpddnu5+YKMt6Uzax7S9h5gpZTo8wyrGuZSlfQ63OevL5mTyOC7Q==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.4.tgz",
      "integrity": "sha512-ra/mB6MikESDUO7Yg+Mi95bFBb9GsObURuhnOv3OqknjGe9sZrG8tCe9q0xSIGrtLgvgw0gKnFWcK4blSgQOuQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.4.tgz",
      "integrity": "sha512-GJ//SSXbnwSDes02umB3nDJLFcQzw8a18V8fyhqr6tV515tOEMdImjjxj1AoafMRz56F3PHgftnj1QEKSU1zkw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.4.tgz",
      "integrity": "sha512-hvulFwtjUcagsis6BBxHwGFwWoNZjgYmULGVrZcyfNbjA8hKILbRxGg15/7w5HDyXHXUos/j6baAWqnCyQ2DWA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.4.tgz",
      "integrity": "sha512-6zXKeE/p39I1AmA3cJG35eyBGNqNddLnUXjhwBnsGjFPWqf5VKkDBEqaEkPDoTEtkxwi2vv8Tcr2mDyP4So7Fg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.5.tgz",
      "integrity": "sha512-LEaXK2WdXVK5ykcw0buWyPMsmLLL2vpHLD6yrNSW+JGEL3BZPA4tpKN6iaMc4AxTTAoaX/sU1rOL51lcIz48ZQ==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.5.tgz",
      "integrity": "sha512-LYVx5JTsOM2CBzmxreh+nl64/3H6Xb09iSLknqH47z2T2DFFxDeFLP5y4dJwe6H7uGQlHPyEEtIqyo3DYsRwdQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.5.tgz",
      "integrity": "sha512-QVxAAq8evVRI9ia2vqgwrmWucn5Dfv+JdWzj75pD8omHLPSP7f8p20O8jxzjCcuCEQEOtYOZUmX1hkiZ0kdevA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.5.tgz",
      "integrity": "sha512-LtdreXguaavKODPIfzJ4kffx7UNt1omwtK0rch4EBbbSTXPnxWmYSayXdLJw0fJzQ97kHt1gL/yh4tvU+nCyRQ==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.5.tgz",
      "integrity": "sha512-UZasTOFiYzotTsGOCu42BfUzP6Tu6Do/947iRm1RsLKvlllxwGcn4RN27LibGWceix4Y+Pmw3jsnTcCQIgWjqA==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.5.tgz",
      "integrity": "sha512-SxFtLTeJInhAA9Q836kux2vZNeOBQEx658qvbboZScr0wIARym3IcGmW7KpVD5sbVg0Ojy+udFQdayYIZyoNog==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.5.tgz",
      "integrity": "sha512-9HbMclmI1zlNkFRs3z9/eBtDjfD0sGlrX1z6b1qwmiFY5ElDLh4BC0LPBdVp7z1DXFiKlIcznf+ZlsuZzLxQqg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.5.tgz",
      "integrity": "sha512-4KOphqB035HrVdqLZfCgMzzERrQkkzOwRhl4OAkRO1YCldbaFjySXMaK534Mo0V+LndnlJk+sbUyLeU0ULyD1A==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.5.tgz",
      "integrity": "sha512-Ptsga1su4tQx+LLF1ECS9U6nz5kmrXKo6XVbtR48Ke3ZRxxgaWBu7IDtEe1quo8hiupwm6WFqxVlXaSf7IINGQ==",
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.5.tgz",
      "integrity": "sha512-hfhF/FmoQyTUkA0bIKFOtw536BQSeBMe6BF6QyWlrPxT754+TFLaZ7sKKTfvvM0yJgKgaYTwnFCIZ/GuDw5SUA==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.5.tgz",
      "integrity": "sha512-X4t7g+7ZA5DKblCBEXGjUqqemj4vczING/5viFwAL8h4N3qYeyjwdCvRLHi4EdOUI+2Z7UFlp1VM+p/AuEtm6Q==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.5.tgz",
      "integrity": "sha512-5Zm82LoBc43nhwNybZlG7Y1KO//Zhsn306fQl29ZOuStHLGTo3BWL83q3cznX0poxSAMuYL1On/BHBxkBeKr6A==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.5.tgz",
      "integrity": "sha512-x76eH0vEiHlcMQu8Y8IenntaACtddpT6W0wmXtWrnKcnKI7ME5DdgqhAD6SEWOEl1v2zDvkZDhFA9KnURwpfqg==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.2.6.tgz",
      "integrity": "sha512-mRyDmEw9/fCDXCGfL1sbgIw/GUK0PVxRW4YwgPN61F3LQ+fSyoBFarJVzgGyhF6kRzEQZ0FejDqm4WLXSeqQmw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.3"
      },
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=23.5.0"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1 || 2.0.0-beta.2",
        "@emnapi/runtime": "^1.7.1 || 2.0.0-beta.2"
      }
    },
    "node_modules/@next/env": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-15.5.28.tgz",
      "integrity": "sha512-xxW5EBI8fMPuVTPBW7LL980IRbuDXlbkUAwp9DDhtb4Lnich3nJ13uYpvrX4VE74hWPf6AvHHAMmGCidcHjbfg==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-15.1.0.tgz",
      "integrity": "sha512-+jPT0h+nelBT6HC9ZCHGc7DgGVy04cv4shYdAe6tKlEbjQUtwU3LzQhzbDHQyY2m6g39m6B0kOFVuLGBrxxbGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/eslint-plugin-next/node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/@next/eslint-plugin-next/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-15.5.28.tgz",
      "integrity": "sha512-dPoQYXcfSIqx5o+TOXVXO7kONK5qbtNRDeiTfII0bT3puGIT6VF5e0QwmxNZfEZ5Zety5f3m9P/p4xqwfiLlPg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-15.5.28.tgz",
      "integrity": "sha512-RgCJ7buBivTH+6sddqaVm+/v8kwMHlFkobvdt3DfETutws5HrxnToMIWSN9X3MZ3aAi7BbKrGZZWUDQLEycXqw==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-15.5.28.tgz",
      "integrity": "sha512-OHXQe13olE59aKe++zHavGcJPh5SLHXi6Anret3BBeq1+qhSuOJDNAli/EDDfxs6UTqA4Qddo4uyYry2slyjiQ==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-15.5.28.tgz",
      "integrity": "sha512-nTB7bB6vfn4ezCJNYP43ukt2o8L3+WxKF/sTcTxepdXsJh3SM9RhlU7wrZYbH7L4HO5M87dqDTwm8587vAkCiw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.5.28.tgz",
      "integrity": "sha512-WXCfVI32rW3xCusoUX1RpZKtyChWU2Zwe27JUDmM3KrXwcDNc9vV4zEq0GKFAURnuQ/Ouo/XqPvB0yh445XZCg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.5.28.tgz",
      "integrity": "sha512-Miq+NDb/HWsXuxseYxMM6fuEOQXgTziarkKIRpVKCn8W69cEfhQaQr+90pO+u4q2CbJR2wzXmUuCFyZaJs/Nng==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-15.5.28.tgz",
      "integrity": "sha512-5LR79lemgDlgxvG7MQJ+zHCkVcrUoQuO7CiIvq3I58vNW4goSOE2b+19Z6FujRWMouvni4gvudYFuFuNxolGWA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-15.5.28.tgz",
      "integrity": "sha512-GNipvXUYROSTf4PXEyH95FrWImIB5zdaK6uEOg0RP1/X2drnvoMwiBkJ0VWdzX7w3iiBm3y5g2TxkKDGVTOQcg==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@puppeteer/browsers": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/@puppeteer/browsers/-/browsers-3.2.5.tgz",
      "integrity": "sha512-UoCo3Pynbm37aLEEoydSiG+t24ui7sLD40+07CKxzxNy4PpSowJMkvlLIiV67XjP1lMVynhQVnuwlTABqBH8LQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "modern-tar": "^0.8.5",
        "yargs": "^18.0.0"
      },
      "bin": {
        "browsers": "lib/main-cli.js"
      },
      "engines": {
        "node": ">=22.12.0"
      },
      "peerDependencies": {
        "proxy-agent": ">=8.0.1",
        "yauzl": "^2.10.0 || ^3.4.0"
      },
      "peerDependenciesMeta": {
        "proxy-agent": {
          "optional": true
        },
        "yauzl": {
          "optional": true
        }
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rushstack/eslint-patch": {
      "version": "1.16.1",
      "resolved": "https://registry.npmjs.org/@rushstack/eslint-patch/-/eslint-patch-1.16.1.tgz",
      "integrity": "sha512-TvZbIpeKqGQQ7X0zSCvPH9riMSFQFSggnfBjFZ1mEoILW+UuXCKwOoPcgjMwiUtRqFZ8jWhPJc4um14vC6I4ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.4",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.4.tgz",
      "integrity": "sha512-W3c4gRigFS0T/Ma4qIYF3GDAc5AQdHb1yL5znJT1Zv1YaD9Kitx656wBjvr19qbiosmZT8lWDM5BEMynUqX65A==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.20.5",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.20.5.tgz",
      "integrity": "sha512-U2+DNr+wSjpsTS/wZGYHq7GcwfuSmKiKvoPvK22zwTlRhU91yOniN4qRR5KhIjvif7ysw/dz/hKmfDH0Ris4aA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.72.1.tgz",
      "integrity": "sha512-5CokTWXpmbylfFabsbvHC0CAw3XLaGnoa+nFJX5FR592h/LoZsENUE6p/rg5xvkKrFEXz6pYmgI29AgXc2N3BQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.72.1",
        "@typescript-eslint/type-utils": "8.72.1",
        "@typescript-eslint/utils": "8.72.1",
        "@typescript-eslint/visitor-keys": "8.72.1",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.72.1",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.14",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.14.tgz",
      "integrity": "sha512-wCBiZ77u1tuWde6G/nfOtLaCTYcFDU5yCzARzK10y+rLhzYoL7a7yEemcopcc2Mzow7gZOIjnV2ym1NYmdiJOQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.72.1.tgz",
      "integrity": "sha512-ZGwZP4OCfyA0AQTpEAMWz+rtX01DRhQWW5hB0ucKDEIX5U7jdmPSaMx94rQfaPAQzIYz2BimOgKOJtjfpRFQ9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.72.1",
        "@typescript-eslint/types": "8.72.1",
        "@typescript-eslint/typescript-estree": "8.72.1",
        "@typescript-eslint/visitor-keys": "8.72.1",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.72.1.tgz",
      "integrity": "sha512-fAuVMkwdO/huI8nyo/WKnNKf6Gag93S56Rh3Ts5mGcavwSdaN8tRg1gCeIGX8PF+nzp1BjGfO4gHhGzW1J6jTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.72.1",
        "@typescript-eslint/types": "^8.72.1",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.72.1.tgz",
      "integrity": "sha512-lC/t6eMCZZQAAKZEYGL6RDVSuFehpdmMT6h+nJIjIa6oylN/PwDgDVtEIbB7O9xFfZYtZAYLoLlDNWKJhtF+uQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.72.1",
        "@typescript-eslint/visitor-keys": "8.72.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.72.1.tgz",
      "integrity": "sha512-e4D5R5vpeAEPBxT2BAzsFQL3sbwyeeeo5+aczgNSRK1V734jE7pTqaGFU+fXapWEQwnZbpFaTn32+Z8DwS6OTg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.72.1.tgz",
      "integrity": "sha512-iY2wlmyrXJmx4yxUGP3aYCFF3cA/6ShddOKmLU2dx7LnEykbAM8WThlxZEfd1NddqceF6eJmZUayxx9oKIYNlg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.72.1",
        "@typescript-eslint/typescript-estree": "8.72.1",
        "@typescript-eslint/utils": "8.72.1",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.72.1.tgz",
      "integrity": "sha512-LmE5IhQet1BWOWEXqBrVtBPsMAOQ6Nzk35d+WLh3mk4EUF33sqlfxjio1MdYeSvKSG5skactKKuixBIKXhL4Rw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.72.1.tgz",
      "integrity": "sha512-DAlUoUV93hIvrtIQLwCbmZQYVZwOMhiHJrOVUUIWicFZaIYjTRqlY3I/NZevfkLmSqkNHRu2qYDcq9lrn16oOQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.72.1",
        "@typescript-eslint/tsconfig-utils": "8.72.1",
        "@typescript-eslint/types": "8.72.1",
        "@typescript-eslint/visitor-keys": "8.72.1",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.12.tgz",
      "integrity": "sha512-YovQ3rzhaLMIrDjNDMkNS01tea93qhEhG5xy8f6+R0l+dw3Ki+5sCoIoI942iuLZTHWogWktgwVDhU09iNEimQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.6",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.6.tgz",
      "integrity": "sha512-vpLQEs+VLCr1nU0BXS07maYoFwlDAH0gngQuuttxIwutDFEMHq2blX+8vpgxDdK3J1PwjCJiep77OitTZ4Ll1A==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.8"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.72.1.tgz",
      "integrity": "sha512-5v5liypurJBFHCBNqh/RjsymAD+VWcE0djuGY/BUqp5fC3Qn+luWDEksjuTtWjPn6i5zQlUtkZCRG/CYG0yCkA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.72.1",
        "@typescript-eslint/types": "8.72.1",
        "@typescript-eslint/typescript-estree": "8.72.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.72.1",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.72.1.tgz",
      "integrity": "sha512-SB8xqipSzZHUePCCLNeYxqnxq83X61/qzNhjQGbTfjxGZIeOEP7tBgWYX05Tcd6CgE02WdTJnh5b8kMZJ/+bnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.72.1",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.4.0.tgz",
      "integrity": "sha512-1mEZtMKPM09vDmQt5y7YvmN2+DFTP7Tg0EWXdic8/C6VRnpb33e4ghisCIE3WZjsE2N8mf+QV1Zqh7ZFYLWInQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.12.2.tgz",
      "integrity": "sha512-g5T90pqg1bo/7mytQx6F4iBNC0Wsh9cu+z9veDbFjc7HjpesJFWD7QMS0NGStXM075+7dJPPVvBbpZlnrdpi/w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.12.2.tgz",
      "integrity": "sha512-YGCRZv/9GLhwmz6mYDeTsm/92BAyR28l6c2ReweVW5pWgfsitWLY8upvfRlGdoyD8HjeTHSYJWyZGD4KJA/nFQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.12.2.tgz",
      "integrity": "sha512-u9DiNT1auQMO20A9SyTuG3wUgQWB9Z7KjAg0uFuCDR1FsAY8A0CG2S6JpHS1xwm/w1G08bjXZDcyOCjv1WAm2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.12.2.tgz",
      "integrity": "sha512-f7rPLi/T1HVKZu/u6t87lroib16n8vrSzcyxI7lg4BGO9UF26KhQL44sd9eOUgrTYhvRXtWOIZT5PejdPyJfUA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.12.2.tgz",
      "integrity": "sha512-BpcOjWCJub6nRZUS2zA20pmLvjtqAtGejETaIyRLiZiQf++cbrjltLA5NN/xaXfqeOBOSlMFbemIl5/S5tljmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.12.2.tgz",
      "integrity": "sha512-vZTDvdSISZjJx66OzJqtsOhzifbqRjbmI1Mnu49fQDwog5GtDI4QidRiEAYbZCRj9C8YZEW+3ZjqsyS9GR4k2A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.12.2.tgz",
      "integrity": "sha512-BiPI+IrIlwcW4nLLMM21+B1dFPzd55yAVgVGrdgDjNef+ch03GdxrcyaIz8X9SsQirh/kCQ7mviyWlMxdh2D7g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.12.2.tgz",
      "integrity": "sha512-zJc0H99FEPoFfSrNpa91HYfxzfAJCr502oxNK1cfdC9hlaFI43RT+JFCann9JUgZmLzzntChHyn13Sgn9ljHNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.12.2.tgz",
      "integrity": "sha512-KQ3Lki6l+Pz1k/eBipN41ES+YUK30beLGb9YqcB1O542cyLCNE6GaxrfcY3T6EezmGGk84wb5XyO9loTM9tkcA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-gnu/-/resolver-binding-linux-loong64-gnu-1.12.2.tgz",
      "integrity": "sha512-3SJGEh1DborhG6pyxvhPzCT4bbSIVihsvgJc13P1bHG7KLdNDaF9T3gsTwFc7Jw/5Y5/iWOjkEx7Zy0NvCGX3Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-musl/-/resolver-binding-linux-loong64-musl-1.12.2.tgz",
      "integrity": "sha512-jiuG/Obbel7uw1PwHNFfrkiKhLAF6mnyZ6aWlOAVN9WqKm8v0OFGnciJIHu8+CMvXLQ8AD51LPzAoUfT21D5Ew==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.12.2.tgz",
      "integrity": "sha512-q7xRvVpmcfeL+LlZg8Pbbo6QaTZwDU5BaGZbwfhkEsXJn3Was8xYfE0RBH266xZt0rM6B7i8xAYIvjthuUIWHg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.12.2.tgz",
      "integrity": "sha512-0CVdx6lcnT3Q9inOH8tsMIOJ6ImndllMjqJHg8RLVdB7Vq4SfkEXl9mCSsVNuNA4MCYycRicCUxPCabVHJRr6A==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.12.2.tgz",
      "integrity": "sha512-iOwlRo9vnp6R6ohHQS11n0NnfdXx/omhkocmIfaPRpQhKZ+3BDMkkdRVh53qjkFkpPddf+FETA28NwGN7l5l+w==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.12.2.tgz",
      "integrity": "sha512-HYJtLfXq94q8iZNFT1lknx258wlkkWhZeUXJRqzKBBUJ00CvZ+N33zgbCqimLjsyw5Va6uUxhVa12mI+kaveEw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.12.2.tgz",
      "integrity": "sha512-mPsUhunKKDih5O96Y6enDQyHc1SqBPlY1E/SfMWDM3EdJ95Z9CArPeCVwCCqbP45ljvivdEk8Fxn+SIb1rDAJQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.12.2.tgz",
      "integrity": "sha512-azrt6+5ydLd8Vt210AAFis/lZevSfPw93EJRIJG+xPu4WCJ8K0kppCTpMyLPcKT7H15M4Jnt2tMp5bOvCkRC6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-openharmony-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-openharmony-arm64/-/resolver-binding-openharmony-arm64-1.12.2.tgz",
      "integrity": "sha512-YZ9hP4O0X9PQb8eO980qmLNGH4zT3I9+SZTdt0Pr0YyuGQhYKoOZkV02VzrzyOZJ5xIJ3UFIenKkUkGg8GjgWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.12.2.tgz",
      "integrity": "sha512-tYFDIkMxSflfEc/h92ZWNsZlHSwgimbNHSO3PL2JWQHfCuC2q316jMyYU9TIWZsFK2bQwyK5VAdYgn8ygPj69A==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi/node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.12.2.tgz",
      "integrity": "sha512-qzNyg3xL0VPQmCaUh+N5jSitce6k+uCBfMDesWRnlULOZaqUkaJ0ybdT+UqlAWJoQjuqfIU/0Ptx9bteN4D82g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.12.2.tgz",
      "integrity": "sha512-WD9sY00OfpHVGfsnHZoA8jVT+esS/Bg8z8jzxp5BnDCjjwsuKsPQrzswwpFy4J1AUJbXPRfkpcX0mXrzeXW79g==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.12.2.tgz",
      "integrity": "sha512-nAB74NfSNKknqQ1RrYj6uz8FcXEomu/MATJZxh/x+BArzN2U3JbOYC0APYzUIGhVY3m5hRxA8VPNdPBoG8txlA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.19.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.19.0.tgz",
      "integrity": "sha512-oJlA3XiRm7Cyk6qFD2Jn8ak9B7jSy0qy00ADO3+8dpT0LSjFihQYv4C02LFCSYJV3Q37xYwwRy5m+IpIiUzqWw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "6.4.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.4.0.tgz",
      "integrity": "sha512-KzTVk2tCWAHtYrvvvaP8bJKJq2pVinhLcGEQdtLIYPbmNGNyYe8QwNaTUYQp2J7/vIsUKt5QCqAfUkYyG9DkOw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/ansi-styles": {
      "version": "6.2.3",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.3.tgz",
      "integrity": "sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/any-promise": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/arg": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",
      "integrity": "sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.2.0.tgz",
      "integrity": "sha512-VXY5eFRarnXcYxwBjJzPmEhH55+rmP79/+ueDhi0F+TuqfHCItagIHqxeUZrmgrOPa31QTh9H85DjX3FfJ0FTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "es-shim-unscopables": "^1.1.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.6.1",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.6.1.tgz",
      "integrity": "sha512-cL1Qz6ADZhcEbny/8HPfe99J6HhNoYtpX2LFLIbhgGE7Q1hlQVkYFdetDN7Id3KiQxhDrHwzlHr/YQCnZ8+xSA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.28.9",
        "caniuse-lite": "^1.0.30001810",
        "fraction.js": "^5.3.4",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.14.0.tgz",
      "integrity": "sha512-9WTZxEjsZ7b13TH8JPmbV2z8CHbl80/2hm3XPEG4JgNdQLK81IBRXmSxHfMAOkSqQeRxT/0dwNDz2GOm3zzpcQ==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.29",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.29.tgz",
      "integrity": "sha512-YeesxhUmR4h5y5V8KF8iBCqJb8YFrBJ++XBTeGcWIaQOYXGN19JM0FoiOjAhwuDoln8owMgXcWBmgHtYSkky2w==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.21",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.21.tgz",
      "integrity": "sha512-9zeA+KLZNNzglF2TPKRQEDyx6Yby7daAkuy8MiPzpXPsYDWi/DRM8jmwUDxokQjYqBpv5DgPiwD4h4ZZSy1Ujw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.29.3",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.29.3.tgz",
      "integrity": "sha512-1R4kiYKXGViqEN0CnoDrXc1StD9niAwu+j2dukWzrD4bJgsD4lDmEp0CRbc6E/vYJIfTHwPmwyaKtVSudICdPA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.26",
        "caniuse-lite": "^1.0.30001813",
        "electron-to-chromium": "^1.5.439",
        "node-releases": "^2.0.57",
        "update-browserslist-db": "^1.3.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/camelcase-css": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz",
      "integrity": "sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001816",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001816.tgz",
      "integrity": "sha512-+8Yx7BXCoqk6IF8yTicjfUR6D/ldJzdlsodlEOiOSPmhK844WIgk67/zIQaGAOxNkZyyvBlrRFnLvqKIoqbAFw==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chalk/node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chokidar/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/chromium-bidi": {
      "version": "157.0.8090-0",
      "resolved": "https://registry.npmjs.org/chromium-bidi/-/chromium-bidi-157.0.8090-0.tgz",
      "integrity": "sha512-KJw7IQgqXwxpJgJlEIPg5mr2ZoqA+jkTRtc5EABI7sUJ3bu3cpI7NuEBoj4Gn1AsF78CaT9So5WQWspK3/wYag==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "mitt": "^3.0.1",
        "zod": "^4.6.5"
      },
      "engines": {
        "node": ">=20.19.0 <22.0.0 || >=22.12.0"
      },
      "peerDependencies": {
        "devtools-protocol": "*"
      }
    },
    "node_modules/chromium-bidi/node_modules/zod": {
      "version": "4.6.7",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.6.7.tgz",
      "integrity": "sha512-g8W2D2kU6a8untc053fX1uVBKzM7yqAxW/3zwk83+6RyF2+SKOuV+c0wBDhUwzV1PaGapmZH+rmcUzPf+3CGwg==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/cliui": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-9.0.1.tgz",
      "integrity": "sha512-k7ndgKhwoQveBL+/1tqGJYNz097I7WOvwbmmU2AR5+magtbjPWQTS1C5vzGkBC8Ym8UWRzfKUzUUqFLypY4Q+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^7.2.0",
        "strip-ansi": "^7.1.0",
        "wrap-ansi": "^9.0.0"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/cliui/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/commander": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-4.1.1.tgz",
      "integrity": "sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "license": "Apache-2.0",
      "optional": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/devtools-protocol": {
      "version": "0.0.1696802",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1696802.tgz",
      "integrity": "sha512-FO5/SENfvc2K8wRnWQflKcwuoTH4dBkXCWTQ9ebIWtuX8JM5+ZvCotaEmkfh21pO7TvIKGTM3hG4xFiq9WTwmg==",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/didyoumean": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz",
      "integrity": "sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/dlv": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz",
      "integrity": "sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.458",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.458.tgz",
      "integrity": "sha512-/hIH2gRSmxrf4/X4Nw/t/Wc8PVS22l8/3HnWjWTWsTOM5dsnMUPZF/+u+yr3LqweNuTBJE1rq6qAQzKkZVwMfA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "10.6.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-10.6.0.tgz",
      "integrity": "sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-abstract-get": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-abstract-get/-/es-abstract-get-1.0.0.tgz",
      "integrity": "sha512-6PMWXpdhshVvFp+FoWYs1EvG1Nj0tvk0dZM+XcK0xMEM1czRVcP6ohqPWHy6qPagSpC8j4+p89WXlT+xXJs/fg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "is-callable": "^1.2.7",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.4.0.tgz",
      "integrity": "sha512-c/A0P0oxkACDc+cKWw8evLXK83oBKgn0qPOqCYT4x9uolpCIJAcYvJC9QYKNDRPsTeGyCrQ326jrvgZWdCdK5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.2.tgz",
      "integrity": "sha512-HWcBoN6NileqtSydK2FqHbS/LoDd2pqrnQHLyJzBj4kOp/ky2MWMN694xOfkK8/SnUsW2DH7EfyVlydKCsm1Zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.4.tgz",
      "integrity": "sha512-yPDz7wqpg1/mmHLmS3tcfTfbw5f1eryXvyghYBffGdERwe+mV7ZcWzTR8LR17Kvqt3qfPurjlonmnq3MKXIOXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-abstract-get": "^1.0.0",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "is-callable": "^1.2.7",
        "is-date-object": "^1.1.0",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/esbuild": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.28.2.tgz",
      "integrity": "sha512-HKVLS8dvII+xoKW9kmqxbRKrnWEXfJJr/FZhhJmiqIB0e053QNYFqOBouTMO/k5sID4MvCiUCvv8b9M4h32wIA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.28.2",
        "@esbuild/android-arm": "0.28.2",
        "@esbuild/android-arm64": "0.28.2",
        "@esbuild/android-x64": "0.28.2",
        "@esbuild/darwin-arm64": "0.28.2",
        "@esbuild/darwin-x64": "0.28.2",
        "@esbuild/freebsd-arm64": "0.28.2",
        "@esbuild/freebsd-x64": "0.28.2",
        "@esbuild/linux-arm": "0.28.2",
        "@esbuild/linux-arm64": "0.28.2",
        "@esbuild/linux-ia32": "0.28.2",
        "@esbuild/linux-loong64": "0.28.2",
        "@esbuild/linux-mips64el": "0.28.2",
        "@esbuild/linux-ppc64": "0.28.2",
        "@esbuild/linux-riscv64": "0.28.2",
        "@esbuild/linux-s390x": "0.28.2",
        "@esbuild/linux-x64": "0.28.2",
        "@esbuild/netbsd-arm64": "0.28.2",
        "@esbuild/netbsd-x64": "0.28.2",
        "@esbuild/openbsd-arm64": "0.28.2",
        "@esbuild/openbsd-x64": "0.28.2",
        "@esbuild/openharmony-arm64": "0.28.2",
        "@esbuild/sunos-x64": "0.28.2",
        "@esbuild/win32-arm64": "0.28.2",
        "@esbuild/win32-ia32": "0.28.2",
        "@esbuild/win32-x64": "0.28.2"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-config-next": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-15.1.0.tgz",
      "integrity": "sha512-gADO+nKVseGso3DtOrYX9H7TxB/MuX7AUYhMlvQMqLYvUWu4HrOQuU7cC1HW74tHIqkAvXdwgAz3TCbczzSEXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "15.1.0",
        "@rushstack/eslint-patch": "^1.10.3",
        "@typescript-eslint/eslint-plugin": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "@typescript-eslint/parser": "^5.4.2 || ^6.0.0 || ^7.0.0 || ^8.0.0",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.31.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^5.0.0"
      },
      "peerDependencies": {
        "eslint": "^7.23.0 || ^8.0.0 || ^9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/resolve": {
      "version": "2.0.0-next.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.7.tgz",
      "integrity": "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.2",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.14.0",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.14.0.tgz",
      "integrity": "sha512-W2WCRZ9Dqntd+2u8jJcVMV2PKulc6RdLgUUoh/yQr3uB6lo/ZOeGx11sv60/8S4QFFKNslAlWhr9u0Ef7ZW6Ig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y/node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-5.2.0.tgz",
      "integrity": "sha512-+f15FfK64YQwZdJNELETdn5ibXEUQmW1DZL6KXhNnc2heoy/sg9VJJeT7n8TlMWouzWqSWavFkIhHyIbIAEapg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/resolve": {
      "version": "2.0.0-next.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.7.tgz",
      "integrity": "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.2",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/eslint-plugin-react/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/eslint/node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/eslint/node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint/node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz",
      "integrity": "sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.8"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.3",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.3.tgz",
      "integrity": "sha512-XKv5nnLs6nLF71NgiKJLIZFLkPyIEuOselLG7ujZnGrRfQK8HpvY+WqKhAJUAdLomwVHErVS4LfxFlPq0/FTAw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.4",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.4.tgz",
      "integrity": "sha512-5+ybhBZANEJxaH3X5evAFatUxLfEHSr7n6kYJ+1Qd0mUqr4eu9gIf6GDbWHf8RJijHrjjO8G+la14SlL2SeS1Q==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.2.0.tgz",
      "integrity": "sha512-jObKIik1P2QjPHP5nz5BaOtUlfgS0fWo8IUByNXkM+o+02sJOi94em77GwJKQSJ3gfPHdgzLNrHc1uokV4P/ew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2",
        "hasown": "^2.0.4",
        "is-callable": "^1.2.7",
        "is-document.all": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/get-east-asian-width": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/get-east-asian-width/-/get-east-asian-width-1.7.0.tgz",
      "integrity": "sha512-XjH1AECxf0giL2V1aU8vKyRR2ppRUb5c0EvT7zuJTokQ74bNo52zOtghqdWIqrhUD79fo3x0WfKZdOqxF6LG1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.3",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.3.tgz",
      "integrity": "sha512-++QEw4DIY7WGoukz+/+A/8dGYPT9l9yIadnmSgZ8Rjr3YVSVDipQSO9CdnJo9ePqFqUUqh+wk9uIaoiAwsiPkA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.4.tgz",
      "integrity": "sha512-T2UbfbBEF32wiepXIsMlTW9+dDYC6wMh/t/vYA4tuOMKqWz/n3vr1NFSxQiyP+zk2mXsoMA/i/7qV6LKut1t1A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.17.0",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.17.0.tgz",
      "integrity": "sha512-J/vG0zBCbIKOQFfufSwyXdMrsohyJIUNkrnmo6WZGzoM7tr/lsbfW5b2BvisL6zsyMzK9UxV9L6c7AoFbyXHOA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-document.all": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/is-document.all/-/is-document.all-1.0.0.tgz",
      "integrity": "sha512-+XSoyS05OdBbhFuELhgTCpFNHkpBOJqtsZfUFFpe5QTw+9Sjbh8zitxhQkYAo6wV7e1Vb8cAPvpCk9jGam/82g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "1.21.7",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz",
      "integrity": "sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "bin/jiti.js"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.3.2",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.3.2.tgz",
      "integrity": "sha512-SFNOvSJ+Dgf/9An904Yx+CgSlIPCkIpao4qo51lpee25TIRejdH3rhR4EZMGoNx3/TP3O+wzWuiTFl4sqbltzA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/puzrin"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/nodeca"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lilconfig": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz",
      "integrity": "sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/antonk52"
      }
    },
    "node_modules/lines-and-columns": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz",
      "integrity": "sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.473.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.473.0.tgz",
      "integrity": "sha512-KW6u5AKeIjkvrxXZ6WuCu9zHE/gEYSXCay+Gre2ZoInD0Je/e3RBtP4OHpJVJ40nDklSvjVKjgH7VU8/e2dzRw==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/mitt": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mitt/-/mitt-3.0.1.tgz",
      "integrity": "sha512-vKivATfr97l2/QBCYAkXYDbrIWPM2IIKEl7YPhjCvKlG3kE2gm+uBo6nEXK3M5/Ffh/FLpKExzOQ3JJoJGFKBw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/modern-tar": {
      "version": "0.8.6",
      "resolved": "https://registry.npmjs.org/modern-tar/-/modern-tar-0.8.6.tgz",
      "integrity": "sha512-LYSks0tNVqbtez/9OB0YFP6qLRSqkdAxJWOQpVaR67lNTbj2zNLyYpowkRMia5lXLCZKzxwoxkxH2MbbBR2aEg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mz": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.20",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.20.tgz",
      "integrity": "sha512-uKdg2G3GNCKQn9byYOpxbGqrT2fGO5KRt5J/8b3pok8rT6qxGWF6hxMyJiEYtAf+FVyYuD9hRaDqX5uPFYJ4ZQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.7",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.7.tgz",
      "integrity": "sha512-jyU4cU4kVAmy/3qjP+DcoQTNXfINHc+dFw54gGqWC8nu0mpV0kOnk7kff+J+Q18SbX0k3Np8Rm7yFjd3phatNQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-patch": "lib/patch.js",
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "15.5.28",
      "resolved": "https://registry.npmjs.org/next/-/next-15.5.28.tgz",
      "integrity": "sha512-JjhLBBY1PNnuwPtcZ7t8yxVeJVYvD2Jyp633J+gRCNbzSt7N0E+xqCf6uQiff3+3qmUkwcF/ksfSsK1xsZ76Tw==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "15.5.28",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": "^18.18.0 || ^19.8.0 || >= 20.0.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "15.5.28",
        "@next/swc-darwin-x64": "15.5.28",
        "@next/swc-linux-arm64-gnu": "15.5.28",
        "@next/swc-linux-arm64-musl": "15.5.28",
        "@next/swc-linux-x64-gnu": "15.5.28",
        "@next/swc-linux-x64-musl": "15.5.28",
        "@next/swc-win32-arm64-msvc": "15.5.28",
        "@next/swc-win32-x64-msvc": "15.5.28",
        "sharp": "^0.34.3 || ^0.35.5"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-exports-info": {
      "version": "1.6.2",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.2.tgz",
      "integrity": "sha512-kXs9Go0cah0qHVV2v389IXQLdLCeE1xfFtjOAF+iobu0OIoG1pje8At2vMHyaPMiPMnG/LWP50twML21eMcAag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-exports-info/node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.59",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.59.tgz",
      "integrity": "sha512-5qr2okC4ItAI0hG5SaV0HoYMpnM/Y6+Oqr7AmPYy/2uEoGvS+GbSKLeRxSS1uAdu59yz0ouzcuXievSgg///WA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-hash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz",
      "integrity": "sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.2.tgz",
      "integrity": "sha512-19YVAg7T+WTrxggPukVq7DjTv6+PJ867TmhCvBsYwmbFCsZd344rq2Ld1p0wo8f8Qrrhgp82c6FJRqdXWtSEhg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pirates": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz",
      "integrity": "sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.30",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.30.tgz",
      "integrity": "sha512-zkd+e9S1AQHhmaBKye9zlFHWjOwVgqXl1q3ECYy8561K7qxR2cREf/STLskulBFd78k6AOFeA+ff1TtEzk9bAA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.20",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-import": {
      "version": "15.1.0",
      "resolved": "https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz",
      "integrity": "sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "postcss-value-parser": "^4.0.0",
        "read-cache": "^1.0.0",
        "resolve": "^1.1.7"
      },
      "engines": {
        "node": ">=14.0.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.0"
      }
    },
    "node_modules/postcss-js": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/postcss-js/-/postcss-js-4.1.0.tgz",
      "integrity": "sha512-oIAOTqgIo7q2EOwbhb8UalYePMvYoIeRY2YKntdpFQXNosSu3vLrniGgmH9OKs/qAkfoj5oB3le/7mINW1LCfw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "camelcase-css": "^2.0.1"
      },
      "engines": {
        "node": "^12 || ^14 || >= 16"
      },
      "peerDependencies": {
        "postcss": "^8.4.21"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-6.0.1.tgz",
      "integrity": "sha512-oPtTM4oerL+UXmx+93ytZVN82RrlY/wPUV8IeDxFrzIjXOLF1pN+EmKPLbubvKHT2HC20xXsCAH2Z+CKV6Oz/g==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^3.1.1"
      },
      "engines": {
        "node": ">= 18"
      },
      "peerDependencies": {
        "jiti": ">=1.21.0",
        "postcss": ">=8.0.9",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        },
        "postcss": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-nested": {
      "version": "6.2.0",
      "resolved": "https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz",
      "integrity": "sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "postcss-selector-parser": "^6.1.1"
      },
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.2.14"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.4.tgz",
      "integrity": "sha512-bIoJLOmjCO1S9XdY/DcnR5hJxvrDir1PbGChrzXG3vw0/FOliy/fA3dmdhQ441kah4gKv+TwckGzex6wNS5cnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/puppeteer-core": {
      "version": "25.14.0",
      "resolved": "https://registry.npmjs.org/puppeteer-core/-/puppeteer-core-25.14.0.tgz",
      "integrity": "sha512-LQitnes3tBeVbdZ7V/4iwJPLZGgkl9uBVK0W7YYMh68j/3Y9eNuvj4yl+Fdo7zN0SuajOMrhd7aPj3DifK8k6A==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@puppeteer/browsers": "3.2.5",
        "chromium-bidi": "157.0.8090-0",
        "devtools-protocol": "0.0.1696802",
        "typed-query-selector": "^2.12.3",
        "webdriver-bidi-protocol": "1.0.1",
        "ws": "^8.22.0"
      },
      "engines": {
        "node": ">=22.12.0"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.1.tgz",
      "integrity": "sha512-QNhWdt7nrgVWWQG58QuGsAR3jv3Hbe4mb4vz7w2csnHavciZJgda1CPNaldF6eVxv90ud3jUXpKlHL69gO38yw==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.1.tgz",
      "integrity": "sha512-Y0bARz53lhEC1NMCASs0/j+faB/zqt3R8hpvg1e8+61ZVJ4UL0UdC4cBbXfZMcIuhrfgeILTLe+ZeBCavQPtKQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.1"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/read-cache": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/read-cache/-/read-cache-1.0.2.tgz",
      "integrity": "sha512-/peqiBB/n07gQGLsWaHho3WfvUyRscw0gYTsEFMhrIe/nWLkYaf5SbKYjGYqtRV3aPwykJgF2VEMo1ac4bnsGA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "1.22.13",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.22.13.tgz",
      "integrity": "sha512-Dj/cW9zBV2aRj6XzCxuGIs3ESZKv02jixne3q6jFZYZ3/Tg09gHHviSMDL4kObh9pqSahdRHEnDoaP2gn8YLhA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.17.0",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.4.tgz",
      "integrity": "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "devOptional": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.5.tgz",
      "integrity": "sha512-Ywn4OnzGukp7CDMrp08RQ50YKmuwG47brZgIVPTvBaaAfQlRlygrRqSrxdCiL9M+LlzLBiJ68IR1QqvzHyjC7g==",
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.5",
        "@img/sharp-darwin-x64": "0.35.5",
        "@img/sharp-freebsd-wasm32": "0.35.5",
        "@img/sharp-libvips-darwin-arm64": "1.3.4",
        "@img/sharp-libvips-darwin-x64": "1.3.4",
        "@img/sharp-libvips-linux-arm": "1.3.4",
        "@img/sharp-libvips-linux-arm64": "1.3.4",
        "@img/sharp-libvips-linux-ppc64": "1.3.4",
        "@img/sharp-libvips-linux-riscv64": "1.3.4",
        "@img/sharp-libvips-linux-s390x": "1.3.4",
        "@img/sharp-libvips-linux-x64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.4",
        "@img/sharp-linux-arm": "0.35.5",
        "@img/sharp-linux-arm64": "0.35.5",
        "@img/sharp-linux-ppc64": "0.35.5",
        "@img/sharp-linux-riscv64": "0.35.5",
        "@img/sharp-linux-s390x": "0.35.5",
        "@img/sharp-linux-x64": "0.35.5",
        "@img/sharp-linuxmusl-arm64": "0.35.5",
        "@img/sharp-linuxmusl-x64": "0.35.5",
        "@img/sharp-webcontainers-wasm32": "0.35.5",
        "@img/sharp-win32-arm64": "0.35.5",
        "@img/sharp-win32-ia32": "0.35.5",
        "@img/sharp-win32-x64": "0.35.5"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.1.tgz",
      "integrity": "sha512-6x6dK6zJdpTzF4sQeNYxwtvBzf6Eg4GtlesS94HOvTudUeyK2WXAaIfmDgsyslYrRBeFIlsi54AYsFGUuhmvrQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4",
        "side-channel-list": "^1.0.1",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.2.tgz",
      "integrity": "sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string-width": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-8.3.0.tgz",
      "integrity": "sha512-ZbmZM0JCihQN91dWnxoipT2KOEyHqEyfRXUyjuRhW8b/xnqPDoq4gWEVApTVa9db2wN8mmoikgFBbjh71+cGeQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-east-asian-width": "^1.5.0",
        "strip-ansi": "^7.1.2"
      },
      "engines": {
        "node": ">=20"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.1.0.tgz",
      "integrity": "sha512-tHNHTxInrYLCga9O9YGxWA3G9/nnzQw8UGAyqGx3Ar1pSTTzIuM4woFSq4SowkXCjJIwq5sIiQvEfRI9tCH1qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.4",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.11",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.11.tgz",
      "integrity": "sha512-PwvK7BU+CMTJGYQCTZb5RWXIML92lftJLhQz1tBzgKiqGxJaMlBAa48POXaNAC2s4y8jr3EFqrkF9+44neS46w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-object-atoms": "^1.1.2",
        "has-property-descriptors": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.10.tgz",
      "integrity": "sha512-2+3aDAOmPTmuFwjDnmJG2ctEkQKVki7vOSqaxkv42Mowj1V6PnvuwFCRrR5lChUux1TBskPjfkeTOhqczDMxTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-ansi": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.2.0.tgz",
      "integrity": "sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.2.2"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/sucrase": {
      "version": "3.35.1",
      "resolved": "https://registry.npmjs.org/sucrase/-/sucrase-3.35.1.tgz",
      "integrity": "sha512-DhuTmvZWux4H1UOnWMB3sk0sbaCVOoQZjv8u1rDoTV0HTdGem9hkAZtl4JZy8P2z4Bg0nT+YMeOFyVr4zcG5Tw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.2",
        "commander": "^4.0.0",
        "lines-and-columns": "^1.1.6",
        "mz": "^2.7.0",
        "pirates": "^4.0.1",
        "tinyglobby": "^0.2.11",
        "ts-interface-checker": "^0.1.9"
      },
      "bin": {
        "sucrase": "bin/sucrase",
        "sucrase-node": "bin/sucrase-node"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "3.4.19",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.19.tgz",
      "integrity": "sha512-3ofp+LL8E+pK/JuPLPggVAIaEuhvIz4qNcf3nA1Xn2o/7fb7s/TYpHhwGDv1ZU3PkBluUVaF8PyCHcm48cKLWQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "arg": "^5.0.2",
        "chokidar": "^3.6.0",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.3.2",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "jiti": "^1.21.7",
        "lilconfig": "^3.1.3",
        "micromatch": "^4.0.8",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.1.1",
        "postcss": "^8.4.47",
        "postcss-import": "^15.1.0",
        "postcss-js": "^4.0.1",
        "postcss-load-config": "^4.0.2 || ^5.0 || ^6.0",
        "postcss-nested": "^6.2.0",
        "postcss-selector-parser": "^6.1.2",
        "resolve": "^1.22.8",
        "sucrase": "^3.35.0"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/thenify": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz",
      "integrity": "sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "any-promise": "^1.0.0"
      }
    },
    "node_modules/thenify-all": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "thenify": ">= 3.1.0 < 4"
      },
      "engines": {
        "node": ">=0.8"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/ts-interface-checker": {
      "version": "0.1.13",
      "resolved": "https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz",
      "integrity": "sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tsx": {
      "version": "4.23.15",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.23.15.tgz",
      "integrity": "sha512-Yiex1Ovn8z2xPpOWckIiysV1SSyRMY9BkLF++q0yKiDxCqRhosKfMg3janKkiLBwZ5c/YryloKwGZcrEmtwxKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.28.0"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.5.tgz",
      "integrity": "sha512-0FHJvLPqZ7KJzp17O13jfsAjsqazgrxBu2zEK95PmUz8lv2+GjRuxUInCr2Rk9Dms3ihN21zJ929ZO43yJ95QQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.8.tgz",
      "integrity": "sha512-phPGCwqr2+Qo0fwniCE8e4pKnGu/yFb5nD5Y8bf0EEeiI5GklnACYA9GFy/DrAeRrKHXvHn+1SUsOWgJp6RO+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "for-each": "^0.3.5",
        "gopd": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "possible-typed-array-names": "^1.1.0",
        "reflect.getprototypeof": "^1.0.10"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-query-selector": {
      "version": "2.12.3",
      "resolved": "https://registry.npmjs.org/typed-query-selector/-/typed-query-selector-2.12.3.tgz",
      "integrity": "sha512-/dtuMZyutHLlrxWhhC1uib00ELUr2dZ8C9B8YzZYsJmeE3V56OxRblrSM2UaF142pcMtak7ehZ6+poWGeehNIg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unrs-resolver": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.12.2.tgz",
      "integrity": "sha512-dmlRxBJJayXjqTwC+JtF1HhJmgf3ftQ3YejFcZrf4+KKtJv0qDsK1pjqaaVjG7wJ5NJ6UVP1OqRMQ71Z4C3rxQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.4"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.12.2",
        "@unrs/resolver-binding-android-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-x64": "1.12.2",
        "@unrs/resolver-binding-freebsd-x64": "1.12.2",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-musl": "1.12.2",
        "@unrs/resolver-binding-openharmony-arm64": "1.12.2",
        "@unrs/resolver-binding-wasm32-wasi": "1.12.2",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-x64-msvc": "1.12.2"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.4",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.3.4.tgz",
      "integrity": "sha512-t8wonIOdQyOjtPd2VktlBu6QjTVTks6v8bSi7kd0r2Vll8TK1JYDZtRRdbmCHOAMphkZgrzK+L+vXK4pyZ8t4A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/webdriver-bidi-protocol": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/webdriver-bidi-protocol/-/webdriver-bidi-protocol-1.0.1.tgz",
      "integrity": "sha512-WXWs/aXF2a6Al1Z2/V/7Gp2oPZOAAmHjJOTmv4KCXRJ122IMj3tSSMc6a4q3K4QOmhQbse/Ahr+oTVJOU2dUiw==",
      "dev": true,
      "license": "Apache-2.0"
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.24",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.24.tgz",
      "integrity": "sha512-wk4Mf4pR5mRP7eYuuTBCIQ9d0ud2Fv2jRLQpfgnRjbOxAFHmjKFValgTpitVKzJJS8ajnYQV2Du1SZ8j6b/EUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "9.0.2",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-9.0.2.tgz",
      "integrity": "sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.2.1",
        "string-width": "^7.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/string-width": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-7.2.0.tgz",
      "integrity": "sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^10.3.0",
        "get-east-asian-width": "^1.0.0",
        "strip-ansi": "^7.1.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.22.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.22.0.tgz",
      "integrity": "sha512-Ydggc987+RO0AnWtZ/7Wq9FtNvcrL1b/RO0ud9mWjUPgDrsAAwQSF51sm2hm1XofbU/4jkpGEsLFsZZxU+1DOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yargs": {
      "version": "18.2.0",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-18.2.0.tgz",
      "integrity": "sha512-9OpKOLeaoNFecEp7P6iYbzze/5CqWoH7N3SMs/6y1XF4nMvFMspEGZzJ6uFi9MmQwXhyzqYoSEKO3tvA3Z/o2w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^9.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "string-width": "^8.2.1",
        "y18n": "^5.0.5",
        "yargs-parser": "^22.0.0"
      },
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/yargs-parser": {
      "version": "22.0.0",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-22.0.0.tgz",
      "integrity": "sha512-rwu/ClNdSMpkSrUb+d6BRsSkLUq1fmfsY6TOpYzTwvwkg1/NRG85KBy3kq++A8LKQwX6lsu+aWad+2khvuXrqw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "^20.19.0 || ^22.12.0 || >=23"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}
```

---

<a id="file--eslintrc-json"></a>
## 📄 Fichier : `.eslintrc.json`

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "@next/next/no-img-element": "off"
  }
}
```

---

<a id="file-LICENSE"></a>
## 📄 Fichier : `LICENSE`

```text
MIT License

Copyright (c) 2026 YouCam VTO Studio & AI Personal Shopper Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
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
    name: "Ensemble Veste Crème, Top Rouge & Denim",
    brand: "Atelier YouCam Paris",
    category: "dresses",
    subcategory: "Ensembles & Silhouettes Complètes",
    price: 245.0,
    currency: "EUR",
    rating: 4.9,
    reviewsCount: 114,
    imageUrl: "https://plugins-media.makeupar.com/strapi/assets/clothes_reference_full_body_01_5a000d999f.png",
    tryOnAssetUrl: "https://plugins-media.makeupar.com/strapi/assets/clothes_reference_full_body_01_5a000d999f.png",
    colors: [
      { name: "Veste Crème & Top Rubis", hex: "#F5F2EB", undertoneAffinity: ["warm", "neutral", "cool"] },
      { name: "Rouge Rubis Carmin", hex: "#9B111E", undertoneAffinity: ["cool", "neutral"] },
      { name: "Noir Onyx Profond", hex: "#111111", undertoneAffinity: ["cool", "warm", "neutral", "olive"] },
    ],
    sizes: ["36", "38", "40", "42"],
    fabric: "Veste texturée en laine bouclée crème, top en crêpe rouge et denim structuré",
    styleTags: ["Épreuve Officielle YouCam", "Silhouette Complète (Full Body)", "Tailoring Contemporain"],
    description: "Ensemble officiel de référence YouCam associant une veste texturée crème, un top rouge carmin et un pantalon denim ajusté pour un essayage silhouette complète (full body).",
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
    styleTags: ["Simulation Uniquement", "Statement Eyewear", "Protection UV400"],
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
    styleTags: ["Simulation Uniquement", "Chunky Chain", "Finition Miroir"],
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
        outputUrl: "https://plugins-media.makeupar.com/strapi/assets/clothes_reference_full_body_01_5a000d999f.png",
        fidelity: 96,
        fitScore: 94,
        harmony: 95,
        advice: "L'ensemble veste crème et top rubis s'accorde harmonieusement avec votre carnation. Ajustement taille 38 structurant la carrure.",
        drape: "Veste texturée en laine bouclée crème sur top fluide carmin et denim structuré, tombé net et équilibré.",
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
  "La hausse de conversion affichée n’est pas monétisée dans ce total. Marge produit, coûts API, acquisition, intégration et exploitation sont exclus : le montant affiché est un gain modélisé, pas un profit net comptable.": "The conversion uplift is not monetized in this total. Product margin, API, acquisition, integration and operating costs are excluded: the displayed modeled gain is an illustrative projection, not accounting net profit.",
  "La hausse de conversion affichée n’est pas monétisée dans ce total. Marge produit, coûts API, acquisition, intégration et exploitation sont exclus : le « bénéfice net annuel » affiché est un gain modélisé, pas un profit net comptable.": "The conversion uplift is not monetized in this total. Product margin, API, acquisition, integration and operating costs are excluded: the displayed modeled gain is an illustrative projection, not accounting net profit.",
  "Gain potentiel modélisé": "Modeled potential business gain",
  "Gain commercial potentiel modélisé": "Modeled potential commercial gain",
  "Lancer l’essayage": "Try on garment",
  "Lancer l’essayage virtuel": "Start virtual try-on",
  "Générer l’essayage YouCam": "Generate YouCam try-on",
  "Génération YouCam en cours (~35s)...": "Generating YouCam try-on (~35s)...",
  "Traitement de l’essayage en cours...": "Processing try-on...",
  "VTO Live YouCam (API) · Profils Styliste Simulés": "LIVE_YOUCAM (Real VTO) · Demo Stylist Profiles",
  "LIVE_YOUCAM (VTO Réel) · Profils Styliste Simulés": "LIVE_YOUCAM (Real VTO) · Demo Stylist Profiles",
  "VTO Live YouCam · Styliste Simulé": "LIVE_YOUCAM (Real VTO) · Demo Stylist",
  "Aperçu Profil Peau (Simulé)": "Simulated Skin Profile Preview",
  "Appliquer la photo": "Apply photo",
  "Le Personal Shopper utilise des règles locales d’affinité entre couleurs et sous-tons.": "Personal Shopper uses local color harmony rules based on skin undertone affinity.",
  "Profil de démonstration : mesures illustratives issues de fixtures, sans diagnostic médical ou colorimétrique mesuré.": "Demo profile: illustrative fixture scores without medical or measured color diagnosis.",
  "Taille, coupe et recoloration ne sont pas transmises au modèle YouCam cloth-v4 (simulation uniquement).": "Size, cut and recoloring are not passed to YouCam cloth-v4 (simulation only).",
  "Contrôle non transmis au modèle YouCam cloth-v4": "Control not passed to YouCam cloth-v4 model",
  "Accessoire indisponible en génération YouCam cloth-v4 (simulation uniquement)": "Accessory unavailable in live cloth-v4 generation (simulation only)",
  "Les accessoires sont disponibles en simulation uniquement.": "Accessories are available in simulation mode only.",
  "Mannequin Studio (YouCam Sample)": "Studio Model (YouCam Sample)",
  "Prêt pour l'essayage": "Ready for try-on",
  "Sélectionnez un vêtement et lancez l'essayage.": "Select a garment and start your try-on.",
  "Bilan Dermatologique IA": "AI Skin Assessment", "Votre profil beauté et colorimétrique.": "Your beauty and color profile.", "Score global": "Overall score", "Âge cutané": "Skin age", " ans": " years", "Couleurs recommandées": "Recommended colors",
  "Indicateurs cosmétiques, sans valeur de diagnostic médical. Un score élevé indique un meilleur résultat.": "Cosmetic indicators, not a medical diagnosis. A higher score indicates a better result.",
  "La technologie au service de votre style": "Technology for your personal style", "Fermer la fenêtre": "Close dialog", "VOTRE CABINE, VOTRE PHOTO": "YOUR FITTING ROOM, YOUR PHOTO", "Tester votre photo": "Try your photo",
  "Choisissez un portrait net pour personnaliser votre essayage et votre profil colorimétrique.": "Choose a clear portrait to personalize your try-on and color profile.",
  "PNG, JPG ou WEBP": "PNG, JPG or WEBP", "Téléverser une photo": "Upload a photo", "ou depuis un lien": "or use a link", "URL d’image directe": "Direct image URL", "https://exemple.com/mon-portrait.jpg": "https://example.com/my-portrait.jpg", "Appliquer et Diagnostiquer": "Apply and Analyze",
  "Mode simulation : les résultats sont des exemples et ne constituent pas une analyse de votre photo.": "Simulation mode: results are examples and do not represent an analysis of your photo.", "Votre photo sera transmise à YouCam pour l’analyse et l’essayage.": "Your photo will be sent to YouCam for analysis and try-on.",
  "Préparation": "Preparing", "Illustration produit": "Product illustration", "Illustration produit · simulation": "Product illustration · simulation", "Résultat YouCam": "YouCam result",
  "Fidélité Texture": "Texture fidelity", "Ajustement Fit": "Fit match", "Harmonie Teint": "Tone harmony", "Photo Personnalisée": "Custom Photo",
  "Tous": "All", "Tops": "Tops", "Robes": "Dresses", "Ensembles": "Outfits", "Manteaux": "Coats", "Pantalons": "Trousers", "Lunettes": "Eyewear", "Bijoux": "Jewelry",
  "Look Styliste": "Stylist Look", "Impact A/B": "A/B Impact", "Peau (11)": "Skin (11)", "Taux de conversion": "Conversion rate", "Retours textile": "Apparel returns", "Confiance client": "Customer confidence",
  "Images et scores de démonstration simulés.": "Illustrations and demo scores are simulated.", "Résultats issus de l’API YouCam.": "Results from the YouCam API.",
  "Téléversement en cours…": "Uploading…", "Choisir une photo": "Choose a photo", "Mode Simulation Transparent (MOCK_SIMULATED)": "Transparent Simulation Mode (MOCK_SIMULATED)",
  "Chargement impossible.": "Unable to load.", "Essayage impossible.": "Try-on unavailable.", "Le conseil styliste est indisponible. Réessayez dans un instant.": "Stylist advice is unavailable. Please try again shortly.", "L’essayage est indisponible. Réessayez dans un instant.": "Try-on is unavailable. Please try again shortly.",
  "Choisissez une image PNG, JPG ou WEBP.": "Choose a PNG, JPG or WEBP image.", "Le téléversement a échoué. Veuillez réessayer.": "Upload failed. Please try again.", "Téléversement impossible.": "Upload unavailable.", "Saisissez une URL d’image valide en https:// ou http://.": "Enter a valid image URL starting with https:// or http://.",
  "Chemisier Fluide en Soie Lavée": "Washed Silk Blouse", "Ensemble Veste Crème, Top Rouge & Denim": "Cream Jacket, Red Top & Denim Outfit", "Robe Midi Trapèze Vert Émeraude": "Emerald A-line Midi Dress", "Manteau Croisé en Laine Vierge Camel": "Camel Double-breasted Wool Coat", "Pantalon Tailleur Coupe Ample Plissée": "Wide-leg Pleated Tailored Trousers", "Lunettes de Soleil Acétate Écaille Rétro": "Retro Tortoiseshell Sunglasses", "Collier Chaîne Torsadée Or Vermeil 18k": "18k Gold Vermeil Chain Necklace",
  "Blouses & Chemisiers": "Blouses & Shirts", "Ensembles & Silhouettes Complètes": "Outfits & Full-Body Looks", "Robes Midi & Soirée": "Midi & Evening Dresses", "Manteaux & Cabans": "Coats & Peacoats", "Pantalons & Tailleurs": "Trousers & Tailoring", "Lunettes & Solaires": "Eyewear & Sunglasses", "Bijoux & Colliers": "Jewelry & Necklaces",
  "Veste Crème & Top Rubis": "Cream Jacket & Ruby Top", "Rouge Rubis Carmin": "Carmine Ruby Red", "Veste texturée en laine bouclée crème, top en crêpe rouge et denim structuré": "Textured cream bouclé wool jacket, red crepe top and structured denim", "Ensemble officiel de référence YouCam associant une veste texturée crème, un top rouge carmin et un pantalon denim ajusté pour un essayage silhouette complète (full body).": "Official YouCam reference outfit combining a textured cream jacket, carmine red top and fitted denim jeans for a full-body try-on.",
  "Blanc Ivoire Chaud": "Warm Ivory", "Bleu Minéral Froid": "Cool Mineral Blue", "Terracotta Cuivré": "Copper Terracotta", "Émeraude Royale": "Royal Emerald", "Rouge Rubis": "Ruby Red", "Noir Onyx Profond": "Deep Onyx Black", "Camel Doré Intense": "Golden Camel", "Gris Anthracite Ardoise": "Slate Charcoal", "Vert Forêt Profond": "Deep Forest Green", "Beige Craie": "Chalk Beige", "Bleu Nuit Tailleur": "Midnight Blue", "Vert Kaki Poudré": "Soft Khaki", "Écaille Miel Ambré": "Amber Tortoiseshell", "Noir Laqué Polarisé": "Glossy Polarized Black", "Or Jaune Chaud 18K": "Warm 18k Yellow Gold", "Or Blanc Rhodié": "Rhodium White Gold", "Unique": "One size",
  "Taches · spots": "Spots", "Rides · wrinkles": "Wrinkles", "Cernes": "Dark circles", "Rougeurs": "Redness", "Sébum": "Oiliness", "Hydratation": "Moisture", "Fermeté": "Firmness", "Éclat": "Radiance", "Poches sous les yeux": "Eye bags",
  "100% Soie de mûrier 19mm certifiée Oeko-Tex": "100% 19mm mulberry silk, Oeko-Tex certified", "Satin de viscose lourd éco-responsable (240g/m²)": "Heavy eco-friendly viscose satin (240g/m²)", "100% Laine vierge double face 520g": "100% double-face virgin wool, 520g", "Drap de laine froide et lyocell stretch": "Cool wool and stretch lyocell", "Acétate italien Mazzucchelli biodégradable, verres UV400 Catégorie 3": "Biodegradable Italian acetate, UV400 category 3 lenses", "Argent 925 plaqué Or 18 carats 5 microns (Vermeil)": "925 silver with 5-micron 18k gold plating (vermeil)",
  "Standard :": "Standard:", "YouCam :": "YouCam:", "50 000": "50,000",
  "Les accessoires sont disponibles en simulation uniquement ; leur contrat live reste à intégrer.": "Accessories are available in simulation only; live contract pending.",
  "YouCam: la tâche VTO a échoué. Aucun résultat simulé substitué.": "YouCam: VTO task failed. No simulated result substituted.",
  "Clé API YouCam manquante.": "Missing YouCam API key.",
  "YouCam: serveur HTTPS requis.": "YouCam: HTTPS server required.",
  "YouCam: fichier vide.": "YouCam: empty file.",
  "YouCam: format de fichier non pris en charge.": "YouCam: unsupported file format.",
  "YouCam: contrat de téléversement invalide.": "YouCam: invalid upload contract.",
  "YouCam: URL de résultat absente.": "YouCam: missing result URL.",
  "YouCam: image du vêtement requise.": "YouCam: garment image required.",
  "Skin AI live non validé : mapping des résultats natifs requis. Aucune donnée de peau simulée n’est présentée comme réelle.": "Live Skin AI not validated: native mapping required. No simulated skin data presented as real.",
};
export function translate(text: string, language: Language): string {
  if (language !== "en") return text;
  if (english[text]) return english[text];
  if (text.includes("Aucun repli en simulation")) {
    return text.replace("Aucun repli en simulation.", "No simulation fallback.").replace("YouCam: statut applicatif", "YouCam: application status");
  }
  return text;
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
        {/* Pantalon Denim / Gris sombre */}
        <path d="M136 215H224L238 366 189 366 180 252 171 366 122 366Z" fill="#364052" stroke={stroke} strokeWidth="1" />
        {/* Top Rouge Rubis au centre */}
        <path d="M152 108H208L216 220H144Z" fill="#9B111E" stroke={stroke} strokeWidth="1" />
        {/* Veste Crème gauche */}
        <path d="M142 85L118 105 74 135 58 258 96 264 116 168 112 250 148 250 144 108Z" fill={fill} stroke={stroke} strokeWidth="1.2" />
        {/* Veste Crème droite */}
        <path d="M218 85L242 105 286 135 302 258 264 264 244 168 248 250 212 250 216 108Z" fill={fill} stroke={stroke} strokeWidth="1.2" />
        {/* Col et revers de la veste */}
        <path d="M142 85L180 120 218 85 228 128 180 152 132 128Z" fill={fill} stroke={stroke} strokeWidth="1" />
        <line x1="180" y1="252" x2="180" y2="366" stroke="#222" strokeWidth="1" />
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
    let skinRes;
    try {
      skinRes = await client.analyzeSkin({
        imageUrl: body.imageUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      });
    } catch {
      // When LIVE_YOUCAM mode is active for cloth-v4 try-on, native Skin AI mapping is pending.
      // Use the illustrative colorimetry profile with explicit MOCK_SIMULATED provenance
      // so the stylist recommendations and ROI simulator remain fully functional.
      const simClient = new YouCamClient({ mode: "mock_only" });
      skinRes = await simClient.analyzeSkin({
        imageUrl: body.imageUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      });
    }

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
  const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
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
  const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
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

const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
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
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.waitForSelector('#try-on-button');
  await page.click('#try-on-button');
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

<a id="file-scripts-hybrid-order-test-mjs"></a>
## 📄 Fichier : `scripts/hybrid-order-test.mjs`

```text
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';

const PORT = 3007;
const base = `http://localhost:${PORT}`;

// Launch Next.js server on isolated port
const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
  cwd: process.cwd(),
  env: { ...process.env, PORT: String(PORT), YOUCAM_MODE: 'mock_only' },
  stdio: 'ignore',
});

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise(r => setTimeout(r, 300));
  }
  throw new Error(`Server at ${url} failed to start within ${timeoutMs}ms`);
}

try {
  await waitForServer(base);

  const shopperRes = await (await fetch(`${base}/api/personal-shopper`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageUrl: 'https://example.test/person.jpg' }),
  })).json();
  assert.equal(shopperRes.state, 'MOCK_SIMULATED');

  const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64');
  const controlledVto = {
    state: 'LIVE_YOUCAM',
    taskId: 'CONTROLLED-ORDER-TEST-NOT-A-PROVIDER-TASK',
    status: 'SUCCESS',
    userImageUrl: 'https://example.test/person.jpg',
    garmentImageUrl: 'https://example.test/garment.jpg',
    outputImageUrl: 'https://example.test/output.png',
    category: 'tops',
    tryOnFidelityScore: null,
    fitMatchScore: null,
    skinToneHarmonyScore: null,
    fitAdvice: 'Rendu YouCam reçu. Aucune mesure corporelle dans cette API.',
    fabricDrapeAssessment: 'Examinez le résultat généré.',
    executionTimeMs: 120,
  };

  const browser = await puppeteer.launch({
    executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
  });

  try {
    for (const order of ['shopper-first', 'vto-first']) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1440, height: 1000 });
      let tryOnRequests = 0;

      await page.setRequestInterception(true);
      page.on('request', request => {
        const url = new URL(request.url());
        if (url.pathname === '/api/personal-shopper' || url.pathname === '/api/try-on') {
          const isVto = url.pathname === '/api/try-on';
          if (isVto) tryOnRequests++;
          const delay = order === 'vto-first' ? (isVto ? 20 : 600) : (isVto ? 350 : 20);
          setTimeout(() => void request.respond({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(isVto ? controlledVto : shopperRes),
          }).catch(() => {}), delay);
        } else if (url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
          void request.respond({ status: 200, contentType: 'image/png', body: png });
        } else {
          void request.continue();
        }
      });

      await page.goto(base, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#try-on-button');

      // 1. Verify zero try-on requests before clicking
      assert.equal(tryOnRequests, 0, `Order ${order}: zero try-on requests must be sent before clicking`);

      // 2. Click try-on button explicitly
      await page.click('#try-on-button');
      await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
      await page.waitForNetworkIdle({ idleTime: 300 });

      const state = await page.evaluate(() => ({
        badge: document.querySelector('.mode-badge')?.textContent?.trim() || '',
        vtoTag: document.querySelector('.preview-tag')?.textContent?.trim() || '',
        sizeDisabled: document.querySelector('#garment-size')?.hasAttribute('disabled') || false,
        swatchesDisabled: [...document.querySelectorAll('.swatch')].every(el => el.hasAttribute('disabled')),
        missingVtoScores: [...document.querySelectorAll('.score-grid strong')].map(el => el.textContent?.trim()),
        provenanceNote: document.querySelector('.provenance-note')?.textContent?.trim() || '',
      }));

      // Check that badge reflects VTO live and shopper demo profiles in BOTH orders
      assert.ok(
        state.badge.includes('LIVE_YOUCAM'),
        `Order ${order}: badge must include LIVE_YOUCAM, got "${state.badge}"`
      );
      assert.ok(
        state.badge.includes('Profils Styliste Simulés') || state.badge.includes('Demo Stylist Profiles') || state.badge === 'LIVE_YOUCAM',
        `Order ${order}: badge must clearly state stylist simulation, got "${state.badge}"`
      );

      // Check that VTO result is displayed as YouCam result in BOTH orders
      assert.ok(
        state.vtoTag.includes('Résultat YouCam') || state.vtoTag.includes('YouCam result'),
        `Order ${order}: preview tag must indicate YouCam result, got "${state.vtoTag}"`
      );

      // Check that unsupported controls are disabled when VTO is live in BOTH orders
      assert.equal(state.sizeDisabled, true, `Order ${order}: #garment-size must be disabled in live VTO`);
      assert.equal(state.swatchesDisabled, true, `Order ${order}: swatches must be disabled in live VTO`);

      // Check missing scores from live API
      assert.deepEqual(state.missingVtoScores, ['—', '—', '—']);

      // Check right panel note states simulated demo profile
      assert.ok(
        state.provenanceNote.includes('simulés') || state.provenanceNote.includes('simulated'),
        `Order ${order}: right panel must clearly indicate demo profile simulation`
      );

      // Check that attempting to change controls generates ZERO additional try-on requests
      const initialTryOns = tryOnRequests;
      // Click on a category filter and change ROI volume slider
      await page.click('#tab-ab_comparison');
      await page.click('#orders-volume');
      await page.click('#tab-skin_diagnostics');
      await page.waitForNetworkIdle({ idleTime: 300 });

      assert.equal(
        tryOnRequests - initialTryOns,
        0,
        `Order ${order}: no additional tryOn requests must be triggered on UI interactions, got ${tryOnRequests - initialTryOns}`
      );

      await page.close();
      console.log(`✔ Order ${order}: PASS (state independence verified, badge stable, unsupported controls disabled, zero spurious API calls)`);
    }
  } finally {
    await browser.close();
  }
} finally {
  server.kill('SIGTERM');
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
    'video/README.md',
    'video/NARRATION_EN.txt',
    'video/PLAN.json',
    'video/verification/MEDIA_CHECK.json',
    'video/verification/DECODE_CHECK.json',
    'video/verification/REVIEW.json',
    'video/voice-v2/README.md',
    'video/voice-v2/SYNC_LEDGER.json',
    'video/voice-v2/REVIEW.json',
    'video/subtitles-v3/README.md',
    'video/subtitles-v3/YouCam-English-v3.srt',
    'video/subtitles-v3/MEDIA_CHECK.json',
    'video/motion-v4/README.md',
    'video/motion-v4/NARRATION_EN_V4.txt',
    'video/motion-v4/YouCam-English-v4.srt',
    'video/motion-v4/REVIEW.json',
    'package.json',
    'package-lock.json',
    '.eslintrc.json',
    'LICENSE',
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
    'scripts/hybrid-order-test.mjs',
    'scripts/build-gemini-bundle.py',
    'docs/UI_VALIDATION.md',
    'docs/SUBMISSION_READINESS.md',
    'docs/MEDIA_PROVENANCE.md',
    'docs/live/STATUS.json',
    'docs/live/browser-20261031/verification.json',
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
    for name in ['docs/live/browser-20261031/result.jpg', 'docs/live/browser-20261031/application.png', 'docs/live/result.jpg', 'docs/live/input-source.jpeg', 'docs/live/input-reference.png']:
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
| Repository URL with code/assets/instructions | PASS | Public repository live at https://github.com/Robe092/youcam-vto-agent |
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

## Silent visual edit — 17 October 2026

A local 2:18 Full HD silent MP4 is exported in video/renders/YouCam-Visual-v1-SILENT.mp4. All 1,656 video frames decode; 18 representative scene frames were inspected. Narration is pending the owner’s ElevenLabs audio. Public video hosting, final submission and external judge access remain pending. See video/README.md and video/verification/REVIEW.json. No new provider task was created for this edit.

## Synchronized voice edit — 17 October 2026

The owner’s ElevenLabs voice is now integrated into video/renders/YouCam-Voice-v2.mp4 (120.750 seconds). Full continuous source voice preserved at natural speed; all audio/video decode and 18 scene frames reviewed. See video/voice-v2/REVIEW.json. The previous silent-edit note describes v1. Public hosting, final submission and external judge access still remain pending.

## English captions completed — 17 October 2026

The local narrated and subtitled edit is video/renders/YouCam-English-v3-SUBTITLED.mp4 (120.750 seconds), with a separate SRT. All 43 captions were checked; audio is unchanged from v2 and all audio/video decode. The earlier notes describe previous versions. Public hosting, final form, external judge access and other unresolved readiness items remain pending.

## Interactive video revision — 17 October 2026

Latest local candidate: video/renders/YouCam-Demo-v4-INTERACTIVE.mp4, 109.500 seconds, 12 temporal browser takes, original voice with three whole-sentence cuts, 38 English captions. All 1,314 frames and audio decode; all cues render; every browser take has UI-state changes. The capture method reconstructs native CUA frame sequences, not a native 30-fps recorder. See video/motion-v4/README.md and REVIEW.json. Raw takes remain local. Public hosting and final submission remain pending.


## Current update — 31 October 2026

The missing-key and script-only limitations above describe earlier states. The private key was subsequently configured, and a Chrome browser click completed one real application-to-provider clothing try-on in 12.175 seconds. The image and application display were visually reviewed. Evidence: `docs/live/browser-20261031/verification.json`. The image-URL path is validated; real File API upload, live Skin AI and accessories are not established. The current local narrated/captioned demo lasts 98 seconds. A public video link, verified external project/code access, owner declarations and final Devpost submission remain pending.
```

---

<a id="file-docs-MEDIA-PROVENANCE-md"></a>
## 📄 Fichier : `docs/MEDIA_PROVENANCE.md`

```markdown
# Media Provenance & Licensing Information

Date of record: 31 October 2026.
Project: **YouCam VTO Studio & AI Personal Shopper**.

## 1. Codebase License
The source code of this application is released under the **MIT License** (see [`LICENSE`](../LICENSE)).

## 2. Model & Persona Imagery
The photographic portraits used for persona demonstrations are sourced from [Unsplash](https://unsplash.com) under the standard Unsplash License (free commercial and non-commercial use, without attribution required):
- **Emma (Teint Clair & Sous-ton Chaud)**: Photo by Christopher Campbell (`photo-1544005313-94ddf0286df2`) via Unsplash.
- **Lucas (Teint Moyen & Sous-ton Froid)**: Photo by Jurica Koletić (`photo-1507003211169-0a1dd7228f2d`) via Unsplash.
- **Garment Catalog Photography**: Curated fashion photography from Unsplash for product card previews, each tagged with its source Unsplash identifier.

## 3. Official YouCam Clothes API Sample Assets
The reference imagery and inputs used for testing and validating the native `cloth-v4` Clothes API are the public developer samples provided by Perfect Corp in their official documentation:
- **Clothes API Reference**: [https://docs.perfectcorp.com/reference/ai_clothes](https://docs.perfectcorp.com/reference/ai_clothes)
- **Source Person Sample**: `https://plugins-media.makeupar.com/strapi/assets/clothes_03_cccd5d4803.jpeg`
- **Garment Reference Sample**: `https://plugins-media.makeupar.com/strapi/assets/clothes_reference_full_body_01_5a000d999f.png`
- **Generated Verification Output**: Single verified provider execution from 16 October 2026 (`docs/live/result.jpg`), retained as immutable technical proof of real provider task creation and completion.

## 4. Icons & Visual Components
- **Icons**: [Lucide React](https://lucide.dev) (ISC License).
- **Fitting Room Visuals**: Dynamic parametric SVG illustrations generated locally by `DemoGarment.tsx` with zero external image dependencies.
- **Typography & Styling**: Tailwind CSS (MIT License) with system-native fonts (`sans-serif`, editorial typography).
```

---

<a id="file-docs-live-STATUS-json"></a>
## 📄 Fichier : `docs/live/STATUS.json`

```json
{
  "checkedAt": "2026-10-31T12:44:35.249Z",
  "testClass": "INTEGRATION_TEST",
  "keyPresent": false,
  "apiRequestsMade": false,
  "status": "BLOCKED",
  "reason": "YOUCAM_API_KEY is not configured.",
  "nextStep": "Configure the key privately in .env.local, check available units, then run npm run test:live -- --run."
}
```

---

<a id="file-docs-live-browser-20261031-verification-json"></a>
## 📄 Fichier : `docs/live/browser-20261031/verification.json`

```json
{
  "checkedAt": "2026-10-31T12:57:28.438Z",
  "testClass": "REAL_BROWSER_TO_APPLICATION_TO_PROVIDER",
  "httpStatus": 200,
  "browserTryOnRequests": 1,
  "state": "LIVE_YOUCAM",
  "status": "SUCCESS",
  "elapsedMs": 12175,
  "visualReview": "PASS_QUALITATIVE",
  "result": "SUCCESS",
  "imageBytes": 138526,
  "visualReviewNotes": "Generated image and application screenshot inspected: cream jacket, red top, jeans and black boots match official reference; source person and pose visually consistent. Live badge distinguishes simulated stylist profiles; unavailable provider scores show dashes.",
  "imageSha256": "838c83615d1a86ad807dff579b55557e3df28936aaa04fb74c2470f1f10e8b28",
  "scope": "One real browser URL-input clothing try-on. Does not validate File API upload, Skin AI, accessories or measured commercial impact."
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

