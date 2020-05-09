const { contentOrder, isPrereqCheck, noPreReqCheck } = require('./contentOrder');

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

xdescribe('contentOrder Test', () => {
  test('testOne', () => {
    const result = contentOrder(testOne.articleList, testOne.articlePrereqs);
    expect(testOne.potentialOrders.includes(result)).toBe(true);
  });
});

describe('contentOrder Test', () => {
  test('testOne', () => {
    const result = contentOrder(testOne.articleList, testOne.articlePrereqs);
    expect(testOne.potentialOrders).toContainEqual(result);
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

describe('noPreReq Test', () => {
  test('testThree', () => {
    const result = noPreReqCheck(
      testThree.inputPreviousArticle,
      testThree.articlePrereqs,
    );
    expect(result).toBe(testThree.output);
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
