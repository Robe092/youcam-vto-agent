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
- Repository URL: https://github.com/Robe092/youcam-vto-agent
- Judge demo or test-build access: NOT VERIFIED.
- Public YouTube or Vimeo video, 1–3 minutes: NOT PROVIDED.
- Live proof: docs/live/run-95e1761f.json records PASS, with one generated image and qualitative visual review.
- Eligibility, rights and creation-period declarations: NOT VERIFIED.
