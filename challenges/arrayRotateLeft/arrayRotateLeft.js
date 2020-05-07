// Complete the rotLeft function below.
function rotLeft(a, d) {
  const originalArray = [...a];
  const shiftedArray = [...a];
  for (let i = 0; i < originalArray.length; i += 1) {
    const shiftIndex = i - d >= 0 ? i - d : i - d + originalArray.length;
    shiftedArray.splice(shiftIndex, 1, originalArray[i]);
  }
  return shiftedArray;
}

module.exports = rotLeft;
