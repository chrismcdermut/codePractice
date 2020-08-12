function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// function redirect(request) {
//   const destination = DB.getLinkDestination(request.path);
//   return response(302, destination);
// }

class urlShortener {
  constructor() {
    this.currentRandomSlugId = 0;
    this.slugList = new Set([]);
    this.base62Alphabet = new Map([]);
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
        this.base62Map.set(i, i);
      }
      if (i >= 10 && i <= 36) {
        this.base62Map.set(i, (i + 10).toString(36));
      }
      if (i >= 36 && i < 62) {
        this.base62Map.set(i, (i + 10).toString(36).toUpperCase());
      }
    }
    console.log('n');
    console.log(this.base62Map);
  }

  baseConversion(newId, base62Map) {
    // convert each digit to ID
    console.log('this.currentRandomSlugId');
    console.log(this.currentRandomSlugId);
    console.log('newId');
    console.log(newId);
    console.log('base62Map');
    console.log(base62Map);
  }

  checkSlugExists(slug) {
    return this.slugList.has(slug);
  }

  generateRandomSlug() {
    let slug = '';
    while (true) {
      const newId = this.currentRandomSlugId++;
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

module.exports = { getRandom, urlShortener };
