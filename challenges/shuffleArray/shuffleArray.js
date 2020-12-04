function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function naiveShuffle(arrayArg) {
  const array = arrayArg;
  // For each index in the array
  for (let firstIndex = 0; firstIndex < array.length; firstIndex++) {
  // Grab a random other index
    const secondIndex = getRandom(0, array.length - 1);

    // And swap the values
    if (secondIndex !== firstIndex) {
      const temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
    }
  }
  return array;
}

function proShuffle(arrayArg) {
  const array = arrayArg;
  for (let i = 0; i < array.length; i++) {
    // the window for choosing the index is smaller as the iteration goes on
    const randomIndex = getRandom(i, array.length - 1);

    if (randomIndex !== i) {
      const temp = array[i];
      array[i] = array[randomIndex];
      array[randomIndex] = temp;
    }
  }
  return array;
}

module.exports = { naiveShuffle, proShuffle };
