const smartSInt = require('./smartSInt')

const testOne = {
  input: '',
  output: ''
}

describe('smartSInt Test', () => {

  test('testOne', ()=>{
    let result = smartSInt(testOne.input)
    expect(result).toEqual(testOne.output);
  });

});
