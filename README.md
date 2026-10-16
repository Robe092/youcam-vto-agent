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
