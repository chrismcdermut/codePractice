const sandBox = require('./sandBox');

const testOne = {
  input: 'test',
  output: 'test',
};

xdescribe('sandBox Test', () => {
  test('testOne', () => {
    const result = sandBox(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
