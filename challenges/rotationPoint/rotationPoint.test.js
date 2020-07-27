const { rotationPoint, findRotationPoint, findRotationPointCheck } = require('./rotationPoint');

const testOne = {
  input: [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
  ],
  outputIndex: 5,
  outputValue: 'asymptote',
};

const testTwo = {
  input: [20, 21, 21, 25, 27, 1, 2, 3, 4, 5],
  outputIndex: 5,
  outputValue: 1,
};

const testThree = {
  input: [20, 21, 21, 25, 27, 30, 40, 50, 1, 2, 3, 4, 5],
  outputIndex: 8,
  outputValue: 1,
};

describe('rotationPoint Test', () => {
  test('testOne', () => {
    const result = rotationPoint(testOne.input);
    expect(result).toEqual(testOne.outputIndex);
  });

  test('testTwo', () => {
    const result = rotationPoint(testTwo.input);
    expect(result).toEqual(testTwo.outputIndex);
  });

  test('testThree', () => {
    const result = rotationPoint(testThree.input);
    expect(result).toEqual(testThree.outputIndex);
  });
});

xdescribe('findRotationPoint Test', () => {
  test('testOne', () => {
    const result = findRotationPoint(testOne.input);
    expect(result).toEqual(testOne.outputIndex);
  });

  test('testTwo', () => {
    const result = findRotationPoint(testTwo.input);
    expect(result).toEqual(testTwo.outputIndex);
  });

  test('testThree', () => {
    const result = findRotationPoint(testThree.input);
    expect(result).toEqual(testThree.outputIndex);
  });
});

describe('findRotationPointCheck Test', () => {
  test('testOne', () => {
    const result = findRotationPointCheck(testOne.input);
    expect(result).toEqual(testOne.outputIndex);
  });

  test('testTwo', () => {
    const result = findRotationPointCheck(testTwo.input);
    expect(result).toEqual(testTwo.outputIndex);
  });

  test('testThree', () => {
    const result = findRotationPointCheck(testThree.input);
    expect(result).toEqual(testThree.outputIndex);
  });
});
