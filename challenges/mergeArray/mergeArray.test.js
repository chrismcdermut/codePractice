const mergeArray = require('./mergeArray')

const testOne = {
  input: [[3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]],
  output: [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
}

describe('mergeArray Test', () => {

  test('testOne', ()=>{
    let result = mergeArray(testOne.input)
    expect(result).toEqual(testOne.output);
  })

})