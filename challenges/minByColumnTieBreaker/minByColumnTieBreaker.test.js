const minByColumnTieBreaker = require('./minByColumnTieBreaker');

describe('minByColumnTieBreaker Test', () => {
  test('testOne', () => {
    const testOne = {
      table5: [
        { x: 1, y: 3 },
        { x: 1, y: 0 },
      ],
      tieBreakers: ['x', 'y'],
    };
    const result = minByColumnTieBreaker(testOne.table5, 'a');
    const answer = { x: 1, y: 0 };
    expect(result).toEqual(answer);
  });

  //   table4 = [
  //   {"a": 2, "b": 2},
  //   {"a": 1, "b": 3},
  //   {"a": 1, "b": 4}
  // ]
  // minByColumn(table4, ["a","b"]) returns ???

  test('testTwo', () => {
    const testTwo = {
      table6: [
        { x: 2, y: 3 },
        { x: 2, y: 1 },
        { x: 1, y: 10 },
      ],
      tieBreakers: ['x', 'y'],
    };
    const result = minByColumnTieBreaker(testTwo.table6, testTwo.tieBreakers);
    const answer = { x: 1, y: 10 };
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const testOne = {
      table7: [
        { x: 3, y: -1, z: 0 },
        { x: 1, y: 10, z: 1 },
        { x: 1, y: 10, z: 0 },
      ],
      tieBreakers: ['x', 'y', 'z'],
    };
    const result = minByColumnTieBreaker(testOne.table7, testOne.tieBreakers);
    const answer = { x: 1, y: 10, z: 0 };
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    const testOne = {
      table7: [
        { x: 1, y: 2, z: 3 },
        { x: 2, y: 2, z: 2 },
      ],
      tieBreakers: ['x', 'y', 'z'],
    };
    const result = minByColumnTieBreaker(testOne.table7, testOne.tieBreakers);
    const answer = { x: 1, y: 2, z: 3 };
    expect(result).toEqual(answer);
  });
});
