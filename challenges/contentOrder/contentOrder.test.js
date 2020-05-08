const contentOrder = require('./contentOrder');

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

describe('contentOrder Test', () => {
  test('testOne', () => {
    const result = contentOrder(testOne.articleList, testOne.articlePrerequisites);
    expect(testOne.potentialOrders.includes(result)).toBe(true);
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
