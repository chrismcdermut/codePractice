const missingArrayElement = require('./missingArrayElementSolution');

const testOne = {
  highestNumber: 10,
  input: [1, 2, 3, 4, 5, 6, 7, 8, 10],
  output: 9,
};

const testTwo = {
  highestNumber: 10,
  input: [1, 3, 4, 5, 6, 7, 8, 9, 10],
  output: 2,
};

const testThree = {
  highestNumber: 10,
  input: [1, 2, 3, 4, 5, 6, 8, 9, 10],
  output: 7,
};

const testFour = {
  highestNumber: 20,
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  output: 20,
};

const testFive = {
  highestNumber: 20,
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20],
  output: 14,
};

const testSix = {
  highestNumber: 5,
  input: [1, 2, 4, 5],
  output: 3,
};

const testSeven = {
  highestNumber: 3,
  input: [1, 2],
  output: 3,
};

const testEight = {
  highestNumber: 3,
  input: [1, 3],
  output: 2,
};

const testNine = {
  highestNumber: 5,
  input: [1, 2, 3, 5],
  output: 4,
};

xdescribe('Missing array element test suite', () => {
  test(`${testOne.input} test`, () => {
    const result = missingArrayElement(testOne.input, testOne.highestNumber);
    expect(result).toBe(testOne.output);
  });

  test(`${testTwo.input} test`, () => {
    const result = missingArrayElement(testTwo.input, testTwo.highestNumber);
    expect(result).toBe(testTwo.output);
  });

  test(`${testThree.input} test`, () => {
    const result = missingArrayElement(
      testThree.input,
      testThree.highestNumber,
    );
    expect(result).toBe(testThree.output);
  });

  test(`${testFour.input} test`, () => {
    const result = missingArrayElement(testFour.input, testFour.highestNumber);
    expect(result).toBe(testFour.output);
  });

  test(`${testFive.input} test`, () => {
    const result = missingArrayElement(testFive.input, testFive.highestNumber);
    expect(result).toBe(testFive.output);
  });

  test(`${testSix.input} test`, () => {
    const result = missingArrayElement(testSix.input, testSix.highestNumber);
    expect(result).toBe(testSix.output);
  });

  test(`${testSeven.input} test`, () => {
    const result = missingArrayElement(
      testSeven.input,
      testSeven.highestNumber,
    );
    expect(result).toBe(testSeven.output);
  });

  test(`${testEight.input} test`, () => {
    const result = missingArrayElement(
      testEight.input,
      testEight.highestNumber,
    );
    expect(result).toBe(testEight.output);
  });

  test(`${testNine.input} test`, () => {
    const result = missingArrayElement(testNine.input, testNine.highestNumber);
    expect(result).toBe(testNine.output);
  });
});
