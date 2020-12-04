const findLongestWord = require('./findLongestWord');

const testOne = {
  input: 'toyota Land Cruiser',
  output: 'Cruiser',
};

const testTwo = {
  input: 'I am studying so hard',
  output: 'studying',
};

describe('findLongestWord Test', () => {
  test('testOne', () => {
    const result = findLongestWord(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = findLongestWord(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
