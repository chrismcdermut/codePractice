const {
  objectDestructureAssignment,
  arrayDestructureAssignment,
  arrayMethodsAdmin,
  arrayMethodsTotalAge,
  dupesArray,
} = require('./jsQuiz');

describe('objectDestructureAssignment Test', () => {
  test('testOne', () => {
    const input = {
      name: 'John Doe',
      address: {
        street1: '123 Smith Street',
        zip: '91362',
      },
    };
    const answer = {
      name: 'John Doe',
      zip: '91362',
    };
    const result = objectDestructureAssignment(input);
    expect(result).toEqual(answer);
  });
});

describe('arrayDestructureAssignment Test', () => {
  test('testOne', () => {
    const input = ['one', 'two', 'three'];
    const answer = {
      first: 'one',
      third: 'three',
    };
    const result = arrayDestructureAssignment(input);
    expect(result).toEqual(answer);
  });
});

describe('arrayMethodsAdmin Test', () => {
  test('testOne', () => {
    const input = [
      { fName: 'Jim', age: 50, isAdmin: true },
      { fName: 'Sarah', age: 20, isAdmin: false },
      { fName: 'Alice', age: 25, isAdmin: true },
    ];
    const answer = [
      { fName: 'Jim', age: 50, isAdmin: true },
      { fName: 'Alice', age: 25, isAdmin: true },
    ];
    const result = arrayMethodsAdmin(input);
    expect(result).toEqual(answer);
  });
});

describe('arrayMethodsTotalAge Test', () => {
  test('testOne', () => {
    const input = [
      { fName: 'Jim', age: 50, isAdmin: true },
      { fName: 'Sarah', age: 20, isAdmin: false },
      { fName: 'Alice', age: 25, isAdmin: true },
    ];
    const answer = 95;
    const result = arrayMethodsTotalAge(input);
    expect(result).toEqual(answer);
  });
});

describe('dupesArray Test', () => {
  test('testOne', () => {
    const input = [0, 1, 2, 1, 0, 3, 2, 1];
    const answer = new Set([0, 1, 2, 3]);
    const result = dupesArray(input);
    expect(result).toEqual(answer);
  });
});
