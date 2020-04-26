let exampleList = [4,56,1,14,11,67,23,3,7,89,16,2,91,34];

module.exports.runQuickSort = function() {
  console.log(quickSort(exampleList));
}

const quickSort = (list) => {
  if (list.length < 2) return list;
  let leftList = [];
  let rightList = [];
  let pivot = list.length-1;
  let pivotValue = list[pivot];
  list = list.slice(0,pivot).concat(list.slice(pivot+1))
  for(let item of list) {
    item<pivotValue?leftList.push(item):rightList.push(item);
  }
  return quickSort(leftList).concat([pivotValue],quickSort(rightList))
}
