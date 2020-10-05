const minByColumn = require('./minByColumn');

describe('minByColumn Test', () => {
  test('testOne', () => {
    const testOne = {
      table1: [
        { a: 1 },
        { a: 2 },
        { a: 3 },
      ],
    };
    const result = minByColumn(testOne.table1, 'a');
    const answer = { a: 1 };
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const testTwo = {
      table2: [
        { a: 1, b: 2 },
        { a: 3, b: 0 },
      ],
    };
    const result = minByColumn(testTwo.table2, 'b');
    const answer = { a: 3, b: 0 };
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const testOne = {
      table3: [
        { a: 1, b: -2 },
        { a: 3 },
      ],
    };
    const result = minByColumn(testOne.table3);
    const answer = { a: 1, b: -2 };
    expect(result).toEqual(answer);
  });
});
