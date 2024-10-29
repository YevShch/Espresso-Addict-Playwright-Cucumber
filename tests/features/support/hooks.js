import { AfterAll, BeforeStep, AfterStep } from '@cucumber/cucumber';
import { sleepBetweenSteps } from '../../config.js';
import { browser, sleep } from './world.js';

// playwright's webkit browser is flaky when running 'too fast'.. 
// so if webkit override sleepBetweenSteps if shorter than 100ms
let whichBrowser = process.argv[process.argv.indexOf('tests/features/support') + 1];
const stepSleep = whichBrowser === 'webkit' ? Math.max(100, sleepBetweenSteps) : sleepBetweenSteps;

// Remember the current feature tested
let currentFeature = { name: '', description: '' };

BeforeStep(function (info) {
  // Write the feature name and description when we start a new feature
  let { name, description } = info.gherkinDocument.feature;
  if (currentFeature.name !== name) {
    console.log('\n\n\nFeature:', name, '\n', description);
  }
  currentFeature = { name, description };
  this.currentFeature = currentFeature;
});

AfterStep(async function () {
  await sleep(stepSleep);
});

AfterAll(async function () {
  await browser.close();
});

