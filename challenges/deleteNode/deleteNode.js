/* eslint no-param-reassign: 0 */

function deleteNode(node) {
  let nextNode;

  if (node.next) {
    nextNode = node.next;
    node.value = nextNode.value;
    node.next = nextNode.next;
  } else {
    throw new Error('Doesn\'t work for tail');
  }
  return node;
}

module.exports = deleteNode;
