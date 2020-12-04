function duplicateElementCheck(listArg) {
  const copiedList = listArg;
  const sortedList = copiedList.sort();
  let duplicateElement;
  let min = 0; /* index */
  let max = sortedList.length; /* index */
  let middle; /* index */
  let counter = 0;

  // divide in two, if the last element is less then firstelement plus n the duplicate is in there.
  while (min <= max && counter < 100) {
    middle = Math.floor((min + max) / 2);
    console.log('middle');
    console.log(middle);
    // have a break out/return

    // if last value is < than beginnging + n (length of list), then dup is in that half
    if (sortedList[max - 1] < (sortedList[middle] + (max - 1 - middle))) {
      console.log('IN THIS GOOFY IF STATEMENT');
      console.log('sortedList[middle]');
      console.log(sortedList[middle]);
      min = middle;
    } else {
      max = middle;
    }

    counter += 1;
  }

  return duplicateElement;
}

module.exports = duplicateElementCheck;
