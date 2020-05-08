bookingManagement Notes go here!


/////////////////////
function BookManager() {
  this.books = [];

  this.createBook = function (id, title) {
    // TODO: return false if the book id already exists

    id = parseInt(id);
    let book = new Object();
    book.id = id;
    book.title = title;
    this.books = [...this.books, book];
    return true;
  };

  this.updateBook = function (id, title) {
    // TODO: return false if the book doesn't exist

    id = parseInt(id);
    this.books = this.books.filter(book => {
      return {
        id: id,
        title: title
      };
    });
    return true;
  };

  this.deleteBook = function (id) {
    // TODO: return false if the book doesn't exist

    id = parseInt(id);
    const book = this.books.find(book => book.id === id);
    delete book;
    return true;
  };

  this.findBookById = function (id) {
    return this.books.find(book => book.id === parseInt(id));
  };

  this.findBookByTitle = function (title) {
    return this.books.find(book => book.title === title);
  };
}

// Do NOT edit the code below this comment.
// You should be able to complete this test without editing below this comment.

const bookManager = new BookManager();

function bookManagementRefactor(operations) {
  // Calls corresponding methods of bookManager based on the input
  return operations.map(operation => {
    const [methodName, ...params] = operation;
    let result = bookManager[methodName].call(bookManager, ...params);
    return result === undefined ? "null" : JSON.stringify(result);
  });
}


//////////////FINAL
function BookManager() {
  this.books = {};

  this.createBook = function (id, title) {
    idl = parseInt(id); /*book id*/
    let bookCreated = false

    if(!this.books.hasOwnProperty(idl)){
        let book = new Object();
            book.id = idl;
            book.title = title;
            this.books[idl] = book
            bookCreated = true
    }
    return bookCreated
  };

  this.updateBook = function (id, title) {
    id = parseInt(id);
    let bookUpdated = false;
    if(this.books[id]){
        this.books[id]['title'] = title
        bookUpdated = true
    }
    return bookUpdated;
  };

  this.deleteBook = function (id) {
    id = parseInt(id);
    let bookDeleted = false
    if(this.books[id]){
        delete this.books[id]
        bookDeleted = true
    }
    return bookDeleted;
  };

  this.findBookById = function (id) {
    return this.books[id] ? this.books[id] : null
  };

  this.findBookByTitle = function (title) {
    return Object.values(this.books).find(book => book.title === title);
  };
}

// Do NOT edit the code below this comment.
// You should be able to complete this test without editing below this comment.

const bookManager = new BookManager();

function bookManagementRefactor(operations) {
  // Calls corresponding methods of bookManager based on the input
  return operations.map(operation => {
    const [methodName, ...params] = operation;
    let result = bookManager[methodName].call(bookManager, ...params);
    return result === undefined ? "null" : JSON.stringify(result);
  });
}
