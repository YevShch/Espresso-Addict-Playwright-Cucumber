import { Given, When, Then } from '@cucumber/cucumber';
import { checkIfDescriptionContainsString, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';

// Given('that I have started the game by navigating to {string}', async function(a){
//   // TODO: implement step
// });

// Given('that I navigated to the position {string}', async function(location){
//   // TODO: implement step
// });

Given('I see the initial picture of the location {string}', async function(location){
  const currentLocation = await getWhereIAm( this );
  expect( currentLocation ).to.equal( location );
});

// When('I wait until the event {string} occurs', async function(event_message){
//   // TODO: implement step
// });

// Then('I should see the text {string}', async function(event_text){
//   // TODO: implement step
// });

// Then('I should see the button {string}', async function(button_text){
//   // TODO: implement step
// });

// Given('I wait until the event {string} occurs', async function(event_message){
//   // TODO: implement step
// });

// Given('I should see the text {string}', async function(event_text){
//   // TODO: implement step
// });

// When('I repeatedly choose {string} until the event {string} occurs or the game ends', async function(event_message, a){
//   // TODO: implement step
// });

Then('the event {string} should not occur again', async function(event_message){
  const eventOccurred = await checkIfDescriptionContainsString( this, event_message, true );
  expect( eventOccurred ).to.be.false;
});

When('I repeatedly choose {string} until the event {string} occurs or {string}', async function(button_text, event_message, position){
  while ( await getWhereIAm( this ) !== position && await checkIfDescriptionContainsString( this, event_message, true ) !== event_message ) {
 ' while ( await getWhereIAm( this ) !== position ) { ' 
  let menuChoiceElement = await getMenuChoiceElement( this, button_text );
    if ( !menuChoiceElement ) {
      throw new Error( `Menu choice "${ button_text }" not found.` );
    }
    await menuChoiceElement.click();
  }
});

Then('I should not see the event message {string}', async function(event_message){
  const actual_message = await checkIfDescriptionContainsString( this, event_message, true );
  expect(actual_message ).to.be.false;
});
