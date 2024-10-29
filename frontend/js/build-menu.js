// Build the menu from possible choices
// [Called from showLocation]
function buildMenu(choices) {
  // Replace current menu content with an empty ul
  $("menu").html("<ul/>");
  // Add li elements corresponding to choices to the ul
  for (let i in choices) {
    // continue, i.e. jump one step forward in the loop
    // if the choice requires something to be in the bag that is not there
    if (choices[i]["if in bag"] && player.bag.indexOf(choices[i]["if in bag"]) < 0) {
      continue;
    }
    // or if the choice requires something to have happened that has not happened
    if (choices[i]["if has happened"] && happenings.indexOf(choices[i]["if has happened"]) < 0) {
      continue;
    }
    // or if the choice requires money and we don't have enough money
    if (choices[i]["if money"] && player.status.money < choices[i]["if money"]) {
      continue;
    }
    // if all wait alternatives are hidden then don't show wait
    if (i == "Wait") {
      let allHidden = true;
      for (let j = 0; j < choices[i].length; j++) {
        allHidden = allHidden && choices[i][j].hidden;
      }
      if (allHidden) { continue; }
    }
    // or if the choice is hidden
    if (choices[i].hidden) { continue; }
    $("menu ul").append("<li>" + i + "</li>");
  }
  // Connect a click event handler to the menu choices
  $('menu ul li').click(doOnMenuChoice);
}