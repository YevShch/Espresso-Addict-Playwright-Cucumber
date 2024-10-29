import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, headless as _headless } from '../../config.js';

// get which browser from cli (command line interface)
// and load the correct playwright browser
let whichBrowser = process.argv[process.argv.indexOf('tests/features/support') + 1];
['chromium', 'firefox', 'webkit'].includes(whichBrowser) || (whichBrowser = 'chromium');
const playwright = await import('playwright');
const browserType = playwright[whichBrowser];
// check we are running on a GitHub Actions runner
const GITHUB_ACTIONS = process.env['GITHUB_ACTIONS'] === 'true';

// Run headless if config says so or if we are running in GitHub actions 
const headless = _headless || GITHUB_ACTIONS;
export const sleep = ms => new Promise(res => setTimeout(res, ms));
export const browser = await browserType.launch({ headless });
export const page = await browser.newPage();

class CustomWorld {
  constructor() {
    this.page = page;
  }

  sleep(ms) {
    return sleep(ms);
  }

  async gotoUrl(url) {
    await this.page.goto(url);
  }

  getText(element) {
    return element.textContent();
  }

  runScriptInBrowser(script) {
    return this.page.evaluate(script);
  }

  get(cssSelector) {
    return this.page.locator(`css=${cssSelector}`);
  }

  getMany(cssSelector) {
    return this.page.locator(`css=${cssSelector}`).all().catch(async (_e) => {
      await this.sleep(50);
      return this.getMany(cssSelector);
    });
  }

  getByXPath(xPath) {
    return this.page.locator(`xpath=${xPath}`);
  }

  getManyByXPath(xPath) {
    return this.page.locator(`xpath=${xPath}`).all().catch(async (_e) => {
      await this.sleep(50);
      return this.getManyByXPath(xPath);
    });
  }

  async getWait(cssSelector, maxTimeToWaitMs = 5000) {
    let visible, now = Date.now();
    while (Date.now() - now < maxTimeToWaitMs) {
      let located = this.page.locator(`css=${cssSelector}`);
      let visible = await located.isVisible();
      if (visible) { return located; }
    }
    return null;
  }

  async getByXPathWait(xPath, maxTimeToWaitMs = 5000) {
    let visible, now = Date.now();
    while (Date.now() - now < maxTimeToWaitMs) {
      let located = this.page.locator(`xpath=${xPath}`);
      let visible = await located.isVisible();
      if (visible) { return located; }
    }
    return null;
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);