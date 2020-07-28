function maxDuffelBagValueWithCapacity1(cakeTypes) {
  let maxValueAtCapacity1 = 0;

  cakeTypes.forEach((cakeType) => {
    if (cakeType.weight === 1) {
      maxValueAtCapacity1 = Math.max(maxValueAtCapacity1, cakeType.value);
    }
  });

  return maxValueAtCapacity1;
}

function findDuffelBagCapacity(cakeTypes, weightCapacity) {
  // Array to hold the maximum possible value at every
  // integer capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    // Set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0; // TODO: why is this done here?

    // TODO: modify this to be personal
    // If the current cake weighs as much or less than the current weight capacity
    // it's possible taking the cake would get a better value
    // cakeTypes.forEach((cakeType) => {
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }
      // If the cake weighs as much or less than the current capacity
      // see what our max value could be if we took it!
      if (cakeType.weight <= currentCapacity) {
        // So we check: should we use the cake or not?
        // If we use the cake, the most kilograms we can include in addition to the cake
        // We're adding is the current capacity minus the cake's weight. we find the max
        // value at that integer capacity in our array maxValuesAtCapacities
        const remainingCapacityAfterTakingCake = currentCapacity - cakeType.weight;
        const maxValueUsingCake = cakeType.value
        + maxValuesAtCapacities[remainingCapacityAfterTakingCake];

        // Now we see if it's worth taking the cake. how does the
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }
    // Add each capacity's max value to our array so we can use them
    // when calculating all the remaining capacities
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }
  return maxValuesAtCapacities[weightCapacity];
}

module.exports = { maxDuffelBagValueWithCapacity1, findDuffelBagCapacity };
