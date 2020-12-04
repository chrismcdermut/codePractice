const { stockProfit1, stockProfit } = require('./stockProfit');

const testOne = {
  input: [10, 7, 5, 8, 11, 9],
  output: 6,
};

const testOneA = {
  input: [10],
};

describe('stockProfit Test', () => {
  test('testOne', () => {
    const result = stockProfit(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('stockProfit1 Test', () => {
  test('testOne', () => {
    const result = stockProfit1(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testOneA', () => {
    expect(() => {
      stockProfit1(testOneA.input);
    }).toThrow('Getting a profit requires at least 2 prices');
  });
});
