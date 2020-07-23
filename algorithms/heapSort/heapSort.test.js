const { heapSort, runHeapSort } = require('./heapSort');

const testOne = {
  input: [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34],
  output: [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91],
};

const testTwo = {
  input: [3, 0, 2, 5, -1, 4, 1],
  output: [-1, 0, 1, 2, 3, 4, 5],
};

describe('heapSort Test', () => {
  test('testOne', () => {
    const result = heapSort(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = heapSort(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('runHeapSort Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    // TODO: make this take arguments
    runHeapSort();
    const answer = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});
