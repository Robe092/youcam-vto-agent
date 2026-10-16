import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setRequestInterception(true);
  page.on('request', request => {
    const url = new URL(request.url());
    if (url.pathname === '/api/personal-shopper') return void request.respond({ status: 400, contentType: 'application/json', body: JSON.stringify({ error: 'Native skin mapping not verified' }) });
    if (url.pathname === '/api/try-on') return void request.respond({ status: 200, contentType: 'application/json', body: JSON.stringify({
      state: 'LIVE_YOUCAM', taskId: 'controlled-response-not-a-live-task', status: 'SUCCESS',
      userImageUrl: 'https://example.test/source.png', garmentImageUrl: 'https://example.test/reference.png', outputImageUrl: 'https://example.test/controlled-result.png',
      category: 'tops', tryOnFidelityScore: null, fitMatchScore: null, skinToneHarmonyScore: null,
      fitAdvice: 'No body measurements supplied.', fabricDrapeAssessment: 'Inspect the generated result.', executionTimeMs: 100,
    }) });
    if (url.hostname === 'example.test') return void request.respond({ status: 200, contentType: 'image/png', body: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64') });
    void request.continue();
  });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => document.querySelector('.mode-badge')?.textContent.includes('LIVE_YOUCAM'));
  assert.deepEqual(await page.$$eval('.score-grid strong', els => els.map(el => el.textContent)), ['—', '—', '—']);
  assert.equal(await page.$eval('.profile-card', el => getComputedStyle(el).display), 'none');
  assert.equal(await page.$$eval('.bundle-list', els => els.length), 0);
  assert.equal(await page.$eval('#garment-size', el => el.disabled), true);
  const mirrorText = await page.$eval('.mirror-panel', el => el.textContent);
  assert.ok(mirrorText.includes('contrôles de simulation uniquement') || mirrorText.includes('simulation controls only'));
  assert.match(await page.$eval('.insight-panel', el => el.textContent), /aucune analyse de démonstration|no demo analysis is substituted/);
  assert.equal(await page.$eval('.result-image', el => el.tagName.toLowerCase()), 'img');
  await page.click('#tab-skin_diagnostics');
  assert.equal(await page.$$eval('.skin-dimensions', els => els.length), 0);
  console.log('PASS: controlled UI responses show unavailable live scores, hide failed skin fixtures and disable unsupported live controls. Not an actual YouCam run.');
} finally { await browser.close(); }
