// ///////////MY SOLUTION/////////////
function reverseWords(message) {
  const finalMessage = [];
  let tempWord = [];
  // make the new word until space than switch area in the array
  for (let i = 0; i < message.length; i += 1) {
    if (i === message.length - 1) {
      tempWord.push(message[i]);
      finalMessage.unshift(...tempWord);
      continue;
    }
    if (message[i] !== ' ') {
      tempWord.push(message[i]);
      continue;
    }
    finalMessage.unshift(...tempWord);
    finalMessage.unshift(' ');
    tempWord = [];
  }
  return finalMessage;
}

// /////INTERVIEW CAKE + MY APPROACH///////
function reverseCharactersSolo(charactersArg) {
  const characters = charactersArg;
  let leftIndex = 0;
  let rightIndex = characters.length - 1;

  while (leftIndex < rightIndex) {
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
  return characters;
}

function reversePhrase(message) {
  function reverseCharacters(charactersArg, leftIndexArg, rightIndexArg) {
    const characters = charactersArg;
    let leftIndex = leftIndexArg;
    let rightIndex = rightIndexArg;

    while (leftIndex < rightIndex) {
      const temp = characters[leftIndex];
      characters[leftIndex] = characters[rightIndex];
      characters[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }

  reverseCharacters(message, 0, message.length - 1);

  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i += 1) {
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }
  return message;
}

module.exports = { reversePhrase, reverseWords, reverseCharactersSolo };

// ///////////NODE SCRIPT/////////////

module.exports.reverseWords2 = function () {
  const message = [
    'c',
    'a',
    'k',
    'e',
    ' ',
    'p',
    'o',
    'u',
    'n',
    'd',
    ' ',
    's',
    't',
    'e',
    'a',
    'l',
  ];
  const finalMessage = [];
  let tempWord = [];
  // make the new word until space than switch area in the array
  for (let i = 0; i < message.length; i += 1) {
    if (i === message.length - 1) {
      tempWord.push(message[i]);
      finalMessage.unshift(...tempWord);
      continue;
    }
    if (message[i] !== ' ') {
      tempWord.push(message[i]);
      continue;
    }
    finalMessage.unshift(...tempWord);
    finalMessage.unshift(' ');
    tempWord = [];
    // make a word until space
    // put word in first place of array
    // put space in
  }
  return finalMessage;
};
