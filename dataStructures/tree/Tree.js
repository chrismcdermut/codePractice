
class Tree {
  constructor(root) {
    this.root = root || null;
  }

  traverse(callback) {
    // const self = this;
    function walkThrough(node) {
      // TODO: wtf is callback for?
      callback(node);
      node.children.forEach(walkThrough);
    }
    // TODO: wtf is dash
    // walkThrough(this.root, dash);
    walkThrough(this.root);
  }

  /* add value to a specific parent node noted by parentValue */
  addNode(value, parentValue) {
    const newNode = {
      value,
      children: [],
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse((node) => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }

  removeNode(value) {
    this.traverse((node) => { /* this is the callback */
      node.children.forEach((childNode, index) => {
        if (childNode.value === value) {
          node.children.splice(index, 1);
        }
      });
    });
  }

  search(value) {
    let nodeFindings = 'Not Found';
    this.traverse((node) => {
      if (node.value === value) {
        nodeFindings = node;
      }
    });
    return nodeFindings;
  }

  showLeafs(parentValue) {
    const leafsFound = [];
    if (parentValue.children && !parentValue.children.length) {
      // TODO: might set this to leafsFound to limit return statement to one
      return parentValue;
    }

    // TODO: prolly better to declare this after guard statement to avoid unnecessary memeory use
    // TODO: why do we need to check typeof?
    const parentNode = typeof parentValue === 'string' ? this.search(parentValue) : parentValue;
    parentNode.children.forEach((child) => {
      leafsFound.push(this.showLeafs(child));
    });

    // TODO: look into .flat(), built in to node 12 or 11
    return leafsFound.flat();
  }
}

module.exports = Tree;
