const productOfAll = require('./productOfAll')

const testOne = {
  input: [1, 2, 6, 5, 9],
  output: [540, 270, 90, 108, 60]
}

const testTwo = {
  input: [1, 7, 3, 4],
  output: [84, 12, 28, 21]
}

describe('productOfAll Test', () => {

  test('testOne', ()=>{
    let result = productOfAll(testOne.input)
    expect(result).toEqual(testOne.output);
  })

  test('testTwo', ()=>{
    let result = productOfAll(testTwo.input)
    expect(result).toEqual(testTwo.output);
  })

})
