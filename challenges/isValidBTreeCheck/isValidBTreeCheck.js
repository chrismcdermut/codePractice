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

// do DFS to short circuit if finding things ain't right
function isValidBTreeCheck(bTreeRoot) {
  const nodeAndBoundsStack = []; // Use stack for DFS
  nodeAndBoundsStack.push({
    node: bTreeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // where there are nodes in the stack
  while (nodeAndBoundsStack.length) {
    // tak the node off the top
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // TODO: This is kind of kooky, should clean up BinaryTreeNode class
    const nodeValue = (node.value instanceof BinaryTreeNode) ? node.value.value : node.value;
    // check if the bounds are broken
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

function isBinarySearchTree(treeRoot, lowerBoundArg, upperBoundArg) {
  const lowerBound = (typeof lowerBoundArg !== 'undefined') ? lowerBoundArg : Number.NEGATIVE_INFINITY;
  const upperBound = (typeof upperBoundArg !== 'undefined') ? upperBoundArg : Number.POSITIVE_INFINITY;

  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value)
  && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}

module.exports = { isValidBTreeCheck, hasValidImmediateNode, isBinarySearchTree };
