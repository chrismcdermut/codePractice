'use strict'

const string = "toyotaLandCruiser"
const longString = "I am studying so hard"

//using array functionality
function reverseString(str) {
        const splitString = str.split("");
        const reverseString = splitString.reverse();
        const newString = reverseString.join("");
    console.log(newString);
    return newString;
}
reverseString(longString);

function findLongestWord(str) {
    const splitString = str.split(" ");
    const longestWord = null;
    for (const i=0;i<splitString.length;i++){
        if(splitString[i].length>longestWord.length){
            longestWord = splitString[i]
        }
    }
}
