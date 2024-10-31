import { Then } from '@cucumber/cucumber';
import { getWhereIAm } from './helpers.js'
import { expect } from 'chai';


Then('I should be back at the location {string}', async function(location){
  expect( await getWhereIAm( this ) ).to.equal( location );
});
