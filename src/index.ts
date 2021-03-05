import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://rocketseat.com.br');
  await page.screenshot({ path: 'rocketseat_instagram.png' });

  await browser.close();
})();
