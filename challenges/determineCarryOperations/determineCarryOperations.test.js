const { findOrderOfMagnitude, convert, determineCarryOperations } = require('./determineCarryOperations');

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

describe('findOrderOfMagnitude', () => {
  test('testOne', () => {
    const testOne = {
      input: 1,
      output: 0,
    };
    const result = findOrderOfMagnitude(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 16,
      output: 1,
    };
    const result = findOrderOfMagnitude(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input: 788,
      output: 2,
    };
    const result = findOrderOfMagnitude(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const testFour = {
      input: 7896,
      output: 3,
    };
    const result = findOrderOfMagnitude(testFour.input);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const testFive = {
      input: 14000000000,
      output: 10,
    };
    const result = findOrderOfMagnitude(testFive.input);
    expect(result).toEqual(testFive.output);
  });
});

describe('convert', () => {
  test('testOne', () => {
    const testOne = {
      input: 1,
      output: 1,
    };
    const result = convert(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 16,
      output: 10,
    };
    const result = convert(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input: 788,
      output: 100,
    };
    const result = convert(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const testFour = {
      input: 7896,
      output: 1000,
    };
    const result = convert(testFour.input);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const testFive = {
      input: 14000000000,
      output: 10000000000,
    };
    const result = convert(testFive.input);
    expect(result).toEqual(testFive.output);
  });
});
