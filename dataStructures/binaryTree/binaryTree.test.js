const BinaryTreeNode = require('./BinaryTreeNode');

xdescribe('binaryTree Test', () => {
  const binaryTree1 = new BinaryTreeNode(5);

  // construct binary tree
  binaryTree1.insertLeft(5);
  binaryTree1.insertRight(8);


  test('binary tree is made', () => {
    const result = binaryTree1;
    console.log('result');
    console.log(result);
    // expect(result).toEqual(macbookProNode);
  });
});

xdescribe('binaryTree Test', () => {
  const binaryTree2 = new BinaryTreeNode(1);

  // construct binary tree
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

  binaryTree2.insertLeft(secondLayerLeftNode);
  binaryTree2.insertRight(secondLayerRightNode);

  test('binary tree is made', () => {
    const result = binaryTree2;
    console.log('result');
    console.log(result);
    // expect(result).toEqual(macbookProNode);
  });
});
