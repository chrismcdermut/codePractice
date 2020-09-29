const twoEggProblem = require('./twoEggProblem');

describe('twoEggProblem Test', () => {
  const testOne = {
    numberOfFloors: 100,
    firstEggDropFloor: 14,
  };
  test('testOne', () => {
    const result = twoEggProblem(testOne.numberOfFloors);
    expect(result).toEqual(testOne.firstEggDropFloor);
  });
});
