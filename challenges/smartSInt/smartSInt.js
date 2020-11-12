function smartSInt(array1, array2) {
  const firstArrayMap = {};
  array1.forEach((item) => {
    if (!firstArrayMap[item]) {
      firstArrayMap[item] = 1;
    } else if (firstArrayMap[item]) {
      firstArrayMap[item] += 1;
    }
  });

  const secondArrayMap = {};
  array2.forEach((item) => {
    if (!secondArrayMap[item]) {
      secondArrayMap[item] = 1;
    } else if (secondArrayMap[item]) {
      secondArrayMap[item] += 1;
    }
  });

  const finalSharedElementsMap = {};
  const firstArrayKeys = Object.keys(firstArrayMap);
  firstArrayKeys.forEach((item) => {
    if (secondArrayMap[item]) {
      finalSharedElementsMap[item] = firstArrayMap[item] > secondArrayMap[item]
        ? secondArrayMap[item] : firstArrayMap[item];
    }
  });


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
