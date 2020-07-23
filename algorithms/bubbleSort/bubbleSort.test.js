const { bubbleSort, runBubbleSort } = require('./bubbleSort');

const testOne = {
  input: [23, 4, 42, 15, 16, 8],
  output: [4, 8, 15, 16, 23, 42],
};

const testTwo = {
  input: [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 89],
  output: [1, 2, 3, 4, 7, 11, 14, 16, 23, 56, 67, 89, 89],
};

describe('bubbleSort Test', () => {
  test('testOne', () => {
    const result = bubbleSort(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = bubbleSort(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('runBubbleSort Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    // TODO: make this take arguments
    runBubbleSort();
    const answer = [1, 2, 3, 4, 7, 11, 14, 16, 23, 56, 67, 89, 89];
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});
