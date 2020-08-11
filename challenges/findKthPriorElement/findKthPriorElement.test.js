const { findKthPriorElement, findKthToLastDoublePass, findKthToLastStick } = require('./findKthPriorElement');
const LinkedListNodeSingle = require('../../dataStructures/LinkedListNodeSingle/LinkedListNodeSingle');

describe('findKthPriorElement Test', () => {
  test('testOne', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const result = findKthPriorElement(a, 2);
    const answer = a.value;
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');

    a.next = b;
    b.next = c;
    const result = findKthPriorElement(a, 2);
    const answer = b.value;
    expect(result).toEqual(answer);
  });

  test('testThree', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');

    a.next = b;
    b.next = c;
    const result = findKthPriorElement(a, 3);
    const answer = a.value;
    expect(result).toEqual(answer);
  });

  test('testFour', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');
    const d = new LinkedListNodeSingle("Devil's Food");
    const e = new LinkedListNodeSingle('Eccles');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    const result = findKthPriorElement(a, 2);
    const answer = d.value;
    expect(result).toEqual(answer);
  });

  test('testFive', () => {
    const answer = 'You need a startNode, at least!';
    expect(() => {
      findKthPriorElement();
    }).toThrow(answer);
  });
});

describe('findKthToLastDoublePass Test', () => {
  test('testOne', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const result = findKthToLastDoublePass(a, 2);
    const answer = a.value;
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');

    a.next = b;
    b.next = c;
    const result = findKthToLastDoublePass(a, 2);
    const answer = b.value;
    expect(result).toEqual(answer);
  });

  test('testThree', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');

    a.next = b;
    b.next = c;
    const result = findKthToLastDoublePass(a, 3);
    const answer = a.value;
    expect(result).toEqual(answer);
  });

  test('testFour', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');
    const d = new LinkedListNodeSingle("Devil's Food");
    const e = new LinkedListNodeSingle('Eccles');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    const result = findKthToLastDoublePass(a, 2);
    const answer = d.value;
    expect(result).toEqual(answer);
  });

  test('testFive', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const k = -1;
    const answer = `Impossible to find less than first to last node: ${k}`;
    expect(() => {
      findKthToLastDoublePass(a, k);
    }).toThrow(answer);
  });

  test('testSix', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const k = 4;
    const answer = `k is larger than the length of the linked list: ${k}`;
    expect(() => {
      findKthToLastDoublePass(a, k);
    }).toThrow(answer);
  });
});

describe('findKthToLastStick Test', () => {
  test('testOne', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const result = findKthToLastStick(a, 2);
    const answer = a.value;
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');

    a.next = b;
    b.next = c;
    const result = findKthToLastStick(a, 2);
    const answer = b.value;
    expect(result).toEqual(answer);
  });

  test('testThree', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');

    a.next = b;
    b.next = c;
    const result = findKthToLastStick(a, 3);
    const answer = a.value;
    expect(result).toEqual(answer);
  });

  test('testFour', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');
    const c = new LinkedListNodeSingle('Cheese');
    const d = new LinkedListNodeSingle("Devil's Food");
    const e = new LinkedListNodeSingle('Eccles');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    const result = findKthToLastStick(a, 2);
    const answer = d.value;
    expect(result).toEqual(answer);
  });

  test('testFive', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const k = -1;
    const answer = `Impossible to find less than first to last node: ${k}`;
    expect(() => {
      findKthToLastStick(a, k);
    }).toThrow(answer);
  });

  test('testSix', () => {
    const a = new LinkedListNodeSingle('Angel Food');
    const b = new LinkedListNodeSingle('Bundt');

    a.next = b;
    const k = 4;
    const answer = `k is larger than the length of the linked list: ${k}`;
    expect(() => {
      findKthToLastStick(a, k);
    }).toThrow(answer);
  });
});
