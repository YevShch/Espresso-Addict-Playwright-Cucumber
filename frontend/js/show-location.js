// Show a location (image, description etc)
// [Called from start, doOnMenuChoice, updatePlayerStatus]
function showLocation(loc, alternateDescription, alternateImage) {
  // Use alteranate descriptions and image if the exist
  // else use the normal ones provided for the location
  let image = alternateImage || loc.image;
  let description = alternateDescription || loc.description;
  // Write to elements
  $('.big-image').attr("src", "imgs/" + image + ".jpg");
  $('.description').html(description.replaceAll(' - ', ' &ndash; '));
  // If a location is not an info page then change the memories
  // holding the last location and last description
  if (!loc.infopage) {
    lastLocation = loc;
    lastDescription = description;
  }
  // Show bag content, update progress bars and build the menu
  showBag();
  updateProgressBars();
  buildMenu(loc.choices);
}