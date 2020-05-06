const shortestString = require('./shortestString')

const test1 = {
  input: ['ABBBCCDDCCC', 3],
  bestRemovedSection: 'CDD',
  modifiedString: 'A3B4C',
  output: 5
}

const test2 = {
  input: ['AAAAAAAAAAABXXAAAAAAAAAA', 3],
  bestRemovedSection: 'BXX',
  modifiedString: 'AAAAAAAAAAAAAAAAAAAAA',
  condensedModifiedString: '21A',
  output: 3
}

const test3 = {
  input: ['ABCDDDEFG', 2],
  bestRemovedSection: 'EF',
  modifiedString: 'ABCDDDG',
  condensedModifiedString: 'ABC3DG',
  output: 6
}

// const test1 = {
//   input: 'ABBBCCDDCCC',
//   output: 'A3B2C2D3C'
// }
//
// const test2 = {
//   input: 'AAAAAAAAAAABXXAAAAAAAAAA',
//   output: '11AB2X10A'
// }
//
// const test3 = {
//   input: 'ABCDDDEFG',
//   output: 'ABC3DEFG'
// }

describe('shortestString Test', () => {

  test('test1', ()=>{
    let result = shortestString(test1.input[0],test1.input[1])
    expect(result).toEqual(test1.output);
  })

  test('test2', ()=>{
    let result = shortestString(test2.input[0],test2.input[1])
    expect(result).toEqual(test2.output);
  })

  test('test3', ()=>{
    let result = shortestString(test3.input[0],test3.input[1])
    expect(result).toEqual(test3.output);
  })

  test('test1', ()=>{
    let result = shortestString(test1.input[0],test1.input[1])
    expect(result).toEqual(test1.output);
  })

  test('test2', ()=>{
    let result = shortestString(test2.input[0],test2.input[1])
    expect(result).toEqual(test2.output);
  })

  test('test3', ()=>{
    let result = shortestString(test3.input[0],test3.input[1])
    expect(result).toEqual(test3.output);
  })

})
