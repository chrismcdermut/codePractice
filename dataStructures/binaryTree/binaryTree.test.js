const BinaryTreeNode = require('./BinaryTreeNode');

describe('binaryTree Test', () => {
  const binaryTree1 = new BinaryTreeNode(5);
  binaryTree1.insertLeft(5);
  binaryTree1.insertRight(8);

  test('binary tree has left Property', () => {
    const result = binaryTree1;
    expect(result).toHaveProperty('left');
  });

  test('binary tree has right Property', () => {
    const result = binaryTree1;
    expect(result).toHaveProperty('right');
  });

  // TODO: Flesh out stub
  xtest('binary tree is made correctly', () => {
    const result = binaryTree1;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });
});

describe('binaryTree Test', () => {
  const bottomNode = new BinaryTreeNode(9);
  bottomNode.insertRight(10);

  const thirdLayerLeftNode = new BinaryTreeNode(4);
  thirdLayerLeftNode.insertLeft(bottomNode);

  const secondLayerLeftNode = new BinaryTreeNode(2);
  secondLayerLeftNode.insertLeft(thirdLayerLeftNode);
  secondLayerLeftNode.insertRight(5);

  const bottomNodeRight = new BinaryTreeNode(6);
  bottomNodeRight.insertLeft(8);

  const secondLayerRightNode = new BinaryTreeNode(3);
  secondLayerRightNode.insertLeft(bottomNodeRight);
  secondLayerRightNode.insertRight(7);

  const binaryTree2 = new BinaryTreeNode(1);
  binaryTree2.insertLeft(secondLayerLeftNode);
  binaryTree2.insertRight(secondLayerRightNode);

  test('binary tree has left Property', () => {
    const result = binaryTree2;
    expect(result).toHaveProperty('left');
  });

  test('binary tree has right Property', () => {
    const result = binaryTree2;
    expect(result).toHaveProperty('right');
  });

  // TODO: Flesh out stub
  xtest('binary tree is made correctly', () => {
    const result = binaryTree2;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });
});
