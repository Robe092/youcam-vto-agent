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
