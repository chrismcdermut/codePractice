const BookManager = require('./BookManager');

// Do NOT edit the code below this comment.
// You should be able to complete this test without editing below this comment.

function bookManagementRefactor(operations) {
  const bookManager = new BookManager();
  // Calls corresponding methods of bookManager based on the input
  return operations.map((operation) => {
    const [methodName, ...params] = operation;
    const result = bookManager[methodName].call(bookManager, ...params);
    return (result === undefined || result === null) ? null : JSON.stringify(result);
  });
}

describe('bookingManagement createBook Test', () => {
  test('testOne', () => {
    const bookManager = new BookManager();
    bookManager.createBook('10', 'Book_10');
    const result = bookManager.books;
    const answer = [{ id: 10, title: 'Book_10' }];
    expect(result).toEqual(answer);
  });
});

describe('bookingManagement updateBook Test', () => {
  test('testOne', () => {
    const bookManager = new BookManager();
    bookManager.createBook('10', 'Book_10');
    bookManager.updateBook('10', 'Updated_Book_10');
    const result = bookManager.books;
    const answer = [{ id: 10, title: 'Updated_Book_10' }];
    expect(result).toEqual(answer);
  });
});

describe('bookingManagement Test', () => {
  test('testOne', () => {
    const testOne = {
      input: [['createBook', '10', 'Book_10'],
        ['createBook', '10', 'Book_10'],
        ['updateBook', '10', 'New_Book_10'],
        ['deleteBook', '9'],
        ['findBookById', '9'],
        ['findBookById', '10'],
        ['findBookByTitle', 'Book_10'],
        ['findBookByTitle', 'New_Book_10']],
      output: ['true',
        'false',
        'true',
        'false',
        null,
        '{"id":10,"title":"New_Book_10"}',
        null,
        '{"id":10,"title":"New_Book_10"}'],
    };
    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testTwo', () => {
    const testOne = {
      input: [['createBook', '10', 'Book 10']],
      output: ['true'],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testThree', () => {
    const testOne = {
      input: [['updateBook', '462', 'Book 462']],
      output: ['false'],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });


  test('testFour', () => {
    const testOne = {
      input: [['createBook', '23', 'The Greeen Book'],
        ['createBook', '23', 'The Red Book'],
        ['createBook', '22', 'The Green Book'],
        ['updateBook', '23', 'The Green Book'],
        ['findBookById', '23'],
        ['findBookById', '22'],
        ['updateBook', '22', 'The Red Book'],
        ['findBookByTitle', 'The Red Book'],
        ['findBookByTitle', 'The Green Book']],
      output: ['true',
        'false',
        'true',
        'true',
        '{"id":23,"title":"The Green Book"}',
        '{"id":22,"title":"The Green Book"}',
        'true',
        '{"id":22,"title":"The Red Book"}',
        '{"id":23,"title":"The Green Book"}'],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testFive', () => {
    const testOne = {
      input: [['createBook', '733', 'Book 733'],
        ['findBookById', '236']],
      output: ['true',
        null],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testSix', () => {
    const testOne = {
      input: [['createBook', '733', 'Book 733'],
        ['findBookById', '236']],
      output: ['true',
        null],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testSeven', () => {
    const testOne = {
      input: [['createBook', '733', 'Book 733'],
        ['findBookById', '733']],
      output: ['true',
        '{"id":733,"title":"Book 733"}'],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });

  test('testEight', () => {
    const testOne = {
      input: [['createBook', '269', 'Book 269'],
        ['updateBook', '454', 'Book 454'],
        ['findBookByTitle', 'Book 269']],
      output: ['true',
        'false',
        '{"id":269,"title":"Book 269"}'],
    };

    const result = bookManagementRefactor(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});
