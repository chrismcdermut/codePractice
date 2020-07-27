const BinaryTreeNode = require('./binaryTreeNode');

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

describe('binaryTree is Correct Test NEW', () => {
  const layer2right3Node = new BinaryTreeNode(6);
  layer2right3Node.insertLeft(4);
  layer2right3Node.insertRight(7);

  const layer1left2Node = new BinaryTreeNode(3);
  layer1left2Node.insertLeft(1);
  layer1left2Node.insertRight(layer2right3Node);

  const layer1right2Node = new BinaryTreeNode(10);
  layer1right2Node.insertRight(14);

  const rootNode = new BinaryTreeNode(8);
  rootNode.insertLeft(layer1left2Node);
  rootNode.insertRight(layer1right2Node);

  test('binary tree has left Property', () => {
    const result = rootNode;
    expect(result).toHaveProperty('left');
  });

  test('binary tree has right Property', () => {
    const result = rootNode;
    expect(result).toHaveProperty('right');
  });

  // TODO: Flesh out stub
  xtest('binary tree is made correctly', () => {
    const result = rootNode;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });
});

describe('binaryTree is Correct Test NEW', () => {
  const layer2right3Node = new BinaryTreeNode(6);
  layer2right3Node.insertLeft(2);
  layer2right3Node.insertRight(7);

  const layer1left2Node = new BinaryTreeNode(3);
  layer1left2Node.insertLeft(1);
  layer1left2Node.insertRight(layer2right3Node);

  const layer1right2Node = new BinaryTreeNode(10);
  layer1right2Node.insertRight(14);

  const rootNode = new BinaryTreeNode(8);
  rootNode.insertLeft(layer1left2Node);
  rootNode.insertRight(layer1right2Node);

  test('binary tree has left Property', () => {
    const result = rootNode;
    expect(result).toHaveProperty('left');
  });

  test('binary tree has right Property', () => {
    const result = rootNode;
    expect(result).toHaveProperty('right');
  });

  // TODO: Flesh out stub
  xtest('binary tree is made correctly', () => {
    const result = rootNode;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });
});
