function superBalancedTreeCheck(treeRoot) {
  if (!treeRoot) {
    return true;
  }

  let treeIsSuperBalanced = true; // TODO: would it work to have
  // this default to false?
  const depths = []; /* container of unique depths */

  const nodes = []; /* Nodes will store pairs of a node and the node's depth */
  nodes.push([treeRoot, 0]); /* [0] is node of tree, [1] is depth */

  while (nodes.length) {
    // current node were looking at which is pair of node and depth
    const nodePair = nodes.pop();
    const node = nodePair[0]; /* [0] is node of tree */
    const depth = nodePair[1]; /* [1] is depth of the current node */

    if (!node.left && !node.right) { /* // no left,right node=leaf-check depths */
      if (depths.indexOf(depth) < 0) {
        depths.push(depth); /* if new depth, add it, then check out */
        if (/* either: 1) >2 leaf depths 2) depths are more than 1 apart */
          (depths.length > 2)
          || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
        ) {
          treeIsSuperBalanced = false;
        }
      }
    } else { /* not a leaf and has either left, right or both left,right nodes */
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }
  return treeIsSuperBalanced;
}

module.exports = superBalancedTreeCheck;
