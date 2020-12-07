function inflightEntertainment(movieLengths, flightLength) {
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  // goes through each movie
  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];
    const matchingSecondMovieLength = flightLength - firstMovieLength;

    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }

  // We never found a match, so return false
  return false;
}

module.exports = inflightEntertainment;
