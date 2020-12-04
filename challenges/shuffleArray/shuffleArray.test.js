const { proShuffle, naiveShuffle } = require('./shuffleArray');

const testOne = {
  input: [1, 2, 3, 4, 5, 6, 7],
  length: 7,
};


describe('naiveShuffle Test', () => {
  test('testOne', () => {
    const result = naiveShuffle(testOne.input);
    expect(result.length).toEqual(testOne.length);
  });

  xtest('testTwo', () => {
    const result = naiveShuffle(testOne.input);
    expect(result).not.toEqual(testOne.output);
  });
});

describe('proShuffle Test', () => {
  test('testOne', () => {
    const result = proShuffle(testOne.input);
    expect(result.length).toEqual(testOne.length);
  });

  xtest('testTwo', () => {
    const result = proShuffle(testOne.input);
    expect(result).not.toEqual(testOne.output);
  });
});
