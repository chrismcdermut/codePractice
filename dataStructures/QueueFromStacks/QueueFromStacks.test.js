const QueueFromStacks = require('./QueueFromStacks');

describe('QueueFromStacks Test', () => {
  test('testOne', () => {
    const stack1 = new QueueFromStacks();
    stack1.enqueue(1);
    stack1.enqueue(2);
    stack1.enqueue(3);
    stack1.enqueue(4);
    const result = stack1.dequeue();
    const answer = 4;
    expect(result).toEqual(answer);
  });
});
