const closerValidator = require('./closerValidator');

describe('closerValidator Test', () => {
  test('testOne', () => {
    const testOne = {
      input: '{ [ ] ( ) }',
      output: true,
    };
    const result = closerValidator(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: '{ [ ( ] ) }',
      output: false,
    };
    const result = closerValidator(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input: '{ [ }',
      output: false,
    };
    const result = closerValidator(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const testFour = {
      input: '} [ }',
      output: false,
    };
    const result = closerValidator(testFour.input);
    expect(result).toEqual(testFour.output);
  });
});
