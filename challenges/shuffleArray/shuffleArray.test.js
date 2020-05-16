const { proShuffle, naiveShuffle } = require('./shuffleArray');

const testOne = {
  input: '',
  output: '',
};

xdescribe('proShuffle Test', () => {
  xtest('testOne', () => {
    const result = proShuffle(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  xtest('testTwo', () => {
    const result = naiveShuffle(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
