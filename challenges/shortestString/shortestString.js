//remove by finding section of length k with
//section of K elements with X property
//what is that property?
//want to remove most letters possible
function removeSection(string,K){
    let modifiedString = ''
    let indexOfBestSection = 0
    let mostUniqueCharacters = 0

    //Go through string, 3 letters at a time, counts the unique letters
    //track the section with most unique letters
    //remove the section
    for(let i=0;i<string.length;i++){
      let uniqueCharCounter = 0
      let uniqueCharCounterObj = {}
      let inspectionSection = string.substring(i,(i+K))
      inspectionSection.split('').forEach((character, j) => {
        if(!uniqueCharCounterObj[character]){
          uniqueCharCounterObj[character] = true
          uniqueCharCounter +=1
          if(uniqueCharCounter>mostUniqueCharacters){
            mostUniqueCharacters=uniqueCharCounter
            indexOfBestSection = i
          }
        }
      })
    }
    console.log('bestSection')
    console.log(string.substring(indexOfBestSection,(indexOfBestSection+K)))
    return string.substring(indexOfBestSection,(indexOfBestSection+K))
}

function condenseString(string){
    let condensedString = ''
    let currentElement = ''
    let currentElementCount = 0

    for(let i=0;i<string.length;i++){
        if(currentElement===''){ /*initialize current element(eg, character) for first iteration*/
            currentElement = string[i]
            currentElementCount+=1
        }

        if(string[i+1]===currentElement){ /*if next element is same as current element, increment counter*/
            currentElementCount+=1
            continue
        }

         /*else push it counter and it's element to string */
        let newElement = (currentElementCount === 1) ? currentElement :
        currentElementCount+=currentElement
        condensedString+=newElement
        currentElementCount=0
        currentElement=''
    }
    return condensedString
}

//remove the section first and then condense
//or condense and then remove?
function shortestString(S, K) {
    let shortestPossibleLength

    const shortenedString = removeSection(S, K)
    const condensedString = condenseString(shortenedString)

    return condensedString.length
}

module.exports = {removeSection, condenseString, shortestString}
