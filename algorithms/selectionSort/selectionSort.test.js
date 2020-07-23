const { selectionSort, runSelectionSort } = require('./selectionSort');

const testOne = {
  input: [23, 4, 42, 8, 16, 15],
  output: [4, 8, 15, 16, 23, 42],
};

const testTwo = {
  input: [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34],
  output: [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91],
};


describe('selectionSort Test', () => {
  test('testOne', () => {
    const result = selectionSort(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = selectionSort(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('runSelectionSort Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    // TODO: make this take arguments
    runSelectionSort();
    const answer = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});
