// Update the progress bars according to player health, money and cups of Java
// [Called from showLocation]
function updateProgressBars() {
  // Find elements with classes corresponding to status properties. 
  // Inside thes there ap progress bar
  // Update length, value and color displayed for each progress bar
  for (let i in player.status) {
    // calculate percentage
    let percentage = 100 * player.status[i] / player["status max values"][i];
    // change the length of the progress bar
    $("." + i + " .progress div").width(percentage + "%");
    // change the value of the progress bar
    $("." + i + " .progress div .val").html(player.status[i]);
    // change the color of progress bar (by adding the good and bad classes)
    $("." + i + " .progress div").removeClass('good bad');
    if (percentage >= 50) {
      $("." + i + " .progress div").addClass('good');
    }
    else {
      $("." + i + " .progress div").addClass('bad');
    }
  }
}