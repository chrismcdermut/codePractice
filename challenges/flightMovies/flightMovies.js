function flightMovies(flightTime, movieList) {
  let perfectMovieTimesExist = false;
  const seenMovies = new Set();

  for (let i = 0; i < movieList.length; i++) {
    const firstMovieSeenLength = movieList[i];
    const secondMovieLength = flightTime - firstMovieSeenLength;

    if (seenMovies.has(secondMovieLength)) {
      perfectMovieTimesExist = true;
      break;
    }

    seenMovies.add(firstMovieSeenLength);
  }

  return perfectMovieTimesExist; /* boolean */
}

module.exports = flightMovies;
