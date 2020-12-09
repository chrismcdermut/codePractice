function binarySearch(list, lookFor) {
  let min = 0;
  let max = list.length;
  let middle;

  // while there is something to search for
  while (min <= max) {
    const pseudoLength = max - min;
    middle = Math.floor((min + max) / 2);
    if (list[middle] === lookFor) {
      return middle;
    }
    if (pseudoLength === 1 && list[middle] !== lookFor) {
      return -1; /* TODO: consolidate return statements */
    }
    // eslint-disable-next-line no-unused-expressions
    list[middle] < lookFor ? (min = middle) : (max = middle);
  }
  return -1; /* TODO: consolidate return statements */
}

function seekElementBinarySearch(array, seekingElement) {
  let bottomElementIndex = 0;
  let topElementIndex = array.length - 1;
  let middleIndex;

  let finalIndex = -1;
  while (bottomElementIndex <= topElementIndex) {
    middleIndex = Math.floor((bottomElementIndex + topElementIndex) / 2);

    if (array[middleIndex] === seekingElement) {
      finalIndex = middleIndex;// we need return finalIndex
      return finalIndex;
    }
    // what if topElementIndex = 0?
    if (array[middleIndex] < seekingElement) {
      // bottomElementIndex is inclusive, and we already compared seekingElement
      // with middleIndex @ line TODO.
      bottomElementIndex = middleIndex + 1;
    } else {
      topElementIndex = middleIndex;
    }
  }
  return finalIndex;
}

module.exports = { binarySearch, seekElementBinarySearch };

// TODO: make this take arguments
module.exports.runBinarySearch = function runBinarySearch() {
  const exampleList = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
  // answer 11
  console.log(binarySearch(exampleList, 67)); /* eslint-disable-line no-console */
};
