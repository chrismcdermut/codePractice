const {
  productOfAllOthers, productOfAllOthersBest, productOfAllCleanest,
} = require('./productOfAll');

const testOne = {
  input: [1, 2, 6, 5, 9],
  output: [540, 270, 90, 108, 60],
};

const testTwo = {
  input: [1, 7, 3, 4],
  output: [84, 12, 28, 21],
};

describe('productOfAllOthers Test', () => {
  test('testOne', () => {
    const result = productOfAllOthers(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = productOfAllOthers(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('productOfAllOthersBest Test', () => {
  test('testOne', () => {
    const result = productOfAllOthersBest(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = productOfAllOthersBest(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('productOfAllCleanest Test', () => {
  test('testOne', () => {
    const result = productOfAllCleanest(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = productOfAllCleanest(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});
