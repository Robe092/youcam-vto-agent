import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  const browserErrors = [];
  const apiCalls = [];
  page.on('pageerror', error => browserErrors.push(error.message));
  page.on('request', request => { if (request.url().includes('/api/')) apiCalls.push(request.url()); });
  const click = (...texts) => page.evaluate((...values) => {
    const target = [...document.querySelectorAll('button')].find(button => values.includes(button.textContent.trim()));
    assertButton(target, values.join(' or '));
    function assertButton(button, label) { if (!button) throw new Error(`Missing button: ${label}`); button.click(); }
  }, ...texts);
  const settled = async () => {
    await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
    await page.waitForNetworkIdle({ idleTime: 350 });
  };
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await settled();
  await click('Judge demo', 'Démo jury');
  await page.waitForSelector('[data-demo-step="0"]');
  await click('Lucas (cool)');
  await page.waitForFunction(() => document.querySelector('.profile-card')?.textContent.includes('cool'));
  await settled();
  await click('Next step', 'Étape suivante');
  await page.waitForSelector('[data-demo-step="1"]');
  await settled();
  assert.equal(await page.$eval('.mirror-visual svg', el => el.dataset.category), 'outerwear');
  assert.match(await page.$eval('.product-card[aria-pressed=true]', el => el.textContent), /Manteau Croisé|Double-breasted Wool Coat/);
  assert.match(await page.$eval('.preview-tag', el => el.textContent), /Illustration produit|Product illustration/);
  assert.equal(await page.$$eval('.mirror-visual img.result-image', els => els.length), 0);
  const beforeColor = await page.$eval('.mirror-visual svg', el => el.dataset.color);
  await page.click('.swatches button:last-child');
  await page.waitForFunction(before => document.querySelector('.mirror-visual svg')?.getAttribute('data-color') !== before, {}, beforeColor);
  await settled();
  const cardHarmony = await page.$eval('.product-card[aria-pressed=true] .match-badge', el => parseInt(el.textContent, 10));
  const mirrorHarmony = await page.$eval('.score-grid > div:last-child strong', el => parseInt(el.textContent, 10));
  assert.equal(mirrorHarmony, cardHarmony, 'Persona and color harmony must agree across panels');
  await click('relaxed');
  await page.waitForFunction(() => document.querySelector('.mirror-visual svg')?.getAttribute('data-fit') === 'relaxed');
  await page.click('.score-explainer summary');
  assert.match(await page.$eval('.score-explainer', el => el.textContent), /sans évaluer réellement votre photo|demonstrate the flow without analyzing your photo/);
  await click('Next step', 'Étape suivante');
  await page.waitForSelector('[data-demo-step="2"]');
  await page.waitForSelector('.benefit-card');
  await click('View assumptions', 'Voir les hypothèses');
  await page.waitForSelector('#roi-assumptions');
  assert.match(await page.$eval('#roi-assumptions', el => el.textContent), /pas un profit net comptable|not accounting net profit/);
  // Verify that the disclosed components reconcile with the API's rounded total.
  const report = await page.evaluate(async () => {
    const imageUrl = document.querySelector('.source-portrait img').src;
    return (await (await fetch('/api/personal-shopper', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ imageUrl, annualOrdersVolume: 10000 }) })).json()).abReport;
  });
  const orders = report.simulationParams.annualOrdersVolume;
  const basketGain = orders * (report.youCamPoweredCommerce.averageBasketEUR - report.baselineStandardCommerce.averageBasketEUR);
  const savings = orders * (report.baselineStandardCommerce.returnRate - report.youCamPoweredCommerce.returnRate) / 100 * 12.5;
  assert.equal(Math.round(basketGain + savings), report.differentialGains.estimatedAnnualNetBenefitEUR);
  await page.screenshot({ path: 'docs/screenshots/08-jury-assumptions-fr.png', fullPage: true });

  await settled();
  const requestCount = apiCalls.length;
  await click('EN');
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  assert.equal(await page.$eval('#tab-ab_comparison', el => el.textContent), 'A/B Impact');
  assert.match(await page.$eval('#roi-assumptions', el => el.textContent), /not accounting net profit/);
  assert.match(await page.$eval('.mirror-caption', el => el.textContent), /Double-breasted Wool Coat/);
  assert.match(await page.$eval('.guide-content', el => el.textContent), /projected impact/);
  await page.waitForNetworkIdle({ idleTime: 350 });
  assert.equal(apiCalls.length, requestCount, 'Language changes must not trigger YouCam API calls');
  await page.screenshot({ path: 'docs/screenshots/09-jury-english.png', fullPage: true });
  await click('Finish');
  await page.waitForSelector('[data-demo-step=""]');
  await click('Stylist Look');
  await page.waitForFunction(() => document.querySelector('.insight-title')?.textContent.includes('Signature Selection'));
  assert.match(await page.$eval('.rationale', el => el.textContent), /undertone affinity/);
  await click('Skin (11)');
  await page.waitForSelector('.skin-dimensions');
  assert.equal(await page.$$eval('.skin-dimensions > div', els => els.length), 11);
  await click('Try my photo');
  assert.equal(await page.$eval('dialog', el => el.getAttribute('aria-label')), 'Try your photo');
  assert.match(await page.$eval('dialog', el => el.textContent), /Simulation mode/);
  await page.keyboard.press('Escape');
  for (const width of [1440, 1024, 768, 390]) {
    await page.setViewport({ width, height: 900 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `EN overflows at ${width}px`);
  }
  await page.screenshot({ path: 'docs/screenshots/10-jury-mobile-en.png', fullPage: true });
  await click('FR');
  await page.waitForFunction(() => document.documentElement.lang === 'fr');
  assert.equal(await page.$eval('#tab-personal_shopper', el => el.textContent), 'Look Styliste');
  assert.equal(await page.$eval('.mirror-visual svg', el => el.dataset.category), 'outerwear');
  assert.deepEqual(browserErrors, []);
  console.log('PASS: 3-step jury guide, coherent local illustration, color/fit changes, score provenance, ROI formula, FR/EN with state preserved and no extra API calls, all EN tabs/modal, 4 responsive widths.');
} finally { await browser.close(); }
