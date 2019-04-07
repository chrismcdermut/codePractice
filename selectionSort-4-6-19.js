let exampleList = [4,56,1,14,11,67,23,3,7,89,16,2,91,34];

module.exports.runSelectionSort = function() {
  console.log(selectionSort(exampleList));
}

// const selectionSort = (list) => {
//   for(let i=0;i<list.length;i++){
//     let currentMinIndex = i
//       for(let j=currentMinIndex+1;j<list.length;j++){
//         if(list[j]<list[currentMinIndex]){
//           currentMinIndex = j
//         }
//       }
//       if(currentMinIndex != i){
//         let oldMinValue = list[i];
//         list[i] = list[currentMinIndex];
//         list[currentMinIndex] = oldMinValue
//       }
//   }
//   return list
// }

const selectionSort = (list) => {
  for(let i=0;i<list.length;i++){
    let currentMinIndex = i;
    for(let j=currentMinIndex+1;j<list.length;j++){
      if(list[j]<list[currentMinIndex]){
        currentMinIndex = j;
      }
    }
    if(currentMinIndex!=i){
      let oldMinValue = list[i];
      list[i] = list[currentMinIndex];
      list[currentMinIndex] = oldMinValue;
    }
  }
  return list
}
