class BookManager {
  constructor() {
    this.books = [];
  }

  createBook(idArg, title) {
    const id = parseInt(idArg, 10);
    const foundBook = this.books.find((book) => book.id === id);
    if (!foundBook) {
      const book = {};
      book.id = id;
      book.title = title;
      this.books = [...this.books, book];
      return true;
    }
    return false;
  }

  updateBook(idArg, title) {
    const id = parseInt(idArg, 10);
    const foundBook = this.books.find((book) => book.id === id);
    if (!foundBook) {
      return false;
    }
    const foundBookIndex = this.books.indexOf(foundBook);

    const book = {};
    book.id = id;
    book.title = title;

    const currentBookList = this.books;
    currentBookList.splice(foundBookIndex, 1, book);
    this.books = [...currentBookList];
    return true;
  }

  deleteBook(idArg) {
    const id = parseInt(idArg, 10);
    const foundBook = this.books.find((book) => book.id === id);
    const foundBookIndex = this.books.indexOf(foundBook);
    if (!foundBook) {
      return false;
    }
    const newBookArray = this.books.splice(foundBookIndex, 1);
    this.books = newBookArray;
    return true;
  }

  findBookById(idArg) {
    const id = parseInt(idArg, 10);
    const foundBook = this.books.find((book) => book.id === id);
    return foundBook || null;
  }

  findBookByTitle(title) {
    const foundBook = this.books.find((book) => book.title === title);
    return foundBook || null;
  }
}

module.exports = BookManager;
