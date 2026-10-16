import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';

// Additional interaction and responsive checks against the running local studio.
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
try {
  const page = await browser.newPage();
  const errors = [];
  let shopperCalls = 0;
  page.on('request', request => { if (request.url().endsWith('/api/personal-shopper')) shopperCalls++; });
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  assert.equal(await page.$eval('.studio-app', el => getComputedStyle(el).backgroundColor), 'rgb(246, 247, 245)');
  const clickText = (...texts) => page.evaluate((...values) => {
    const button = [...document.querySelectorAll('button')].find(el => values.includes(el.textContent.trim()));
    if (!button) throw new Error(`Missing button: ${values.join(' or ')}`);
    button.click();
  }, ...texts);

  await clickText('Manteaux', 'Coats');
  assert.equal(await page.$$eval('.product-card', cards => cards.length), 1);
  await page.click('.product-card');
  await page.waitForFunction(() => !document.querySelector('.processing-overlay'));
  await page.click('.swatches button:last-child');
  await clickText('relaxed');
  await page.select('#garment-size', 'L');
  await page.waitForFunction(() => !document.querySelector('.processing-overlay'));
  assert.match(await page.$eval('.mirror-caption', el => el.textContent), /relaxed · (Taille|Size) L/);
  assert.equal(await page.$$eval('.swatches button[aria-pressed=true]', buttons => buttons.length), 1);

  await clickText('Impact A/B', 'A/B Impact');
  await page.waitForSelector('.benefit-card strong');
  const shopperCallsBeforeSlider = shopperCalls;
  const initialBenefit = await page.$eval('.benefit-card strong', el => el.textContent);
  await page.focus('#orders-volume');
  await page.keyboard.press('ArrowRight');
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  await page.waitForFunction(before => document.querySelector('.benefit-card strong')?.textContent !== before, {}, initialBenefit);
  const changedBenefit = await page.$eval('.benefit-card strong', el => el.textContent);
  assert.notEqual(changedBenefit, initialBenefit);
  assert.equal(shopperCalls, shopperCallsBeforeSlider, 'ROI arithmetic must not trigger another Skin API request');
  assert.equal(await page.$eval('#orders-volume', el => el.value), '11000');

  await clickText('Peau (11)', 'Skin (11)');
  await page.waitForSelector('.skin-dimensions');
  assert.equal(await page.$$eval('.skin-dimensions > div', els => els.length), 11);
  await page.screenshot({ path: 'docs/screenshots/05-skin-dimensions.png', fullPage: true });

  await page.click('.photo-button');
  assert.equal(await page.$eval('dialog', el => el.open), true);
  assert.ok(await page.$('dialog input[type=file]'));
  assert.ok(await page.$('dialog input[type=url]'));
  await page.screenshot({ path: 'docs/screenshots/06-photo-modal.png', fullPage: false });
  await page.keyboard.press('Escape');
  assert.equal(await page.$eval('dialog', el => el.open), false);
  assert.equal(await page.$eval('.photo-button', el => el === document.activeElement), true);

  // A small valid PNG tests the real file-input -> local API -> custom profile path.
  await page.click('.photo-button');
  const fileChooser = await page.$('input[type=file]');
  const { writeFile, unlink } = await import('node:fs/promises');
  const uploadPath = '/tmp/youcam-ui-test.png';
  await writeFile(uploadPath, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64'));
  await fileChooser.uploadFile(uploadPath);
  await page.waitForFunction(() => !document.querySelector('dialog').open);
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  assert.match(await page.$eval('.profile-card', el => el.textContent), /Photo Personnalisée|Custom Photo/);
  await unlink(uploadPath);

  await clickText('Emma (warm)');
  await clickText('Tous', 'All');
  await clickText('Look Styliste', 'Stylist Look');
  await page.waitForFunction(() => !document.querySelector('[aria-busy="true"]'));
  await page.waitForNetworkIdle({ idleTime: 500 });
  for (const width of [1440, 1024, 768, 390]) {
    await page.setViewport({ width, height: 900 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Horizontal overflow at ${width}px`);
    if (width === 390) {
      await page.screenshot({ path: 'docs/screenshots/07-mobile-studio.png', fullPage: true });
      await page.click('.photo-button');
      assert.ok(await page.$eval('dialog', el => el.getBoundingClientRect().width <= innerWidth));
      await page.keyboard.press('Escape');
    }
  }
  assert.deepEqual(errors, [], 'No uncaught browser errors');
  console.log('PASS: styles, filters, garment, color, fit, size, ROI slider, 11 skin dimensions, modal, upload, focus, 4 viewport sizes, no browser errors.');
} finally {
  await browser.close();
}
