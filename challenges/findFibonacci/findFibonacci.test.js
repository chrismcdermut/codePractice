const findFibonacci = require('./findFibonacci');

describe('findFibonacci Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 0,
      output: 0,
    };
    const result = findFibonacci(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 1,
      output: 1,
    };
    const result = findFibonacci(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input: -1,
    };
    expect(() => {
      findFibonacci(testThree.input);
    }).toThrow('Index was negative. No such thing as a negative index in a series.');
  });

  test('testFour', () => {
    const testFour = {
      input: 8,
      output: 21,
    };
    const result = findFibonacci(testFour.input);
    expect(result).toEqual(testFour.output);
  });
});
