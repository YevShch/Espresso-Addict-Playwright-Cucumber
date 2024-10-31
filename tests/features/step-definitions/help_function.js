import { Then } from '@cucumber/cucumber';
import { getWhereIAm } from './helpers.js'
import { expect } from 'chai';

// Given('that I have started the game by navigating to {string}', async function(a){
//   // TODO: implement step
// });

// When('I click the {string} button', async function(a){
//   // TODO: implement step
// });

// Then('I should see the text {string}', async function(a){
//   // TODO: implement step
// });

// Then('I should see the button {string}', async function(a){
//   // TODO: implement step
// });

Then('I should be back at the location {string}', async function(location){
  expect( await getWhereIAm( this ) ).to.equal( location );
});
