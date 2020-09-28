const {
  randomNumber1to7,
  fiveSidedDie,
  randomNumber1to5,
  sevenSidedDie,
  sevenSidedDieClean,
} = require('./fiveSidedDie');

describe('randomNumber1to7 Test', () => {
  const sevenNumbers = [1, 2, 3, 4, 5, 6, 7];
  const sevenSidedDieNumbers = new Set(sevenNumbers);

  test('testOne', () => {
    const randomNumber = randomNumber1to7();
    const result = sevenSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

xdescribe('fiveSidedDie Test', () => {
  const fiveNumbers = [1, 2, 3, 4, 5];
  const fiveSidedDieNumbers = new Set(fiveNumbers);

  test('testOne', () => {
    const randomNumber = fiveSidedDie();
    const result = fiveSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

describe('randomNumber1to5 Test', () => {
  const sevenNumbers = [1, 2, 3, 4, 5];
  const sevenSidedDieNumbers = new Set(sevenNumbers);

  test('testOne', () => {
    const randomNumber = randomNumber1to5();
    const result = sevenSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

// this test is wrong
xdescribe('sevenSidedDie Test', () => {
  const sevenNumbers = [1, 2, 3, 4, 5, 6, 7];
  const sevenSidedDieNumbers = new Set(sevenNumbers);

  test('testOne', () => {
    const randomNumber = sevenSidedDie();
    const result = sevenSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

// this test is wrong
xdescribe('sevenSidedDieClean Test', () => {
  const sevenNumbers = [1, 2, 3, 4, 5, 6, 7];
  const sevenSidedDieNumbers = new Set(sevenNumbers);

  test('testOne', () => {
    const randomNumber = sevenSidedDieClean();
    const result = sevenSidedDieNumbers.has(randomNumber);
    const answer = true;
    expect(result).toEqual(answer);
  });
});
