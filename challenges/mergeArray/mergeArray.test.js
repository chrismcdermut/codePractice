const mergeArray = require('./mergeArray')

const testOne = {
  input: [[3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
}

const testTwo = {
  input: [[3, 4, 6, 10, 11, 15], [1, 5, 8]],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 15]
}

const testThree = {
  input: [[3, 4, 6, 10, 11, 15], [1]],
  output: [1, 3, 4, 6, 10, 11, 15]
}

const testFour = {
  input: [[3, 4, 6, 10, 11, 15], []],
  output: [3, 4, 6, 10, 11, 15]
}

const testFive = {
  input: [[1, 4, 6, 10, 11, 15], [1]],
  output: [1,1,3, 4, 6, 10, 11, 15]
}

xdescribe('mergeArray Test', () => {

  test('testOne', ()=>{
    let result = mergeArray(testOne.input)
    expect(result).toEqual(testOne.output);
  })

  test('testTwo', ()=>{
    let result = mergeArray(testTwo.input)
    expect(result).toEqual(testTwo.output);
  })

  test('testThree', ()=>{
    let result = mergeArray(testThree.input)
    expect(result).toEqual(testThree.output);
  })

  test('testFour', ()=>{
    let result = mergeArray(testFour.input)
    expect(result).toEqual(testFour.output);
  })

  xtest('testFive', ()=>{
    let result = mergeArray(testFive.input)
    expect(result).toEqual(testFive.output);
  })

})
