function reverseWords(message) {
  let finalMessage = []
  let tempWord = []
  // make the new word until space than switch area in the array
  for(let i=0;i<message.length;i++){
    if(i===(message.length-1)){
        tempWord.push(message[i])
        finalMessage.unshift(...tempWord)
        continue
    }
    if(message[i]!==' '){
        tempWord.push(message[i])
        continue
    }
    finalMessage.unshift(...tempWord)
    finalMessage.unshift(' ')
    tempWord = []
  }
  return finalMessage
}

module.exports = reverseWords


/////////////NODE SCRIPT/////////////

// module.exports.reverseWords = function() {
//   const message = [ 'c', 'a', 'k', 'e', ' ',
//             'p', 'o', 'u', 'n', 'd', ' ',
//             's', 't', 'e', 'a', 'l' ]
//   console.log('message')
//   console.log(message)
//   let finalMessage = []
//   let tempWord = []
//   // make the new word until space than switch area in the array
//   for(let i=0;i<message.length;i++){
//     if(i===(message.length-1)){
//         tempWord.push(message[i])
//         finalMessage.unshift(...tempWord)
//         continue
//     }
//     if(message[i]!==' '){
//         tempWord.push(message[i])
//         continue
//     }
//     finalMessage.unshift(...tempWord)
//     finalMessage.unshift(' ')
//     tempWord = []
//     //make a word until space
//     //put word in first place of array
//     //put space in
//   }
//   console.log('finalMessage')
//   console.log(finalMessage)
//   return finalMessage
// }
