findKthPriorElement Notes go here!

-one pass doesn't necessarily mean faster

// function findKthPriorElement(startNode, kthPriorElement) {
//   if (!startNode) {
//     throw new Error('You need a startNode, at least!');
//   }
//   let currentNode = startNode;
//   let nextNode = null;
//   // let kthPriorElement = null;
//   let counter = 1;
//   const kthToLastQueue = new Queue();
//   // kthToLastQueue.enqueue(startNode);
//
//   if (currentNode.next) {
//     while (currentNode.next) {
//       console.log('while (currentNode.next)');
//       nextNode = currentNode.next;
//       currentNode = nextNode;
//       if (counter < kthPriorElement) {
//         kthToLastQueue.enqueue(startNode);
//         counter += 1;
//       }
//       if (counter === kthPriorElement) {
//         kthToLastQueue.dequeue();
//         kthToLastQueue.enqueue(startNode);
//       }
//     }
//   } else if (counter > 1) {
//     console.log('counter > 1');
//     return kthToLastQueue.queue[0].value;
//   }
//   console.log('return null');
//   return null;
// }
