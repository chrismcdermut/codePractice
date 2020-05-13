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

// My solution, I think indexOf is expensive..
// if the index for take out or dineIn jumps more than 1, it is not frist comefirst served
function firstComeFirstServedCheck(takeOutOrders, dineInOrders, servedOrders) {
  let isFirstComeFirstServedBool = true;

  let lastDineInIndex = -1;
  let lastTakeOutIndex = -1;

  for (let i = 0; i < servedOrders.length; i++) {
    const currentOrder = servedOrders[i];
    // check if its in dineInOrders
    if (dineInOrders.includes(currentOrder)) {
      const nextDineIndex = dineInOrders.indexOf(currentOrder);
      if ((nextDineIndex - lastDineInIndex) > 1) {
        isFirstComeFirstServedBool = false;
        break;
      }
      lastDineInIndex = nextDineIndex;
      continue;
    }

    // check if its in takeOutOrders
    if (takeOutOrders.includes(currentOrder)) {
      const nextTakeOutIndex = takeOutOrders.indexOf(currentOrder);
      if ((nextTakeOutIndex - lastTakeOutIndex) > 1) {
        isFirstComeFirstServedBool = false;
        break;
      }
      lastTakeOutIndex = nextTakeOutIndex;
      continue;
    }
  }

  return isFirstComeFirstServedBool;
}

module.exports = { isFirstComeFirstServed, firstComeFirstServedCheck };
