const defaultSolution = require('./defaultSolution')

const testOne = {
  input: '',
  output: ''
}

describe('defaultSolution Test', () => {

  test('testOne', ()=>{
    let result = mergeMeetingTimes(testOne.input)
    expect(result).toEqual(testOne.output);
  })
  
})
