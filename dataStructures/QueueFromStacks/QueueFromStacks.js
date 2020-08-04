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
    if (this.enqueueStack.items.lenth && this.dequeueStack.items.lenth) {
      throw new Error('No items in the Queue');
    }
    // if dequeue stack is empthy, fill it up
    if (this.dequeueStack.items.length === 0) {
      this.enqueueStack.items.forEach((item) => {
        this.dequeueStack.push(item);
      });


      this.enqueueStack = new Stack();
    }
    if (this.dequeueStack.items.length > 0) {
      return this.dequeueStack.pop();
    }
    return null;
  }
}

module.exports = QueueFromStacks;
