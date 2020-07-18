const merge = (left, right) => {
  const results = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    } else if (left.length) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results;
};

const mergeSort = (listArg) => {
  const list = listArg;

  if (list.length <= 1) return list;

  const middle = list.length / 2;
  const leftList = list.slice(0, middle);
  const rightList = list.slice(middle, list.length);

  return merge(mergeSort(leftList), mergeSort(rightList));
};

module.exports.runMergeSort = function () {
  const exampleList = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34];
  console.log(mergeSort(exampleList));
};
