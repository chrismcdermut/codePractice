function highestScores(unorderedScores, highestPossibleScore) {
  // Array constructor takes length argument,
  // +1 for highestScore because array index starts at 0
  // 'fill', fills the array with argument value
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach((score) => {
    // at the score index increment the value
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}


module.exports = highestScores;
