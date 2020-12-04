// // Notes go here!
//
// QueueFromStac  class QueueTwoStacks {
//   constructor() {
//     this.inStack = [];
//     this.outStack = [];
//   }
//
//   enqueue(item) {
//     this.inStack.push(item);
//   }
//
//   dequeue() {
//     if (this.outStack.length === 0) {
//
//       // Move items from inStack to outStack, reversing order
//       while (this.inStack.length > 0) {
//         const newestInStackItem = this.inStack.pop();
//         this.outStack.push(newestInStackItem);
//       }
//
//       // If outStack is still empty, raise an error
//       if (this.outStack.length === 0) {
//         throw new Error("Can't dequeue from empty queue!");
//       }
//     }
//     return this.outStack.pop();
//   }
// }
//
//
// // const enqueueStackLength = this.enqueueStack.items.length;
// // for (let i = 0; i < this.enqueueStack.items.length; i++) {
// //   console.log('dequeue this.dequeueStack BEFORE');
// //   console.log(this.dequeueStack);
// //   console.log('dequeue this.enqueueStack BEFORE');
// //   console.log(this.enqueueStack);
// //   this.dequeueStack.push(this.enqueueStack.pop());
// //   console.log('dequeue this.dequeueStack AFTER');
// //   console.log(this.dequeueStack);
// //   console.log('dequeue this.enqueueStack AFTER');
// //   console.log(this.enqueueStack);
// // }
// // console.log('dequeue this.dequeueStack');
// // console.log(this.dequeueStack);
// // return this.dequeueStack.pop();
