const arrayRotateLeft = require('./arrayRotateLeft');

const testOne = {
  input: [1,2,3,4,5],
  shift: 4,
  output:[5,1,2,3,4]
}

describe('arrayRotateLeft Test Suite', function () {

    test(`${testOne.input} palindrome test`, () => {
      let result = arrayRotateLeft(testOne.input, testOne.shift)
      expect(result).toEqual(testOne.output);
    });

})
