const list = [23,4,42,8,16,15];
const quickSort = (list) => {
  if(list.length <2) return list;

  let left = [], right = [];
  const pivot = list.length-1
  const pivotValue = list[pivot];

  console.log('logging list.slice(0,pivot) and wondering about the concat');
  console.log(list.slice(0,pivot))

  list = list.slice(0,pivot).concat(list.slice(pivot + 1));
  console.log('logging list and wondering about the concat');
  console.log(list)

  for (var item of list) {
    item < pivotValue ? left.push(item) : right.push(item);
  }

  return quickSort(left).concat([pivotValue], quickSort(right));
}


console.log(quickSort(list));
