// This finds largest right node in a BTree
function findLargest(rootNode) {
  if (!rootNode) {
    throw new Error('Tree must have at least 1 node');
  }
  if (rootNode.right) {
    return findLargest(rootNode.right);
  }
  return rootNode.value;
}

function findSecondLargest(rootNode) {
  // TODO: Why should there be two nodes?
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  // Case: we're currently at largest, and largest has a left subtree,
  // so 2nd largest is largest in said subtree
  if (rootNode.left && !rootNode.right) {
    // the largest node of the left node of the
    // largest item will be the second largest
    return findLargest(rootNode.left);
  }

  // Case: we're at parent of largest, and largest has no left subtree,
  // so 2nd largest must be current node
  // The next node is the largest because it is right and a leaf, the current node is a parent
  if (
    rootNode.right
  && !rootNode.right.left
  && !rootNode.right.right
  ) {
    return rootNode.value;
  }

  // Otherwise: step right if the node has a right node or right and left node
  // // eslint-disable-next-line no-undef
  return findSecondLargest(rootNode.right);
}

// ///////////Better version////////////////

// This finds largest right node in a BTree
// eslint-disable-next-line consistent-return
function findLargest2(rootNode) {
  // TODO: should i check for this?
  // if (!rootNode) {
  //   throw new Error('Tree must have at least 1 node');
  // }
  let current = rootNode;
  // while loop is better because it doesn't use recursion and thus space on the
  // call stack
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

// eslint-disable-next-line consistent-return
function findSecondLargest2(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let current = rootNode;

  while (current) {
    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest2(current.left);
    }

    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (
      current.right
      && !current.right.left
      && !current.right.right
    ) {
      return current.value;
    }

    current = current.right;
  }
}

module.exports = {
  findLargest, findSecondLargest, findLargest2, findSecondLargest2,
};
