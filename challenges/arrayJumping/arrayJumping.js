function checkForZero(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(i);
  }
  return array;
}

// TODO: make this case work
function jumpToZero(array, startingIndex) {
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
    return false;
  }
  return null; // TODO: fix this
}

module.exports = { checkForZero, jumpToZero };
module.exports.runJumpToZero = function () {
  const testCase = [2, 4, 1, 0, 5, 4, 3, 1, 5, 1, 3];
  const testCaseStartingIndex = 5;
  jumpToZero(testCase, testCaseStartingIndex);
};
