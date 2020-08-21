binarySearch Notes go here!

//check to see which half of the array the seekingElement is
    //[1,2,3,4,5,6,7]. Target = 5
    //[1,2,3,4] [,5,6,7]. Target = 5 if target is in bigger half, then bottom index is middle "3"
    // and the top is the still the end new array is from index 3 to end of previous array
    // [4,5,6,7]
    // [,5,] [6,7]. Target = 5, middleINdex=?, topElementIndex=?

//array.slice(start, end) end is not inclusive

// educative.io
// leetcode.com
