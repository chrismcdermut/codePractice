const mergeMeetingTimes = require('./mergeMeetingTimes');

const testOne = {
  input: [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ],
  output: [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 },
  ],
};

const testThree = {
  input: [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
  ],
  output: [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
  ],
};

const testTwo = {
  input: [
    { startTime: 1, endTime: 3 },
    { startTime: 2, endTime: 4 },
  ],
  output: [{ startTime: 1, endTime: 4 }],
};

const testSix = {
  input: [
    { startTime: 1, endTime: 3 },
    { startTime: 1, endTime: 3 },
    { startTime: 2, endTime: 4 },
  ],
  output: [{ startTime: 1, endTime: 4 }],
};

const testFour = {
  input: [
    { startTime: 1, endTime: 2 },
    { startTime: 2, endTime: 3 },
  ],
  output: [{ startTime: 1, endTime: 3 }],
};

const testFive = {
  input: [
    { startTime: 2, endTime: 3 },
    { startTime: 1, endTime: 2 },
  ],
  output: [{ startTime: 1, endTime: 3 }],
};

xdescribe('mergeMeetingTimes Short Test', () => {
  // PASS
  test('testTwo', () => {
    const result = mergeMeetingTimes(testTwo.input);
    expect(result).toEqual(testTwo.output);
  });

  // PASS
  test('testFour', () => {
    const result = mergeMeetingTimes(testFour.input);
    expect(result).toEqual(testFour.output);
  });

  // PASS
  test('testFive', () => {
    const result = mergeMeetingTimes(testFive.input);
    expect(result).toEqual(testFive.output);
  });

  test('testSix', () => {
    const result = mergeMeetingTimes(testSix.input);
    expect(result).toEqual(testSix.output);
  });
});

xdescribe('mergeMeetingTimes Long Test', () => {
  // FAIL
  test('testThree', () => {
    const result = mergeMeetingTimes(testThree.input);
    expect(result).toEqual(testThree.output);
  });

  // FAIL
  test('testOne', () => {
    const result = mergeMeetingTimes(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
