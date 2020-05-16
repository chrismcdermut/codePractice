function productOfThree(integers) {
  if (integers.length < 3) {
    throw new Error('Less than 3 items!');
  }

  let highest = Math.max(integers[0], integers[1]);
  let lowest = Math.min(integers[0], integers[1]);

  let highestProductOf2 = integers[0] * integers[1];
  let lowestProductOf2 = integers[0] * integers[1];

  let highestProductOf3 = integers[0] * integers[1] * integers[2];

  for (let i = 2; i < integers.length; i++) {
    const current = integers[i];


    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2,
    );

    // Do we have a new highest product of two?
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest,
    );

    // Do we have a new lowest product of two?
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest,
    );

    // Do we have a new highest?
    highest = Math.max(highest, current);

    // Do we have a new lowest?
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

module.exports = productOfThree;

// let firstHighestProduct = integers[0]*integers[1]
// let totalHighestProduct = firstHighestProduct*integers[2]
// const currentBiProduct = currentNumber*integers[i+1]
// firstHighestProduct = Math.max(firstHighestProduct,currentBiProduct)
// const potentialHighestProduct = currentBiProducti
// totalHighestProduct = Math.max(totalHighestProduct,)
