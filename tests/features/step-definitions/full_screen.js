import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


When( 'I click the {string} option', async function ( optionText ) {
  
  const button = await this.getByXPath( `//div[contains(text(), '${ optionText }')]` );
  await button.click();
} );

Then('the game should switch to full screen mode', async function(){
  const isFullScreen = await this.runScriptInBrowser( () => {
    return document.fullscreenElement !== null;
  } );
  expect( isFullScreen ).to.be.true;
});

When('I press the {string} key on my computer', async function(key){
  await this.page.keyboard.press( key );
  // await this.page.keyboard.press( 'Escape' );
  await this.sleep( 500 );
});

// When( 'I press the {string} key on my computer', async function ( key ) {
//   await this.page.evaluate( ( key ) => {
//     const event = new KeyboardEvent( 'keydown', {
//       key: key,
//       code: key,
//       keyCode: key === 'Escape' ? 27 : null,
//       charCode: 0,
//       bubbles: true,
//       cancelable: true,
//     } );
//     document.dispatchEvent( event );
//   }, key );
// } );

Then('the game should exit full screen mode', async function(){
  const isNotFullScreen = await this.runScriptInBrowser( () => {
    return document.fullscreenElement == null;
  } );
  expect( isNotFullScreen ).to.be.true;
}); 

// Then( 'the game should exit full screen mode', async function () {
//   await this.runScriptInBrowser( () => {
//     if ( document.fullscreenElement ) {
//       document.exitFullscreen();
//     }
//   } );

//   const isNotFullScreen = await this.runScriptInBrowser( () => {
//     return document.fullscreenElement == null;
//   } );
//   expect( isNotFullScreen ).to.be.true;
// } );
