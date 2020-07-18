const BinaryTreeNode = require('../../dataStructures/binaryTree/BinaryTreeNode');
// what makes valid node?
// the value on left is less than current node
// the value on right is greater than current node
function hasValidImmediateNode(node) {
  let isValidNode = true; // TODO: Wanting to switch this logic to have default be false
  if (node.left.value > node.value || node.right.value < node.value) {
    isValidNode = false;
  }
  return isValidNode;
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

    // check if the bounds are broken
    const nodeValue = (node.value instanceof BinaryTreeNode) ? node.value.value : node.value;
    if (nodeValue <= lowerBound || nodeValue >= upperBound) {
      return false;
    }

    if (node.left) {
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: nodeValue,
      });
    }

    if (node.right) {
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
