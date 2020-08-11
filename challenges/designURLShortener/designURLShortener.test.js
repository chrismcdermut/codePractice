const designURLShortener = require('./designURLShortener');

const testOne = {
  input: '',
  output: '',
};

xdescribe('designURLShortener Test', () => {
  xtest('testOne', () => {
    const result = designURLShortener(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
