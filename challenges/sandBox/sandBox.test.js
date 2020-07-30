const sandBox = require('./sandBox');

const testOne = {
  input: 'Hello world',
  output: 'Hello world',
};

describe('sandBox Test', () => {
  test('testOne', () => {
    console.log = jest.fn(); // eslint-disable-line no-console
    sandBox(testOne.input);
    expect(console.log).toHaveBeenCalledWith(testOne.output); // eslint-disable-line no-console
  });

  test('testTwo', () => {
    const result = sandBox(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
