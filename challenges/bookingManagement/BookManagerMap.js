class BookManager {
  constructor() {
    this.books = {};
  }

  createBook(idArg, title) {
    // TODO: return false if the book id already exists
    const id = parseInt(idArg, 10);
    // const foundBook = this.books.find((book) => book.id === id);
    if (!this.books[id]) {
      const book = {};
      book.id = id;
      book.title = title;
      // this.books = [...this.books, book];
      this.books[id] = book;
      return true;
    }
    return false;
  }

  updateBook(idArg, title) {
    // TODO: return false if the book doesn't exist
    const id = parseInt(idArg, 10);
    // const foundBook = this.books.find((book) => book.id === id);
    if (!this.books[id]) {
      return false;
    }
    const book = {};
    book.id = id;
    book.title = title;

    this.books[id] = book;

    //  = this.books.filter(() => ({
    //   id,
    //   title,
    // })

    // );

    return true;
  }

  deleteBook(idArg) {
    // TODO: return false if the book doesn't exist
    const id = parseInt(idArg, 10);
    // let foundBook = this.books.find((book) => book.id === id);
    if (!this.books[id]) {
      return false;
    }
    delete this.books[id];
    // // let foundBook = this.books.find((book) => book.id === id);
    // console.log('foundBook');
    // console.log(foundBook);
    // // delete book;
    // foundBook = null;
    return true;
  }

  findBookById(idArg) {
    const id = parseInt(idArg, 10);
    // const foundBook = this.books.find((book) => book.id === id);
    // return foundBook || null;
    // return this.books.find((book) => book.id === id);
    return this.books[id] ? this.books[id] : null;
  }

  findBookByTitle(title) {
    // const foundBook = this.books.find((book) => book.title === title);
    // return foundBook || null;
    // return this.books.find((book) => book.title === title);
    return this.books[title] ? this.books[title] : null;
  }
}

module.exports = BookManager;
