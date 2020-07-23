const { binarySearch, runBinarySearch } = require('./binarySearch');

const testOne = {
  input: [4, 8, 15, 16, 23, 42],
  inputLookFor: 15,
  output: 2,
};

const testTwo = {
  input: [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91],
  inputLookFor: 67,
  output: 11,
};

describe('binarySearch Test', () => {
  test('testOne', () => {
    const result = binarySearch(testOne.input, testOne.inputLookFor);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = binarySearch(testTwo.input, testTwo.inputLookFor);
    expect(result).toEqual(testTwo.output);
  });
});

describe('runBinarySearch Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    runBinarySearch();
    const answer = 11;
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});
