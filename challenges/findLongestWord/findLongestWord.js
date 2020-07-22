function findLongestWord(str) {
  const splitString = str.split(' ');
  let longestWord = splitString[0];
  for (let i = 0; i < splitString.length; i += 1) {
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }
  return longestWord;
}

module.exports = findLongestWord;
