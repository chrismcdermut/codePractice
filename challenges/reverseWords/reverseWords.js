///////INTERVIEW CAKE APPROACH///////
function reversePhrase(message){
  const reversedMessage = message.reverse()
  let finalMessage = []
  console.log('reversedMessage')
  console.log(reversedMessage)

  let currentWordStartIndex = 0;
  for (let i = 0; i <= reversedMessage.length; i++) {

    if (i === reversedMessage.length || reversedMessage[i] === ' ') {

      //remove word
      let currentWord = reversedMessage.slice(currentWordStartIndex,i)
      console.log('currentWord')
      console.log(currentWord)
      //reverse
      let currentWordReversed = currentWord.reverse()
      console.log('currentWordReversed')
      console.log(currentWordReversed)
      //add back to front
      finalMessage.unshift(...currentWordReversed)
      console.log('finalMessage')
      console.log(finalMessage)

      // reverseCharacters(message, currentWordStartIndex, i - 1)

      currentWordStartIndex = i + 1;
    }
  }

  return finalMessage
}

// function reverseWord(word){
//
// }

module.exports = reversePhrase

/////////////MY SOLUTION/////////////
function reverseWords1(message) {
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

/////////////NODE SCRIPT/////////////

module.exports.reverseWords2 = function() {
  const message = [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ]
  console.log('message')
  console.log(message)
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
    //make a word until space
    //put word in first place of array
    //put space in
  }
  console.log('finalMessage')
  console.log(finalMessage)
  return finalMessage
}
