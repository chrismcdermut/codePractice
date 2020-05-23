class BinaryTreeNode {
  constructor(valueC) {
    this.value = valueC;
    this.left = null;
    this.right = null;
  }

  insertLeft(valueL) {
    // this.left = new BinaryTreeNode(valueL);
    this.left = valueL;
    return this.left;
  }

  insertRight(valueR) {
    // this.right = new BinaryTreeNode(valueR);
    this.right = valueR;
    return this.right;
  }
}


module.exports = BinaryTreeNode;
