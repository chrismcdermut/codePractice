function makeCharCounter(charSet) {
  const charCounter = {};
  for (let i = 0; i < charSet.length; i++) {
    if (!charCounter[charSet[i]]) {
      charCounter[charSet[i]] = 0;
    }
    charCounter[charSet[i]] += 1;
  }
  return charCounter;
}


function permutationPalindrome1(charSet) {
  let canHavePalindrome = true;

  // make character counter
  const charCounter = makeCharCounter(charSet);
  let numberOfOddCounts = 0;
  // see if multiple charCounter is odd
  Object.values(charCounter).forEach((item) => {
    if (item % 2 === 1) {
      numberOfOddCounts += 1;
    }
  });

  if (numberOfOddCounts > 1) {
    canHavePalindrome = false;
  }

  return canHavePalindrome;
}

// ///////////////ICake better solution /////////////

function permutationCanPalindrome1(charSetArg) {
  const charSet = charSetArg.split('');
  const oddNumberCharacters = new Set();

  charSet.forEach((char) => {
    if (oddNumberCharacters.has(char)) {
      oddNumberCharacters.delete(char);
    } else {
      oddNumberCharacters.add(char);
    }
  });

  return oddNumberCharacters.size <= 1;
}


module.exports = { permutationCanPalindrome1, permutationPalindrome1 };
