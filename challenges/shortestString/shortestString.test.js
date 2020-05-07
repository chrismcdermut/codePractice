const {
  removeSection,
  condenseString,
  shortestString,
} = require('./shortestString');

const test1 = {
  input: ['ABBBCCDDCCC', 3],
  bestRemovedSection: 'DDC',
  condensedString: 'A3B2C2D3C',
  modifiedString: 'ABBBCCCC',
  condensedModifiedString: 'A3B4C',
  output: 5,
};

const test2 = {
  input: ['AAAAAAAAAAABXXAAAAAAAAAA', 3],
  bestRemovedSection: 'BXX',
  condensedString: '11AB2X10A',
  modifiedString: 'AAAAAAAAAAAAAAAAAAAAA',
  condensedModifiedString: '21A',
  output: 3,
};

const test3 = {
  input: ['ABCDDDEFG', 2],
  bestRemovedSection: 'EF',
  condensedString: 'ABC3DEFG',
  modifiedString: 'ABCDDDG',
  condensedModifiedString: 'ABC3DG',
  output: 6,
};

const test4 = {
  input: 'AAA',
  output: '3A',
};

const test5 = {
  input: 'AAABBB',
  output: '3A3B',
};

xdescribe('shortestString condenseString test', () => {
  test('test1 condenseString', () => {
    const result = condenseString(test1.input[0]);
    expect(result).toEqual(test1.condensedString);
  });

  test('test2 condenseString', () => {
    const result = condenseString(test2.input[0]);
    expect(result).toEqual(test2.condensedString);
  });

  test('test3 condenseString', () => {
    const result = condenseString(test3.input[0]);
    expect(result).toEqual(test3.condensedString);
  });

  test('test4 condenseString', () => {
    const result = condenseString(test4.input);
    expect(result).toEqual(test4.output);
  });

  test('test5 condenseString', () => {
    const result = condenseString(test5.input);
    expect(result).toEqual(test5.output);
  });
});

describe('shortestString removeSection Test', () => {
  test('test1 removeSection', () => {
    const result = removeSection(test1.input[0], test1.input[1]);
    expect(result).toEqual(test1.modifiedString);
  });

  test('test2 removeSection', () => {
    const result = removeSection(test2.input[0], test2.input[1]);
    expect(result).toEqual(test2.modifiedString);
  });

  test('test3 removeSection', () => {
    const result = removeSection(test3.input[0], test3.input[1]);
    expect(result).toEqual(test3.modifiedString);
  });
});

xdescribe('shortestString shortestPossibleLength Test', () => {
  test('test1', () => {
    const result = shortestString(test1.input[0], test1.input[1]);
    expect(result).toEqual(test1.output);
  });

  test('test2', () => {
    const result = shortestString(test2.input[0], test2.input[1]);
    expect(result).toEqual(test2.output);
  });

  test('test3', () => {
    const result = shortestString(test3.input[0], test3.input[1]);
    expect(result).toEqual(test3.output);
  });
});
