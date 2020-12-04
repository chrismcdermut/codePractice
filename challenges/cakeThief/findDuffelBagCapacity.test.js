const {
  maxDuffelBagValueWithCapacity1,
  findDuffelBagCapacity,
} = require('./findDuffelBagCapacity');

describe('maxDuffelBagValueWithCapacity1 Test', () => {
  // Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
  const testOne = {
    input: [
      { weight: 1, value: 160 },
      { weight: 1, value: 90 },
      { weight: 1, value: 15 },
    ],
    capacity: 20,
    output: 160,
  };
  test('testOne', () => {
    const result = maxDuffelBagValueWithCapacity1(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('findDuffelBagCapacity Test', () => {
  test('testOne', () => {
    // Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
    const testOne = {
      input: [
        { weight: 7, value: 160 },
        { weight: 3, value: 90 },
        { weight: 2, value: 15 },
      ],
      capacity: 20,
      output: 555,
    };
    const result = findDuffelBagCapacity(testOne.input, testOne.capacity);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    // Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
    const testTwo = {
      input: [
        { weight: 0, value: 160 },
        { weight: 3, value: 90 },
        { weight: 2, value: 15 },
      ],
      capacity: 20,
      output: Infinity,
    };
    const result = findDuffelBagCapacity(testTwo.input, testTwo.capacity);
    expect(result).toEqual(testTwo.output);
  });
});
