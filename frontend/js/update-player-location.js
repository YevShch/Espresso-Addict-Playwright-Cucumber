// Update the location of the player
// [Called from doOnMenuChoice]
function updatePlayerLocation(choice) {
  // If the choice has a goback property then go back
  if (choice.goback) {
    player.location = lastLocation;
  }
  // If the choice has a goto property then change player location
  if (choice.goto) {
    player.location = locations[choice.goto];
  }
  // If reload is in the choice (player dead or won) - then reload the page
  if (choice.reload) {
    // Note: location here has nothing to do with player.location
    // it's a built in JavaScript object that we can use to reload the web page
    location.reload();
  }
}