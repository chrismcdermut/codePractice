const Stack = require('../Stack/Stack');

class QueueFromStacks {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(item) {
    this.enqueueStack.push(item);
    console.log('enqueue this.enqueueStack');
    console.log(this.enqueueStack);
  }

  dequeue() {
    if (this.enqueueStack.items.lenth && this.dequeueStack.items.lenth) {
      throw new Error('No items in the Queue');
    }
    // if dequeue stack is empthy, fill it up
    if (this.dequeueStack.items.length === 0) {
      console.log('this.enqueueStack.items.length');
      console.log(this.enqueueStack.items.length);

      this.enqueueStack.items.forEach((item) => {
        this.dequeueStack.push(item);
      });

      // const enqueueStackLength = this.enqueueStack.items.length;

      // for (let i = 0; i < this.enqueueStack.items.length; i++) {
      //   console.log('dequeue this.dequeueStack BEFORE');
      //   console.log(this.dequeueStack);
      //   console.log('dequeue this.enqueueStack BEFORE');
      //   console.log(this.enqueueStack);
      //   this.dequeueStack.push(this.enqueueStack.pop());
      //   console.log('dequeue this.dequeueStack AFTER');
      //   console.log(this.dequeueStack);
      //   console.log('dequeue this.enqueueStack AFTER');
      //   console.log(this.enqueueStack);
      // }
      // console.log('dequeue this.dequeueStack');
      // console.log(this.dequeueStack);
      // return this.dequeueStack.pop();
      this.enqueueStack = new Stack();
    }
    if (this.dequeueStack.items.length > 0) {
      console.log('this.dequeueStack');
      console.log(this.dequeueStack);
      return this.dequeueStack.pop();
    }
    return null;
  }
}

module.exports = QueueFromStacks;
