import { Then } from '@cucumber/cucumber';
import { getWhereIAm } from './helpers.js'
import { expect } from 'chai';

Then('I should be taken back to the start of the game', async function(){
  expect( await getWhereIAm( this ) ).to.equal( 'outside the cafe' );
});
