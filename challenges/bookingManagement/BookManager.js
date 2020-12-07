class BookManager {
  constructor() {
    this.books = [];
  }

  createBook(idArg, title) {
    // TODO: return false if the book id already exists
    const id = parseInt(idArg, 10);
    const book = {};
    book.id = id;
    book.title = title;
    this.books = [...this.books, book];
    return true;
  }

  updateBook(idArg, title) {
    // TODO: return false if the book doesn't exist

    const id = parseInt(idArg, 10);
    this.books = this.books.filter(() => ({
      id,
      title,
    }));
    return true;
  }

  deleteBook(idArg) {
    // TODO: return false if the book doesn't exist

    const id = parseInt(idArg, 10);
    let foundBook = this.books.find((book) => book.id === id);
    console.log('foundBook');
    console.log(foundBook);
    // delete book;
    foundBook = null;
    return true;
  }

  findBookById(id) {
    return this.books.find((book) => book.id === parseInt(id, 10));
  }

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }
}

module.exports = BookManager;
