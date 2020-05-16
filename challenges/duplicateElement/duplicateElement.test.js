const duplicateElementCheck = require('./duplicateElement');

const testOne = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 1, 9, 10],
  output: 1,
};

const testOneA = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10],
  output: 1,
};

describe('duplicateElementCheck Test', () => {
  test('testOne', () => {
    const result = duplicateElementCheck(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testOneA', () => {
    const result = duplicateElementCheck(testOneA.input);
    expect(result).toEqual(testOneA.output);
  });
});