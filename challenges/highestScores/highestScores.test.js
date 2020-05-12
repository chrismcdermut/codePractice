const highestScores = require('./highestScores');

const HIGHEST_POSSIBLE_SCORE = 100;
const testOne = {
  unsortedScores: [37, 89, 41, 65, 91, 53],
  highestPossibleScore: HIGHEST_POSSIBLE_SCORE,
  output: [91, 89, 65, 53, 41, 37],
};

describe('highestScores Test', () => {
  test('testOne', () => {
    const result = highestScores(testOne.unsortedScores, testOne.highestPossibleScore);
    expect(result).toEqual(testOne.output);
  });
});
