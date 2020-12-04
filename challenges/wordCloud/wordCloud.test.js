const { wordCloud, normalizeWord } = require('./wordCloud');

const testOne = {
  input: 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.',
  output: new Map([
    ['after', 1],
    ['beating', 1],
    ['the', 2],
    ['eggs', 2],
    ['dana', 1],
    ['read', 1],
    ['next', 1],
    ['step', 1],
    ['add', 2],
    ['milk', 1],
    ['and', 2],
    ['then', 1],
    ['flour', 1],
    ['sugar', 1],
  ]),
};

const testTwo = {
  input: 'After',
  output: 'after',
};

const testTwoA = {
  input: 'sugar.',
  output: 'sugar',
};

describe('wordCloud Test', () => {
  test('testOne', () => {
    const result = wordCloud(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('normalizeWord Test', () => {
  test('testTwo', () => {
    const result = normalizeWord(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  test('testTwoA', () => {
    const result = normalizeWord(testTwoA.input);
    expect(result).toEqual(testTwoA.output);
  });
});
