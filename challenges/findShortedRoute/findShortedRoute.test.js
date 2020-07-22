const { findShortestRoute } = require('./findShortedRoute');

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
});
