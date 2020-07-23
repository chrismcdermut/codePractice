// import Queue from '../../dataStructures/Queue/Queue';
// TODO:: implement using queue

function constructPath(nodesPath, startNode, endNode) {
  const shortestPath = [];
  let currentNode = endNode;

  // the node will eventually be null because the first node's from path
  // is null cause it's first
  while (currentNode !== null) {
    shortestPath.unshift(currentNode); // can push and reverse or this unshift
    // TODO: how does this not break, mind blown, not a big deal
    currentNode = nodesPath[currentNode];
  }
  return shortestPath;
}

// Doing below to avoid error: Do not access Object.prototype
// method 'hasOwnProperty' from target object
// other option is direclty calling via prototype:
// howWeReachedNodes.hasOwnProperty(neighbor)
function findShortestRoute(graph, startNode, endNode) { // AKA BFS
  if (!Object.prototype.hasOwnProperty.call(graph, startNode)) {
    throw new Error('Start node not in graph!');
  }
  if (!Object.prototype.hasOwnProperty.call(graph, endNode)) {
    throw new Error('End node not in graph!');
  }

  let shortestPath = [];

  // TODO: Why use a Queue?
  // const nodesToVisit = new Queue();
  // nodesToVisit.enqueue(startNode);

  const nodesToVisit = [];
  nodesToVisit.push(startNode);

  // Keep track of how we got to each node
  // we'll use this to reconstruct the shortest path at the end
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  // while (nodesToVisit.getLength() > 0) {
  while (nodesToVisit.length > 0) {
    // const currentNode = nodesToVisit.dequeue();
    const currentNode = nodesToVisit.shift();

    if (currentNode === endNode) { // check if we found endNode
      shortestPath = constructPath(howWeReachedNodes, startNode, endNode);
      break;
    }

    graph[currentNode].forEach((neighbor) => {
      // if we haven't seen this node yet
      if (!Object.prototype.hasOwnProperty.call(howWeReachedNodes, neighbor)) {
        // nodesToVisit.enqueue(neighbor);
        nodesToVisit.push(neighbor);
        howWeReachedNodes[neighbor] = currentNode; // logs node's 'from' path
      }
    });
  }
  return shortestPath;
}

module.exports = { constructPath, findShortestRoute };
