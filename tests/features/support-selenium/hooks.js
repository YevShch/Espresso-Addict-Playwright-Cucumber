import { BeforeAll, AfterAll, AfterStep } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';
import { driver } from './world.js';

const sleep = ms => new Promise(res => setTimeout(res, ms));

BeforeAll(function () {
  return driver.manage().window().maximize();
});

AfterAll(function () {
  return driver.quit();
});

AfterStep(async function () {
  await sleep(sleepBetweenSteps);
});