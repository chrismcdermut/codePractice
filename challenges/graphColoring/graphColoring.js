function colorGraph(graph, colors) {
  graph.forEach((nodeInput) => {
    const node = nodeInput;
    if (node.neighbors.has(node)) {
      throw new Error(`Legal coloring impossible for node with loop: ${node.label}`);
    }

    // Get the node's neighbors' colors, as a set so we
    // can check if a color is illegal in constant time
    const illegalColors = new Set();

    node.neighbors.forEach((neighbor) => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    // Assign the first legal color
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i];

      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }
  });
  return graph;
}

function checkHasIllegalColor(graph) {
  let hasIllegalColor = false;
  graph.forEach((node) => {
    node.neighbors.forEach((neighbor) => {
      if (node.color === neighbor.color) {
        hasIllegalColor = true;
        return hasIllegalColor;
      }
      return null;
    });
  });
  return hasIllegalColor;
}

module.exports = { colorGraph, checkHasIllegalColor };
