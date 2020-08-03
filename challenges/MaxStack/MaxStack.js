const Stack = require('../../dataStructures/Stack/Stack');

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  push(item) {
    this.stack.push(item);
    if (this.maxesStack.peep() === null || item >= this.maxesStack.peep()) {
      this.maxesStack.push(item);
    }
  }

  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peep()) {
      this.maxesStack.pop();
    }
    return item;
  }

  getMaxStackItem() {
    return this.maxesStack.pop();
  }
}

module.exports = MaxStack;
