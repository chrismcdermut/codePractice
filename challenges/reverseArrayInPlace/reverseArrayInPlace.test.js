const reverseArrayInPlace = require('./reverseArrayInPlace')

const testOne = {
  input: ['a','b','c','d','e'],
  output: ['e','d','c','b','a']
}

const testTwo = {
  input: ['c','h','r','i','s'],
  output: ['s','i','r','h','c']
}

const testThree = {
  input: ['a','a','b','b'],
  output: ['b','b','a','a']
}

describe('reverseArrayInPlace Test', () => {

  test('testOne', ()=>{
    let result = reverseArrayInPlace(testOne.input)
    expect(result).toEqual(testOne.output);
  })

  test('testTwo', ()=>{
    let result = reverseArrayInPlace(testTwo.input)
    expect(result).toEqual(testTwo.output);
  })

  test('testThree', ()=>{
    let result = reverseArrayInPlace(testThree.input)
    expect(result).toEqual(testThree.output);
  })

})
