function orderChecker(takeOutOrders,dineInOrders,servedOrders) {
  let isFirstComeFirstServed = true
  //want to make sure no earlier value is after later values from array

  //Order options
  let orderOptions = [takeOutOrders,dineInOrders]

  // console.log('orderOptions.length')
  // console.log(orderOptions.length)

  orderOptions.forEach((item, i) => {
    console.log(i===0?'TAKEOUTORDERS':'DINEINORDERS')
    //options
    //compare each array with final Array
    //split finalArray into arrays with values
    for(let j=0;j<item.length;j++){
      console.log('item[j] j')
      console.log(`${item[j]} ${j}`)
      console.log('servedOrders[2*j] 2*j')
      console.log(`${servedOrders[2*j]} + ${2*j}`)
      console.log('servedOrders[2*j+1] 2*j+1')
      console.log(`${servedOrders[2*j+1]} ${2*j+1}`)
      console.log('//////////////////////')
      //if the orderItem is not equal to both of it's associatedFinal array spots, then the order is messed up
      if(item[j]!==servedOrders[2*j] && item[j]!==servedOrders[2*j+1]){
        console.log('isFirstComeFirstServed=false for '+item[j])
        isFirstComeFirstServed=false
        break
      }
    }
  });

  return isFirstComeFirstServed
}

module.exports = orderChecker

// for(let j=0;j<item.length;j++){
//   if(dineInOrdersservedOrders[2*j]!==takeOutOrders[j] || dineInOrdersservedOrders[2*j+1]!==takeOutOrders[j]){
//     isFirstComeFirstServed =false
//   }
// }
