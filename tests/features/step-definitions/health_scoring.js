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


Given( 'the value of {string} is {string}', async function ( sectionName, initial_health ) {
  let currentValue = await getValueOfScores( this, sectionName );
  const initialValue = parseInt( initial_health.trim(), 10 );
  expect( currentValue ).to.equal( initialValue );
} );

When( 'I choose to click {string} {float} times', async function ( button_text, count ) {
  for ( let i = 0; i < count; i++ ) {
    let menuChoiceElement = await getMenuChoiceElement( this, button_text );
    await menuChoiceElement.click();
  }
} );


Then( 'the value of {string} should {string}', async function ( sectionName, health_change ) {

  // Get the current health value after the action
  const currentValue = await getValueOfScores( this, sectionName );

  // Retrieve the initial health value saved before the action
  const initialHealth = this.scores[ sectionName ];

  if ( health_change === 'decrease' ) {
    // Ensure the current value is less than the initial value
    expect( currentValue ).to.be.below( initialHealth,
      `Expected ${ sectionName } to decrease from ${ initialHealth }, but got ${ currentValue }`
    );
  } else if ( health_change === 'decrease or stay the same' ) {
    // Ensure the current value is less than or equal to the initial value
    expect( currentValue ).to.be.at.most( initialHealth,
      `Expected ${ sectionName } to decrease or stay the same (initial: ${ initialHealth }), but got ${ currentValue }`
    );
  } else {
    // If the health_change string is not one of the expected ones, throw an error
    throw new Error( `Unexpected health change format: ${ health_change }` );
  }
} );

