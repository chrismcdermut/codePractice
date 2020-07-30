function selectionSort(listArg) {
  const list = listArg;
  for (let i = 0; i < list.length; i += 1) {
    let currentMinIndex = i;
    for (let j = currentMinIndex + 1; j < list.length; j += 1) {
      if (list[j] < list[currentMinIndex]) {
        currentMinIndex = j;
      }
    }
    if (currentMinIndex !== i) {
      const oldMinValue = list[i];
      list[i] = list[currentMinIndex];
      list[currentMinIndex] = oldMinValue;
    }
  }
  return list;
}

module.exports = { selectionSort };

module.exports.runSelectionSort = function runSelectionSort() {
  const exampleList = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34];
  // answer [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91]
  console.log(selectionSort(exampleList)); // eslint-disable-line no-console
};
