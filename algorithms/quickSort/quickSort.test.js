const { quickSort, runQuickSort } = require('./quickSort');

const testOne = {
  input: [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34],
  output: [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91],
};

describe('quickSort Test', () => {
  test('testOne', () => {
    const result = quickSort(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('runQuickSort Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    // TODO: make this take arguments
    runQuickSort();
    const answer = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});
