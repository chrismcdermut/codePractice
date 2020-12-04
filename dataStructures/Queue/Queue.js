/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
class Queue {
  constructor() {
    // initialise the queue and offset
    this.queue = [];
    this.offset = 0;
  }

  // Returns the length of the queue.
  getLength() {
    return (this.queue.length - this.offset);
  }

  // Returns true if the queue is empty, and false otherwise.
  isEmpty() {
    return (this.queue.length === 0);
  }

  /* Enqueues the specified item. The parameter is:
   *
   * item - the item to enqueue
   */
  enqueue(item) {
    this.queue.push(item);
  }

  /* Dequeues an item and returns it. If the queue is empty, the value
   * 'undefined' is returned.
   */
  dequeue() {
    // if the queue is empty, return immediately
    if (this.queue.length === 0) return undefined;

    // store the item at the front of the queue
    const item = this.queue[this.offset];

    // increment the offset and remove the free space if necessary
    if (++this.offset * 2 >= this.queue.length) {
      this.queue = this.queue.slice(this.offset);
      this.offset = 0;
    }

    // return the dequeued item
    return item;
  }

  /* Returns the item at the front of the queue (without dequeuing it). If the
   * queue is empty then undefined is returned.
   */
  peek() {
    return (this.queue.length > 0 ? this.queue[this.offset] : undefined);
  }
}

module.exports = Queue;
