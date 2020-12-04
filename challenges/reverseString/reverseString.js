// using array functionality
function reverseString(str) {
  const splitString = str.split('');
  const reversedString = splitString.reverse();
  const newString = reversedString.join('');
  return newString;
}

module.exports = reverseString;
