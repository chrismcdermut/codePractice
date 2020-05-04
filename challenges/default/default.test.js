const defaultSolution = require('./defaultSolution')

const testOne = {
  input: '',
  output: ''
}

xdescribe('defaultSolution Test', () => {

  xtest('testOne', ()=>{
    let result = mergeMeetingTimes(testOne.input)
    expect(result).toEqual(testOne.output);
  })

})
