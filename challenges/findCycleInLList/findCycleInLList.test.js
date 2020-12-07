const findCycleInLList = require('./findCycleInLList');
const LinkedListNodeSingle = require('../../dataStructures/LinkedListNodeSingle/LinkedListNodeSingle');

describe('findCycleInLList Test', () => {
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
    const result = findCycleInLList(a);
    const answer = false;
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
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
    f.next = c;
    const result = findCycleInLList(a);
    const answer = true;
    expect(result).toEqual(answer);
  });
});
