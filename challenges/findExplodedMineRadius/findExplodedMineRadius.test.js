const findMineBlastRadius = require('./findMineBlastRadius');

describe('findMineBlastRadius Test', () => {
  test('testOne', () => {
    const minesList = [
      [1.01, 1, 2],
      [6, 6, 1],
      [1, 2, 3],
      [-1, -1, 3],
    ];
    const answer = [[-1, -1, 3], 3];
    const result = findMineBlastRadius(minesList);
    expect(result).toEqual(answer);
  });
});
