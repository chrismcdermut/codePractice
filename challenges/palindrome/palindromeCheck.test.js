const palindromeCheck = require('./palindromeCheck');

// palindrome(“race car”) should return true
// palindrome(“not a palindrome”) should return false
// palindrome(“A man, a plan, a canal. Panama”) should return true
// palindrome(“never odd or even”) should return true
// palindrome(“nope”) should return false
// palindrome(“almostomla”) should return false
// palindrome(“My age is 0, 0 si ega ym.”) should return true
// palindrome(“1 eye for of 1 eye.”) should return false
// palindrome(“0_0 (: /-\ :) 0–0”) should return true

const testOne = {
  input: 'Anna',
  output: true,
};

const testTwo = {
  input: 'fee eef',
  output: true,
};

const testThree = {
  input: 'bicycle',
  output: false,
};

xdescribe('Palindrome Check test suite', () => {
  test(`${testOne.input} palindrome test`, () => {
    const result = palindromeCheck(testOne.input);
    expect(result).toBe(testOne.output);
  });

  test(`${testTwo.input} palindrome test`, () => {
    const result = palindromeCheck(testTwo.input);
    expect(result).toBe(testTwo.output);
  });

  test(`${testThree.input} palindrome test`, () => {
    const result = palindromeCheck(testThree.input);
    expect(result).toBe(testThree.output);
  });
});
