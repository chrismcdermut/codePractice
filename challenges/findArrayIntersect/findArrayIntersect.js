function findArrayIntersect(ar1, ar2) {
  const ar1CounterMap = {};
  ar1.forEach((item) => {
    if (!ar1CounterMap[item]) {
      ar1CounterMap[item] = 1;
    } else {
      ar1CounterMap[item] += 1;
    }
  });

  const ar2CounterMap = {};
  ar2.forEach((item) => {
    if (!ar2CounterMap[item]) {
      ar2CounterMap[item] = 1;
    } else {
      ar2CounterMap[item] += 1;
    }
  });

  const ar1CounterKeys = Object.keys(ar1CounterMap);
  const ar2CounterKeys = Object.keys(ar2CounterMap);
  const overlappedKeys = [];
  ar1CounterKeys.forEach((item) => {
    if (ar2CounterKeys.indexOf(item) > -1) {
      overlappedKeys.push(item);
    }
  });

  const finalCounterMap = {};
  overlappedKeys.forEach((item) => {
    finalCounterMap[item] = ar1CounterMap[item] > ar2CounterMap[item]
      ? ar2CounterMap[item] : ar1CounterMap[item];
  });

  const finalCounterMapKeys = Object.keys(finalCounterMap);
  const finalIntersectArray = [];
  finalCounterMapKeys.forEach((item) => {
    for (let i = 0; i < finalCounterMap[item]; i++) {
      finalIntersectArray.push(parseInt(item, 10));
    }
  });

  return finalIntersectArray;
}

module.exports = findArrayIntersect;
