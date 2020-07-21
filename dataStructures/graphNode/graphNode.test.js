const GraphNode = require('./graphNode');

describe('graphNode Test', () => {
  const a = new GraphNode('a');
  const b = new GraphNode('b');
  const c = new GraphNode('c');

  a.neighbors.add(b);
  b.neighbors.add(a);
  c.neighbors.add(b);
  b.neighbors.add(c);

  // const graph = [a, b, c];

  test('testOne Graph has correct neighbors', () => {
    // const result = graphNode(testOne.input);
    const result = a.neighbors.has(b);
    const answer = true;
    expect(result).toEqual(answer);
  });

  test('testOne Graph does not have wrong neighbors', () => {
    // const result = graphNode(testOne.input);
    const result = a.neighbors.has(c);
    const answer = false;
    expect(result).toEqual(answer);
  });
});
