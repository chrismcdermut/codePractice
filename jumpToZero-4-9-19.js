// Given an array and a starting index, determine whether it's possible to reach 0 by starting at
// index and repeatedly jumping left/right the distance found at array[index].
// Return true if it is possible to reach 0, false otherwise.
// Example1: jumpToZero([2, 4, 1, 0, 5], 0); // => true
// Example2: jumpToZero([1, 1, 1, 3, 1, 2, 0, 3], 5); // => true

//1 zero or 0 zeroes
//return true if you can reach 0

const firstArray = [2, 4, 1, 0, 5];

const secondArray = [2, 4, 1, 0, 5, 4, 3, 1, 5, 1, 3];
const thirdArray = [2, 4, 1, 0, 5, 4, 3, 2, 5, 1, 3];

const noZeroeArray = [2, 4, 1, 5];

const chadArray = [1, 1, 1, 3, 1, 2, 0, 3];

const testCase = thirdArray;
const testCasecurrentIndex=7;

//Test cases
//always 0 or positive integer
//no 0
//is the final index actually 0?
//other data types?

const checkForZero = (array) => {
  for(let i=0;i<array.length;i++){

  }
}

//return true if you can reach 0, return false if you cannot reach 0
const jumpToZero = (array, currentIndex) => {
  console.log('jumpToZero running')
  console.log(currentIndex);

    const directionObject = {}

    let JumpRightTarget = currentIndex+array[currentIndex]
    console.log('JumpRightTarget');
    console.log(JumpRightTarget);
    let JumpLeftTarget = currentIndex-array[currentIndex];
    console.log('JumpLeftTarget');
    console.log(JumpLeftTarget);

    if(array[currentIndex] === 0 || array[JumpRightTarget]===0 || array[JumpLeftTarget]===0){
      console.log('true');
      return true;
    }

    //check if jumping left or right is possible
    //only right possible
    if(JumpRightTarget<array.length && JumpLeftTarget<0){
      console.log('jumpRight');
      jumpToZero(array,JumpRightTarget)
    }
    //only left possible
    else if(JumpLeftTarget>=0 && JumpRightTarget>array.length){
      console.log('jumpLeft');
      jumpToZero(array,JumpLeftTarget)
    }
    //left and right possible
    else if(JumpRightTarget<array.length && JumpLeftTarget>=0){
      console.log('get in here??');
      directionObject[currentIndex] ? directionObject[currentIndex]='r':directionObject[currentIndex]='l'
      let directonTarget = directionObject[currentIndex]==='r'?JumpRightTarget:JumpLeftTarget;
      jumpToZero(array,directonTarget)
    } else {
         console.log('false');
        return false;
    }
}

// jumpToZero(testCase,testCasecurrentIndex);

module.exports.runJumpToZero = function() {
  jumpToZero(testCase,testCasecurrentIndex);
}
