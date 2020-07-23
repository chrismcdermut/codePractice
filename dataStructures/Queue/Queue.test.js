const Queue = require('./Queue');

describe('Queue Test', () => {
  test('testOne isEmpty', () => {
    const emptyQueue = new Queue();
    const result = emptyQueue.isEmpty();
    const answer = true;
    expect(result).toEqual(answer);
  });

  test('testOne getLength', () => {
    const emptyQueue = new Queue();
    emptyQueue.enqueue(1);
    const result = emptyQueue.getLength();
    const answer = 1;
    expect(result).toEqual(answer);
  });

  test('testOne enqueue', () => {
    const emptyQueue = new Queue();
    emptyQueue.enqueue(1);
    const result = emptyQueue.getLength();
    const answer = 1;
    expect(result).toEqual(answer);
  });

  test('testOne dequeue', () => {
    const emptyQueue = new Queue();
    emptyQueue.enqueue(1);
    const result = emptyQueue.dequeue();
    const answer = 1;
    expect(result).toEqual(answer);
  });

  test('testOne peek', () => {
    const emptyQueue = new Queue();
    emptyQueue.enqueue(1);
    const result = emptyQueue.peek();
    const answer = 1;
    expect(result).toEqual(answer);
  });
});
