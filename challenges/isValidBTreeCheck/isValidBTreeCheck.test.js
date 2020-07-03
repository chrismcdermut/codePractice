const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
const { isValidBTreeCheck, hasValidImmediateNode } = require('./isValidBTreeCheck');

describe('isValidBTreeCheck Properties Test', () => {
  const bottomLeftRightNode = new BinaryTreeNode(6);
  bottomLeftRightNode.insertLeft(4);
  bottomLeftRightNode.insertRight(7);

  const bottomLeftRightImmediateNodeWrong = new BinaryTreeNode(6);
  bottomLeftRightImmediateNodeWrong.insertLeft(2);
  bottomLeftRightImmediateNodeWrong.insertRight(5);

  test('fosho has validImmediateNode', () => {
    const result = hasValidImmediateNode(bottomLeftRightNode);
    const answer = true;
    expect(result).toEqual(answer);
  });

  test('fosho NOT has validImmediateNode', () => {
    const result = hasValidImmediateNode(bottomLeftRightImmediateNodeWrong);
    const answer = false;
    expect(result).toEqual(answer);
  });
});

describe('isValidBTreeCheck True Test', () => {
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

  test('testOne', () => {
    const result = isValidBTreeCheck(rootNode);
    const answer = true;
    expect(result).toBe(answer);
  });
});

describe('isValidBTreeCheck False Test', () => {
  const layer2right3Node = new BinaryTreeNode(6);
  layer2right3Node.insertLeft(2);
  layer2right3Node.insertRight(7);

  const layer1left2Node = new BinaryTreeNode(3);
  layer1left2Node.insertLeft(1);
  layer1left2Node.insertRight(layer2right3Node);

  const layer1right2Node = new BinaryTreeNode(10);
  layer1right2Node.insertRight(14);

  const rootNode2 = new BinaryTreeNode(8);
  rootNode2.insertLeft(layer1left2Node);
  rootNode2.insertRight(layer1right2Node);

  test('testOne', () => {
    const result = isValidBTreeCheck(rootNode2);
    const answer = false;
    expect(result).toBe(answer);
  });
});
