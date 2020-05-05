const reverseWords = require('./reverseWords')

const testOne = {
  input: [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ],
  output: [ 's', 't', 'e', 'a', 'l', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            'c', 'a', 'k', 'e', ]
}

describe('reverseWords Test', () => {

  test('testOne', ()=>{
    let result = reverseWords(testOne.input)
    expect(result).toEqual(testOne.output);
  })

})
