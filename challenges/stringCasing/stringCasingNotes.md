stringCasing Notes go here!

//TODO: put this in helpers
function assertEqual(a, b) {
  if (a !== b) {
    throw new Error(`expect ${b}; received ${a}`);
  }
}
