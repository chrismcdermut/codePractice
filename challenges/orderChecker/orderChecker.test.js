const { isFirstComeFirstServed, firstComeFirstServedCheck, isFirstComeFirstServedBestCheck } = require('./orderChecker');

const testOne = {
  takeOutOrders: [17, 8, 24],
  dineInOrders: [12, 19, 2],
  servedOrders: [17, 8, 12, 19, 24, 2],
  is1stCome1stServed: true,
};

const testOneA = {
  takeOutOrders: [17, 8, 24],
  dineInOrders: [12, 19, 2],
  servedOrders: [17, 8, 24, 12, 19, 2],
  is1stCome1stServed: true,
};

const testOneB = {
  takeOutOrders: [17, 8, 24],
  dineInOrders: [12, 19, 2],
  servedOrders: [17, 8, 12, 19, 2, 24],
  is1stCome1stServed: true,
};

const testOneC = {
  takeOutOrders: [17, 8, 24],
  dineInOrders: [12, 19, 2],
  servedOrders: [17, 8, 12, 19, 24, 2],
  is1stCome1stServed: true,
};

const testTwo = {
  takeOutOrders: [1, 3, 5],
  dineInOrders: [2, 4, 6],
  servedOrders: [1, 2, 4, 6, 5, 3],
  is1stCome1stServed: false,
};

describe('isFirstComeFirstServed Test', () => {
  test('testOne', () => {
    const result = isFirstComeFirstServed(
      testOne.takeOutOrders,
      testOne.dineInOrders,
      testOne.servedOrders,
    );
    expect(result).toBe(testOne.is1stCome1stServed);
  });

  test('testOneA', () => {
    const result = isFirstComeFirstServed(
      testOneA.takeOutOrders,
      testOneA.dineInOrders,
      testOneA.servedOrders,
    );
    expect(result).toBe(testOneA.is1stCome1stServed);
  });

  test('testOneB', () => {
    const result = isFirstComeFirstServed(
      testOneB.takeOutOrders,
      testOneB.dineInOrders,
      testOneB.servedOrders,
    );
    expect(result).toBe(testOneB.is1stCome1stServed);
  });

  test('testOneC', () => {
    const result = isFirstComeFirstServed(
      testOneC.takeOutOrders,
      testOneC.dineInOrders,
      testOneC.servedOrders,
    );
    expect(result).toBe(testOneC.is1stCome1stServed);
  });

  test('testTwo', () => {
    const result = isFirstComeFirstServed(
      testTwo.takeOutOrders,
      testTwo.dineInOrders,
      testTwo.servedOrders,
    );
    expect(result).toBe(testTwo.is1stCome1stServed);
  });
});

describe('firstComeFirstServedCheck Test', () => {
  test('testOne', () => {
    const result = firstComeFirstServedCheck(
      testOne.takeOutOrders,
      testOne.dineInOrders,
      testOne.servedOrders,
    );
    expect(result).toBe(testOne.is1stCome1stServed);
  });

  test('testOneA', () => {
    const result = firstComeFirstServedCheck(
      testOneA.takeOutOrders,
      testOneA.dineInOrders,
      testOneA.servedOrders,
    );
    expect(result).toBe(testOneA.is1stCome1stServed);
  });

  test('testOneB', () => {
    const result = firstComeFirstServedCheck(
      testOneB.takeOutOrders,
      testOneB.dineInOrders,
      testOneB.servedOrders,
    );
    expect(result).toBe(testOneB.is1stCome1stServed);
  });

  test('testOneC', () => {
    const result = firstComeFirstServedCheck(
      testOneC.takeOutOrders,
      testOneC.dineInOrders,
      testOneC.servedOrders,
    );
    expect(result).toBe(testOneC.is1stCome1stServed);
  });

  test('testTwo', () => {
    const result = firstComeFirstServedCheck(
      testTwo.takeOutOrders,
      testTwo.dineInOrders,
      testTwo.servedOrders,
    );
    expect(result).toBe(testTwo.is1stCome1stServed);
  });

  test('testThree', () => {
    const testThree = {
      takeOutOrders: [17, 8, 24],
      dineInOrders: [12, 19, 2],
      servedOrders: [17, 8, 12, 19, 24, 2],
      is1stCome1stServed: true,
    };
    const result = firstComeFirstServedCheck(
      testThree.takeOutOrders,
      testThree.dineInOrders,
      testThree.servedOrders,
    );
    expect(result).toBe(testThree.is1stCome1stServed);
  });

  test('testFour', () => {
    const testFour = {
      takeOutOrders: [1, 3, 5],
      dineInOrders: [2, 4, 6],
      servedOrders: [1, 2, 4, 6, 5, 3],
      is1stCome1stServed: false,
    };
    const result = firstComeFirstServedCheck(
      testFour.takeOutOrders,
      testFour.dineInOrders,
      testFour.servedOrders,
    );
    expect(result).toBe(testFour.is1stCome1stServed);
  });
});

describe('isFirstComeFirstServedBestCheck Test', () => {
  test('testOne', () => {
    const result = isFirstComeFirstServedBestCheck(
      testOne.takeOutOrders,
      testOne.dineInOrders,
      testOne.servedOrders,
    );
    expect(result).toBe(testOne.is1stCome1stServed);
  });

  test('testOneA', () => {
    const result = isFirstComeFirstServedBestCheck(
      testOneA.takeOutOrders,
      testOneA.dineInOrders,
      testOneA.servedOrders,
    );
    expect(result).toBe(testOneA.is1stCome1stServed);
  });

  test('testOneB', () => {
    const result = isFirstComeFirstServedBestCheck(
      testOneB.takeOutOrders,
      testOneB.dineInOrders,
      testOneB.servedOrders,
    );
    expect(result).toBe(testOneB.is1stCome1stServed);
  });

  test('testOneC', () => {
    const result = isFirstComeFirstServedBestCheck(
      testOneC.takeOutOrders,
      testOneC.dineInOrders,
      testOneC.servedOrders,
    );
    expect(result).toBe(testOneC.is1stCome1stServed);
  });

  test('testTwo', () => {
    const result = isFirstComeFirstServedBestCheck(
      testTwo.takeOutOrders,
      testTwo.dineInOrders,
      testTwo.servedOrders,
    );
    expect(result).toBe(testTwo.is1stCome1stServed);
  });
});
