const arrayRotateLeft = require('./arrayRotateLeft');

const testOne = {
  input: [1, 2, 3, 4, 5],
  shift: 4,
  output: [5, 1, 2, 3, 4],
};

xdescribe('arrayRotateLeft Test Suite', () => {
  test(`${testOne.input} palindrome test`, () => {
    const result = arrayRotateLeft(testOne.input, testOne.shift);
    expect(result).toEqual(testOne.output);
  });
});
