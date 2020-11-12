function smartSInt(array1, array2) {
  // const firstArrayMap = {};
  const firstArrayMap = new Map();
  array1.forEach((item) => {
    if (!firstArrayMap[item]) {
      // firstArrayMap[item] = 1;
      firstArrayMap.set(item, 1);
    } else if (firstArrayMap[item]) {
      // firstArrayMap[item] += 1;
      firstArrayMap.set(item, (firstArrayMap[item] += 1));
    }
  });

  console.log('firstArrayMap');
  console.log(firstArrayMap);

  // const secondArrayMap = {};
  const secondArrayMap = new Map();
  array2.forEach((item) => {
    if (!secondArrayMap[item]) {
      // secondArrayMap[item] = 1;
      secondArrayMap.set(item, 1);
    } else if (secondArrayMap[item]) {
      // secondArrayMap[item] += 1;
      secondArrayMap.set(item, (secondArrayMap[item] += 1));
    }
  });

  console.log('secondArrayMap');
  console.log(secondArrayMap);

  const finalSharedElementsMap = {};
  // const firstArrayKeys = Object.keys(firstArrayMap);
  const firstArrayKeys = firstArrayMap.keys(firstArrayMap);
  console.log('firstArrayKeys');
  console.log(firstArrayKeys);

  // firstArrayKeys.forEach((item) => {
  //   // if (secondArrayMap[item]) {
  //   if (secondArrayMap.has(item)) {
  //     finalSharedElementsMap[item] = firstArrayMap.get(item) > secondArrayMap.get(item)
  //       ? secondArrayMap.get(item) : firstArrayMap.get(item);
  //   }
  // });

  firstArrayKeys.forEach((key)=>{
    console.log()
  }


    (item) => {
    // if (secondArrayMap[item]) {
    if (secondArrayMap.has(item)) {
      finalSharedElementsMap[item] = firstArrayMap.get(item) > secondArrayMap.get(item)
        ? secondArrayMap.get(item) : firstArrayMap.get(item);
    }
  });

  // for (const key of firstArrayKeys) {
  //   if (secondArrayMap.has(key)) {
  //     finalSharedElementsMap[key] = firstArrayMap.get(key) > secondArrayMap.get(key)
  //       ? secondArrayMap.get(key) : firstArrayMap.get(key);
  //   }
  // }

  const finalSharedElementsMapArray = [];
  const finalSharedElementsMapKeys = Object.keys(finalSharedElementsMap);

  finalSharedElementsMapKeys.forEach((item) => {
    for (let i = 0; i < finalSharedElementsMap[item]; i++) {
      finalSharedElementsMapArray.push(parseInt(item, 10));
    }
  });

  return finalSharedElementsMapArray;
}

module.exports = smartSInt;
