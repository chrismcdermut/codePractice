function findLowestMissingInt(input) {
  let lowestMissingInt = 1;
  const sortedInput = input.sort();
  for (let i = 0; i < sortedInput.length; i++) {
    if (sortedInput[i] === lowestMissingInt) {
      lowestMissingInt += 1;
    }
  }
  return lowestMissingInt;
}

module.exports = findLowestMissingInt;
