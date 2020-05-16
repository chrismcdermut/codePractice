const { permutationCanPalindrome1, permutationPalindrome1 } = require('./permutationPalindrome');

const testOne = {
  input: 'civic',
  output: true,
};

const testTwo = {
  input: 'ivicc',
  output: true,
};

const testThree = {
  input: 'civil',
  output: false,
};

const testFour = {
  input: 'livci',
  output: false,
};

describe('permutation can be Palindrome Test', () => {
  test('testOne', () => {
    const result = permutationCanPalindrome1(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = permutationCanPalindrome1(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const result = permutationCanPalindrome1(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const result = permutationCanPalindrome1(testFour.input);
    expect(result).toEqual(testFour.output);
  });
});

describe('permutation can be Palindrome Test1', () => {
  test('testOne', () => {
    const result = permutationPalindrome1(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = permutationPalindrome1(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const result = permutationPalindrome1(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const result = permutationPalindrome1(testFour.input);
    expect(result).toEqual(testFour.output);
  });
});
