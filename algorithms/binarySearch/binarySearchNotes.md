binarySearch Notes go here!

// Given an unique sorted ascending array, find a target of its index.
// e.g: [1,3,5,7,9,10,56,78,90,100, 1001] target=9 and we should return its index in the array.
// target = 9 then return 4 (0-based)
// target = 1 then return 0
// target = -1 then return -1


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// if(seekingElement>shrinkingArray[middleIndex]){
//             bottomElementIndex = middleIndex
//         } else {
//             shrinkingArray = shrinkingArray.slice(0,middleIndex)
// }

//check to see which half of the array the seekingElement is
    //[1,2,3,4,5,6,7]. Target = 5
    //[1,2,3,4] [,5,6,7]. Target = 5 if target is in bigger half, then bottom index is middle "3"
    // and the top is the still the end new array is from index 3 to end of previous array
    // [4,5,6,7]
    // [,5,] [6,7]. Target = 5, middleINdex=?, topElementIndex=?

//array.slice(start, end) end is not inclusive
function seekElementBinarySearch(array, seekingElement) {
    let bottomElementIndex = 0;
    let topElementIndex = array.length-1;
    let middleIndex;

    let finalIndex = -1;
    // [4] target = 5
    while(bottomElementIndex<=topElementIndex){//The problem is in this line
        // console.log(middleI)
        // bottomElementIndex = 0, middleIndex = 0
        let middleIndex = Math.floor((bottomElementIndex+topElementIndex)/2);

        if(array[middleIndex] === seekingElement){
            finalIndex = middleIndex;// we need return finalIndex
            return finalIndex;
        }
        //what if topElementIndex = 0?
        if(array[middleIndex]<seekingElement) {
            bottomElementIndex = middleIndex + 1 // bottomElementIndex is inclusive, and we already compared seekingElement with middleIndex @ line 54.
        } else {
            topElementIndex = middleIndex
        }

    }
    return finalIndex;
}

// educative.io
// leetcode.com

//TDD case 1
function testCase1(){
    const array = [1,3,5,7,9,10,56,78,90,100, 1001];
    const seeker = 9;
    const answer = 4
    const result = seekElementBinarySearch(array, seeker)
    return result === answer ? true : false;
}

function testCase2(){
    const array = [1,3,5,7,9,10,56,78,90,100, 1001];
    const seeker = 3;
    const answer = 1
    const result = seekElementBinarySearch(array, seeker)
    return result === answer ? true : false;
}

function testCase3(){
    const array = [4, 8, 15, 16, 23, 42];
    const seeker = 15;
    const answer = 2
    const result = seekElementBinarySearch(array, seeker)
    return result === answer ? true : false;
}

function testCase4(){
    const array = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    const seeker = 67;
    const answer = 11
    const result = seekElementBinarySearch(array, seeker)
    return result === answer ? true : false;
}

function testCase5(){
    const array = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    const seeker = 200;
    const answer = -1
    const result = seekElementBinarySearch(array, seeker)
    return result === answer ? true : false;
}

function testCase6(){
    const array = [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    // const seeker = 200;
    const answerObject = {
        1:0,
        2:1,
        3:2,
        4:3,
        7:4,
        11:5,
        14:6,
        16:7,
        23:8,
        34:9,
        56:10,
        67:11,
        89:12,
        91:13
    }
    for(let i=0;i<array.length;i++){
        if(seekElementBinarySearch(array, array[i]) !== answerObject[array[i]]){
            console.log('FAILURE IN testcase6 for array[i]')
        }
    }
    // const result = seekElementBinarySearch(array, seeker)
    // return result === answer ? true : false;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    const testCaseResult1 = testCase1()
    console.log("The testCaseResult1 is passing if true, not if false look at result ->> " + testCaseResult1);
    const testCaseResult2 = testCase2()
    console.log("The testCaseResult2 is passing if true, not if false look at result ->> " + testCaseResult2);
    const testCaseResult3 = testCase2()
    console.log("The testCaseResult3 is passing if true, not if false look at result ->> " + testCaseResult3);
    const testCaseResult4 = testCase2()
    console.log("The testCaseResult4 is passing if true, not if false look at result ->> " + testCaseResult4);
    const testCaseResult5 = testCase2()
    console.log("The testCaseResult5 is passing if true, not if false look at result ->> " + testCaseResult5);
    testCase6()
    //for each in [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91];
    //    seekElementBinarySearch(each, [1, 2, 3, 4, 7, 11, 14, 16, 23, 34, 56, 67, 89, 91])
}
