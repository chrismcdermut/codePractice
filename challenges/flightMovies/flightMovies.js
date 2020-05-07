// find two movies that equal flightTime
function flightMovies(flightTime, movieList) {
  let perfectMovieTimesExist = false;
  // start at first movie and add it to next movies until it equals
  // flightTime wouldbebrute forceapproach,can do somethingliketthis
  const seenMovies = new Set();
  for (let i = 0; i < movieList.length; i++) {
    const firstMovieSeenLength = movieList[i];
    const secondMovieLength = flightTime - firstMovieSeenLength;
    if (seenMovies.has(secondMovieLength)) {
      perfectMovieTimesExist = true;
      console.log('IN BLOCK');
      console.log(perfectMovieTimesExist);
      break;
    }
    console.log('just before adding');
    seenMovies.add(firstMovieSeenLength);
  }
  console.log('before return');
  console.log(perfectMovieTimesExist);
  return perfectMovieTimesExist; /* boolean */
}

module.exports = flightMovies;
