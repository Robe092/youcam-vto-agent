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
