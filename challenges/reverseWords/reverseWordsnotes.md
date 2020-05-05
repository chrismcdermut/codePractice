reverseWords Notes go here!

function reverseWords(message) {
  console.log('initial Message')
  console.log(message)
  let tempWord = []
  let reverseMessage = []
  for(let i=0;i<message.length;i++){

    if(message[i]===' '){
        console.log('...tempWord')
        console.log(...tempWord)
        console.log('[...tempWord]')
        console.log([...tempWord])
        reverseMessage.unshift([...tempWord])
        console.log('reverseMessage')
        console.log(reverseMessage)
        reverseMessage.unshift(' ')
        tempWord = []
        continue
    }

    tempWord.push(message[i])
  }
  console.log('final Message')
  console.log(reverseMessage)
  return reverseMessage
}
