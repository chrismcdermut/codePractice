const findTringularTwiceNumber = require('./findTringularTwiceNumber');

describe('findTringularTwiceNumber Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [1, 2, 3, 4, 5, 5],
      output: 5,
    };
    const result = findTringularTwiceNumber(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testOne = {
      input: [5],
    };
    expect(() => {
      findTringularTwiceNumber(testOne.input);
    }).toThrow('Finding duplicate requires at least two numbers');
  });
});
