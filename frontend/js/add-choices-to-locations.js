// Add choices like directions, help etc
// [Called from start]
function addChoicesToLocations() {
  // Loop through all locations
  for (let i in locations) {
    // Add directions to choices
    addDirections(i, locations[i]);
    // Always add Help as choice (except on info pages)
    if (!locations[i].infopage) {
      locations[i].choices.Help = { goto: "help" };
    }
  }
}