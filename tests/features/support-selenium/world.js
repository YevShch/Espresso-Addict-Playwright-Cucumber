import seleniumWebdriver, { By, until } from 'selenium-webdriver';
import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';
import { timeout, headless } from '../../config.js';
import chrome from 'selenium-webdriver/chrome.js';

// check we are running on a GitHub Actions runner
const GITHUB_ACTIONS = process.env['GITHUB_ACTIONS'] === 'true';

const options = new chrome.Options();
// Run headless if config says so or if we are running in GitHub actions 
(headless || GITHUB_ACTIONS) && options.addArguments('--headless=new');

export const driver = new seleniumWebdriver
  .Builder()
  .setChromeOptions(options)
  .forBrowser('chrome')
  .build();

class CustomWorld {
  constructor() {
    this.driver = driver;
  }

  gotoUrl(url) {
    return this.driver.get(url);
  }

  getText(element) {
    return element.getText();
  }

  runScriptInBrowser(script) {
    return this.driver.executeScript(script);
  }

  get(cssSelector) {
    return this.driver.findElement(By.css(cssSelector));
  }

  getMany(cssSelector) {
    return this.driver.findElements(By.css(cssSelector));
  }

  getByXPath(xPath) {
    return this.driver.findElement(By.xpath(xPath));
  }

  getManyByXPath(xPath) {
    return this.driver.findElements(By.xpath(xPath));
  }

  getWait(cssSelector, maxTimeToWaitMs = 5000) {
    return this.driver.wait(
      until.elementLocated(By.css(cssSelector)), maxTimeToWaitMs);
  }

  getByXPathWait(xPath, maxTimeToWaitMs = 5000) {
    return this.driver.wait(
      until.elementLocated(By.xpath(xPath)), maxTimeToWaitMs);
  }

}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);