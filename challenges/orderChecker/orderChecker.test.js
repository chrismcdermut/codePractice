const orderChecker = require('./orderChecker')

//pass -> is first come first served
const testOne = {
  takeOutOrders: [17, 8, 24],
  dineInOrders: [12, 19, 2],
  servedOrders: [17, 8, 12, 19, 24, 2]
}

//fail -> is not first come first served
const testTwo = {
  takeOutOrders: [1, 3, 5],
  dineInOrders: [2, 4, 6],
  servedOrders: [1, 2, 4, 6, 5, 3]
}


describe('orderChecker Test', () => {

  test('testOne', ()=>{
    let result = orderChecker(testOne.takeOutOrders,testOne.dineInOrders,testOne.servedOrders)
    expect(result).toBe(true);
  })

  xtest('testTwo', ()=>{
    let result = orderChecker(testTwo.takeOutOrders,testTwo.dineInOrders,testTwo.servedOrders)
    expect(result).toBe(false);
  })

})
