// import Queue from '../../dataStructures/Queue/Queue';

function constructPath(nodesPath, startNode, endNode) {
  const shortestPath = [];

  let currentNode = endNode;

  // the node will eventually be null because the first node's from path
  // is null cause it's first
  while (currentNode !== null) {
    // can do push and reverse before return or put in the front
    // shortestPath.push(currentNode);
    shortestPath.unshift(currentNode);
    // TODO: how does this not break, mind blown, not a big deal
    currentNode = nodesPath[currentNode];
  }

  return shortestPath;
}

function findShortedRoute(graph, startNode, endNode) { // AKA BFS
  if (!graph.hasOwnProperty(startNode)) {
    throw new Error('Start node not in graph!');
  }
  if (!graph.hasOwnProperty(endNode)) {
    throw new Error('End node not in graph!');
  }

  // TODO: Why use a Queue?
  // let nodesToVisit = new Queue();
  // nodesToVisit.enqueue(startNode);
  const nodesToVisit = [];
  nodesToVisit.push(startNode);

  // TODO: why is startNow in an array?
  const nodesAlreadySeen = new Set([startNode]);

  // Keep track of how we got to each node
  // we'll use this to reconstruct the shortest path at the end
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.length > 0) {
    const currentNode = nodesToVisit.shift();

    // check if we found endNode
    if (currentNode === endNode) {
      // return route?
      return constructPath(howWeReachedNodes, startNode, endNode);
    }

    graph[currentNode].forEach((neighbor) => {
      // if we haven't seen this node yet
      if (!nodesAlreadySeen.has(neighbor)) {
        nodesAlreadySeen.add(neighbor);
        nodesToVisit.push(neighbor);

        // logs the path to each node where the value is the 'from' path
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }
  return null;
}

module.exports = findShortedRoute;
