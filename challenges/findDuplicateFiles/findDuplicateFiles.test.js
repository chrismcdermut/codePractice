const findDuplicateFiles = require('./findDuplicateFiles');

const testOne = {
  input: '',
  output: '',
};

describe('findDuplicateFiles Test', () => {
  test('testOne', () => {
    const result = findDuplicateFiles(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
