const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
const {
  findLargest, findSecondLargest, findLargest2, findSecondLargest2,
} = require('./secondLargestBTreeItem');

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
  test('testOne', () => {
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
    const result = findSecondLargest(rootNode);
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const layer2right3Node = new BinaryTreeNode(6);
    layer2right3Node.insertLeft(4);
    layer2right3Node.insertRight(7);

    const layer1left2Node = new BinaryTreeNode(3);
    layer1left2Node.insertLeft(1);
    layer1left2Node.insertRight(layer2right3Node);
    layer1left2Node.right = layer2right3Node;

    const layer2right4node = new BinaryTreeNode(9);
    layer2right4node.insertLeft(8);

    const layer1right2Node = new BinaryTreeNode(10);
    layer1right2Node.insertLeft(layer2right4node);

    const rootNode = new BinaryTreeNode(8);
    rootNode.insertLeft(layer1left2Node);
    rootNode.insertRight(layer1right2Node);

    const answer = 9;
    const result = findSecondLargest(rootNode);
    expect(result).toEqual(answer);
  });

  test('testThree', () => {
    expect(() => {
      findSecondLargest();
    }).toThrow('Tree must have at least 2 nodes');
  });
});

describe('findLargest2 Test', () => {
  test('testOne', () => {
    const layer2right3Node = new BinaryTreeNode(6);
    layer2right3Node.insertLeft(4);
    layer2right3Node.insertRight(7);
    const result = findLargest2(layer2right3Node);
    const answer = 7;
    expect(result).toEqual(answer);
  });

  // TODO: should i check for this?
  xtest('testOne', () => {
    expect(() => {
      findLargest2();
    }).toThrow('Tree must have at least 1 node');
  });
});

describe('findSecondLargest2 Test', () => {
  test('testOne', () => {
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
    const result = findSecondLargest2(rootNode);
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const layer2right3Node = new BinaryTreeNode(6);
    layer2right3Node.insertLeft(4);
    layer2right3Node.insertRight(7);

    const layer1left2Node = new BinaryTreeNode(3);
    layer1left2Node.insertLeft(1);
    layer1left2Node.insertRight(layer2right3Node);
    layer1left2Node.right = layer2right3Node;

    const layer2right4node = new BinaryTreeNode(9);
    layer2right4node.insertLeft(8);

    const layer1right2Node = new BinaryTreeNode(10);
    layer1right2Node.insertLeft(layer2right4node);

    const rootNode = new BinaryTreeNode(8);
    rootNode.insertLeft(layer1left2Node);
    rootNode.insertRight(layer1right2Node);

    const answer = 9;
    const result = findSecondLargest2(rootNode);
    expect(result).toEqual(answer);
  });

  test('testThree', () => {
    expect(() => {
      findSecondLargest2();
    }).toThrow('Tree must have at least 2 nodes');
  });
});
