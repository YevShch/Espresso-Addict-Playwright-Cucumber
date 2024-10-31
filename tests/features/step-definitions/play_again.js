import { Given, When, Then } from '@cucumber/cucumber';
import { navigateTo, getWhereIAm, getMenuChoiceElement,checkIfDescriptionContainsString } from './helpers.js'
import { expect } from 'chai';

Then('I should be taken back to the start of the game', async function(){
  expect( await getWhereIAm( this ) ).to.equal( 'outside the cafe' );
});

// Given('I play until I win the game', async function(){
//   await navigateTo( this, 'at the concert' );

//   // wait untill event "jam witth us"occurs
//   while ( await checkIfDescriptionContainsString( this, 'jam with us?', true ) === false ) {
//     let menuChoiceElement = await getMenuChoiceElement( this, 'Wait' );
//     // console.log( "Menu choice element found:", menuChoiceElement );
//     await menuChoiceElement.click();  
//   }
// // take the bonus "jam with the band"
//   let menuChoiceElement = await getMenuChoiceElement( this, 'Jam with the band' );
//   await menuChoiceElement.click();

//   await navigateTo( this, 'outside the cafe' );
//   await navigateTo( this, 'in a crowded bar' );

//   // wait untill event "a beer for free" occurs
//   while ( await checkIfDescriptionContainsString( this, 'a can of beer for free', true ) === false ) {
//     let menuChoiceElement = await getMenuChoiceElement( this, 'Wait' );
//     // console.log( "Menu choice element found:", menuChoiceElement );
//     await menuChoiceElement.click();
//   } 

//   await navigateTo( this, 'outside the cafe' );
//   await navigateTo( this, 'inside the cafe' );

//   // buy three cups of espressos
//   for ( let i = 0; i < 3; i++ ) {
//     let menuChoiceElement = await getMenuChoiceElement( world, 'Buy an espresso' );
//     await menuChoiceElement.click();
//   }

//   // wait untill event "barista" occurs
//   while ( await checkIfDescriptionContainsString( this, 'The barista is in a dark corner', true ) === false ) {
//     let menuChoiceElement = await getMenuChoiceElement( this, 'Wait' );
//     // console.log( "Menu choice element found:", menuChoiceElement );
//     await menuChoiceElement.click();
//   } 

//   // take the bonus "jam with the band"
//   let giveBeerBtn = await getMenuChoiceElement( this, 'Give beer to barista' );
//   await giveBeerBtn.click();
// });
