// // take the array and which node to check
function sum(arr, idx) {
  // make sure the index is inside of the array
  if (idx - 1 < arr.length) {
    // in case -1 represents null pointer
    if (arr[idx - 1] === -1) return 0;
    return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
  }
  return 0;
}

// /////////WORKING SOLUTION
function bTreeBranchSum(binaryTreeArray) {
  if (!binaryTreeArray || binaryTreeArray.length === 0) {
    return null;
  }
  let answer = null;

  const leftSum = sum(binaryTreeArray, 2);
  const rightSum = sum(binaryTreeArray, 3);
  // TODO: will one branch always be bigger?
  answer = (leftSum > rightSum) ? 'Left' : 'Right';
  return answer;
}

module.exports = { sum, bTreeBranchSum };

// TODO: should this be scrapped?
// function bTreeBranchSum(binaryTreeArray) {
//   if (!binaryTreeArray) return;
//   if (binaryTreeArray.length === 0) return;
//   let answer;
//   let leftSum = 0;
//   let rightSum = 0;
//   const leftBranchIndicies = {
//     1: 1,
//   };
//   const rightBranchIndicies = {
//     2: 1,
//   };
//
//   // loop through, and add to left/right branches
//   for (let i = 0; i < binaryTreeArray.length; i += 1) {
//     // if first node don't add or add to both
//     if (i === 0) {
//       continue;
//     }
//
//     if (leftBranchIndicies[i]) {
//       leftSum += binaryTreeArray[i];
//       continue;
//     }
//     if (rightBranchIndicies[i]) {
//       rightSum += binaryTreeArray[i];
//       continue;
//     }
//
//     // check if is left branch -> add to left branch index list, add to left branch Sum
//     if (leftBranchIndicies[i / 2 - 1] || leftBranchIndicies[i / 2 - 2]) {
//       leftBranchIndicies[i] = 1;
//       leftSum += binaryTreeArray[i];
//     }
//
//     // check if is right branch -> add to right branch index list, add to left right Sum
//     if (rightBranchIndicies[i / 2 - 2] || rightBranchIndicies[i / 2 - 2]) {
//       rightBranchIndicies[i] = 1;
//       rightSum += binaryTreeArray[i];
//     }
//   }
//
//   // return leftSum > rightSum ? leftSum : rightSum;
//   answer = leftSum > rightSum ? leftSum : rightSum;
//   return answer;
// }
//
