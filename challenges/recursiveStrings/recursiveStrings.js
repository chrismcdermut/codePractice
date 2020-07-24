function recursiveStrings(input) {
  const string = input;
  // Base case
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsExceptLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  // Recursive call: get all possible permutations for all chars except last
  const permutationsOfAllCharsExceptLast = recursiveStrings(allCharsExceptLast);

  // Put the last char in all possible positions for each of the above permutations
  const permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach((permutationOfAllCharsExceptLast) => {
    for (let position = 0; position <= allCharsExceptLast.length; position++) {
      const permutation = permutationOfAllCharsExceptLast.slice(0, position)
      + lastChar + permutationOfAllCharsExceptLast.slice(position);

      permutations.add(permutation);
    }
  });

  return permutations;
}

module.exports = recursiveStrings;
