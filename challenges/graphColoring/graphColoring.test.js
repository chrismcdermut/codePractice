const graphColoring = require('./graphColoring');

const testOne = {
  input: '',
  output: '',
};

xdescribe('graphColoring Test', () => {
  test('testOne', () => {
    const result = graphColoring(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
