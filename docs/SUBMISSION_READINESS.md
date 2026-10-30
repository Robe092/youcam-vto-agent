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
