/* eslint-disable */
// TODO: enable linting

// Given an array and a starting index, determine whether it's possible to reach 0 by starting at
// index and repeatedly jumping left/right the distance found at array[index].
// Return true if it is possible to reach 0, false otherwise.
// Example1: jumpToZero([2, 4, 1, 0, 5], 0); // => true
// Example2: jumpToZero([1, 1, 1, 3, 1, 2, 0, 3], 5); // => true

// 1 zero or 0 zeroes
// return true if you can reach 0

const firstArray = [2, 4, 1, 0, 5];

const secondArray = [2, 4, 1, 0, 5, 4, 3, 1, 5, 1, 3];

const noZeroeArray = [2, 4, 1, 5];

const chadArray = [1, 1, 1, 3, 1, 2, 0, 3];

const testCase = chadArray;
const testCaseStartingIndex = 5;

// always 0 or positive integer
// no 0
// is the final index actually 0?
// other data types?

// Test cases
//

const checkForZero = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(i);
  }
  return array;
};

// return true if you can reach 0, return false if you cannot reach 0
const jumpToZero = (array, startingIndex) => {
  console.log('function running');
  // if(array[startingIndex] === 0 ){
  //   console.log('true');
  //   return true;
  //  };

  const JumpRightTarget = startingIndex + array[startingIndex];
  const JumpLeftTarget = startingIndex - array[startingIndex];

  if (
    array[startingIndex] === 0
    || array[JumpRightTarget] === 0
    || array[JumpLeftTarget] === 0
  ) {
    console.log(true);
    return true;
  }

  // check if jumping left or right is possible
  // jump right
  if (JumpRightTarget < array.length) {
    // if the target is 0, we're good, else keep checking
    jumpToZero(array, JumpRightTarget);
  } else if (JumpLeftTarget >= 0) {
    // if the target is 0, we're good, else keep checking

    jumpToZero(array, JumpLeftTarget);
  } else {
    console.log('false');
    return false;
  }
};

// jumpToZero(testCase,testCaseStartingIndex);

module.exports.runJumpToZero = function () {
  jumpToZero(testCase, testCaseStartingIndex);
};
