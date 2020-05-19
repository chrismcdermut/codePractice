// Options
// concatenate and then sort
// sort each and then mergeSort *already sorted so nvm
// sort one and then merge elements in one by one *alreadySorted so nvm
// merge from mergeSort
function mergeArray(input) {
  const left = input[0];
  const right = input[1];
  const combinedArray = [];
  // if there is anything left in either array
  while (left.length || right.length) {
    // if both have values
    if (left.length && right.length) {
      // if (left[0]===right[0]){
      //   combinedArray.push(left.shift())
      //   combinedArray.push(right.shift())
      // }
      // if left value is lower then put it in the final array
      if (left[0] <= right[0]) {
        combinedArray.push(left.shift());
      } else { /* if right value is lower then put it in the final array */
        combinedArray.push(right.shift());
      }
    } else if (left.length) { /* if just left is left, than put its value in final array */
      combinedArray.push(left.shift());
    } else { /* if just right is left, than put its value in final array */
      combinedArray.push(right.shift());
    }
  }
  return combinedArray;
}

// ////////////Cleanest///////////////

function mergeArraysClean(firstArray, secondArray) {
  const finalArray = [];

  let currentIndexFirst = 0;
  let currentIndexSecond = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < (finalArray.length + secondArray.length)) {
    const firstArrayDone = currentIndexFirst >= firstArray.length;
    const secondArrayDone = currentIndexSecond >= secondArray.length;

    // first array has values left and second array is done or
    // first array element is less than second array element
    if (!firstArrayDone && (secondArrayDone
      || (firstArray[currentIndexFirst] < secondArray[currentIndexSecond])
    )) {
      finalArray[currentIndexMerged] = firstArray[currentIndexFirst];
      currentIndexFirst++;
    } else {
      finalArray[currentIndexMerged] = secondArray[currentIndexSecond];
      currentIndexSecond++;
    }
    currentIndexMerged++;
  }
  return finalArray;
}

module.exports = { mergeArray, mergeArraysClean };
