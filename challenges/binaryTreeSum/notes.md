let leftSum
let rightSum

//sum left side
//sum right side
// for(let i=0;i<binaryTreeArray.length;i++){
//   //if first node don't add or add to both
//   if(i===0){continue}
//
//   let previousIndex = i-1
//   //is left
//   if(i===previousIndex*2+1){
//
//   }
// }


// console.log('leftBranchIndicies')
// console.log(leftBranchIndicies)
// console.log('rightBranchIndicies')
// console.log(rightBranchIndicies)
if(leftBranchIndicies[i]){leftSum += binaryTreeArray[i]}
if(rightBranchIndicies[i]){rightSum += binaryTreeArray[i]}
if(leftBranchIndicies[i] || rightBranchIndicies[i]){continue}
