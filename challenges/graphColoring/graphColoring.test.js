const GraphNode = require('../../dataStructures/graphNode/graphNode');
const { colorGraph, checkHasIllegalColor } = require('./graphColoring');

describe('checkHasIllegalColor Test', () => {
  // the test should make sure there are no illegal colors..
  test('testOne, no illegal color', () => {
    const a = new GraphNode('a');
    a.color = 'red';
    const b = new GraphNode('b');
    b.color = 'green';
    const c = new GraphNode('c');
    c.color = 'purple';

    a.neighbors.add(b);
    b.neighbors.add(a);
    c.neighbors.add(b);
    b.neighbors.add(c);

    const coloredGraph = [a, b, c];
    // const coloredGraph = colorGraph(graph, colors);
    const result = checkHasIllegalColor(coloredGraph);
    const answer = false;
    expect(result).toEqual(answer);
  });

  test('testTwo, has illegal color', () => {
    const a = new GraphNode('a');
    a.color = 'red';
    const b = new GraphNode('b');
    b.color = 'red';
    const c = new GraphNode('c');
    c.color = 'purple';

    a.neighbors.add(b);
    b.neighbors.add(a);
    c.neighbors.add(b);
    b.neighbors.add(c);
    const coloredGraph = [a, b, c];

    // const coloredGraph = colorGraph(graph, colors);
    const result = checkHasIllegalColor(coloredGraph);
    const answer = true;
    expect(result).toEqual(answer);
  });
});

xdescribe('colorGraph Test', () => {
  // the test should make sure there are no illegal colors..

  test('testOne, no illegal color', () => {
    const a = new GraphNode('a');
    const b = new GraphNode('b');
    const c = new GraphNode('c');

    a.neighbors.add(b);
    b.neighbors.add(a);
    c.neighbors.add(b);
    b.neighbors.add(c);
    // D is 2
    const graph = [a, b, c];

    const colors = ['red', 'blue', 'green'];

    const coloredGraph = colorGraph(graph, colors);
    const result = checkHasIllegalColor(coloredGraph);
    const answer = false;
    expect(result).toEqual(answer);
  });
});
