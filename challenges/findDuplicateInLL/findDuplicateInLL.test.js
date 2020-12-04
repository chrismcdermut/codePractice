const findDuplicateInLL = require('./findDuplicateInLL');

const testOne = {
  input: [3, 4, 2, 3, 1, 5],
  output: 3,
};

const testTwo = {
  input: [3, 1, 2, 2],
  output: 2,
};

describe('findDuplicateInLL Test', () => {
  test('testOne', () => {
    const result = findDuplicateInLL(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = findDuplicateInLL(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
