import { Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { getAllCurrentMenuChoices, checkIfDescriptionContainsString } from './helpers.js';

Then( 'I should see the text {string}', async function ( expectedText ) {
  // Use the helper function to check if the description contains the expected text
  await checkIfDescriptionContainsString( this, expectedText );
} );

Then( 'I should see the following action buttons:', async function ( dataTable ) {
  // Get all current menu buttons
  const { choices } = await getAllCurrentMenuChoices( this );

  // Convert values from the step table into an array
  const expectedButtons = dataTable.raw().flat();

  // Check that each expected button is present among the current buttons
  for ( const button of expectedButtons ) {
    expect( choices ).to.include( button );
  }
} );

