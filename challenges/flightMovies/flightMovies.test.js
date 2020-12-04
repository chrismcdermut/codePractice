const flightMovies = require('./flightMovies');

describe('flightMovies Test', () => {
  test('testOne', () => {
    const testOne = {
      movieTimes: [1, 3, 2, 3, 2, 1],
      flightTime: 4,
      perfectMovieTimesExist: true,
    };
    const result = flightMovies(testOne.flightTime, testOne.movieTimes);
    expect(result).toEqual(testOne.perfectMovieTimesExist);
  });

  test('testTwo', () => {
    const testTwo = {
      movieTimes: [1.5, 3, 2.25, 2.5, 3, 1.75],
      flightTime: 4,
      perfectMovieTimesExist: true,
    };
    const result = flightMovies(testTwo.flightTime, testTwo.movieTimes);
    expect(result).toEqual(testTwo.perfectMovieTimesExist);
  });

  test('testThree', () => {
    const testThree = {
      movieList: [80, 60, 45, 70, 85],
      flightTime: 120,
      output: false,
    };
    const result = flightMovies(testThree.flightTime, testThree.movieList);
    expect(result).toEqual(testThree.output);
  });

  test('testFour', () => {
    const testFour = {
      movieList: [80, 60, 45, 70, 40],
      flightTime: 120,
      output: true,
    };
    const result = flightMovies(testFour.flightTime, testFour.movieList);
    expect(result).toEqual(testFour.output);
  });

  test('testFive', () => {
    const testFive = {
      movieList: [80, 60, 45, 70, 50],
      flightTime: 120,
      output: true,
    };
    const result = flightMovies(testFive.flightTime, testFive.movieList);
    expect(result).toEqual(testFive.output);
  });
});
