shortestString Notes go here!

//want to find shortest possible string after removing K elements
//most bang for our buck in removing sequential strings os length K
//want to remove subsection with most single elements
## Learnings
When is something initialized?
-use different for indicies in builtin functions


/////////
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

//want to remove most letters possible
function removeSection(string,K){
    let modifiedString = ''

    let indexOfBestSection = 0
    let bestSectionNumberOfUniqueCharacters = 0

    //Go through string, 3 letters at a time, counts the unique letters
    //track the section with most unique letters
    //remove the section
    for(let i=0;i<string.length;i++){
      let uniqueCharCounter = 0
      let uniqueCharCounterObj = {}
      let inspectionSection = string.substring(i,(i+K))
      // console.log('inspectionSection')
      // console.log(inspectionSection)
      //analyze inspectionSection to count uniqueLetters
      // inspectionSection.split('').forEach(character)
      // inspectionSection.split('').filter((character)=>{
      //   if(!uniqueCharCounterObj[character]){
      //     uniqueCharCounterObj[character]
      //   }
      // })
      inspectionSection.split('').forEach((character, i) => {
        if(!uniqueCharCounterObj[character]){
          uniqueCharCounterObj[character]
          uniqueCharCounter +=1
          if(uniqueCharCounter>=bestSectionNumberOfUniqueCharacters){
            bestSectionNumberOfUniqueCharacters=uniqueCharCounter
            indexOfBestSection = i
          }
        }
      })

    }

    console.log('bestSection')
    console.log(string.substring(indexOfBestSection,(indexOfBestSection+K)))

    return modifiedString
}

function xremoveSection(S,K){
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

function xxremoveSection(string,K){
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
