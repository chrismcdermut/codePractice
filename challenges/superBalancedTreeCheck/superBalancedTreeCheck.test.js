const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
const superBalancedTreeCheck = require('./superBalancedTreeCheck');

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

  test('binary tree is superBalanced test1', () => {
    const result = superBalancedTreeCheck(binaryTree1Depth0);
    const answer = false;
    expect(result).toEqual(answer);
  });
});

xdescribe('non superBalanced binaryTree Test', () => {
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

  const binaryTree1 = new BinaryTreeNode(1);
  binaryTree1.insertLeft(secondLayerLeftNode);
  binaryTree1.insertRight(secondLayerRightNode);

  xtest('binary tree is made Correctly', () => {
    const result = binaryTree1;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('binary tree is superBalanced test2', () => {
    const result = superBalancedTreeCheck(binaryTree1);
    const answer = false;
    expect(result).toEqual(answer);
  });
});

xdescribe('truly superBalanced binaryTree Test', () => {
  const bottomLeftNode = new BinaryTreeNode(2);
  bottomLeftNode.insertLeft(4);
  bottomLeftNode.insertRight(5);

  const bottomRightNode = new BinaryTreeNode(1);
  bottomRightNode.insertLeft(6);
  bottomRightNode.insertRight(7);

  const binaryTree2 = new BinaryTreeNode(1);
  binaryTree2.insertLeft(bottomLeftNode);
  binaryTree2.insertRight(bottomRightNode);

  xtest('binary tree is made Correctly', () => {
    const result = binaryTree2;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('binary tree is superBalanced', () => {
    const result = superBalancedTreeCheck(binaryTree2);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

xdescribe('truly superBalanced binaryTree Test', () => {
  const bottomLeftNode = new BinaryTreeNode(2);
  bottomLeftNode.insertLeft(4);
  bottomLeftNode.insertRight(5);

  const binaryTree3 = new BinaryTreeNode(1);
  binaryTree3.insertLeft(bottomLeftNode);
  binaryTree3.insertRight(3);

  xtest('binary tree is made Correctly', () => {
    const result = binaryTree3;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('binary tree is superBalanced', () => {
    const result = superBalancedTreeCheck(binaryTree3);
    const answer = true;
    expect(result).toEqual(answer);
  });
});
