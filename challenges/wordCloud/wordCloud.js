function normalizeWord(word) {
  const regexPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

  let newWord = '';
  newWord = word.replace(regexPunctuation, '').toLowerCase();
  return newWord;
}

function wordCloud(input) {
  const splitWords = input.split(' ');
  const wordCloudCounter = new Map();

  // go through splitWords, normalize them and add counter for them on a map
  splitWords.forEach((word) => {
    // normalize Word
    const normalizedWord = normalizeWord(word);
    if (!wordCloudCounter.has(normalizedWord)) {
      wordCloudCounter.set(normalizedWord, 0);
    }
    const newCount = wordCloudCounter.get(normalizedWord) + 1;
    wordCloudCounter.set(normalizedWord, newCount);
  });

  return wordCloudCounter;
}

module.exports = { wordCloud, normalizeWord };
