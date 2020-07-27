const { bTreeBranchSum, sum } = require('./binaryTreeBranchSumSolution');

// TODO: are these answers right?
const Tree1 = {
  tree: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  leftSum: 57, // 49
  rightSum: 63, // 70
  biggerBranch: 'Right',
  biggerSum: 70,
};

const Tree2 = {
  tree: [0, 1, 3, 4, 2, 3, 5, 6, 7, 8, 9, 5, 4, 6, 7],
  leftSum: 37,
  rightSum: 33, // 32
  biggerBranch: 'Left',
  biggerSum: 37,
};

const Tree3 = {
  tree: [0, 4, 34, 2, 67, 4, 12, 1, 21, 5, 45, 9],
  leftSum: 145, // 175.1
  rightSum: 59, // 55,
  biggerBranch: 'Left',
  biggerSum: 175,
};

describe('binaryTree branch sum test-suite', () => {
  test('Tree1 test', () => {
    const result = bTreeBranchSum(Tree1.tree);
    expect(result).toEqual(Tree1.biggerBranch);
  });

  test('Tree2 test', () => {
    const result = bTreeBranchSum(Tree2.tree);
    expect(result).toEqual(Tree2.biggerBranch);
  });

  test('Tree3 test', () => {
    const result = bTreeBranchSum(Tree3.tree);
    expect(result).toEqual(Tree3.biggerBranch);
  });
});

describe('sum test-suite', () => {
  test('Tree1 test', () => {
    const result = sum(Tree1.tree, 2);
    expect(result).toEqual(Tree1.leftSum);
  });

  test('Tree1 test', () => {
    const result = sum(Tree1.tree, 3);
    expect(result).toEqual(Tree1.rightSum);
  });

  test('Tree2 test', () => {
    const result = sum(Tree2.tree, 2);
    expect(result).toEqual(Tree2.leftSum);
  });

  test('Tree2 test', () => {
    const result = sum(Tree2.tree, 3);
    expect(result).toEqual(Tree2.rightSum);
  });

  test('Tree3 test', () => {
    const result = sum(Tree3.tree, 2);
    expect(result).toEqual(Tree3.leftSum);
  });

  test('Tree3 test', () => {
    const result = sum(Tree3.tree, 3);
    expect(result).toEqual(Tree3.rightSum);
  });
});
