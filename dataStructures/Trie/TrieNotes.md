Trie Notes go here!

can set up trinary tree, nodes, nested objects
// Given two arrays, find common elements between them.
// elements are only integers
// arrays are not sorted
//return and array of common elements

function testCase1() {
  const array1 = [1,2,3,4,5,5,5,6,7]
  const array2 = [5,5,6,7,8,9,10]
  const answerCommonElements = [5,5,6,7]
  const foundCommonElements = findCommonElements(array1, array2)
  if(foundCommonElements === answerCommonElements){
    console.log('congrats you passed and the found comone elemtns are right')
    return true
  }
     console.log('you failed and the found comone elemtns are not equal')
    return false
}
testCase2();



const findCommonElements = (array1, array2) => {
  const sortedArray1 = array1.sort()
   const sortedArray2 = array2.sort()
   let commonElements = {}
  //firstArray look through
  sortedArray1.forEach((element)=>{
    if(!commoElements[element]){
      commoElements[element] = 0
    }
      commoElements[element]+= 1
  })
  sortedArray2.foreEach((element)=>{
    if(!commoElements[element]){
      commoElements[element] = 0
    }
      commoElements[element]+= 1
  })
  //delete elements with value 1 from map
  commoneElemnts.forEach((element)=>{
    if(element)
  })
  //turn object into array and return
};

hello();
