const missingIntTest = require('./missingIntSolution');

const testOne = {
  input: [1, 3, 6, 4, 1, 2],
  output: 5,
};

const testTwo = {
  input: [1, 2, 3],
  output: 4,
};

const testThree = {
  input: [-1, -3],
  output: 1,
};

const testFour = {
  input: [-1, -3, -2, 0, 2],
  output: 1,
};

const testFive = {
  input: [0, 1, 1, 2, 3, 4, 600],
  output: 5,
};

const testSix = {
  input: [3, 4, 600],
  output: 1,
};

const testSeven = {
  input: [600, 4, 5, 2],
  output: 1,
};

const testEight = {
  input: [600, 0, 1, 1, 2, 3, 4],
  output: 5,
};

const testNine = {
  input: [1, 1, 2, 3, 4, 6],
  output: 5,
};

const testTen = {
  input: [0, 0, 0, 2, 3, 4],
  output: 1,
};

const testEleven = {
  input: [0, 0, 1, 2, 3, 4, 5, 6, 7],
  output: 8,
};

describe('Missing int module', () => {
  test(`${testOne.input} test`, () => {
    const result = missingIntTest(testOne.input);
    expect(result).toBe(testOne.output);
  });

  test(`${testTwo.input} test`, () => {
    const result = missingIntTest(testTwo.input);
    expect(result).toBe(testTwo.output);
  });

  test(`${testThree.input} test`, () => {
    const result = missingIntTest(testThree.input);
    expect(result).toBe(testThree.output);
  });

  test(`${testFour.input} test`, () => {
    const result = missingIntTest(testFour.input);
    expect(result).toBe(testFour.output);
  });

  test(`${testFive.input} test`, () => {
    const result = missingIntTest(testFive.input);
    expect(result).toBe(testFive.output);
  });

  test(`${testSix.input} test`, () => {
    const result = missingIntTest(testSix.input);
    expect(result).toBe(testSix.output);
  });

  test(`${testSeven.input} test`, () => {
    const result = missingIntTest(testSeven.input);
    expect(result).toBe(testSeven.output);
  });

  test(`${testEight.input} test`, () => {
    const result = missingIntTest(testEight.input);
    expect(result).toBe(testEight.output);
  });

  test(`${testNine.input} test`, () => {
    const result = missingIntTest(testNine.input);
    expect(result).toBe(testNine.output);
  });

  test(`${testTen.input} test`, () => {
    const result = missingIntTest(testTen.input);
    expect(result).toBe(testTen.output);
  });

  test(`${testEleven.input} test`, () => {
    const result = missingIntTest(testEleven.input);
    expect(result).toBe(testEleven.output);
  });
});
