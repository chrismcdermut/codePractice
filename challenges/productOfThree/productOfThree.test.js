const productOfThree = require('./productOfThree');

const testOne = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  output: 504,
};

const testOneA = {
  input: [-100, 2, 3, 4, -5, 6, 7, 8, 9],
  output: 4500,
};

const testOneB = {
  input: [-100, 2],
};

xdescribe('productOfThree Test', () => {
  test('testOne', () => {
    const result = productOfThree(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testOneA', () => {
    const result = productOfThree(testOneA.input);
    expect(result).toEqual(testOneA.output);
  });

  test('testOneB', () => {
    expect(productOfThree(testOneB.input)).toThrow();
  });
});
