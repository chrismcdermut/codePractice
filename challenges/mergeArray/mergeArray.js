//Options
//concatenate and then sort
//sort each and then mergeSort *already sorted so nvm
//sort one and then merge elements in one by one *alreadySorted so nvm
//merge from mergeSort
function mergeArray(input) {
  const leftArray = input[0]
  const rightArray = input[1]
  let combinedArray = []
  let i = 0
  while(leftArray[i]||rightArray[i]){
    //compare
    if(leftArray[i]<rightArray[i]){
      combinedArray.push(leftArray.shift())
    } else if(leftArray[i]>rightArray[i]){
        combinedArray.push(rightArray.shift())
    }
    i++
  }
  return combinedArray
}

module.exports = mergeArray
