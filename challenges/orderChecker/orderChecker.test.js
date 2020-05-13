const { orderChecker, isFirstComeFirstServed } = require('./orderChecker');

// pass -> is first come first served
const testOne = {
  takeOutOrders: [17, 8, 24],
  dineInOrders: [12, 19, 2],
  servedOrders: [17, 8, 12, 19, 24, 2],
  is1stCome1stServed: true,
};

// fail -> is not first come first served
const testTwo = {
  takeOutOrders: [1, 3, 5],
  dineInOrders: [2, 4, 6],
  servedOrders: [1, 2, 4, 6, 5, 3],
  is1stCome1stServed: false,
};


xdescribe('orderChecker Test', () => {
  test('testOne', () => {
    const result = orderChecker(testOne.takeOutOrders, testOne.dineInOrders, testOne.servedOrders);
    expect(result).toBe(true);
  });

  xtest('testTwo', () => {
    const result = orderChecker(testTwo.takeOutOrders, testTwo.dineInOrders, testTwo.servedOrders);
    expect(result).toBe(false);
  });
});

describe('isFirstComeFirstServed Test', () => {
  test('testOne', () => {
    const result = isFirstComeFirstServed(
      testOne.takeOutOrders,
      testOne.dineInOrders,
      testOne.servedOrders,
    );
    expect(result).toBe(testOne.is1stCome1stServed);
  });

  xtest('testTwo', () => {
    const result = isFirstComeFirstServed(
      testTwo.takeOutOrders,
      testTwo.dineInOrders,
      testTwo.servedOrders,
    );
    expect(result).toBe(testTwo.is1stCome1stServed);
  });
});
