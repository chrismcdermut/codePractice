// const Queue = require('../../dataStructures/Queue/Queue');

// TODO:: Implement this with a queue and clean it up
function findKthPriorElement(startNode, kthPriorElement) {
  if (!startNode) {
    throw new Error('You need a startNode, at least!');
  }
  let currentNode = startNode;
  const kthToLastQueue = [];
  let nextNode = null;
  let numberOfNodes = 1;
  while (currentNode.next) {
    // fill up queue until queue length is same as kthPriorElement
    if (kthToLastQueue.length < kthPriorElement) {
      kthToLastQueue.unshift(currentNode);
    } else if (kthToLastQueue.length === kthPriorElement) {
      kthToLastQueue.pop();
      kthToLastQueue.unshift(currentNode);
    }
    nextNode = currentNode.next;
    currentNode = nextNode;
    numberOfNodes += 1;
  }
  if (numberOfNodes === kthPriorElement) {
    return startNode.value;
  }
  return kthToLastQueue[0].value;
}

function findKthToLastDoublePass(startNode, kthPriorElement) {
  if (kthPriorElement < 1) {
    throw new Error(`Impossible to find less than first to last node: ${kthPriorElement}`);
  }

  let listLength = 1;
  let currentNode = startNode;


  while (currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }

  if (kthPriorElement > listLength) {
    throw new Error(`k is larger than the length of the linked list: ${kthPriorElement}`);
  }

  const kthLocation = listLength - kthPriorElement;

  currentNode = startNode; // reset because we used this to count
  for (let i = 0; i < kthLocation; i++) {
    currentNode = currentNode.next;
  }

  return currentNode.value;
}

function findKthToLastStick(startNode, k) {
  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }

  let leftNode = startNode;
  let rightNode = startNode;

  for (let i = 0; i < k - 1; i++) {
    if (!rightNode.next) {
      throw new Error(`k is larger than the length of the linked list: ${k}`);
    }

    rightNode = rightNode.next;
  }

  while (rightNode.next) {
    rightNode = rightNode.next;
    leftNode = leftNode.next;
  }
  return leftNode.value;
}

module.exports = { findKthPriorElement, findKthToLastDoublePass, findKthToLastStick };
