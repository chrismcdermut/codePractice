const recursiveStrings = require('./recursiveStrings');

const testOne = {
  input: 'cat',
  output: new Set(['tac', 'atc', 'act', 'tca', 'cta', 'cat']),
};

describe('recursiveStrings Test', () => {
  test('testOne', () => {
    const result = recursiveStrings(testOne.input);
    console.log('testOne.output');
    console.log(testOne.output);
    console.log('result');
    console.log(result);
    expect(result).toEqual(testOne.output);
  });
});
