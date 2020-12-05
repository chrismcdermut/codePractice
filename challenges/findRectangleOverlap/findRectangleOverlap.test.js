const findRectangleOverlap = require('./findRectangleOverlap');


describe('findRectangleOverlap Test', () => {
  test('testOne overlap', () => {
    const firstRectangle = {
    // Coordinates of bottom-left corner
      leftX: 1,
      bottomY: 1,

      // Width and height
      width: 2,
      height: 2,
    };

    const secondRectangle = {
      // Coordinates of bottom-left corner
      leftX: 2,
      bottomY: 2,

      // Width and height
      width: 2,
      height: 3,
    };

    const answerRectangle = {
      // Coordinates of bottom-left corner
      leftX: 2,
      bottomY: 2,

      // Width and height
      width: 1,
      height: 1,
    };

    const result = findRectangleOverlap(firstRectangle, secondRectangle);
    expect(result).toEqual(answerRectangle);
  });

  test('testTwo encompass', () => {
    const firstRectangle = {
    // Coordinates of bottom-left corner
      leftX: 1,
      bottomY: 1,

      // Width and height
      width: 3,
      height: 3,
    };

    const secondRectangle = {
      // Coordinates of bottom-left corner
      leftX: 2,
      bottomY: 2,

      // Width and height
      width: 1,
      height: 1,
    };

    const answerRectangle = {
      // Coordinates of bottom-left corner
      leftX: 2,
      bottomY: 2,

      // Width and height
      width: 1,
      height: 1,
    };

    const result = findRectangleOverlap(firstRectangle, secondRectangle);
    expect(result).toEqual(answerRectangle);
  });
  test('testThree apart', () => {
    const firstRectangle = {
    // Coordinates of bottom-left corner
      leftX: 1,
      bottomY: 2,

      // Width and height
      width: 1,
      height: 1,
    };

    const secondRectangle = {
      // Coordinates of bottom-left corner
      leftX: 3,
      bottomY: 4,

      // Width and height
      width: 2,
      height: 2,
    };

    const answerRectangle = {
      // Coordinates of bottom-left corner
      leftX: null,
      bottomY: null,

      // Width and height
      width: null,
      height: null,
    };

    const result = findRectangleOverlap(firstRectangle, secondRectangle);
    expect(result).toEqual(answerRectangle);
  });

  test('testfour touch', () => {
    const firstRectangle = {
    // Coordinates of bottom-left corner
      leftX: 5,
      bottomY: 1,

      // Width and height
      width: 3,
      height: 1,
    };

    const secondRectangle = {
      // Coordinates of bottom-left corner
      leftX: 7,
      bottomY: 2,

      // Width and height
      width: 1,
      height: 1,
    };

    const answerRectangle = {
      // Coordinates of bottom-left corner
      leftX: null,
      bottomY: null,

      // Width and height
      width: null,
      height: null,
    };

    const result = findRectangleOverlap(firstRectangle, secondRectangle);
    expect(result).toEqual(answerRectangle);
  });
});
