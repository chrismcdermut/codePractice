function openParentheses(string, openParensIndex) {
  let openParensNumber = 0;
  for (let i = openParensIndex + 1; i < string.length; i++) {
    const char = string[i]; // Cleaner to make this a variable
    if (char === '(') {
      openParensNumber += 1;
    } else if (char === ')') {
      if (openParensNumber === 0) { return i; }
      openParensNumber -= 1;
    }
  }
  throw new Error('No closing parens womp womp');
}

module.exports = openParentheses;
