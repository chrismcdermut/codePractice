const openParentheses = require('./openParentheses');

describe('openParentheses Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.',
      firstParensLocale: 10,
      closingParensLocale: 79,
    };
    const result = openParentheses(testOne.input, testOne.firstParensLocale);
    expect(result).toEqual(testOne.closingParensLocale);
  });

  test('test', () => {
    const testOne = {
      input: 'Sometimes (when I nest them (my parentheticals) too much (like this (and this)) they get confusing.',
      firstParensLocale: 10,
      closingParensLocale: 79,
    };
    const answer = 'No closing parens womp womp';
    expect(() => {
      openParentheses(testOne.input, testOne.firstParensLocale);
    }).toThrow(answer);
  });
});
