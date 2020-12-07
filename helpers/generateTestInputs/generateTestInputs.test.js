const { generateLinearTestInputs, generateShuffledTestInputs } = require('./generateTestInputs');

describe('generateLinearTestInputs Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 10,
      avoidedCases: new Set([]),
      output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    const result = generateLinearTestInputs(testOne.input, testOne.avoidedCases);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 10,
      avoidedCases: new Set([1, 4]),
      output: [2, 3, 5, 6, 7, 8, 9, 10],
    };
    const result = generateLinearTestInputs(testTwo.input, testTwo.avoidedCases);
    expect(result).toEqual(testTwo.output);
  });

  xtest('testThree', () => {
    const testThree = {
      input: 200,
      avoidedCases: new Set([101]),
      output: [2, 3, 5, 6, 7, 8, 9, 10],
    };
    const result = generateLinearTestInputs(testThree.input, testThree.avoidedCases);
    expect(result).toEqual(testThree.output);
  });
});

describe('generateShuffledTestInputs Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 10,
      avoidedCases: new Set([]),
      output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    const result = generateShuffledTestInputs(testOne.input, testOne.avoidedCases);
    expect(result).not.toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 10,
      avoidedCases: new Set([1, 4]),
      output: [2, 3, 5, 6, 7, 8, 9, 10],
    };
    const result = generateShuffledTestInputs(testTwo.input, testTwo.avoidedCases);
    expect(result).not.toEqual(testTwo.output);
  });
});
