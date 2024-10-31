import { Then } from '@cucumber/cucumber';
import { getAllCurrentMenuChoices } from './helpers.js';
import { expect } from 'chai';


Then('I should see the following action buttons: {string}', async function(available_actions){
  // Get all current menu buttons
  const { choices } = await getAllCurrentMenuChoices( this );

  // Convert values from the step table into an array
  const actionsArray = available_actions.split( ',' ).map( action => action.trim() );

    expect( choices ).to.eql( actionsArray );
});
