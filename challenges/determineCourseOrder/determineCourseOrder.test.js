const {
  isPrereq, determineCourseOrder, findHalfwayCourse, finalFunction,
} = require('./determineCourseOrder');

describe('determineCourseOrder Test', () => {
  test('testOne', () => {
    const testCase1 = {
      input: [
        ['Data Structures', 'Algorithms'],
        ['Foundations of Computer Science', 'Operating Systems'],
        ['Computer Networks', 'Computer Architecture'],
        ['Algorithms', 'Foundations of Computer Science'],
        ['Computer Architecture', 'Data Structures'],
        ['Software Design', 'Computer Networks'],
      ],
      order: ['Software Design',
        'Computer Networks',
        'Computer Architecture',
        'Data Structures',
        'Algorithms',
        'Foundations of Computer Science',
        'Operating Systems',
      ],
      output: 'Data Structures',
    };
    const result = determineCourseOrder(testCase1.input);
    expect(result).toEqual(testCase1.output);
  });

  test('testOne', () => {
    const testCase2 = {
      input: [
        ['Data Structures', 'Algorithms'],
        ['Algorithms', 'Foundations of Computer Science'],
        ['Foundations of Computer Science', 'Logic'],
      ],
      output: 'Algorithms',
    };
    const result = determineCourseOrder(testCase2.input);
    expect(result).toEqual(testCase2.output);
  });

  test('testOne', () => {
    const testCase3 = {
      input: [
        ['Data Structures', 'Algorithms'],
      ],
      output: 'Data Structures',
    };
    const result = determineCourseOrder(testCase3.input);
    expect(result).toEqual(testCase3.output);
  });
});

describe('isPrereq Test', () => {
  test('testOne', () => {
    const testCase3 = {
      input: [
        ['Data Structures', 'Algorithms'],
      ],
      output: 'Data Structures',
    };
    const result = isPrereq(testCase3.input);
    expect(result).toEqual(testCase3.output);
  });
});

describe('findHalfwayCourse Test', () => {
  test('testOne', () => {
    const testCase3 = {
      input: [
        ['Data Structures', 'Algorithms'],
      ],
      output: 'Data Structures',
    };
    const result = findHalfwayCourse(testCase3.input);
    expect(result).toEqual(testCase3.output);
  });
});

describe('finalFunction Test', () => {
  test('testOne', () => {
    const testCase3 = {
      input: [
        ['Data Structures', 'Algorithms'],
      ],
      output: 'Data Structures',
    };
    const result = finalFunction(testCase3.input);
    expect(result).toEqual(testCase3.output);
  });
});
