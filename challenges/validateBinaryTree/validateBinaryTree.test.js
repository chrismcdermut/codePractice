const Tree = require('../../dataStructures/tree/Tree');
const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
const { validateBinaryTree, validNodeLengthCheck } = require('./validateBinaryTree');

const testOne = {
  input: '',
  output: '',
};

xdescribe('Binary Tree propertuy unit test', () => {
  xtest('is fo sho good bTree', () => {
    const node = {};
    const result = validNodeLengthCheck(node);
    const answer = true;
    expect(result).toEqual(answer);
  });
  xtest('is fo sho bad bTree', () => {
    const node = {};
    const result = validNodeLengthCheck(node);
    const answer = false;
    expect(result).toEqual(answer);
  });
});

// IS BT
xdescribe('non superBalanced binaryTree Test', () => {
  const binaryTree1Depth3 = new BinaryTreeNode(9);
  binaryTree1Depth3.insertRight(10);

  const binaryTree1Depth2Left = new BinaryTreeNode(4);
  binaryTree1Depth2Left.insertLeft(binaryTree1Depth3);

  const binaryTree1Depth2Right = new BinaryTreeNode(6);
  binaryTree1Depth2Right.insertLeft(8);

  const binaryTree1Depth1Left = new BinaryTreeNode(2);
  binaryTree1Depth1Left.insertLeft(binaryTree1Depth2Left);
  binaryTree1Depth1Left.insertRight(5);

  const binaryTree1Depth1Right = new BinaryTreeNode(3);
  binaryTree1Depth1Right.insertLeft(binaryTree1Depth2Right);
  binaryTree1Depth1Right.insertRight(7);

  const binaryTree1Depth0 = new BinaryTreeNode(1);
  binaryTree1Depth0.insertLeft(binaryTree1Depth1Left);
  binaryTree1Depth0.insertRight(binaryTree1Depth1Right);

  xtest('binary tree is made Correctly', () => {
    const result = binaryTree1Depth0;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('IS BTree testOne', () => {
    const result = validateBinaryTree(binaryTree1Depth0);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

// IS NOT BT
xdescribe('NOT BTree test', () => {
  const documentTree = new Tree();

  documentTree.addNode('document', 'root');
  documentTree.addNode('section1', 'document');
  documentTree.addNode('section2', 'document');
  documentTree.addNode('section3', 'document');

  documentTree.addNode('article1-1', 'section1');
  documentTree.addNode('article1-2', 'section1');
  documentTree.addNode('article2-1', 'section2');
  documentTree.addNode('article3-1', 'section3');

  xtest('documentTree is made correctly', () => {
    const result = documentTree;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('NOT BTree testOne', () => {
    const result = validateBinaryTree(documentTree);
    const answer = false;
    expect(result).toEqual(answer);
  });
});

xdescribe('validateBinaryTree Test', () => {
  test('testOne', () => {
    const result = validateBinaryTree(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
