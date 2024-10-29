// Show the contents of the bag
// [Called from showLocation]
function showBag() {
  // Empty the bag element
  $(".bag-content").html("");
  // Add a span tag for each item in the bag
  for (let i = 0; i < player.bag.length; i++) {
    $(".bag-content").append("<span>" + player.bag[i] + "</span>");
  }
  // If there is nothing in the bag then tell the user this
  if (player.bag.length === 0) {
    $(".bag-content").append("<span>nothing cool</span>");
  }
}