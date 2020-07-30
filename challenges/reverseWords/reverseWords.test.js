const {
  runReverseWords, reverseWords, reversePhrase, reverseCharactersSolo,
} = require('./reverseWords');

const testOne = {
  input: [
    'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l',
  ],
  output: [
    's', 't', 'e', 'a', 'l', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 'c', 'a', 'k', 'e',
  ],
};

const testTwo = {
  input: [
    'l', 'a', 'n', 'd', 'e', 'd', ' ', 'h', 'a', 's', ' ', 'e', 'a', 'g', 'l', 'e', ' ', 't', 'h', 'e',
  ],
  output: [
    't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ', 'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd',
  ],
};

const testThree = {
  input: [
    'h', 'e', 'a', 'r', 'i', 'n', 'g',
  ],
  output: [
    'g', 'n', 'i', 'r', 'a', 'e', 'h',
  ],
};

const testFour = {
  input: 'hearing',
  output: 'gniraeh',
};

describe('reverseWords Test', () => {
  test('testOne', () => {
    const result = reverseWords(testOne.input);
    expect(result).toStrictEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = reverseWords(testTwo.input);
    expect(result).toStrictEqual(testTwo.output);
  });
});

describe('reversePhrase Test', () => {
  test('testOne', () => {
    const result = reversePhrase(testOne.input);
    expect(result).toStrictEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = reversePhrase(testTwo.input);
    expect(result).toStrictEqual(testTwo.output);
  });
});

describe('reverseCharactersSolo Test', () => {
  test('testThree', () => {
    const result = reverseCharactersSolo(testThree.input);
    expect(result).toStrictEqual(testThree.output);
  });

  xtest('testFour', () => {
    const result = reverseCharactersSolo(testFour.input);
    expect(result).toStrictEqual(testFour.output);
  });
});

describe('runReverseWords Test', () => {
  test('testThree', () => {
    console.log = jest.fn(); // eslint-disable-line no-console
    // TODO: make this take arguments
    runReverseWords();
    const answer = [
      'c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l',
    ];
    expect(console.log).toHaveBeenCalledWith(answer); // eslint-disable-line no-console
  });
});
