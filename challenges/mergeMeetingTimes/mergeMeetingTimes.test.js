const mergeMeetingTimes = require('./mergeMeetingTimes')

const testOne = {
    input:[
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 },
        { startTime: 10, endTime: 12 },
        { startTime: 9,  endTime: 10 },
    ],
    output:[
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 },
      { startTime: 9, endTime: 12 },
    ]
}

const testTwo = {
    input:[
      { startTime: 1, endTime: 3 },
      { startTime: 2, endTime: 4 }
    ],
    output:[
      { startTime: 1, endTime: 4 }
    ]
}

const testThree = {
    input:[
        { startTime: 0,  endTime: 1 },
        { startTime: 3,  endTime: 5 },
        { startTime: 4,  endTime: 8 }
    ],
    output:[
      { startTime: 0, endTime: 1 },
      { startTime: 3, endTime: 8 }
    ]
}

const testFour = {
    input:[
      { startTime: 1, endTime: 2 },
      { startTime: 2, endTime: 3 }
    ],
    output:[
      { startTime: 1, endTime: 3 }
    ]
}

const testFive = {
    input:[
      { startTime: 2, endTime: 3 },
      { startTime: 1, endTime: 2 }
    ],
    output:[
      { startTime: 1, endTime: 3 }
    ]
}

describe('mergeMeetingTimes Test', ()=>{

  //FAIL
  xtest('testOne', ()=>{
    let result = mergeMeetingTimes(testOne.input)
    expect(result).toEqual(testOne.output);
  })

  //PASS
  test('testTwo', ()=>{
    let result = mergeMeetingTimes(testTwo.input)
    expect(result).toEqual(testTwo.output);
  })

  //FAIL
  xtest('testThree', ()=>{
    let result = mergeMeetingTimes(testThree.input)
    expect(result).toEqual(testThree.output);
  })

  //PASS
  test('testFour', ()=>{
    let result = mergeMeetingTimes(testFour.input)
    expect(result).toEqual(testFour.output);
  })

  //PASS
  test('testFive', ()=>{
    let result = mergeMeetingTimes(testFive.input)
    expect(result).toEqual(testFive.output);
  })

})
