const GraphObject = require('./GraphObject');

const testOne = {
  input: '',
  output: '',
};

xdescribe('GraphObject Test', () => {
  test('testOne', () => {
    const result = new GraphObject(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
