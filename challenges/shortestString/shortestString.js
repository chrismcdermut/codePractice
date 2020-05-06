//remove by finding section of length k with
function removeSection(S,K){
    let modifiedString = ''
    //want to remove most letters possible
    let beginningIndexOfBestSection = 0
    let numberOfLettersInBestSection = 1
    // let bestLettersSection
    // let currentLettersArray=[]
    // this is O(n^2) so need to optimie this
    for(let i=0;i<S.length-K;i++){
        let currentLettersArray=[]
        let beginningIndexOfCurrentSection = i
        currentLettersArray.push(S[i])

        for(let j=i+1;j<(i+K);j++){
            if(currentLettersArray.includes(S[j])){
               continue
            } else {
                currentLettersArray.push(S[j])
                if(currentLettersArray.length>=numberOfLettersInBestSection){
                    numberOfLettersInBestSection=currentLettersArray.length
                    beginningIndexOfBestSection=i
                }
            }
        }
    }
    // modifiedString = S.substring(beginningIndexOfBestSection,K)
    modifiedString = S.replace(S.substring(beginningIndexOfBestSection,K),'')
    return modifiedString
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
        } else { /*else push it counter and it's element to string */
            let newElement = (currentElementCount === 1) ? currentElement :
            currentElementCount+=currentElement
            condensedString+=newElement
            currentElementCount=0
            currentElement=''
        }
    }
    return condensedString
}

//remove the section first and then condense or the other way?
function shortestString(S, K) {
    let shortestPossibleLength

    const shortenedString = removeSection(S, K)
    const condensedString = condenseString(shortenedString)

    return condensedString.length
}

module.exports = {removeSection, condenseString, shortestString}
