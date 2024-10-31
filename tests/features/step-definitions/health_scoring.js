import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { getValueOfScores, checkIfDescriptionContainsString, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

// Given('I am at the location {string}', async function(a){
//   // TODO: implement step
// });

// Then('the value of my {string} is {float}', async function(a, b){
//   // TODO: implement step
// });

// When('I click the {string} button', async function(a){
//   // TODO: implement step
// });

// Then('the value of my {string} should be {float}', async function(a, b){
//   // TODO: implement step
// });

Given('I know the current value of my {string}', async function(sectionName){
  this.initialValue = await getValueOfScores( this, sectionName );
});

Then('the value of my {string} should decrease', async function(sectionName){
  let currentValue = await getValueOfScores( this, sectionName );
  expect( this.initialValue ).to.be.greaterThan( currentValue );
});

// Given('the value of my {string} is {float}', async function(a, b){
//   // TODO: implement step
// });

When('I play until the game ends when {string} reaches {float}', async function(sectionName, count){
  // continue to wait until health is 0
  while ( await getValueOfScores( this, sectionName ) > count ) {
    let menuChoiceElement = await getMenuChoiceElement( this, 'Wait' );
    await menuChoiceElement.click();
  }
});

Then('the game should end with the message {string}', async function(expectedText){
  await checkIfDescriptionContainsString( this, expectedText, true );
});
