const { checkForEndingWord, transformString, stringCasing } = require('./stringCasing');

describe('stringCasing Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 'a day in the life',
      output: 'A Day in the Life',
    };
    const result = stringCasing(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testOne = {
      input: 'A Day in the Life',
      output: null,
    };
    const result = stringCasing(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testThree', () => {
    const testOne = {
      input: 'a day IN the life',
      output: 'A Day in the Life',
    };
    const result = stringCasing(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testFour', () => {
    const testOne = {
      input: 'tuesday: a day in the 90s',
      output: 'Tuesday: A Day in the 90s',
    };
    const result = stringCasing(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('transformString Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 'a day in the life',
      output: 'A Day in the Life',
    };
    const result = transformString(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testOne = {
      input: 'A Day in the Life',
      output: 'A Day in the Life',
    };
    const result = transformString(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testThree', () => {
    const testOne = {
      input: 'a day IN the life',
      output: 'A Day in the Life',
    };
    const result = transformString(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testFour', () => {
    const testOne = {
      input: 'tuesday: a day in the 90s',
      output: 'Tuesday: A Day in the 90s',
    };
    const result = transformString(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('checkForEndingWord Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 'life',
      output: false,
    };
    const result = checkForEndingWord(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testOne = {
      input: 'tuesday:',
      output: true,
    };
    const result = checkForEndingWord(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testThree', () => {
    const testOne = {
      input: '-',
      output: true,
    };
    const result = checkForEndingWord(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testFour', () => {
    const testOne = {
      input: 'a',
      output: false,
    };
    const result = checkForEndingWord(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
