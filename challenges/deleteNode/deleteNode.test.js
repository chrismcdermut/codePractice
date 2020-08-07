const deleteNode = require('./deleteNode');
const LinkedListNodeSingle = require('../../dataStructures/LinkedListNodeSingle/LinkedListNodeSingle');

describe('deleteNode Test', () => {
  test('testOne', () => {
    const a = new LinkedListNodeSingle('A');
    const b = new LinkedListNodeSingle('B');
    const c = new LinkedListNodeSingle('C');

    a.next = b;
    b.next = c;

    const result = deleteNode(b);
    const answer = c;
    expect(result).toEqual(answer);
  });

  test('testOne', () => {
    const a = new LinkedListNodeSingle('A');
    const b = new LinkedListNodeSingle('B');
    const c = new LinkedListNodeSingle('C');

    a.next = b;
    b.next = c;

    expect(() => {
      deleteNode(c);
    }).toThrow('Doesn\'t work for tail');
  });
});
