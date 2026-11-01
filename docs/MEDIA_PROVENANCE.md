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
