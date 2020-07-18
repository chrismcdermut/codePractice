const mergeSort = require('./mergeSort');

const testOne = {
  input: [23, 4, 42, 15, 16, 8, 3],
  output: [3, 4, 8, 15, 16, 23, 42],
};

const testTwo = {
  input: [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34],
  output: [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91],
};

describe('mergeSort Test', () => {
  test('testOne', () => {
    const result = mergeSort(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = mergeSort(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
