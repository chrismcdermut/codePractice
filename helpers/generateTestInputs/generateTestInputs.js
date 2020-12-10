const { proShuffle } = require('../../challenges/shuffleArray/shuffleArray');

function generateLinearTestInputs(input, avoidedCases) {
  const testCase = [];
  for (let i = 0; i < input; i++) {
    if (!avoidedCases.has(i + 1)) {
      testCase.push(i + 1);
    }
  }
  return testCase;
}

function generateShuffledTestInputs(input, avoidedCases) {
  const testCase = [];
  for (let i = 0; i < input; i++) {
    if (!avoidedCases.has(i)) {
      testCase.push(i);
    }
  }

  return proShuffle(testCase);
}

module.exports = { generateLinearTestInputs, generateShuffledTestInputs };
