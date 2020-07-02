// BT must have two or less nodes

function validNodeLengthCheck(node) {
  let isValidNode = false;

  if (node.nodesNumber <= 2) {
    isValidNode = true;
  }

  return isValidNode;
}

function validateBinaryTree(input) {
  const binaryTreeIsValid = false;
  console.log(input);
  // go through nodes, put through
  // if (!validNodeLengthCheck(node)) {
  //   binaryTreeIsValid = false;
  //   // break;
  // }

  return binaryTreeIsValid;
}

module.exports = { validateBinaryTree, validNodeLengthCheck };
