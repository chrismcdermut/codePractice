const { jumpToZero } = require('./arrayJumping');

const testOne = {
  input: [2, 4, 1, 0, 5],
  start: 3,
  output: true,
};

const testTwo = {
  input: [2, 4, 1, 0, 5, 4, 3, 1, 5, 1, 3],
  start: 4,
  output: true,
};

const testThree = {
  input: [2, 4, 1, 5],
  start: 1,
  output: false,
};

const testFour = {
  input: [1, 1, 1, 3, 1, 2, 0, 3],
  start: 3,
  output: true,
};

describe('arrayJumping Test', () => {
  test('testOne', () => {
    const result = jumpToZero(testOne.input, testOne.start);
    expect(result).toEqual(testOne.output);
  });

  // TODO: make this case work
  xtest('testTwo', () => {
    const result = jumpToZero(testTwo.input, testTwo.start);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const result = jumpToZero(testThree.input, testThree.start);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const result = jumpToZero(testFour.input, testFour.start);
    expect(result).toEqual(testFour.output);
  });
});
