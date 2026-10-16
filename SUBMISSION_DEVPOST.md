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
