const superBalancedTreeCheck = require('./superBalancedTreeCheck');

const testOne = {
  input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  output: '',
};

xdescribe('superBalancedTreeCheck Test', () => {
  test('testOne', () => {
    const result = superBalancedTreeCheck(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
