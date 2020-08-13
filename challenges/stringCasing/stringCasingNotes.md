stringCasing Notes go here!

const _ = require('lodash');

/**
 *  Problem:  at Outschool, teachers choose the title for the course they
 *  want to offer.  We impose some rules on titles, to convey a professional
 *  appearance.  Each proposed course is reviewed by a trained approver but
 *  we want to guide teachers about what is and is not acceptable.
 *  Among other rules, titles are to be in "title case", which means
 *  * the initial word is always capitalized
 *  * "minor" words that are not the first are not capitalized
 *  * all words that are not minor should always be capitalized
 *
 *  For the sake of this exercise the following words are "minor"
 */

const minorWords = new Set(["a", "an", "and", "as", "as", "at",
        "but", "by", "for", "in", "the"]);

const endingMarkers = new Set([":"]);
 /*
  * Your assignment is to write a function `titleCase(s)` that
  *  - if `s` is already in title-case, returns null
  *  - if `s` is not in title-case, returns an otherwise
  *          equivalent string that is
  *
  * so, for example `titleCase('a day in the life')` should return
  * "A Day in the Life".
  *
  * Be advised that additional rules may be added or discovered after
  * you have implemented `titleCase()` to spec.
  */

  //NOTES
  // "I got a C- but I passed"
  // "I got a C - but I passed"
  // "I got a C: a grade high enough to passed"
 // modifiedSplitString[i-1](check if previousString has colon at end )

  //checkingFunction
  //transformationFunction
  //checkForEndingColon

  function checkForEndingWord(stringElement){
    const stringElementArray = stringElement.split('');
    const isHyphen = stringElement === '-';
    const endsWithColon = endingMarkers.has(stringElementArray[stringElementArray.length-1]);

    return (isHyphen || endsWithColon);

  }

  function transformString(string){
    //break the string into words
    //check the casing of the words, see if it's appropriate,
    //if it is, leave it, if not change it
    const  splitString = string.split(' ')
    const modifiedSplitString = splitString;

    const finalStringArray = modifiedSplitString.map((element, i)=>{
      let modifiedElement;

      const atBeginning = (i===0 || checkForEndingWord(modifiedSplitString[i-1]))

      if(atBeginning){
       modifiedElement = _.capitalize(element) // ignore if it's capital? coudl be an optimization
      } else {
        // const checkingElement = element.toLowerCase();
        modifiedElement = element.toLowerCase()
        if(!minorWords.has(modifiedElement)){// we want this to be lowerCase
          modifiedElement = _.capitalize(modifiedElement)
        }
      }
      return modifiedElement;





    })
    return finalStringArray.join(' ');
  }

  function titleCase(examineString){
    //else transform it and return it
    //if examineString is in proper casing, return null
    const modifiedString = transformString(examineString);
    const answer = examineString === modifiedString ? null : modifiedString
    return answer;

  }


  const assertEqual = (a, b) => {
    if (a !== b) {
      throw new Error(`expect ${b}; received ${a}`);
    }
  };

  assertEqual(titleCase('a day in the life'), "A Day in the Life");

  assertEqual(titleCase('A Day in the Life'), null);
assertEqual(titleCase('a day IN the life'), "A Day in the Life");

// assertEqual(titleCase('A - Day in the life'), "Tuesday: A Day in the 90s");

assertEqual(titleCase('tuesday: a day in the 90s'), "Tuesday: A Day in the 90s");

  console.log('pass');
