function reverseLinkedListInPlace(startNode) {
  let currentNode = startNode;
  let previousNode = null;
  let nextNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}

module.exports = reverseLinkedListInPlace;
