findSecondLargestBTreeItem Notes go here!
//Learnings
-start off with a simpler version of the problem

-Break things down into cases:
The largest node has a left subtree.
The largest node does not have a left subtree.

/////////Old code
// options, sort the tree
// find largest two elements
// do breadthfirstsearch
// think about properties of the bTree, it is partially sorted
// make fifo queue
// need to maintain fifo queue through callstack
// forgot about left node

function findSecondLargestBTreeItem(rootNode) {
  if (!rootNode) {
    throw new Error('Tree must have at least 1 node');
  }
  const largestTwoElements = [];
  console.log('logging rootNode');
  console.log(rootNode.value);
  if (largestTwoElements.length < 2) {
    largestTwoElements.push(rootNode.value);
  } else if (largestTwoElements.length === 2) {
    largestTwoElements.shift();
    largestTwoElements.push(rootNode.value);
  }
  console.log('logging largestTwoElements');
  console.log(largestTwoElements);

  if (rootNode.right) {
    console.log('logging largestTwoElements');
    console.log(largestTwoElements);
    if (largestTwoElements.length < 2) {
      console.log('logging largestTwoElements inlargestTwoElements.length < 2');
      console.log(largestTwoElements);
      largestTwoElements.push(rootNode.right);
    } else if (largestTwoElements.length === 2) {
      largestTwoElements.shift();
      largestTwoElements.push(rootNode.right);
    }
    return findSecondLargestBTreeItem(rootNode.right);
  }
  console.log('logging largestTwoElements');
  console.log(largestTwoElements);
  return largestTwoElements[0];
}
