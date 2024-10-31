import { Given, When, Then } from '@cucumber/cucumber';
import { checkIfDescriptionContainsString, getWhereIAm, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';


Given('I see the initial picture of the location {string}', async function(location){
  const currentLocation = await getWhereIAm( this );
  expect( currentLocation ).to.equal( location );
});


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
