const flightMovies = require('./flightMovies');

const testOne = {
  movieTimes: [1, 3, 2, 3, 2, 1],
  flightTime: 4,
  chosenMovies: [],
  perfectMovieTimesExist: true,
};

const testTwo = {
  movieTimes: [1.5, 3, 2.25, 2.5, 3, 1.75],
  flightTime: 4,
  chosenMovies: [],
  perfectMovieTimesExist: true,
};

describe('flightMovies Test', () => {
  test('testOne', () => {
    const result = flightMovies(testOne.fligthTime, testOne.movieTimes);
    expect(result).toEqual(testOne.perfectMovieTimesExist);
  });

  test('testTwo', () => {
    const result = flightMovies(testTwo.fligthTime, testTwo.movieTimes);
    expect(result).toEqual(testTwo.perfectMovieTimesExist);
  });
});
