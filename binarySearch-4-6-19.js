let exampleList = [1,2,3,4,7,11,14,16,23,34,56,67,89,91];

module.exports.runBinarySearch = function() {
  console.log(binarySearch(exampleList, 67));
}

const binarySearch = (list, searchValue) => {
  let min=0, max=list.length;
  let middle;
  while(min<=max){
    middle=Math.floor((min+max)/2);
    if(list[middle] === searchValue){
      return middle
    } else {
      list[middle]>searchValue ? max=middle : min=middle;
    }
  }
  return -1
}

// const binarySearch = (list, lookFor) => {
//   let min = 0;
//   let max = list.length;
//   let middle;
//   while(min<=max){
//     middle = Math.floor((min+max)/2)
//     if(list[middle]===lookFor) {
//       return middle
//     } else {
//       lookFor<list[middle]?max=middle:min=middle;
//     }
//   }
//   return -1
// }
