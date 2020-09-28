function randomNumber1to7() {
  // generate percentage between 1/7,
  return Math.round(Math.random() * 7);
}

function fiveSidedDie() {
  let result = 7; // Arbitrarily large
  while (result > 5) {
    // numbers 1-5 all have equal chance of appearing
    result = randomNumber1to7();
  }
  return result;
}

function randomNumber1to5() {
  // generate percentage between 1/7,
  return Math.round(Math.random() * 7);
}

function sevenSidedDie() {
  let result = 7; // Arbitrarily large
  while (result > 5) {
    // numbers 1-5 all have equal chance of appearing
    result = randomNumber1to5();
  }
  return result;
}

module.exports = {
  randomNumber1to7, fiveSidedDie, randomNumber1to5, sevenSidedDie,
};
