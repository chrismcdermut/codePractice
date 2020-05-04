//interviewCake solution
function reverseArrayInPlace(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }

  return arrayOfChars
}

module.exports = reverseArrayInPlace

//my solution
// function reverseArrayInPlace(array) {
//   let reversedArray = []
//   for(let i=0;i<array.length/2;i++){
//     let earlyElement = array[i]
//     let lateElement = array[array.length-1-i]
//     reversedArray[i] = lateElement
//     reversedArray[array.length-1-i] = earlyElement
//   }
//   return reversedArray
// }
