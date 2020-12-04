class Stack {
  constructor() {
    this.items = [];
  }

  // puts new item on top of the stack
  push(item) {
    this.items.push(item);
  }

  pop() {
    // TODO: consolidate return
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  peep() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

module.exports = Stack;
