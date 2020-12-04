const MaxStack = require('./MaxStack');

describe('MaxStack Test', () => {
  const stack1 = new MaxStack();
  test('testOne create MaxStack.stack', () => {
    const result = stack1.stack.items.length;
    const answer = 0;
    expect(result).toEqual(answer);
  });

  test('testOne create MaxStack.maxesStack', () => {
    const result = stack1.maxesStack.items.length;
    const answer = 0;
    expect(result).toEqual(answer);
  });

  test('testTwo Push', () => {
    stack1.push(1);
    const resultStack = stack1.stack.peep();
    const answerStack = 1;

    const resultMaxesStack = stack1.stack.peep();
    const answerMaxesStack = 1;
    expect(resultStack).toEqual(answerStack);
    expect(resultMaxesStack).toEqual(answerMaxesStack);
  });

  test('testTwo Pop', () => {
    const resultStack = stack1.pop();
    const answerStack = 1;
    // TODO And max stack is cleared
    expect(resultStack).toEqual(answerStack);
  });

  test('testTwo getMax', () => {
    stack1.push(1);
    stack1.push(-11);
    stack1.push(5);
    stack1.push(3);
    stack1.push(7);
    stack1.push(6);

    const resultMaxesStack = stack1.getMaxStackItem();
    const answerMaxesStack = 7;
    expect(resultMaxesStack).toEqual(answerMaxesStack);
  });
});
