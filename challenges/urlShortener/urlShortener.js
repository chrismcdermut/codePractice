function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// function redirect(request) {
//   const destination = DB.getLinkDestination(request.path);
//   return response(302, destination);
// }

class URLShortener {
  constructor(startId) {
    this.currentRandomSlugId = startId;
    this.slugList = new Set([]);
    this.base62Alphabet = new Map([]);
    this.base = 62;
    this.constructBase62Map();
  }

  // designURLShortener(input) {
  //   console.log('input');
  //   console.log(input);
  // }
  //
  // function setUpBase62Conversion(){

  constructBase62Map() {
    for (let i = 0; i < 62; i++) {
      if (i < 10) {
        this.base62Alphabet.set(i, i);
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

  generateRandomSlug(chosenId) {
    let slug = '';
    while (true) {
      const newId = chosenId || this.currentRandomSlugId++;
      slug = this.baseConversion(newId, this.base62Alphabet);

      // Make sure the slug isn't already used
      // if slug Exists, break
      if (this.checkSlugExists(slug)) {
        break;
      }
    }
    return slug;
  }
}

module.exports = { getRandom, URLShortener };
