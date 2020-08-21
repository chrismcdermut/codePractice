class Trie {
  constructor() {
    this.rootNode = {};
  }

  checkWordsExistence(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!Object.prototype.hasOwnProperty.call(currentNode, 'char')) {
        isNewWord = true;
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    if (!Object.prototype.hasOwnProperty.call(currentNode, 'End of Word')) {
      isNewWord = true;
      currentNode['End of Word'] = {};
    }

    return isNewWord;
  }

  addWord(word) {
    let currentNode = this.rootNode;
    let isNewWord = false;

    // Work downwards through the trie, adding nodes
    // as needed, and keeping track of whether we add
    // any nodes.
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!Object.prototype.hasOwnProperty.call(currentNode, 'char')) {
        isNewWord = true;
        currentNode[char] = {};
      }
      currentNode = currentNode[char];
    }

    // Explicitly mark the end of a word.
    // Otherwise, we might say a word is
    // present if it is a prefix of a different,
    // longer word that was added earlier.
    if (!Object.prototype.hasOwnProperty.call(currentNode, 'End of Word')) {
      isNewWord = true;
      currentNode['End of Word'] = {};
    }

    return isNewWord;
  }
}

module.exports = Trie;
