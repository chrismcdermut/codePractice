/* eslint-disable */
// TODO: enable linting

const list1 = [4, 8, 15, 16, 23, 42];

const binarySearch = (list, lookFor) => {
  let min = 0;
  let max = list.length;
  let middle;

  // while there is something to search for
  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    if (list[middle] === lookFor) {
      return middle;
    }
    list[middle] < lookFor ? (min = middle) : (max = middle);
  }
  return -1;
};

console.log(binarySearch(list1, 15));
