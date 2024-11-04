import { When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';


When( 'I click the {string} option', async function ( optionText ) { 
  const fullScreenElement = await this.getByXPath( `//div[contains(text(), '${ optionText }')]` );
  await fullScreenElement.click();
} );

Then('the game should switch to full screen mode', async function(){
  const isFullScreen = await this.runScriptInBrowser( () => {
    return document.fullscreenElement !== null;
  } );
  expect( isFullScreen ).to.be.true;
});

When('I press the {string} key on my computer', async function(key){
  // await this.page.keyboard.press( key );
  // await this.sleep( 500 );

    await this.runScriptInBrowser( () => {
      if ( document.fullscreenElement ) {
        document.exitFullscreen();
      }
    } );
});


Then('the game should exit full screen mode', async function(){
  const isNotFullScreen = await this.runScriptInBrowser( () => {
    return document.fullscreenElement == null;
  } );
  expect( isNotFullScreen ).to.be.true;
}); 
