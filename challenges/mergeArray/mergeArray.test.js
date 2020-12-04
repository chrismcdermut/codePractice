const { mergeArraysClean, mergeArray } = require('./mergeArray');

const testOne = {
  input: [
    [3, 4, 6, 10, 11, 15],
    [1, 5, 8, 12, 14, 19],
  ],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19],
};

const testTwo = {
  input: [
    [3, 4, 6, 10, 11, 15],
    [1, 5, 8],
  ],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 15],
};

const testThree = {
  input: [[3, 4, 6, 10, 11, 15], [1]],
  output: [1, 3, 4, 6, 10, 11, 15],
};

const testFour = {
  input: [[3, 4, 6, 10, 11, 15], []],
  output: [3, 4, 6, 10, 11, 15],
};

const testFive = {
  input: [[1, 4, 6, 10, 11, 15], [1]],
  output: [1, 1, 4, 6, 10, 11, 15],
};

const testSix = {
  input: [[1, 4, 6, 10, 11, 15], [1]],
  output: [1, 1, 4, 6, 10, 11, 15],
};

const testSeven = {
  input: [
    [3, 4, 6, 10, 11, 15],
    [1, 5, 8, 12, 14, 19],
  ],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19],
};

const testEight = {
  input: [
    [3, 4, 6, 10, 11, 15],
    [1, 5, 8],
  ],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 15],
};

const testNine = {
  input: [[3, 4, 6, 10, 11, 15], [1]],
  output: [1, 3, 4, 6, 10, 11, 15],
};

const testTen = {
  input: [[3, 4, 6, 10, 11, 15], []],
  output: [3, 4, 6, 10, 11, 15],
};

describe('mergeArray Test', () => {
  test('testOne', () => {
    const result = mergeArray(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = mergeArray(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const result = mergeArray(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const result = mergeArray(testFour.input);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const result = mergeArray(testFive.input);
    expect(result).toEqual(testFive.output);
  });
});

describe('mergeArraysClean Test', () => {
  test('testSix', () => {
    const result = mergeArraysClean(testSix.input);
    expect(result).toEqual(testSix.output);
  });

  test('testSeven', () => {
    const result = mergeArraysClean(testSeven.input);
    expect(result).toEqual(testSeven.output);
  });

  test('testEight', () => {
    const result = mergeArraysClean(testEight.input);
    expect(result).toEqual(testEight.output);
  });

  test('testNine', () => {
    const result = mergeArraysClean(testNine.input);
    expect(result).toEqual(testNine.output);
  });

  test('testTen', () => {
    const result = mergeArraysClean(testTen.input);
    expect(result).toEqual(testTen.output);
  });
});
