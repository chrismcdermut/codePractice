const WordCloud = require('./buildWordCloud');

describe('buildWordCloud Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.',
      output: new Map([
        ['After', 1],
        ['beating', 1],
        ['the', 2],
        ['eggs', 2],
        ['Dana', 1],
        ['read', 1],
        ['next', 1],
        ['step', 1],
        ['milk', 1],
        ['and', 2],
        ['then', 1],
        ['add', 2],
        ['flour', 1],
        ['sugar', 1],
      ]),
    };
    const wordCloud = new WordCloud(testOne.input);
    expect(wordCloud.wordsToCounts).toEqual(testOne.output);
  });

  test('testOne', () => {
    const testOne = {
      input: 'We came, we saw, we ate cake. Friends, Romans, countrymen! Let us eat cake. New tourists in New York often wait in long lines for cronuts.',
      output: new Map([
        ['came', 1],
        ['we', 3],
        ['saw', 1],
        ['ate', 1],
        ['cake', 2],
        ['Friends', 1],
        ['Romans', 1],
        ['countrymen', 1],
        ['Let', 1],
        ['us', 1],
        ['eat', 1],
        ['New', 2],
        ['tourists', 1],
        ['in', 2],
        ['York', 1],
        ['often', 1],
        ['wait', 1],
        ['long', 1],
        ['lines', 1],
        ['for', 1],
        ['cronuts', 1],
      ]),
    };
    const wordCloud = new WordCloud(testOne.input);
    expect(wordCloud.wordsToCounts).toEqual(testOne.output);
  });
});
