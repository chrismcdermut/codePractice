const findArrayIntersect = require('./findArrayIntersect');

function determineIsSorted(array) {
  let isSorted = true;
  for (let i = 1; i < array.length; i++) {
    const priorElement = array[i - 1];
    const currentElement = array[i];
    if (priorElement > currentElement) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
}

describe('findArrayIntersect test', () => {
  test('testOne', () => {
    const array1 = [1, 2, 3, 4, 4, 5];
    const array2 = [4, 4, 5, 6, 7, 8];
    const answer = [4, 4, 5];
    const result = findArrayIntersect(array1, array2);
    expect(result).toEqual(answer);
  });

  test('testOne', () => {
    const array1 = [5, 2, 1, 4, 3, 4];
    const array2 = [8, 4, 6, 5, 4, 7];
    const answer = [4, 4, 5];
    const result = findArrayIntersect(array1, array2);
    expect(result).toEqual(answer);
  });
});

describe('findArrayIntersect is sorted test', () => {
  test('testOne', () => {
    const array1 = [1, 2, 3, 4, 4, 5];
    const array2 = [4, 4, 5, 6, 7, 8];
    const answer = true;
    const result = findArrayIntersect(array1, array2);
    const isSorted = determineIsSorted(result);
    expect(isSorted).toEqual(answer);
  });

  test('testOne', () => {
    const array1 = [5, 2, 1, 4, 3, 4];
    const array2 = [8, 4, 6, 5, 4, 7];
    const answer = true;
    const result = findArrayIntersect(array1, array2);
    const isSorted = determineIsSorted(result);
    expect(isSorted).toEqual(answer);
  });
});
