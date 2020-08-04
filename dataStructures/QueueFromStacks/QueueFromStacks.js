const Stack = require('../Stack/Stack');

class QueueFromStacks {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(item) {
    this.enqueueStack.push(item);
  }

  dequeue() {
    if (this.dequeueStack.items.length === 0) { // fill dequeue stack if empthy
      while (this.enqueueStack.items.length > 0) {
        const movedItem = this.enqueueStack.items.pop();
        this.dequeueStack.push(movedItem);
      }

      if (this.dequeueStack.items.length === 0) {
        throw new Error('No items in the Queue');
      }
    }
    return this.dequeueStack.pop();
  }
}

module.exports = QueueFromStacks;
