function findDuplicateInLL(input) {
  const intArray = input;
  const n = intArray.length - 1;

  // STEP 1: GET INSIDE A CYCLE
  // Start at position n+1 and walk n steps to
  // Find a position guaranteed to be in a cycle
  // end has no pointers because length is n+1, so there's a duplicate
  let positionInCycle = n + 1;
  for (let i = 0; i < n; i++) {
    positionInCycle = intArray[positionInCycle - 1];
  }

  // STEP 2: FIND THE LENGTH OF THE CYCLE
  // Find the length of the cycle by remembering a position in the cycle
  // and counting the steps it takes to get back to that position
  const rememberedPositionInCycle = positionInCycle;
  let currentPositionInCycle = intArray[positionInCycle - 1]; // 1 step ahead
  let cycleStepCount = 1;

  while (currentPositionInCycle !== rememberedPositionInCycle) {
    currentPositionInCycle = intArray[currentPositionInCycle - 1];
    cycleStepCount += 1;
  }

  // STEP 3: FIND THE FIRST NODE OF THE CYCLE
  // Start two pointers
  //   (1) at position n+1
  //   (2) ahead of position n+1 as many steps as the cycle's length
  let pointerStart = n + 1;
  let pointerAhead = n + 1;
  // TODO: I feel like this doesn't need to be a loop
  for (let i = 0; i < cycleStepCount; i++) {
    pointerAhead = intArray[pointerAhead - 1];
  }

  // Advance until the pointers are in the same position
  // which is the first node in the cycle
  while (pointerStart !== pointerAhead) {
    pointerStart = intArray[pointerStart - 1];
    pointerAhead = intArray[pointerAhead - 1];
  }

  // Since there are multiple values pointing to the first node
  // in the cycle, its position is a duplicate in our array
  return pointerStart;
}

module.exports = findDuplicateInLL;
