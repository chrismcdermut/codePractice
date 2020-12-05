function compareNumbers(a, b) {
  return a - b;
}

function duplicateElementCheck(listArg) {
  const copiedList = listArg;
  const sortedList = copiedList.sort(compareNumbers);
  let duplicateElement;
  let bottom = 0; /* index */
  let top = sortedList.length; /* index */
  let middle; /* index */

  // divide in two, if the last element is less then firstelement plus n the duplicate is in there.
  while (bottom <= top) {
    middle = Math.floor((bottom + top) / 2);
    // have a break out/return
    if (sortedList[bottom] === sortedList[top]) {
      duplicateElement = sortedList[bottom];
      break;
    }

    // if last value is < than beginnging + n (length of list), then dup is in that half
    if (sortedList[top - 1] < (sortedList[middle] + (top - 1 - middle))) {
      bottom = middle;
    } else {
      top = middle;
    }
  }

  return duplicateElement;
}

module.exports = { compareNumbers, duplicateElementCheck };
