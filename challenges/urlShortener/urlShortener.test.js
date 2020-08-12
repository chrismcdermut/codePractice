const { getRandom, URLShortener } = require('./URLShortener');

describe('getRandom Test', () => {
  test('testOne', () => {
    const floor = 1;
    const ceiling = 10;
    const result = getRandom(floor, ceiling);
    expect(result).toBeGreaterThan(floor);
    expect(result).toBeLessThan(ceiling);
  });
});

describe('URLShortener.constructBase62Map Test', () => {
  const testOne = {
    input: '',
    output: new Map([
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9],
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

  xtest('testThree', () => {
    const testThree = {
      input: '',
      output: '',
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.baseConversion(testThree.input);
    expect(result).toEqual(testThree.output);
  });
});

describe('URLShortener.convertIDToSlug Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [2, 1],
      output: [2, 1],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.convertIDToSlug(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input: [2, 3, 38],
      output: [2, 3, 'C'],
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.convertIDToSlug(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  xtest('testThree', () => {
    const testThree = {
      input: '',
      output: '',
    };
    const URLShortenerInstance = new URLShortener(0);
    const result = URLShortenerInstance.baseConversion(testThree.input);
    expect(result).toEqual(testThree.output);
  });
});
