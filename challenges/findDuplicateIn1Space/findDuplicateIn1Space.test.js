const findDuplicateIn1Space = require('./findDuplicateIn1Space');

describe('findDuplicateIn1Space Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [3, 4, 2, 3, 1, 5],
      output: 3,
    };
    const result = findDuplicateIn1Space(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: [3, 1, 2, 2],
      output: 2,
    };
    const result = findDuplicateIn1Space(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input: [4, 3, 1, 1, 4],
      output: 4,
    };
    const result = findDuplicateIn1Space(testThree.input);
    expect(result).toEqual(testThree.output);
  });
});
