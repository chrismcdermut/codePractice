const { findShortestRoute } = require('./findShortestRoute');

describe('findShortestRoute Test', () => {
  const network = {
    Min: ['William', 'Jayden', 'Omar'],
    William: ['Min', 'Noam'],
    Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
    Ren: ['Jayden', 'Omar'],
    Amelia: ['Jayden', 'Adam', 'Miguel'],
    Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
    Noam: ['Nathan', 'Jayden', 'William'],
    Omar: ['Ren', 'Min', 'Scott'],
  };

  test('testOne', () => {
    const answer = ['Jayden', 'Amelia', 'Adam'];
    const result = findShortestRoute(network, 'Jayden', 'Adam');
    expect(result).toEqual(answer);
  });

  test('testTwo', () => {
    expect(() => {
      findShortestRoute(network, 'Sarah', 'Adam');
    }).toThrow('Start node not in graph!');
  });

  test('testThree', () => {
    expect(() => {
      findShortestRoute(network, 'Ren', 'PeeWee');
    }).toThrow('End node not in graph!');
  });
});
