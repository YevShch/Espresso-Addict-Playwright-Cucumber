// Add choices based on possible directions to go based on the map 
// [Called from addChoicesToLocations]
function addDirections(locationName, location) {
  // Loop north to south - i
  for (let i = 0; i < map.length; i++) {
    // Loop west to east - j
    for (let j = 0; j < map[i].length; j++) {
      if (locationName == map[i][j]) {
        // look at the map array in the json file
        // to understand these 4 if statements where we check for locations
        // north, south, west and east of the current one
        // if the exist we add them as choices
        if (map[i][j - 1]) { location.choices["Go west"] = { goto: map[i][j - 1] }; }
        if (map[i - 1] && map[i - 1][j]) { location.choices["Go north"] = { goto: map[i - 1][j] }; }
        if (map[i + 1] && map[i + 1][j]) { location.choices["Go south"] = { goto: map[i + 1][j] }; }
        if (map[i][j + 1]) { location.choices["Go east"] = { goto: map[i][j + 1] }; }
      }
    }
  }
}