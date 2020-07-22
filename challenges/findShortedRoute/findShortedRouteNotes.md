findShortedRoute Notes go here!

Remember: both BFS and DFS will eventually find a path if one exists. The difference between the two is:
BFS always finds the shortest path.
DFS usually uses less space

1. during our breadth-first search, we keep track of how we reached each node, and
2. after our breadth-first search reaches the end node, we use our object to backtrack from the recipient to the sender.

breadth-first search is O(N+M) N for Nodes and M for looking at neighbors.

TODO: Understand this: What about space complexity? The queue of nodes to visit, the mapping of nodes to previous nodes, and the final path ... they all store a constant amount of information per node. So, each data structure could take up to O(N)O(N) space if it stored information about all of our nodes. That means our overall space complexity is O(N)O(N).
