const reverseWords = require('./reverseWords')

const testOne = {
  input: [ 'c', 'a', 'k', 'e', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            's', 't', 'e', 'a', 'l' ],
  output: [ 's', 't', 'e', 'a', 'l', ' ',
            'p', 'o', 'u', 'n', 'd', ' ',
            'c', 'a', 'k', 'e', ]
}

const testTwo = {
  input: [ 'l', 'a', 'n', 'd', 'e', 'd', ' ', 'h', 'a', 's', ' ',
    'e', 'a', 'g', 'l', 'e', ' ', 't', 'h', 'e' ],
  output: [ 't', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ', 'h',
    'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd' ]
}



describe('reverseWords Test', () => {

  test('testOne', ()=>{
    let result = reverseWords(testOne.input)
    expect(result).toEqual(testOne.output);
  })

  test('testTwo', ()=>{
    let result = reverseWords(testTwo.input)
    expect(result).toEqual(testTwo.output);
  })

})
