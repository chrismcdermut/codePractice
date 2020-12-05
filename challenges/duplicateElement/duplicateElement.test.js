const { compareNumbers, duplicateElementCheck } = require('./duplicateElement');

describe('duplicateElementCheck Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 1, 9, 10],
      output: 1,
    };
    const result = duplicateElementCheck(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10],
      output: 9,
    };
    const result = duplicateElementCheck(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input: [10, 11, 12, 12, 13, 14, 15, 16, 17, 18, 19],
      output: 12,
    };
    const result = duplicateElementCheck(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const testFour = {
      input: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 39],
      output: 39,
    };
    const result = duplicateElementCheck(testFour.input);
    expect(result).toEqual(testFour.output);
  });
});

describe('duplicateElementCheck Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [1, 2],
      output: -1,
    };
    const result = compareNumbers(testOne.input[0], testOne.input[1]);
    expect(result).toEqual(testOne.output);
  });
});
