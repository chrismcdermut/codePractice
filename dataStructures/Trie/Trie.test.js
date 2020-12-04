const Trie = require('./Trie');

describe('Trie Test', () => {
  test('testOne', () => {
    const StringTrie = new Trie();
    const testOne = {
      input: 'dog.com',
      output: true,
    };
    const result = StringTrie.addWord(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const StringTrie = new Trie();
    const testTwo = {
      input: 'dog.com',
      output: false,
    };

    StringTrie.addWord(testTwo.input);
    const result = StringTrie.addWord(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
