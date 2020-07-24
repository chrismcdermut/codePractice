function makingChange(amountLeftArg, denominations, currentIndex = 0) {
  let amountLeft = amountLeftArg;
  // Base cases: needed to end recursive functions
  // We hit the amount spot on. yes!
  if (amountLeft === 0) return 1;
  // We overshot the amount left (used too many coins)
  if (amountLeft < 0) return 0;
  // We're out of denominations
  if (currentIndex === denominations.length) return 0;

  // Toggle this on and off
  console.log(`checking ways to make ${amountLeft} with [${denominations.slice(currentIndex).join(', ')}]`);

  // Choose a current coin
  const currentCoin = denominations[currentIndex];

  // See how many possibilities we can get
  // for each number of times to use currentCoin
  let numPossibilities = 0;
  while (amountLeft >= 0) {
    numPossibilities += makingChange(amountLeft, denominations, currentIndex + 1);
    amountLeft -= currentCoin;
  }

  return numPossibilities;
}

module.exports = makingChange;
