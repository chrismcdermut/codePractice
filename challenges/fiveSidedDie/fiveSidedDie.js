function sevenSidedDie() {
  // generate percentage between 1/7,
  return Math.round(Math.random() * 7);
}

function fiveSidedDie() {
  let result = 7; // Arbitrarily large
  while (result > 5) {
    // numbers 1-5 all have equal chance of appearing
    result = sevenSidedDie();
  }
  return result;
}

module.exports = { sevenSidedDie, fiveSidedDie };
