/* eslint-disable */
// TODO: enable linting

const list1 = [23, 4, 42, 8, 16, 15];
const quickSort = (listArg) => {
  let list = listArg;
  if (list.length < 2) return list;

  const left = [];
  const right = [];
  const pivot = list.length - 1;
  const pivotValue = list[pivot];

  console.log('logging list.slice(0,pivot) and wondering about the concat');
  console.log(list.slice(0, pivot));

  list = list.slice(0, pivot).concat(list.slice(pivot + 1));
  console.log('logging list and wondering about the concat');
  console.log(list);

  // for (const item of list) {
  //   item < pivotValue ? left.push(item) : right.push(item);
  // }
  list.forEach((item) => {
    item < pivotValue ? left.push(item) : right.push(item);
  });

  return quickSort(left).concat([pivotValue], quickSort(right));
};

console.log(quickSort(list1));
