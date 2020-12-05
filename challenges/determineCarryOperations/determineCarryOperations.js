function findOrderOfMagnitude(n) {
  return (Math.floor(Math.log(n) / Math.LN10
                       + 0.000000001)); // because float math sucks like that
}

function convert(n) {
  const order = Math.floor(Math.log(n) / Math.LN10
                       + 0.000000001); // because float math sucks like that
  return 10 ** order;
}

function determineCarryOperations(firstNumber, secondNumber) {
  let numberOfCarries = 0;
  const orderOfMagnitude = findOrderOfMagnitude(firstNumber + secondNumber);
  let firstNumberRemainder;
  let secondNumberRemainder;

  for (let i = 0; i < orderOfMagnitude; i++) {
    const order = 10 ** i;
    firstNumberRemainder = Math.floor((firstNumber / order) % 10);
    secondNumberRemainder = Math.floor((secondNumber / order) % 10);
    if (firstNumberRemainder + secondNumberRemainder > 10) {
      numberOfCarries += 1;
    }
  }

  return numberOfCarries;
}

module.exports = { findOrderOfMagnitude, convert, determineCarryOperations };
