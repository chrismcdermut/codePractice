class WordCloud {
  constructor(inputString) {
    this.wordsToCounts = new Map();
    this.populateWordsToCounts(inputString);
  }

  // eslint-disable-next-line class-methods-use-this
  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // eslint-disable-next-line class-methods-use-this
  isLetter(character) {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(character) >= 0;
  }

  populateWordsToCounts(inputString) {
    // Iterates over each character in the input string, splitting
    // words and passing them to this.addWordToMap()

    let currentWordStartIndex = 0;
    let currentWordLength = 0;

    for (let i = 0; i < inputString.length; i++) {
      const character = inputString.charAt(i);

      // If we reached the end of the string we check if the last
      // character is a letter and add the last word to our map
      if (i === inputString.length - 1) {
        if (this.isLetter(character)) {
          currentWordLength += 1;
        }
        if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex,
            currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
        }

        // If we reach a space or emdash we know we're at the end of a word
        // so we add it to our map and reset our current word
      } else if (character === ' ' || character === '\u2014') {
        if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex,
            currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }

        // We want to make sure we split on ellipses so if we get two periods in
        // a row we add the current word to our map and reset our current word
      } else if (character === '.') {
        if (i < inputString.length - 1 && inputString.charAt(i + 1) === '.') {
          if (currentWordLength > 0) {
            const word = inputString.slice(currentWordStartIndex,
              currentWordStartIndex + currentWordLength);
            this.addWordToMap(word);
            currentWordLength = 0;
          }
        }

        // If the character is a letter or an apostrophe, we add it to our current word
      } else if (this.isLetter(character) || character === '\'') {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength += 1;

        // If the character is a hyphen, we want to check if it's surrounded by letters
        // if it is, we add it to our current word
      } else if (character === '-') {
        if (i > 0 && this.isLetter(inputString.charAt(i - 1))
          && this.isLetter(inputString.charAt(i + 1))) {
          if (currentWordLength === 0) {
            currentWordStartIndex = i;
          }
          currentWordLength += 1;
        } else if (currentWordLength > 0) {
          const word = inputString.slice(currentWordStartIndex,
            currentWordStartIndex + currentWordLength);
          this.addWordToMap(word);
          currentWordLength = 0;
        }
      }
    }
  }

  addWordToMap(word) {
    let newCount;

    // If the word is already in the map we increment its count
    if (this.wordsToCounts.has(word)) {
      newCount = this.wordsToCounts.get(word) + 1;
      this.wordsToCounts.set(word, newCount);

      // If a lowercase version is in the map, we know our input word must be uppercase
      // but we only include uppercase words if they're always uppercase
      // so we just increment the lowercase version's count
    } else if (this.wordsToCounts.has(word.toLowerCase())) {
      newCount = this.wordsToCounts.get(word.toLowerCase()) + 1;
      this.wordsToCounts.set(word.toLowerCase(), newCount);

      // If an uppercase version is in the map, we know our input word must be lowercase.
      // since we only include uppercase words if they're always uppercase, we add the
      // lowercase version and give it the uppercase version's count
    } else if (this.wordsToCounts.has(this.capitalize(word))) {
      newCount = this.wordsToCounts.get(this.capitalize(word)) + 1;
      this.wordsToCounts.set(word, newCount);
      this.wordsToCounts.delete(this.capitalize(word));

      // Otherwise, the word is not in the map at all, lowercase or uppercase
      // so we add it to the map
    } else {
      this.wordsToCounts.set(word, 1);
    }
  }
}


module.exports = WordCloud;
