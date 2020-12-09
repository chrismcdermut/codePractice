buildWordCloud Notes go here!

splitWords(inputString) {
  const words = [];

  let currentWordStartIndex = 0;
  let currentWordLength = 0;

  for (let i = 0; i < inputString.length; i++) {
    const character = inputString[i];

    if (isLetter(character)) {
      if (currentWordLength === 0) {
        currentWordStartIndex = i;
      }
      currentWordLength += 1;
    } else {
      const word = inputString.slice(
        currentWordStartIndex,
        currentWordStartIndex + currentWordLength,
      );
      words.push(word);
      currentWordLength = 0;
    }
  }

  return words;
}

addWordToMap(wordCountMap, word) {
  if (wordCountMap.has(word)) {
    wordCountMap.set(word, wordCountMap.get(word) + 1);
  } else {
    wordCountMap.set(word, 1);
  }
  return wordCountMap;
}

buildWordCloud(string) {
  let wordCloudMap = new Map();
  // const wordsArray = string.split(' ');
  const wordsArray = splitWords(string);

  for (let i = 0; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];
    // if (!wordCloudMap.has(wordsArray[i])) {
    //   wordCloudMap.set(wordsArray[i], 1);
    // } else {
    //   const newCount = wordCloudMap.get(wordsArray[i]) + 1;
    //   wordCloudMap.set(wordsArray[i], newCount);
    // }
    wordCloudMap = addWordToMap(wordCloudMap, currentWord);
  }

  console.log('wordCloudMap');
  console.log(wordCloudMap);
  return wordCloudMap;
}
