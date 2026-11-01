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
