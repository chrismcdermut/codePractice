let newToyVariable = {}

//take in objects and switch high level item to property and add to list of stuff based on property
function convertObjectKey(obj) {
  let newList = {}
  let objectKeys = Object.keys(obj)

  for(let i=0;i<objectKeys.length;i++){
    for(let j=0;j<obj[objectKeys[i]].length;j++){
      let color = obj[objectKeys[i]][j]['color']
      if(!newList[color]){
        newList[color] = []
      }
      //add toy type
      let newObj = { ...obj[objectKeys[i]][j], "type": objectKeys[i] };
      //remove color //Can use spread operator to delete key
      delete newObj.color
      //add to newObjectWithColorKeys
      newList[color].push(newObj)
    }
  }
  return newList
}

module.exports = convertObjectKey;
