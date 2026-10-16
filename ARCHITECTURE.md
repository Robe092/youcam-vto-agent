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
