// When the player waits there are often several options
// for what will happen. Choose one randomly.
// [Called from doOnMenuChoice]
function waitAround(choice) {
  // Pick a random choice from what may happens while you wait
  // Don't pick the same as last if there are multiple
  let random;
  // a do...while-loop continues to run until its condition is false
  let co = 0;
  do {
    random = Math.floor(Math.random() * choice.length);
    co++;
  }
  // this is the condition of the loop:
  // if there is more than one choice and we get the same description
  // as last time - or no description - then try again
  // (co is a counter added as a safeguard so that an endless loop can
  //  never occcur even if all choices have the same description)
  while (co < 50 && choice.length > 1 &&
    (choice[random].description == lastDescription || choice[random].hidden));
  choice = choice[random];
  // if the choice should only be shown once mark it as hidden from now on
  if (choice["show only once"]) { choice.hidden = true; }
  return choice;
}