const reverseString = require('./reverseString');

const testOne = {
  input: 'toyotaLandCruiser',
  output: 'resiurCdnaLatoyot',
};

const testTwo = {
  input: 'I am studying so hard',
  output: 'drah os gniyduts ma I',
};

describe('reverseString Test', () => {
  test('testOne', () => {
    const result = reverseString(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = reverseString(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
