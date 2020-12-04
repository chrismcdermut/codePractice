const convertObjectKey = require('./switchObjectKeySolution');

const testOneInput = {
  bikes: [
    {
      color: 'blue',
      price: 99.99,
      size: '21 in',
      'min-age': 6,
    },
    {
      color: 'red',
      price: 69.99,
      size: '24 in',
      'min-age': 8,
    },
    {
      color: 'green',
      price: 19.99,
      size: 'small',
      'min-age': null,
    },
  ],
  trucks: [
    {
      color: 'red',
      price: 19.99,
      'min-age': 3,
    },
    {
      color: 'blue',
      price: 9.99,
      'min-age': 6,
    },
  ],
};

const testOneExpectation = {
  blue: [
    {
      price: 99.99,
      size: '21 in',
      'min-age': 6,
      type: 'bikes',
    },
    {
      price: 9.99,
      'min-age': 6,
      type: 'trucks',
    },
  ],
  red: [
    {
      price: 69.99,
      size: '24 in',
      'min-age': 8,
      type: 'bikes',
    },
    {
      price: 19.99,
      'min-age': 3,
      type: 'trucks',
    },
  ],
  green: [
    {
      price: 19.99,
      size: 'small',
      'min-age': null,
      type: 'bikes',
    },
  ],
};

describe('toyList testSuite', () => {
  test('toyList test', () => {
    const result = convertObjectKey(testOneInput);
    expect(result).toEqual(testOneExpectation);
  });
});
