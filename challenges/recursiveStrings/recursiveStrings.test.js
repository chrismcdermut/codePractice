const recursiveStrings = require('./recursiveStrings');

const testOne = {
  input: 'cat',
  output: new Set(['tac', 'atc', 'act', 'tca', 'cta', 'cat']),
};

describe('recursiveStrings Test', () => {
  test('testOne', () => {
    const result = recursiveStrings(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
