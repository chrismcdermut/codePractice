const LinkedListNodeSingle = require('./LinkedListNodeSingle');

describe('LinkedListNodeSingle Test', () => {
  test('testOne', () => {
    const a = new LinkedListNodeSingle(5);
    const b = new LinkedListNodeSingle(1);
    const c = new LinkedListNodeSingle(9);

    a.next = b;
    b.next = c;
    const result = b.next;
    const answer = c;
    expect(result).toEqual(answer);
  });
});
