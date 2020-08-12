const urlShortener = require('./urlShortener');

const testOne = {
  input: '',
  output: '',
};

describe('urlShortener Test', () => {
  test('testOne', () => {
    const result = urlShortener(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
