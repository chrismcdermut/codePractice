const reverseLinkedListInPlace = require('./reverseLinkedListInPlace');
const LinkedListNodeSingle = require('../../dataStructures/LinkedListNodeSingle/LinkedListNodeSingle');

describe('reverseLinkedListInPlace Test', () => {
  test('testOne', () => {
    const a = new LinkedListNodeSingle('A');
    const b = new LinkedListNodeSingle('B');
    const c = new LinkedListNodeSingle('C');
    const d = new LinkedListNodeSingle('D');
    const e = new LinkedListNodeSingle('E');
    const f = new LinkedListNodeSingle('F');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    const result = reverseLinkedListInPlace(a);
    const answer = f;
    expect(result).toEqual(answer);
  });
});
