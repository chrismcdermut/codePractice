const {removeSection, condenseString, shortestString} = require('./shortestString')

const test1 = {
  input: ['ABBBCCDDCCC', 3],
  bestRemovedSection: 'CDD',
  condensedString: 'A3B2C2D3C',
  modifiedString: 'ABBBCCCC',
  condensedModifiedString: 'A3B4C',
  output: 5
}

const test2 = {
  input: ['AAAAAAAAAAABXXAAAAAAAAAA', 3],
  bestRemovedSection: 'BXX',
  condensedString: '11AB2X10A',
  modifiedString: 'AAAAAAAAAAAAAAAAAAAAA',
  condensedModifiedString: '21A',
  output: 3
}

const test3 = {
  input: ['ABCDDDEFG', 2],
  bestRemovedSection: 'EF',
  condensedString: 'ABC3DEFG',
  modifiedString: 'ABCDDDG',
  condensedModifiedString: 'ABC3DG',
  output: 6
}

const test4 = {
  input: 'ABBBCCDDCCC',
  output: 'A3B2C2D3C'
}

const test5 = {
  input: 'AAAAAAAAAAABXXAAAAAAAAAA',
  output: '11AB2X10A'
}

const test6 = {
  input: 'ABCDDDEFG',
  output: 'ABC3DEFG'
}

const test7 = {
  input: 'AAA',
  output: '3A'
}

const test8 = {
  input: 'AAABBB',
  output: '3A3B'
}

describe('shortestString Test', () => {

  // test('test1', ()=>{
  //   let result = shortestString(test1.input[0],test1.input[1])
  //   expect(result).toEqual(test1.output);
  // })
  //
  // test('test2', ()=>{
  //   let result = shortestString(test2.input[0],test2.input[1])
  //   expect(result).toEqual(test2.output);
  // })
  //
  // test('test3', ()=>{
  //   let result = shortestString(test3.input[0],test3.input[1])
  //   expect(result).toEqual(test3.output);
  // })

  test('test1 condenseString', ()=>{
    let result = condenseString(test1.input[0])
    expect(result).toEqual(test1.condensedString);
  })

  test('test2 condenseString', ()=>{
    let result = condenseString(test2.input[0])
    expect(result).toEqual(test2.condensedString);
  })

  test('test3 condenseString', ()=>{
    let result = condenseString(test3.input[0])
    expect(result).toEqual(test3.condensedString);
  })

  test('test4 condenseString', ()=>{
    let result = condenseString(test4.input)
    expect(result).toEqual(test4.output);
  })

  test('test5 condenseString', ()=>{
    let result = condenseString(test5.input)
    expect(result).toEqual(test5.output);
  })

  test('test6 condenseString', ()=>{
    let result = condenseString(test6.input)
    expect(result).toEqual(test6.output);
  })

  test('test7 condenseString', ()=>{
    let result = condenseString(test7.input)
    expect(result).toEqual(test7.output);
  })

  test('test8 condenseString', ()=>{
    let result = condenseString(test8.input)
    expect(result).toEqual(test8.output);
  })

  // test('test1 removeSection', ()=>{
  //   let result = removeSection(test1.input[0],test1.input[1])
  //   expect(result).toEqual(test1.modifiedString);
  // })
  //
  // test('test2 removeSection', ()=>{
  //   let result = removeSection(test2.input[0],test2.input[1])
  //   expect(result).toEqual(test2.modifiedString);
  // })
  //
  // test('test3 removeSection', ()=>{
  //   let result = removeSection(test3.input[0],test3.input[1])
  //   expect(result).toEqual(test3.modifiedString);
  // })

})
