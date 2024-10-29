// Start the game
async function start() {
  // Read JSON files for player, map and locations
  // Note: No "var" before player, map and locations
  // because they are global variables

  // specifically for playwright webkit flakyness
  // (hard to write if blackbox testing - sneak peak on code neeeded
  //  or discussion with developer)
  if (!window.jsonLoader) { setTimeout(start, 1); return; }

  player = await jsonLoader("player.json");
  map = await jsonLoader("map.json");
  locations = {};
  // This loop reads all files in location-details
  // based on the names given in locations.json
  let locs = await jsonLoader("locations.json");
  for (let i = 0; i < locs.length; i++) {
    locations[locs[i]] =
      await jsonLoader("location-details/" + locs[i] + ".json");
  }
  // Add choices to locations (based on map position etc)
  addChoicesToLocations();
  // Now that we have location objects in the let locations
  // convert the player location to an object
  player.location = locations[player.location];
  // Show the location the player is at
  showLocation(player.location);
  // Click handler for go full screen element
  $('.go-fullscreen').click(goFullScreen);
}

start();