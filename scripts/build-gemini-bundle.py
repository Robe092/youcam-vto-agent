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
