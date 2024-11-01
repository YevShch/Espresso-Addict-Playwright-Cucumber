import { Given, When, Then } from '@cucumber/cucumber';
import { getValueOfScores, getMenuChoiceElement } from './helpers.js';
import { expect } from 'chai';


Given('the value of {string} is {string}', async function(sectionName, initial_health){
  let currentValue = await getValueOfScores( this, sectionName );
  const initialValue = parseInt( initial_health.trim(), 10 ); 
  expect(currentValue  ).to.equal( initialValue );
});

When( 'I choose to click {string} {string} times', async function (button_text, click_count){
  for ( let i = 0; i < click_count; i++ ) {
    let menuChoiceElement = await getMenuChoiceElement(this, button_text );
    await menuChoiceElement.click();
  }
});

Then('the value of {string} should be {string}', async function(sectionName, expected_health){
  let currentValue = await getValueOfScores( this, sectionName );
  const expectedValues = expected_health.split( ' or ' ).map( value => parseInt( value.trim(), 10 ) );
  expect( expectedValues ).to.include( currentValue );
});
