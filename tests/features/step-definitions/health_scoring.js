import { Given, When, Then } from '@cucumber/cucumber';
import { getValueOfScores, checkIfDescriptionContainsString, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';


Given( 'I know the current value of my {string}', async function ( sectionName ) {
  this.scores[ sectionName ] = await getValueOfScores( this, sectionName );
  // console.log( `Initial value of ${ sectionName } is: `, this.scores[ sectionName ] );
} );

Then('the value of my {string} should decrease', async function(sectionName){
  let currentValue = await getValueOfScores( this, sectionName );
  expect( this.scores[ sectionName ] ).to.be.greaterThan( currentValue );
});


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
