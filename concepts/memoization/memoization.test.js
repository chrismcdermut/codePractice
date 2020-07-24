const Memoization = require('./memoization');

const testOne = {
  input: 5,
  output: 5,
};

describe('memoization Test', () => {
  const newFibCounter = new Memoization();
  test('testOne', () => {
    const result = newFibCounter.fib(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
