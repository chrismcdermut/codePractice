bookingManagement Spec go here!

You are given a class that handles operations with books, however it is not complete and might have some issues, your task is to refactor it, fix the issues and add the missing parts.

Each book is described by 2 fields: id and title.

The methods that should be supported are listed below:

createBook(id, title) - creates new book. Returns false if the book with such id already exists, and true otherwise;
updateBook(id, title) - updates provided book. Returns false if the book with such id does not exist, and true otherwise.
deleteBook(id) - deletes provided book. Returns false if the book with such id does not exist, and true otherwise.
findBookById(id) - find book by id. Returns the book, if the book with such id exists, and null otherwise.
findBookByTitle(title) - find book by title. Returns the book, if the book with such title exists, and null otherwise. It is guaranteed that at any time there are no two books with the same title.
Implement all these methods.

Example

For operations = [["createBook", "10", "Book_10"], ["createBook", "10", "Book_10"], ["updateBook", "10", "New_Book_10"], ["deleteBook", "9"],["findBookById", "9"], ["findBookById", "10"], ["findBookByTitle", "Book_10"], ["findBookByTitle", "New_Book_10"]], the output should be
bookManagementRefactor(operations) = ["true", "false", "true", "false", "null", "{"id":10,"title":"New_Book_10"}", "null", "{"id":10,"title":"New_Book_10"}"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.string operations

An array of operations desribed above.

Guaranteed constraints:
1 ≤ operations.length ≤ 103,
2 ≤ operations[i].length ≤ 3.

[output] array.string

An array with ith element equal to the result of the ith operation.
[JavaScript (ES6)] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
