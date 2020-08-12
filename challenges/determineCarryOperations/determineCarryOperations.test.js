const { determineCarryOperations } = require('./determineCarryOperations');

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

  test('testThree', () => {
    const testThree = {
      input: [69, 59],
      output: 2,
    };
    const result = determineCarryOperations(testThree.input[0], testThree.input[1]);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const testFour = {
      input: [2, 4],
      output: 0,
    };
    const result = determineCarryOperations(testFour.input[0], testFour.input[1]);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const testFive = {
      input: [7, 14],
      output: 1,
    };
    const result = determineCarryOperations(testFive.input[0], testFive.input[1]);
    expect(result).toEqual(testFive.output);
  });

  // TODO::Is this correct?
  test('testSix', () => {
    const testSix = {
      input: [66666, 77777],
      output: 5,
    };
    const result = determineCarryOperations(testSix.input[0], testSix.input[1]);
    expect(result).toEqual(testSix.output);
  });
});
