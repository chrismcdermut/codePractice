const _ = require('lodash');

const minorWords = new Set(['a', 'an', 'and', 'as', 'as', 'at',
  'but', 'by', 'for', 'in', 'the']);

const endingMarkers = new Set([':']);

// modifiedSplitString[i-1](check if previousString has colon at end )
// checkingFunction
// transformationFunction
// checkForEndingColon

function checkForEndingWord(stringElement) {
  const stringElementArray = stringElement.split('');
  const isHyphen = stringElement === '-';
  const endsWithColon = endingMarkers.has(stringElementArray[stringElementArray.length - 1]);

  return (isHyphen || endsWithColon);
}

function transformString(string) {
  // break the string into words
  // check the casing of the words, see if it's appropriate,
  // if it is, leave it, if not change it
  const splitString = string.split(' ');
  const modifiedSplitString = splitString;

  const finalStringArray = modifiedSplitString.map((element, i) => {
    let modifiedElement;

    const atBeginning = (i === 0 || checkForEndingWord(modifiedSplitString[i - 1]));

    if (atBeginning) {
      modifiedElement = _.capitalize(element); // ignore if it's capital? coudl be an optimization
    } else {
      // const checkingElement = element.toLowerCase();
      modifiedElement = element.toLowerCase();
      if (!minorWords.has(modifiedElement)) { // we want this to be lowerCase
        modifiedElement = _.capitalize(modifiedElement);
      }
    }
    return modifiedElement;
  });
  return finalStringArray.join(' ');
}

function stringCasing(examineString) {
  // else transform it and return it
  // if examineString is in proper casing, return null
  const modifiedString = transformString(examineString);
  const answer = examineString === modifiedString ? null : modifiedString;
  return answer;
}

module.exports = {
  checkForEndingWord, transformString, stringCasing,
};
