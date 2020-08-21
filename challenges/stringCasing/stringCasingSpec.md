stringCasing Spec goes here!

/**
 *  Problem: user choose the title for the course they
 *  want to offer.  We impose some rules on titles, to convey a professional
 *  appearance.  Each proposed course is reviewed by a trained approver but
 *  we want to guide user about what is and is not acceptable.
 *  Among other rules, titles are to be in "title case", which means
 *  * the initial word is always capitalized
 *  * "minor" words that are not the first are not capitalized
 *  * all words that are not minor should always be capitalized
 *
 *  For the sake of this exercise the following words are "minor"
 */

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
