/* eslint-disable */
// TODO: enable linting

const list = [4, 56, 1, 14, 11, 67, 23, 3, 7, 89, 16, 2, 89];

module.exports.bubbleSort = function () {
  let doItAgain = false;
  const limit = list.length;
  const defaultNextValue = Number.POSITIVE_INFINITY;
  for (let i = 0; i < limit; i += 1) {
    const thisValue = list[i];
    const nextValue = i + 1 < limit ? list[i + 1] : defaultNextValue;
    if (nextValue < thisValue) {
      list[i] = nextValue;
      list[i + 1] = thisValue;
      doItAgain = true;
    }
  }
  if (doItAgain) this.bubbleSort(list);
  return list;
};

console.log(this.bubbleSort(list));
