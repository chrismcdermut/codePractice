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
  output: [1, 1, 3, 4, 6, 10, 11, 15],
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

xdescribe('mergeArraysClean Test', () => {
  console.log('typeof mergeArraysClean');
  console.log(typeof mergeArraysClean);
  test('testOne', () => {
    const result = mergeArraysClean(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = mergeArraysClean(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const result = mergeArraysClean(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const result = mergeArraysClean(testFour.input);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const result = mergeArraysClean(testFive.input);
    expect(result).toEqual(testFive.output);
  });
});
