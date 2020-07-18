function insertionSort1(inputArg) {
  const items = inputArg;
  for (let i = 0; i < items.length; i += 1) {
    const value = items[i];
    // store the current item value so it can be placed right
    for (let j = i - 1; j > -1 && items[j] > value; j -= 1) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[i + 1] = value;
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
