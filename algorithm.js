/* eslint-disable */
// TODO: enable linting

const string = 'toyotaLandCruiser';
const longString = 'I am studying so hard';

// using array functionality
function reverseString(str) {
  const splitString = str.split('');
  const reversedString = splitString.reverse();
  const newString = reversedString.join('');
  console.log(newString);
  return newString;
}
reverseString(longString);
reverseString(string);

function findLongestWord(str) {
  const splitString = str.split(' ');
  let longestWord = null;
  for (let i = 0; i < splitString.length; i += 1) {
    if (splitString[i].length > longestWord.length) {
      longestWord = splitString[i];
    }
  }
}

findLongestWord(longString);
