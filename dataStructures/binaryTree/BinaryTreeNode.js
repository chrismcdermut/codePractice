class BinaryTreeNode {
  constructor(valueC) {
    this.value = valueC;
    this.left = null;
    this.right = null;
  }

  /* declare binary node and set as value, breaks encapsulation, whatevs 4 now */
  insertLeft(valueL) {
    this.left = (typeof valueL === 'number') ? new BinaryTreeNode(valueL) : valueL;
    return this.left;
  }

  /* declare binary node and set as value, breaks encapsulation, whatevs 4 now */
  insertRight(valueR) {
    // detect what the value is OR set teh left or right node equal
    this.right = (typeof valueR === 'number') ? new BinaryTreeNode(valueR) : valueR;
    return this.right;
  }
}


module.exports = BinaryTreeNode;
