const bubbleSort = require('./bubbleSort');

const testOne = {
  input: [23, 4, 42, 15, 16, 8],
  output: [4, 8, 15, 16, 23, 42],
};

describe('bubbleSort Test', () => {
  test('testOne', () => {
    const result = bubbleSort(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
