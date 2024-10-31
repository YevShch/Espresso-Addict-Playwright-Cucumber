import { When, Then } from '@cucumber/cucumber';
import { getValueOfScores, checkIfDescriptionContainsString, getMenuChoiceElement } from './helpers.js'
import { expect } from 'chai';


When('I wait until the event {string} occurs', async function(event_text){
  while ( await checkIfDescriptionContainsString( this, event_text, true ) === false ) {
    let menuChoiceElement = await getMenuChoiceElement( this, 'Wait' );
    // console.log( "Menu choice element found:", menuChoiceElement );
    await menuChoiceElement.click();
  }
});


Then( 'the value of my {string} should increase by {float}', async function ( sectionName, count ) {
  let currentValue = await getValueOfScores( this, sectionName );
  // console.log( `Initial value before comparison of ${ sectionName } is: `, this.scores[ sectionName ] );

  expect( currentValue ).to.equal( this.scores[ sectionName ] + count );
} );

Then( 'the value of my {string} should remain the same', async function ( sectionName ) {
  let currentValue = await getValueOfScores( this, sectionName );
  // console.log( `Initial value before comparison of ${ sectionName } is: `, this.scores[ sectionName ] );

  expect( currentValue ).to.equal( this.scores[ sectionName ] );
} );


When('I should see the button {string}', async function(button_text){
  if ( !button_text ) {
    console.log( 'No button text provided, skipping the button visibility check.' );
    return; // Skip the check if button_text is not provided
  }
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
  // Check that the button is visible
  expect( buttonVisible ).to.be.true;
});
