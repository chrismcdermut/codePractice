const arrayDuplicates = require('./arrayDuplicates');

describe('arrayDuplicates Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10],
      output: 3,
    };

    const result = arrayDuplicates(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testOne = {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10],
      output: 8,
    };

    const result = arrayDuplicates(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
