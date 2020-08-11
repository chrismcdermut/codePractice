const determineCarryOperations = require('./determineCarryOperations');

describe('determineCarryOperations Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [55, 29],
      output: 1,
    };
    const result = determineCarryOperations(testOne.input[0], testOne.input[1]);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: [65, 55],
      output: 1,
    };
    const result = determineCarryOperations(testTwo.input[0], testTwo.input[1]);
    expect(result).toEqual(testTwo.output);
  });
});
