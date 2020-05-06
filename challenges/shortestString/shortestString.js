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
    console.log('S')
    console.log(S)
    modifiedString = S.replace(S.substring(beginningIndexOfBestSection,K),'')
    console.log('modifiedString')
    console.log(modifiedString)
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

//want to find shortest possible string after removing K elements
//most bang for our buck in removing sequential strings os length K
//want to remove subsection with most single elements

//remove the section first and then condense
//remove by finding section of length k with
function shortestString(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let shortestPossibleLength

    const shortenedString = removeSection(S, K)
    const condensedString = condenseString(shortenedString)

    return condensedString.length
}

module.exports = {removeSection, condenseString, shortestString}
