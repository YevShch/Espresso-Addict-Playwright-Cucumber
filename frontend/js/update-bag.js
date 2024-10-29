// Update the contents of the player's bag
// [Called from doOnMenuChoice]
function updateBag(choice) {
  // If the choice involves a gift then put in the players bag
  if (choice.gift) {
    player.bag.push(choice.gift);
  }
  // If the choice involved having something in your bag, then remove
  // this item from the bag (do this by building a new bag, without the item)
  let updatedBag = [];
  for (let i = 0; i < player.bag.length; i++) {
    if (choice["if in bag"] != player.bag[i]) {
      updatedBag.push(player.bag[i]);
    }
  }
  // Set the playar.bag to the new updated bag
  player.bag = updatedBag;
}