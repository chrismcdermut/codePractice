function rotationPoint(input) {
  let newArray = [];
  newArray = input.filter((nextElement, i, array) => {
    if (i === 0) { return false; }
    const previousElement = array[i - 1];
    const currentElement = array[i];
    return (currentElement < previousElement);
  });
  return input.indexOf(newArray[0]);
}

// infinite loop, noooo!
function findRotationPoint(elementArrayArg) {
  let rotationPointIndex;
  const elementArray = elementArrayArg;
  const middle = elementArray.length / 2;
  const leftArray = elementArray.slice(0, middle);
  const rightArray = elementArray.slice(middle);

  // if leftArrayEnd is bigger than beginning,
  // it is fine, look at rightArray
  // else lets look into it
  if (leftArray[0] < leftArray[leftArray.length - 1]
    && rightArray[0] < rightArray[rightArray.length - 1]
  ) { // it is fine
    [rotationPointIndex] = rightArray;
  } else if (leftArray[0] > leftArray[leftArray.length - 1]) { // leftArray contains rotation point
    findRotationPoint(leftArray);
  } else { // rightArray contains rotation point
    findRotationPoint(rightArray);
  }

  return rotationPointIndex;
}

function findRotationPointCheck(inputArg) {
  const firstElement = inputArg[0];
  let floorIndex = 0;
  let ceilingIndex = inputArg.length - 1;

  while (floorIndex < ceilingIndex) {
    const middleIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2);

    // if first element is less than the middleValue -> rotationPoint is in rightArray
    if (firstElement < inputArg[middleIndex]) {
      floorIndex = middleIndex;
    } else {
      ceilingIndex = middleIndex;
    }

    if (floorIndex + 1 === ceilingIndex) {
      break;
    }
  }
  return ceilingIndex;
}

module.exports = { rotationPoint, findRotationPoint, findRotationPointCheck };
