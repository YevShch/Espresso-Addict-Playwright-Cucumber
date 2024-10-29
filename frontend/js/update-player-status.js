// Update the player status (health, money, cups of java)
// based on if we find these properties in the choice
// [Called from doOnMenuChoice]
function updatePlayerStatus(choice) {
  // Loop through the properties in player.status
  // (money, health, espressocups) and see if the choice
  // made adds or substracts anything from them
  for (let i in player.status) {
    if (choice[i]) {
      player.status[i] += choice[i];
      if (player.status[i] < 0) {
        player.status[i] = 0;
      }
      if (player.status[i] > player["status max values"][i]) {
        player.status[i] = player["status max values"][i];
      }
    }
  }
  // Handle "death"
  if (player.status.health === 0) {
    // If you have no health you are dead
    player.location = locations.dead;
    showLocation(player.location);
    return "dead";
  }
  // Handle win
  if (player.status.espressocups / player["status max values"].espressocups == 1) {
    // If you have the maximum number of espresso cups you win
    player.location = locations.win;
    showLocation(player.location);
    return "win";
  }
  return "alive";
}