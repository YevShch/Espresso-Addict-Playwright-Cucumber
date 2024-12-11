import { Given, When, Then, world } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getValueOfScores, getMenuChoiceElement } from './helpers.js';

// Given( 'I am at the location {string}', async function ( location ) {
//   await startLocation( this, location );
// } );

Given('the value of my {string} is {float}', async function(sectionName, count){
  expect( await getValueOfScores( this, sectionName ) ).to.equal( count );
});

Given( 'the value of my {string} is {string}', async function (sectionName, count){
  expect( await getValueOfScores( this,sectionName ) ).to.equal( count );
});

When('I click the {string} button', async function(button_text){
  let menuChoiceElement = await getMenuChoiceElement( world, button_text );
  await menuChoiceElement.click();
});

Then('the value of my {string} should be {float}', async function(sectionName, count){
  expect( await getValueOfScores( this, sectionName ) ).to.equal( count );
});

Then('the value of my {string} should be {string}', async function(sectionName, count){
  expect( await getValueOfScores( this, sectionName ) ).to.equal( count );
});

When('I bought {float} espressos', async function(count){
  for ( let i = 0; i < count; i++ ) {
    let menuChoiceElement = await getMenuChoiceElement( world, 'Buy an espresso' );
    await menuChoiceElement.click();
  }
});


Then( 'I should not see the {string} button', async function ( button_text ) {
  // Get all menu items
  const menuChoices = await this.getMany( 'menu ul li' );

  // Search for the button with the text that should disappear
  let buttonVisible = false;
  for ( let choice of menuChoices ) {
    const text = await this.getText( choice );
    if ( text.trim() === button_text ) {
      buttonVisible = await choice.isVisible();
      break;
    }
  }

  // Check that the button is not visible
  expect( buttonVisible ).to.be.false;
} );

