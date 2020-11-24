function smartSInt(array1, array2) {
  const firstArrayItemCounter = {};
  array1.forEach((item) => {
    if (!firstArrayItemCounter[item]) {
      firstArrayItemCounter[item] = 1;
    } else if (firstArrayItemCounter[item]) {
      firstArrayItemCounter[item] += 1;
    }
  });

  const secondArrayItemCounter = {};
  array2.forEach((item) => {
    if (!secondArrayItemCounter[item]) {
      secondArrayItemCounter[item] = 1;
    } else if (secondArrayItemCounter[item]) {
      secondArrayItemCounter[item] += 1;
    }
  });

  const finalSharedElementsMap = {};
  const firstArrayKeys = Object.keys(firstArrayItemCounter);
  firstArrayKeys.forEach((item) => {
    if (secondArrayItemCounter[item]) {
      finalSharedElementsMap[item] = firstArrayItemCounter[item] > secondArrayItemCounter[item]
        ? secondArrayItemCounter[item] : firstArrayItemCounter[item];
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
