const defaultSolution = require('./defaultSolution');

const testOne = {
  input: '',
  output: '',
};

xdescribe('defaultSolution Test', () => {
  xtest('testOne', () => {
    const result = defaultSolution(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
