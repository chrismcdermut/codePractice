const topologicalSort = require('./topologicalSort');

const testOne = {
  input: [[1, 0]],
  output: [0, 1],
};

const testOneA = {
  input: [[1, 0], [2, 0], [3, 1], [3, 2]],
  output: [[0, 1, 2, 3], [0, 2, 1, 3]],
};

describe('topologicalSort Test', () => {
  test('testOne', () => {
    const result = topologicalSort(testOne.input);
    expect(testOneA.output).toContainEqual(result);
  });
});
