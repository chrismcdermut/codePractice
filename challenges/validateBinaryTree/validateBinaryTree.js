// BT must have two or less nodes

function validNodeCheck(node) {
  let isValidNode = false;

  if (node.nodesNumber <= 2) {
    isValidNode = true;
  }

  return isValidNode;
}

function validateBinaryTree(input) {
  let binaryTreeIsValid = false;
  console.log(input);
  // go through nodes, put through
  if (!validNodeCheck(node)) {
    binaryTreeIsValid = false;
    // break;
  }

  return binaryTreeIsValid;
}

module.exports = validateBinaryTree;
