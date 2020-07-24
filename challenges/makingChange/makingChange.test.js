const makingChange = require('./makingChange');

const testOne = {
  input1: 4,
  input2: [1, 2, 3],
  output: 4,
};

describe('makingChange Test', () => {
  test('testOne', () => {
    const result = makingChange(testOne.input1, testOne.input2);
    expect(result).toEqual(testOne.output);
  });
});
