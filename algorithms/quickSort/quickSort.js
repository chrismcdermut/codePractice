function quickSort(listArg) {
  let list = listArg;
  if (list.length < 2) return list;
  const leftList = [];
  const rightList = [];
  const pivot = list.length - 1;
  const pivotValue = list[pivot];
  list = list.slice(0, pivot).concat(list.slice(pivot + 1));
  // for (const item of list) {
  //   item < pivotValue ? leftList.push(item) : rightList.push(item);
  // }
  list.forEach((item) => {
    // eslint-disable-next-line no-unused-expressions
    item < pivotValue ? leftList.push(item) : rightList.push(item);
  });

  const sortedList = quickSort(leftList).concat([pivotValue], quickSort(rightList));
  return sortedList;
}

module.exports = quickSort;
