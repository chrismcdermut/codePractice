const { MakeChange, changePossibilitiesBottomUp } = require('./MakeChange');

describe('makingChange Test', () => {
  test('testOne', () => {
    const testOne = {
      input1: 4,
      input2: [1, 2, 3],
      output: 4,
    };
    const makeChange = new MakeChange();
    const result = makeChange.makingChange(testOne.input1, testOne.input2);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      input1: 4,
      input2: [1, 2, 3],
      output: 4,
    };
    const makeChange = new MakeChange();
    const result = makeChange.changePossibilitiesTopDown(testTwo.input1, testTwo.input2);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      input1: 4,
      input2: [1, 2, 3],
      output: 4,
    };
    const result = changePossibilitiesBottomUp(testThree.input1, testThree.input2);
    expect(result).toEqual(testThree.output);
  });
});
