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
  // TODO: make this case work
  console.log('NOTHING FOUND CASE WTF');
  return -1;
}

// TESTING

module.exports = { binarySearch };

// TODO: make this take arguments
module.exports.runBinarySearch = function runBinarySearch() {
  const exampleList = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
  // answer 11
  console.log(binarySearch(exampleList, 67)); /* eslint-disable-line no-console */
};
