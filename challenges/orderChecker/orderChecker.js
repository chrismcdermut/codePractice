function orderChecker(takeOutOrders, dineInOrders, servedOrders) {
  let is1stCome1stServed = true;
  // want to make sure no earlier value is after later values from array

  // Order options
  const orderOptions = [takeOutOrders, dineInOrders];

  // console.log('orderOptions.length')
  // console.log(orderOptions.length)

  orderOptions.forEach((item, i) => {
    console.log(i === 0 ? 'TAKEOUTORDERS' : 'DINEINORDERS');
    // options
    // compare each array with final Array
    // split finalArray into arrays with values
    for (let j = 0; j < item.length; j++) {
      console.log('item[j] j');
      console.log(`${item[j]} ${j}`);
      console.log('servedOrders[2*j] 2*j');
      console.log(`${servedOrders[2 * j]} + ${2 * j}`);
      console.log('servedOrders[2*j+1] 2*j+1');
      console.log(`${servedOrders[2 * j + 1]} ${2 * j + 1}`);
      console.log('//////////////////////');
      // if the orderItem is not equal to both of it's associatedFinal array spots,
      // then the order is messed up
      if (item[j] !== servedOrders[2 * j] && item[j] !== servedOrders[2 * j + 1]) {
        console.log(`is1stCome1stServed=false for ${item[j]}`);
        is1stCome1stServed = false;
        break;
      }
    }
  });

  return is1stCome1stServed;
}

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  // base case
  if (servedOrders.length === 0) {
    return true;
  }

  // if the first order in servedOrders is the same as the
  // first order in takeOutOrders
  // (making sure first that we have an order in takeOutOrders)
  if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {
    // take the first order off takeOutOrders and servedOrders and recurse
    return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));

    // if the first order in servedOrders is the same as the first
    // in dineInOrders
  }
  if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {
    // take the first order off dineInOrders and servedOrders and recurse
    return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));

    // first order in servedOrders doesn't match the first in
    // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
  }
  return false;
}

module.exports = { orderChecker, isFirstComeFirstServed };

// for(let j=0;j<item.length;j++){
//   if(dineInOrdersservedOrders[2*j]!==takeOutOrders[j]
// || dineInOrdersservedOrders[2*j+1]!==takeOutOrders[j]){
//     isFirstComeFirstServed =false
//   }
// }
