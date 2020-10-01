const inflightEntertainment = require('./inflightEntertainment');

describe('inflightEntertainment Test', () => {
  test('testOne', () => {
    const testOne = {
      movieList: [80, 60, 45, 70, 40],
      flightTime: 120,
      output: true,
    };
    const result = inflightEntertainment(testOne.movieList, testOne.flightTime);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testTwo = {
      movieList: [80, 60, 45, 70, 85],
      flightTime: 120,
      output: false,
    };
    const result = inflightEntertainment(testTwo.movieList, testTwo.flightTime);
    expect(result).toEqual(testTwo.output);
  });

  test('testThree', () => {
    const testThree = {
      movieList: [80, 60, 45, 70, 50],
      flightTime: 120,
      output: true,
    };
    const result = inflightEntertainment(testThree.movieList, testThree.flightTime);
    expect(result).toEqual(testThree.output);
  });
});
