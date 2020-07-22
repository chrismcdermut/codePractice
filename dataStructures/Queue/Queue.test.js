const Queue = require('./Queue');

describe('Queue Test', () => {
  test('testOne', () => {
    const emptyQueue = new Queue();
    const result = emptyQueue.isEmpty();
    const answer = true;
    expect(result).toEqual(answer);
  });
});
