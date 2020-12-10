const dataWork = require('./dataWork');

const testOne = {
  input: '',
  output: '',
};

describe('dataWork Test', () => {
  test('testOne', () => {
    const result = dataWork(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
