const {
  insertionSort1, insertionSort2, runInsertionSort1, runInsertionSort2,
} = require('./insertionSort');

const testOne = {
  input: [54, 26, 93, 17, 77, 31, 44, 55, 20],
  output: [17, 20, 26, 31, 44, 54, 55, 77, 93],
};

const testTwo = {
  input: [9, 2, 5, 6, 4, 3, 7, 10, 1, 8],
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

// TODO: Figure this one out
describe('insertionSort1 Test', () => {
  test('testOne', () => {
    const result = insertionSort1(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = insertionSort1(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('insertionSort2 Test', () => {
  test('testOne', () => {
    const result = insertionSort2(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const result = insertionSort2(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });
});

describe('runInsertionSort1 Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    runInsertionSort1();
    const answer = [17, 20, 26, 31, 44, 54, 55, 77, 93];
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});

describe('runInsertionSort2 Test', () => {
  test('testOne', () => {
    console.log = jest.fn();
    runInsertionSort2();
    const answer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(console.log).toHaveBeenCalledWith(answer);
  });
});
