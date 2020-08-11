function determineCarryOperations(firstNumber, secondNumber) {
  let numberOfCarries = 0;
  // const tensPlaceToCheck = 10;
  if (firstNumber + secondNumber < 10) {
    return numberOfCarries;
  }

  // check if opertion has a carry,
  // operation has carry if sum of numbers is 10 or greater, start with singles digits
  // how to find single digit of a number?
  //
  //
  // loop through each tens place and see if there is a carry
  for (let i = 10; i < 1000; i *= 10) {
    const firstNumberRemainder = firstNumber % i;
    console.log('firstNumberRemainder');
    console.log(firstNumberRemainder);

    const secondNumberRemainder = secondNumber % i;
    console.log('secondNumberRemainder');
    console.log(secondNumberRemainder);

    if (firstNumberRemainder + secondNumberRemainder > 10) {
      numberOfCarries += 1;
    }
  }

  // fors first tensPlace
  // for second tensPlace

  return numberOfCarries;
}

module.exports = determineCarryOperations;
