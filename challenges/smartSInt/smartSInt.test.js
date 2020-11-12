const smartSInt = require('./smartSInt');

const testOne = {
  array1: [1, 2, 3, 4, 5, 5, 5, 6, 7],
  array2: [5, 5, 6, 7, 8, 9, 10],
  output: [5, 5, 6, 7],
};

describe('smartSInt Test', () => {
  test('testOne', () => {
    const result = smartSInt(testOne.array1, testOne.array2);
    expect(result).toEqual(testOne.output);
  });
});
