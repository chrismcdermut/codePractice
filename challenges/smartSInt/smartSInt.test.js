const smartSInt = require('./smartSInt');

describe('smartSInt Test', () => {
  test('testOne', () => {
    const testOne = {
      array1: [1, 2, 3, 4, 5, 5, 5, 6, 7],
      array2: [5, 5, 6, 7, 8, 9, 10],
      output: [5, 5, 6, 7],
    };
    const result = smartSInt(testOne.array1, testOne.array2);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      array1: [1, 2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 7],
      array2: [5, 5, 6, 7, 7, 7, 7, 8, 9, 10],
      output: [5, 5, 6, 7, 7, 7, 7],
    };
    const result = smartSInt(testTwo.array1, testTwo.array2);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      array1: [1, 2, 3, 3],
      array2: [1, 3, 3, 5, 6, 7, 8],
      output: [1, 3, 3],
    };
    const result = smartSInt(testThree.array1, testThree.array2);
    expect(result).toEqual(testThree.output);
  });
});
