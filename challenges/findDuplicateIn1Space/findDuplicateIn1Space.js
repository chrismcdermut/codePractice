function findDuplicateIn1Space(intArray) {
  const n = intArray.length - 1;

  let location = n + 1; // last node
  for (let i = 0; i < n; i++) {
    location = intArray[location - 1];
  }

  const rememberedPosition = location;
  let currentLocation = intArray[location - 1];
  let stepCount = 1; // This is cycle length variable
  while (currentLocation !== rememberedPosition) {
    currentLocation = intArray[currentLocation - 1];
    stepCount += 1;
  }

  const lengthUntilCycle = n - stepCount;
  location = n + 1;
  for (let i = 0; i < lengthUntilCycle; i++) {
    location = intArray[location - 1];
  }

  let pointerStart = n + 1;
  let pointerAhead = n + 1; // This moves the pointerAhed to head of
  // measureingstick(same as cycle length)
  for (let i = 0; i < stepCount; i++) {
    pointerAhead = intArray[pointerAhead - 1];
  }

  while (intArray[pointerAhead] !== intArray[pointerStart]) {
    pointerAhead = intArray[pointerAhead - 1];
    pointerStart = intArray[pointerStart - 1];
  }
  return pointerAhead;
}

module.exports = findDuplicateIn1Space;
