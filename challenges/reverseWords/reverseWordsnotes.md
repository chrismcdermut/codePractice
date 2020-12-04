reverseWords Notes go here!

error    Assignment to function parameter 'leftIndex'   no-param-reassign
  48:7   error    Assignment to function parameter 'rightIndex'  no-param-reassign
//mutate is okay but reassignment is not

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
