function merge(left, right) {
  const result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}

function mergeSort(listArg) {
  const list = listArg;

  if (list.length <= 1) return list;

  const middle = list.length / 2;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = { mergeSort };

// TODO: make this take arguments
module.exports.runMergeSort = function runMergeSort() {
  const exampleList = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 91, 34];
  // answer [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91]
  console.log(mergeSort(exampleList)); // eslint-disable-line no-console
};
