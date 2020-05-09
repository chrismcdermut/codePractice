const { contentOrder, isPrereqCheck } = require('./contentOrder');

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

describe('contentOrder Test', () => {
  test('testOne', () => {
    const result = contentOrder(testOne.articleList, testOne.articlePrereqs);
    console.log('result');
    console.log(result);
    expect(testOne.potentialOrders.includes(result)).toBe(true);
  });
});

describe('preReq Test', () => {
  test('testTwo', () => {
    const result = isPrereqCheck(
      testTwo.inputNextArticle,
      testTwo.inputPreviousArticle,
      testTwo.articlePrereqs,
    );
    expect(result).toBe(true);
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
