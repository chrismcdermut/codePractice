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
  const results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 0, 0, 0, 0],
  ];

  while (true) {
  // Do our die rolls
    const row = randomNumber1to5() - 1;
    const column = randomNumber1to5() - 1;

    // Case: we hit an extraneous outcome
    // so we need to re-roll
    if (row === 4 && column > 0) {
      continue;
    }

    // Our outcome was fine. return it!
    return results[row][column];
  }
}


function sevenSidedDieClean() {
  while (true) {
    // Do our die rolls
    const roll1 = randomNumber1to5();
    const roll2 = randomNumber1to5();

    const outcomeNumber = (roll1 - 1) * 5 + (roll2 - 1) + 1;

    // If we hit an extraneous
    // outcome we just re-roll
    if (outcomeNumber > 21) continue;

    // Our outcome was fine. return it!
    return ((outcomeNumber % 7) + 1);
  }
}

module.exports = {
  randomNumber1to7,
  fiveSidedDie,
  randomNumber1to5,
  sevenSidedDie,
  sevenSidedDieClean,
};
