class BinaryTreeNode {
  constructor(valueC) {
    this.value = valueC;
    this.left = null;
    this.right = null;
  }

  /* declare binary node and set as value, breaks encapsulation, whatevs 4 now */
  insertLeft(valueL) {
    // this.left = new BinaryTreeNode(valueL);
    this.left = valueL;
    return this.left;
  }

  /* declare binary node and set as value, breaks encapsulation, whatevs 4 now */
  insertRight(valueR) {
    // this.right = new BinaryTreeNode(valueR);
    this.right = valueR;
    return this.right;
  }
}


module.exports = BinaryTreeNode;
