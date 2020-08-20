const { getRandom, URLShortener } = require('./URLShortener');

describe('getRandom Test', () => {
  test('testOne', () => {
    const floor = 1;
    const ceiling = 10;
    const result = getRandom(floor, ceiling);
    expect(result).toBeGreaterThanOrEqual(floor);
    expect(result).toBeLessThanOrEqual(ceiling);
  });
});

describe('URLShortener.constructBase62Map Test', () => {
  const testOne = {
    input: '',
    output: new Map([
      [0, '0'],
      [1, '1'],
      [2, '2'],
      [3, '3'],
      [4, '4'],
      [5, '5'],
      [6, '6'],
      [7, '7'],
      [8, '8'],
      [9, '9'],
      [10, 'a'],
      [11, 'b'],
      [12, 'c'],
      [13, 'd'],
      [14, 'e'],
      [15, 'f'],
      [16, 'g'],
      [17, 'h'],
      [18, 'i'],
      [19, 'j'],
      [20, 'k'],
      [21, 'l'],
      [22, 'm'],
      [23, 'n'],
      [24, 'o'],
      [25, 'p'],
      [26, 'q'],
      [27, 'r'],
      [28, 's'],
      [29, 't'],
      [30, 'u'],
      [31, 'v'],
      [32, 'w'],
      [33, 'x'],
      [34, 'y'],
      [35, 'z'],
      [36, 'A'],
      [37, 'B'],
      [38, 'C'],
      [39, 'D'],
      [40, 'E'],
      [41, 'F'],
      [42, 'G'],
      [43, 'H'],
      [44, 'I'],
      [45, 'J'],
      [46, 'K'],
      [47, 'L'],
      [48, 'M'],
      [49, 'N'],
      [50, 'O'],
      [51, 'P'],
      [52, 'Q'],
      [53, 'R'],
      [54, 'S'],
      [55, 'T'],
      [56, 'U'],
      [57, 'V'],
      [58, 'W'],
      [59, 'X'],
      [60, 'Y'],
      [61, 'Z'],
    ]),
  };

  test('testOne', () => {
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.constructBase62Map();
    expect(result).toEqual(testOne.output);
  });
});

describe('URLShortener.constructAlphabetSet Test', () => {
  const testOne = {
    input: '',
    output: new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
      'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
      '5', '6', '7', '8', '9']),
  };

  test('testOne', () => {
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.constructAlphabetSet();
    expect(result).toEqual(testOne.output);
  });
});

describe('URLShortener.baseConversion Test', () => {
  test('testOne', () => {
    const testOne = {
      input: 125,
      output: [2, 1],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.baseConversion(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: 7912,
      output: [2, 3, 38],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.baseConversion(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  xtest('testTwo', () => {
    const testTwo = {
      input: 7912,
      output: [2, 3, 38],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.baseConversion(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('URLShortener.convertIDToSlug Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [2, 1],
      output: ['2', '1'],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.convertIDToSlug(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: [2, 3, 38],
      output: ['2', '3', 'C'],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.convertIDToSlug(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('URLShortener.generateRandomSlug Test', () => {
  test('testOne', () => {
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.generateRandomSlug();

    expect(result.length).toEqual(7);
  });

  test('testTwo', () => {
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.generateRandomSlug();
    const resultArray = result.split('');
    const answerSet = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
      'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
      '5', '6', '7', '8', '9']);
    let allFine = true;
    resultArray.forEach((item) => {
      if (!answerSet.has(item)) {
        allFine = false;
      }
    });

    const expectedAnswer = true;
    expect(allFine).toEqual(expectedAnswer);
  });
});

describe('URLShortener.generateRandomSlugByID Test', () => {
  test('testOne', () => {
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.generateRandomSlugByID();
    const answer = 7;

    expect(result.length).toBeLessThanOrEqual(answer);
  });

  test('testTwo', () => {
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.generateRandomSlugByID();
    const answerSet = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
      'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',
      '5', '6', '7', '8', '9']);
    let allFine = true;
    result.forEach((item) => {
      if (!answerSet.has(item.toString())) {
        allFine = false;
      }
    });

    const expectedAnswer = true;
    expect(allFine).toEqual(expectedAnswer);
  });
});

describe('URLShortener.addSlug Test', () => {
  test('testOne', () => {
    const URLShortenerInstance = new URLShortener(0);
    URLShortenerInstance.addSlug('abcd');
    const result = URLShortenerInstance.slugList.has('abcd');
    const answer = true;

    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const URLShortenerInstance = new URLShortener(0);
    URLShortenerInstance.addSlug('abcd');
    const result = URLShortenerInstance.slugList.has('abcdef');
    const answer = false;

    expect(result).toEqual(answer);
  });
});

describe('URLShortener.checkSlugExists Test', () => {
  test('testOne', () => {
    const URLShortenerInstance = new URLShortener(0);
    URLShortenerInstance.addSlug('abcd');
    const result = URLShortenerInstance.checkSlugExists('abcd');
    const answer = true;

    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const URLShortenerInstance = new URLShortener(0);
    URLShortenerInstance.addSlug('abcd');
    const result = URLShortenerInstance.checkSlugExists('abcdef');
    const answer = false;

    expect(result).toEqual(answer);
  });
});
