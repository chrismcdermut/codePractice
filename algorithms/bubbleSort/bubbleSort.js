function bubbleSort(input) {
  const list = input;
  let doItAgain = false;
  const limit = list.length;
  const defaultNextVal = Number.POSITIVE_INFINITY;

  for (let i = 0; i < limit; i += 1) {
    const thisValue = list[i];
    const nextValue = i + 1 < limit ? list[i + 1] : defaultNextVal;

    if (nextValue < thisValue) {
      list[i] = nextValue;
      list[i + 1] = thisValue;
      doItAgain = true;
    }
  }
  if (doItAgain) {
    bubbleSort(list);
  }
  return list;
}

module.exports = { bubbleSort };

// TODO: make this take arguments
module.exports.runBubbleSort = function () {
  const list = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 89];
  // answer [1,2,3,4,7,11,14,16,23,56,67,89,89];
  console.log(bubbleSort(list));
};
