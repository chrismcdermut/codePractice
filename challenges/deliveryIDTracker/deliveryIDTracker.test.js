const { deliveryIDTracker, bitWiseDeliveryIDTracker } = require('./deliveryIDTracker');

describe('deliveryIDTracker Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 8, 9, 10],
      output: 7,
    };

    const result = deliveryIDTracker(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});

describe('bitWiseDeliveryIDTracker Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 8, 9, 10],
      output: 7,
    };

    const result = bitWiseDeliveryIDTracker(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
