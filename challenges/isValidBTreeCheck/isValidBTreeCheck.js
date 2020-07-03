const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
// what makes valid node?
// the value on left is less than current node
// the value on right is greater than current node
function hasValidImmediateNode(node) {
  // let isValidNode = false;
  // console.log('node');
  // console.log(node);
  // console.log('node.value');
  // console.log(node.value);
  // console.log('node.left');
  // console.log(node.left);
  // console.log('node.left.value');
  // console.log(node.left.value);
  // console.log('node.right');
  // console.log(node.right);
  // console.log('node.right.value');
  // console.log(node.right.value);
  if (node.left.value > node.value || node.right.value < node.value) {
    return false;
  }
  // isValidNode = true;
  // return isValidNode;
  return true;
}

// Should prolly do dfs
function isValidBTreeCheck(bTreeRoot) {
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: bTreeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // where there are nodes in the stack
  while (nodeAndBoundsStack.length) {
    // tak the node off the top
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();
    console.log('node');
    console.log(node);

    // check if the bounds are broken
    const nodeValue = (node.value instanceof BinaryTreeNode) ? node.value.value : node.value;
    console.log('nodeValue');
    console.log(nodeValue);
    console.log('lowerBound');
    console.log(lowerBound);
    console.log('upperBound');
    console.log(upperBound);
    console.log('nodeValue <= lowerBound');
    console.log(nodeValue <= lowerBound);
    console.log('nodeValue >= upperBound');
    console.log(nodeValue >= upperBound);
    if (nodeValue <= lowerBound || nodeValue >= upperBound) {
      return false;
    }

    if (node.left) {
      console.log('node.left');
      console.log(node.left);
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: nodeValue,
      });
    }

    if (node.right) {
      console.log('node.right');
      console.log(node.right);
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: nodeValue,
        upperBound,
      });
    }
  }
  return true;
}

module.exports = { isValidBTreeCheck, hasValidImmediateNode };
