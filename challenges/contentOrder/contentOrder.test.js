const {
  contentOrder, isPrereqCheck, noPreReqCheck, isPostReqCheck, noPreReqBothCheck,
} = require('./contentOrder');

const testOne = {
  articleList: ['A', 'B', 'C', 'D'],
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  potentialOrders: [['C', 'D', 'B', 'A'], ['D', 'C', 'B', 'A']],
};

const testOneA = {
  articleList: ['C', 'D', 'A', 'B'],
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  potentialOrders: [['C', 'D', 'B', 'A'], ['D', 'C', 'B', 'A']],
};

const testOneB = {
  articleList: ['D', 'A', 'C', 'B'],
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  potentialOrders: [['C', 'D', 'B', 'A'], ['D', 'C', 'B', 'A']],
};

const testOneC = {
  articleList: ['B', 'D', 'A', 'C'],
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  potentialOrders: [['C', 'D', 'B', 'A'], ['D', 'C', 'B', 'A']],
};

const testTwo = {
  inputNextArticle: 'B',
  inputPreviousArticle: 'A',
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  output: true,
};

const testTwoA = {
  inputNextArticle: 'A',
  inputPreviousArticle: 'B',
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  output: true,
};

const testThree = {
  inputNextArticle: 'B',
  inputPreviousArticle: 'C',
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  output: true,
};

const testThreeA = {
  inputNextArticle: 'C',
  inputPreviousArticle: 'D',
  articlePrereqs: {
    A: ['B'],
    B: ['C', 'D'],
    C: [],
    D: [],
  },
  output: true,
};

xdescribe('contentOrder Test', () => {
  test('testOne', () => {
    const result = contentOrder(testOne.articleList, testOne.articlePrereqs);
    expect(testOne.potentialOrders.includes(result)).toBe(true);
  });
});

describe('contentOrder Test', () => {
  xtest('testOne', () => {
    const result = contentOrder(testOne.articleList, testOne.articlePrereqs);
    expect(testOne.potentialOrders).toContainEqual(result);
  });

  xtest('testOneA', () => {
    const result = contentOrder(testOneA.articleList, testOneA.articlePrereqs);
    console.log('testOneA result');
    console.log(result);
    expect(testOneA.potentialOrders).toContainEqual(result);
  });

  test('testOneB', () => {
    const result = contentOrder(testOneB.articleList, testOneB.articlePrereqs);
    console.log('testOneB result');
    console.log(result);
    expect(testOneB.potentialOrders).toContainEqual(result);
  });

  xtest('testOneC', () => {
    const result = contentOrder(testOneC.articleList, testOneC.articlePrereqs);
    console.log('testOneB result');
    console.log(result);
    expect(testOneC.potentialOrders).toContainEqual(result);
  });
});

describe('preReq Test', () => {
  test('testTwo', () => {
    const result = isPrereqCheck(
      testTwo.inputNextArticle,
      testTwo.inputPreviousArticle,
      testTwo.articlePrereqs,
    );
    expect(result).toBe(testTwo.output);
  });
});

describe('postReq Test', () => {
  test('testTwoA', () => {
    const result = isPostReqCheck(
      testTwoA.inputNextArticle,
      testTwoA.inputPreviousArticle,
      testTwoA.articlePrereqs,
    );
    expect(result).toBe(testTwoA.output);
  });
});

describe('noPreReq Test', () => {
  test('testThree', () => {
    const result = noPreReqCheck(
      testThree.inputPreviousArticle,
      testThree.articlePrereqs,
    );
    expect(result).toBe(testThree.output);
  });
});

describe('noPreReqBothCheck Test', () => {
  test('testThreeA', () => {
    const result = noPreReqBothCheck(
      testThreeA.inputNextArticle,
      testThreeA.inputPreviousArticle,
      testThreeA.articlePrereqs,
    );
    expect(result).toBe(testThreeA.output);
  });
});

// /////////NOTES///////////

// function testCasePasses(testArg) {
//   const potentialOrder = [['C', 'D', 'B', 'A'], ['D', 'C', 'B', 'A']];
//   const orderFound = articleOrder(testArg.articleList, testArg.articlePrereqs);
//   console.log('orderFound');
//   console.log(orderFound);
//   potentialOrder.forEach((possibleAnswer) => {
//     if (orderFound === possibleAnswer) {
//       return true;
//     }
//   });
//   return false;
// }
