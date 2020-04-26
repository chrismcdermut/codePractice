// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function testSingleOutput() {

}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //take in array, sort it, loop through until lowest value is found
    console.log('logging A')
    console.log(A)
    //Sort array with built in function
    const sortedArray = A.sort()
    console.log('logging sortedArray')
    console.log(sortedArray)

    //go through sorted array
        //if the number is positive
        //if the number is integer // all are integers
        //if the number is not in list of positive integers, return it and end loop
    for(let i=0;i<sortedArray.length;i++){
        //could cut off negatives by smartly checking for them and cutting off
        if(sortedArray[i]<=0){break;}
        // if((i+1<=sortedArray.length) && (sortedArray[i+1]-sortedArray[i]>1)) {
        if (
            (((i+1)<=sortedArray.length) &&
            ((sortedArray[i+1]-sortedArray[i]) === (0||1)
            ) {
            break;
        }
        // console.log('(sortedArray[i+1]-sortedArray[i])')
        // console.log((sortedArray[i+1]-sortedArray[i]))

        // if((sortedArray[i+1]-sortedArray[i]>1)) {
        //     console.log('sortedArray[i]+1')
        //     console.log(sortedArray[i]+1)
        //     return (sortedArray[i]+1)
        // }

        return sortedArray[i] + 1
    }
}
