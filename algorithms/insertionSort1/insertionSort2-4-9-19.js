/* eslint-disable */
// TODO: enable linting

// array to sort
const array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(arrayArg) {
  const array = arrayArg;
  for (let i = 0; i < array.length; i += 1) {
    const temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j -= 1;
    }
    array[j + 1] = temp;
  }
  return array;
}

// console.log(insertionSort(array));

module.exports.runInsertionSort = function () {
  console.log(insertionSort(array1));
};
