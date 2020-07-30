function insertionSort1(inputArg) {
  const items = inputArg;
  for (let i = 0; i < items.length; i += 1) {
    const value = items[i];
    // store the current item value so it can be placed right
    let j;
    for (j = i - 1; j >= 0 && items[j] > value; j -= 1) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value;
  }

  return items;
}

function insertionSort2(arrayArg) {
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

module.exports = { insertionSort1, insertionSort2 };

// TODO: make this take arguments
module.exports.runInsertionSort1 = function runInsertionSort1() {
  const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
  // answer = [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
  console.log(insertionSort1(list)); /* eslint-disable-line no-console */
};

// TODO: make this take arguments
module.exports.runInsertionSort2 = function runInsertionSort2() {
  const array1 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
  // answer = [ 1,2,3,4,5,6,7,8,9,10 ]
  console.log(insertionSort2(array1)); /* eslint-disable-line no-console */
};
