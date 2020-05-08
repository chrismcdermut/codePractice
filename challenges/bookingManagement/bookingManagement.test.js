const bookingManagement = require('./bookingManagement');

const testOne = {
  input: '',
  output: '',
};

describe('bookingManagement Test', () => {
  test('testOne', () => {
    const result = bookingManagement(testOne.input);
    expect(result).toEqual(testOne.output);
  });
});


operations:
[["createBook","10","Book_10"],
 ["createBook","10","Book_10"],
 ["updateBook","10","New_Book_10"],
 ["deleteBook","9"],
 ["findBookById","9"],
 ["findBookById","10"],
 ["findBookByTitle","Book_10"],
 ["findBookByTitle","New_Book_10"]]
Expected Output:
["true",
 "false",
 "true",
 "false",
 "null",
 "{\"id\":10,\"title\":\"New_Book_10\"}",
 "null",
 "{\"id\":10,\"title\":\"New_Book_10\"}"]



operations: [["createBook","10","Book 10"]]
Expected Output:
["true"]

operations: [["updateBook","462","Book 462"]]
Expected Output:
["false"]

Input:
operations:
[["createBook","23","The Greeen Book"],
 ["createBook","23","The Red Book"],
 ["createBook","22","The Green Book"],
 ["updateBook","23","The Green Book"],
 ["findBookById","23"],
 ["findBookById","22"],
 ["updateBook","22","The Red Book"],
 ["findBookByTitle","The Red Book"],
 ["findBookByTitle","The Green Book"]]
Expected Output:
["true",
 "false",
 "true",
 "true",
 "{\"id\":23,\"title\":\"The Green Book\"}",
 "{\"id\":22,\"title\":\"The Green Book\"}",
 "true",
 "{\"id\":22,\"title\":\"The Red Book\"}",
 "{\"id\":23,\"title\":\"The Green Book\"}"]
Click the "Run Tests" button to see output and console logs.

Input:
operations:
[["createBook","733","Book 733"],
 ["findBookById","236"]]
Expected Output:
["true",
 "null"]
Click the "Run Tests" button to see output and console logs.

Input:
operations:
[["createBook","733","Book 733"],
 ["findBookById","733"]]
Expected Output:
["true",
 "{\"id\":733,\"title\":\"Book 733\"}"]

 Input:
operations:
[["createBook","269","Book 269"],
 ["updateBook","454","Book 454"],
 ["findBookByTitle","Book 269"]]
Expected Output:
["true",
 "false",
 "{\"id\":269,\"title\":\"Book 269\"}"]
