// Solution 1
function missingArrayElement1(array, highestNumber) {
  let missingNumber = 0;
  let originalSum = 0;
  let modifiedSum = 0;

  // find sum of original
  for (let i = 1; i <= highestNumber; i += 1) {
    originalSum += i;
  }

  // find sum of mofified array
  modifiedSum = array.reduce((a, b) => a + b, 0);

  // subtract modified from original to find missing int
  missingNumber = (originalSum - modifiedSum);
  return missingNumber;
}

// Solution 2
function missingArrayElement(array, highestNumber) {
  const originalArray = [];
  for (let i = 1; i <= highestNumber; i += 1) {
    originalArray.push(i);
  }

  const missingNumber = originalArray.filter((x) => !array.includes(x));
  return missingNumber[0];
}

module.exports = { missingArrayElement1, missingArrayElement };
