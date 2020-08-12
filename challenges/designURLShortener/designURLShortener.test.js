const designURLShortener = require('./designURLShortener');

const testOne = {
  input: '',
  output: '',
};

describe('designURLShortener Test', () => {
  test('testOne', () => {
    const result = designURLShortener(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
