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

module.exports = bubbleSort;
