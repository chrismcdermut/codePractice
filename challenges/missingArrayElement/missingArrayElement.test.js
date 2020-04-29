const missingArrayElement = require('./missingArrayElementSolution');

const testOne =  {
    highestNumber:10,
    input:[1,2,3,4,5,6,7,8,10],
    output:9
}

const testTwo =  {
    highestNumber:10,
    input:[1,3,4,5,6,7,8,9,10],
    output:2
}

const testThree =  {
    highestNumber:10,
    input:[1,2,3,4,5,6,8,9,10],
    output:7
}

const testFour =  {
    highestNumber:20,
    input:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
    output:7
}

const testFive =  {
    highestNumber:20,
    input:[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20],
    output:14
}

describe('Missing array element module', function () {

    test(`${testOne.input} test`, () => {
      let result = missingArrayElement(testOne.input, testOne.highestNumber)
      expect(result).toBe(testOne.output);
    });

    test(`${testTwo.input} test`, () => {
      let result = missingArrayElement(testTwo.input, testTwo.highestNumber)
      expect(result).toBe(testTwo.output);
    });

    test(`${testThree.input} test`, () => {
      let result = missingArrayElement(testThree.input, testThree.highestNumber)
      expect(result).toBe(testThree.output);
    });

    test(`${testFour.input} test`, () => {
      let result = missingArrayElement(testFour.input, testFour.highestNumber)
      expect(result).toBe(testFour.output);
    });

    test(`${testFive.input} test`, () => {
      let result = missingArrayElement(testFive.input, testFive.highestNumber)
      expect(result).toBe(testFive.output);
    });

})
