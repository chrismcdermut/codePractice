const LinkedListNodeDouble = require('./LinkedListNodeDouble');

describe('LinkedListNodeDouble Test', () => {
  const a = new LinkedListNodeDouble(5);
  const b = new LinkedListNodeDouble(1);
  const c = new LinkedListNodeDouble(9);

  a.next = b;
  b.previous = a;
  b.next = c;
  c.previous = b;

  test('testOne', () => {
    const result = b.next;
    const answer = c;
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const result = b.previous;
    const answer = a;
    expect(result).toEqual(answer);
  });

  test('testThree', () => {
    const result = c.previous.previous;
    const answer = a;
    expect(result).toEqual(answer);
  });
});
