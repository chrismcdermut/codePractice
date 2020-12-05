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

  test('testFour', () => {
    const testFour = {
      movieTimes: [1, 3, 2, 3, 2, 1],
      flightTime: 4,
      perfectMovieTimesExist: true,
    };
    const result = inflightEntertainment(testFour.movieTimes, testFour.flightTime);
    expect(result).toEqual(testFour.perfectMovieTimesExist);
  });

  test('testFive', () => {
    const testFive = {
      movieTimes: [1.5, 3, 2.25, 2.5, 3, 1.75],
      flightTime: 4,
      perfectMovieTimesExist: true,
    };
    const result = inflightEntertainment(testFive.movieTimes, testFive.flightTime);
    expect(result).toEqual(testFive.perfectMovieTimesExist);
  });
});
