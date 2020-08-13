const stringCasing = require('./stringCasing');

const testOne = {
  input: '',
  output: '',
};

describe('stringCasing Test', () => {
  test('testOne', () => {
    const result = stringCasing(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
