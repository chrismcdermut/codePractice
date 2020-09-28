const { sevenSidedDie, fiveSidedDie } = require('./fiveSidedDie');

describe('sevenSidedDie Test', () => {
  const sevenNumbers = [1, 2, 3, 4, 5, 6, 7];
  const sevenSidedDieNumbers = new Set(sevenNumbers);

  test('testOne', () => {
    const randomNumber = sevenSidedDie();
    const result = sevenSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

describe('fiveSidedDie Test', () => {
  const fiveNumbers = [1, 2, 3, 4, 5];
  const fiveSidedDieNumbers = new Set(fiveNumbers);

  test('testOne', () => {
    const randomNumber = fiveSidedDie();
    const result = fiveSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});
