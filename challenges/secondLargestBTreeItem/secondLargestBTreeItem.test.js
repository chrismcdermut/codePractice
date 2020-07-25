const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
const { findLargest, findSecondLargest, findSecondLargest2 } = require('./secondLargestBTreeItem');

describe('findlargest Test', () => {
  test('testOne', () => {
    const layer2right3Node = new BinaryTreeNode(6);
    layer2right3Node.insertLeft(4);
    layer2right3Node.insertRight(7);
    const result = findLargest(layer2right3Node);
    const answer = 7;
    expect(result).toEqual(answer);
  });

  test('testOne', () => {
    expect(() => {
      findLargest();
    }).toThrow('Tree must have at least 1 node');
  });
});

describe('findSecondLargest Test', () => {
  const layer2right3Node = new BinaryTreeNode(6);
  layer2right3Node.insertLeft(4);
  layer2right3Node.insertRight(7);

  const layer1left2Node = new BinaryTreeNode(3);
  layer1left2Node.insertLeft(1);
  layer1left2Node.insertRight(layer2right3Node);
  layer1left2Node.right = layer2right3Node;

  const layer1right2Node = new BinaryTreeNode(10);
  layer1right2Node.insertRight(14);

  const rootNode = new BinaryTreeNode(8);
  rootNode.insertLeft(layer1left2Node);
  rootNode.insertRight(layer1right2Node);

  const answer = 10;

  test('testOne', () => {
    const result = findSecondLargest(rootNode);
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    expect(() => {
      findSecondLargest();
    }).toThrow('Tree must have at least 2 nodes');
  });
});

describe('findSecondLargest2 Test', () => {
  const layer2right3Node = new BinaryTreeNode(6);
  layer2right3Node.insertLeft(4);
  layer2right3Node.insertRight(7);

  const layer1left2Node = new BinaryTreeNode(3);
  layer1left2Node.insertLeft(1);
  layer1left2Node.insertRight(layer2right3Node);
  layer1left2Node.right = layer2right3Node;

  const layer1right2Node = new BinaryTreeNode(10);
  layer1right2Node.insertRight(14);

  const rootNode = new BinaryTreeNode(8);
  rootNode.insertLeft(layer1left2Node);
  rootNode.insertRight(layer1right2Node);

  const answer = 10;

  test('testOne', () => {
    const result = findSecondLargest2(rootNode);
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    expect(() => {
      findSecondLargest2();
    }).toThrow('Tree must have at least 2 nodes');
  });
});
