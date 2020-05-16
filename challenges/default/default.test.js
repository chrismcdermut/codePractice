const defaultSolution = require('./defaultSolution');

const testOne = {
  input: '',
  output: '',
};

describe('defaultSolution Test', () => {
  test('testOne', () => {
    const result = defaultSolution(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
