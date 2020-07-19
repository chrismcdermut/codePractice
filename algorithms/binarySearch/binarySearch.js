function binarySearch(list, lookFor) {
  let min = 0;
  let max = list.length;
  let middle;

  // while there is something to search for
  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (list[middle] === lookFor) {
      return middle;
    }
    // eslint-disable-next-line no-unused-expressions
    list[middle] < lookFor ? (min = middle) : (max = middle);
  }
  return -1;
}

module.exports = binarySearch;
