function missingArrayElement(array, highestNumber) {
  let missingNumber
  let originalSum = 0
  let modifiedSum = 0
  //find sum of original
  for(let i=0; i<highestNumber;i++){
    originalSum += (i+1)
  }

  //find sum of modified
  for(let j=0; j<array.length;j++){
    modifiedSum += array[j]
  }

  //subtract modified from original to find missing int
  return (originalSum - modifiedSum)
}

module.exports = missingArrayElement
