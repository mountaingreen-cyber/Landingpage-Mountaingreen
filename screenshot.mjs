import puppeteer from 'puppeteer';

const section = process.argv[2] || 'full';
const version = process.argv[3] || 'v1';
const timestamp = Date.now();
const filename = `${version}_${section}_${timestamp}.png`;
const outputPath = `C:/Users/herby/Desktop/claude code/Screenshots/${filename}`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

// Wait for dev server
let retries = 10;
while (retries > 0) {
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 5000 });
    break;
  } catch {
    retries--;
    if (retries === 0) throw new Error('Dev server not responding');
    await new Promise(r => setTimeout(r, 1000));
  }
}

await page.screenshot({ path: outputPath, fullPage: section === 'full' });
console.log(`Screenshot saved: ${outputPath}`);

await browser.close();
