function reverseString(str) {
  return str.split('').reverse().join('');
}

function palindromeCheck(stringArgument) {
  const string = stringArgument.toLowerCase();
  let isPalindrome;
  const reversedString = reverseString(string);

  if (string[0] !== string[-1]) {
    isPalindrome = false;
  }

  if (string === reversedString) {
    isPalindrome = true;
  }

  return isPalindrome;
}

module.exports = palindromeCheck;
