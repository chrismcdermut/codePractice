const Stack = require('../../dataStructures/Stack/Stack');

function closerValidator(codeString) {
  const openersClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);

  const openersStack = new Stack();

  for (let i = 0; i < codeString.length; i++) {
    const char = codeString[i];

    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (openersStack.items.length === 0) {
        return false;
      }
      const lastOpener = openersStack.pop();
      if (openersClosers[lastOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.items.length === 0;
}

module.exports = closerValidator;
