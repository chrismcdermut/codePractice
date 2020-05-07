// take in objects and switch high level item to property and add to list of stuff based on property
function convertObjectKey(obj) {
  const newList = {};
  const objectKeys = Object.keys(obj);

  for (let i = 0; i < objectKeys.length; i += 1) {
    for (let j = 0; j < obj[objectKeys[i]].length; j += 1) {
      const { color } = obj[objectKeys[i]][j];
      if (!newList[color]) {
        newList[color] = [];
      }
      // add toy type
      const newObj = { ...obj[objectKeys[i]][j], type: objectKeys[i] };
      // remove color //Can use spread operator to delete key
      delete newObj.color;
      // add to newObjectWithColorKeys
      newList[color].push(newObj);
    }
  }
  return newList;
}

module.exports = convertObjectKey;
