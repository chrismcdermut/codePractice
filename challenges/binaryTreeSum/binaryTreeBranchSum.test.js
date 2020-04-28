const bTreeBranchSum = require('./binaryTreeBranchSumSolution');

const Tree1 = {
  tree: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
  leftSum: 49,
  rightSum: 70,
  biggerBranch: 'Right',
  biggerSum: 70
}

const Tree2 = {
  tree: [1,3,4,2,3,5,6,7,8,9,5,4,6,7],
  leftSum: 37,
  rightSum: 32,
  biggerBranch: 'Left',
  biggerSum: 37
}

const Tree3 = {
  tree: [4,34,2,67,4,12,1,21,5,45,9.1],
  leftSum: 175.1,
  rightSum: 15,
  biggerBranch: 'Left',
  biggerSum: 175.1
}

describe('binaryTree branch sum test-suite', () => {

  test('Tree1 test', () => {
    let result = bTreeBranchSum(Tree1.tree)
    expect(result).toEqual(Tree1.biggerSum);
  });

  test('Tree2 test', () => {
    let result = bTreeBranchSum(Tree2.tree)
    expect(result).toEqual(Tree2.biggerSum);
  });

  test('Tree3 test', () => {
    let result = bTreeBranchSum(Tree3.tree)
    expect(result).toEqual(Tree3.biggerSum);
  });
})
