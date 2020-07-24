const Memoization = require('./memoization');

describe('memoization Test', () => {
  const newFibCounter = new Memoization();

  test('testOne', () => {
    const testOne = {
      input: 5,
      output: 5,
    };

    const result = newFibCounter.fib(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: -1,
    };

    expect(() => {
      newFibCounter.fib(testTwo.input);
    }).toThrow('Index was negative. No such thing as a negative index in a series.');
  });
});
