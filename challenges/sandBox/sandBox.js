// const util = require('util');

// console.log(util.inspect(myObject, {showHidden: false, depth: null}))

// alternative shortcut
// console.log(util.inspect(myObject, false, null, true /* enable colors */))


function sandBox(input) {
  const nodes = [];
  const treeRoot = 'test';
  nodes.push([treeRoot, 0]);
  // console.log('nodes');
  // console.log(nodes);
  // console.log(util.inspect(nodes, { showHidden: false, depth: null }));
  // console.log(util.inspect(nodes, false, null, true /* enable colors */));
  return input;
}

module.exports = sandBox;
