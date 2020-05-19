const { mergeArrays } = require('./mergeArrays');

const testOne = {
  input: [
    [3, 4, 6, 10, 11, 15],
    [1, 5, 8, 12, 14, 19],
    [2, 13, 20, 21],
  ],
  output: [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 19, 20, 21],
};

const testTwo = {
  input: [
    [3, 4, 6, 10, 11, 15],
    [1, 5, 8],
    [2, 7, 9],
  ],
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15],
};

const testThree = {
  input: [[3, 4, 6, 10, 11, 15], [1], [5]],
  output: [1, 3, 4, 5, 6, 10, 11, 15],
};

const testFour = {
  input: [[3, 4, 6, 10, 11, 15], [], [1]],
  output: [1, 3, 4, 6, 10, 11, 15],
};

const testFive = {
  input: [[1, 4, 6, 10, 11, 15], [1]],
  output: [1, 1, 3, 4, 6, 10, 11, 15],
};

xdescribe('mergeArrays Test', () => {
  test('testOne', () => {
    const result = mergeArrays(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = mergeArrays(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const result = mergeArrays(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const result = mergeArrays(testFour.input);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const result = mergeArrays(testFive.input);
    expect(result).toEqual(testFive.output);
  });
});
