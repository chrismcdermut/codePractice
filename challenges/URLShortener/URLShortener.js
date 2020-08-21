function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// TODO: implement and test this
// function redirect(request) {
//   const destination = DB.getLinkDestination(request.path);
//   return response(302, destination);
// }
//
// TODO: implement and test this
//   function shortlink(request) {
//   if (request.method !== 'POST') {
//     return response(501); // HTTP 501 NOT IMPLEMENTED
//   }
//
//   const destination = request.data.destination;
//   let slug = request.data.slug;
//
//   // If they did not include a slug, make them one
//   if (typeof slug === 'undefined') {
//     slug = generateRandomSlug();
//   }
//
//   DB.insertLink(slug, destination);
//
//   const responseBody = JSON.stringify({ slug });
//   return response(200, responseBody);
// }

class URLShortener {
  constructor(startId) {
    this.currentRandomSlugId = startId;
    this.slugList = new Set([]);
    this.base62Alphabet = new Map([]);
    this.alphabetSet = new Set();
    this.base = 62;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.numChars = 7;
    this.constructBase62Map();
  }

  constructBase62Map() {
    for (let i = 0; i < 62; i++) {
      if (i < 10) {
        this.base62Alphabet.set(i, i.toString());
      }
      if (i >= 10 && i <= 36) {
        this.base62Alphabet.set(i, (i).toString(36));
      }
      if (i >= 36 && i < 62) {
        this.base62Alphabet.set(i, (i - 26).toString(36).toUpperCase());
      }
    }
    return this.base62Alphabet;
  }

  constructAlphabetSet() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    [...alphabet].forEach((item) => {
      this.alphabetSet.add(item);
    });

    return this.alphabetSet;
  }

  baseConversion(newId) {
    const convertedNumberStack = [];
    const { base } = this;
    let highestPlace = 0;

    while ((newId / base ** highestPlace) > 1) {
      if ((newId / base ** (highestPlace + 1)) < 1) {
        break;
      }
      highestPlace++;
    }

    let remainder = newId;
    for (let i = highestPlace; i > -1; i--) {
      const highestDenominator = Math.floor(remainder / (base ** i));
      convertedNumberStack.push(highestDenominator);
      remainder %= (base ** i);
    }
    return convertedNumberStack;
  }

  convertIDToSlug(ID) {
    let slugID = [];
    slugID = ID.map((item) => this.base62Alphabet.get(item));
    return slugID;
  }

  checkSlugExists(slug) {
    return this.slugList.has(slug);
  }

  addSlug(slug) {
    this.slugList.add(slug);
  }

  generateRandomSlugByID() {
    let slug = '';
    while (true) {
      const newId = this.currentRandomSlugId++;
      slug = this.baseConversion(newId, this.base62Alphabet);

      //     // Make sure the slug isn't already used
      //     // if slug Exists, break
      // if (!DB.checkSlugExists(slug)) {
      //   break;
      // }

      if (!this.slugList.has(slug)) {
        break;
      }
    }

    return slug;
  }

  generateRandomSlug() {
    const { alphabet } = this;
    const { numChars } = this;
    let result = '';

    for (let i = 0; i < numChars; i++) {
      const nextCharacter = alphabet[getRandom(0, alphabet.length - 1)];
      result += nextCharacter;
    }

    return result;
  }

// TODO: implement this
  // convertSlugToNumber() {
  //
  // }
}

module.exports = { getRandom, URLShortener };
