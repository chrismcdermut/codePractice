class MakeChange {
  constructor() {
    this.memo = {};
  }

  makingChange(amountLeftArg, denominations, currentIndex = 0) {
    let amountLeft = amountLeftArg;
    // Base cases: needed to end recursive functions
    // We hit the amount spot on. yes!
    if (amountLeft === 0) return 1;
    // We overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;
    // We're out of denominations
    if (currentIndex === denominations.length) return 0;

    // Toggle this on and off
    // eslint-disable-next-line no-console
    console.log(`checking ways to make ${amountLeft} with [${denominations.slice(currentIndex).join(', ')}]`);

    // Choose a current coin
    const currentCoin = denominations[currentIndex];

    // See how many possibilities we can get
    // for each number of times to use currentCoin
    let numPossibilities = 0;
    while (amountLeft >= 0) {
      numPossibilities += this.makingChange(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }

    return numPossibilities;
  }

  changePossibilitiesTopDown(amountLeftArg, denominations, currentIndex = 0) {
    let amountLeft = amountLeftArg;
    // Check our memo and short-circuit if we've already solved this one
    const memoKey = [amountLeft, currentIndex].join(', ');
    if (Object.prototype.hasOwnProperty.call(this.memo, memoKey)) {
      console.log(`grabbing memo [${memoKey}]`); // eslint-disable-line no-console
      return this.memo[memoKey];
    }

    // Base cases:
    // We hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // We overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // We're out of denominations
    if (currentIndex === denominations.length) return 0;
    // eslint-disable-next-line no-console
    console.log(`checking ways to make ${amountLeft} with [${denominations.slice(currentIndex).join(', ')}]`);

    // Choose a current coin
    const currentCoin = denominations[currentIndex];

    // See how many possibilities we can get
    // for each number of times to use currentCoin
    let numPossibilities = 0;
    while (amountLeft >= 0) {
      numPossibilities += this.changePossibilitiesTopDown(
        amountLeft, denominations, currentIndex + 1,
      );
      amountLeft -= currentCoin;
    }

    // Save the answer in our memo so we don't compute it again
    this.memo[memoKey] = numPossibilities;
    return numPossibilities;
  }
}

function changePossibilitiesBottomUp(amount, denominations) {
  // Initialize an array of zeros with indices up to amount
  const waysOfDoingNcents = new Array(amount + 1).fill(0);
  waysOfDoingNcents[0] = 1;

  denominations.forEach((coin) => {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  });

  return waysOfDoingNcents[amount];
}

module.exports = { MakeChange, changePossibilitiesBottomUp };
