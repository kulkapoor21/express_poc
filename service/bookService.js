import Book from '../model/book.js'

export default class bookService {
  static findAllBooks = async () => {
    try {
      const allBooks = await Book.find()
      return allBooks
    } catch (err) {
      throw new Error(`Couldn't fetch books: ${err}`)
    }
  };

  static findBookById = async (id) => {
    try {
      const book = await Book.findById(id)
      return book
    } catch (err) {
      throw new Error(`Couldn't fetch book by ID: ${id}: ${err}`)
    }
  };

  static updateBook = async (id, book) => {
    try {
      const updateResponse = await Book.findByIdAndUpdate(id, book, {
        new: true,
      })
      return updateResponse;
    } catch (err) {
      throw new Error(`Couldn't Update book by ID: ${id}: ${err}`)
    }
  };

  static createBook = async (book) => {
    try {
      const newBook = {
        id: parseInt(Date.now() + Math.random(Math.random() * 10)),
        title: book.title ? book.title : "",
        author: book.author ? book.author : "unknown",
        price: book.price ? book.price : "0.00",
      }
      const response = await new Book(newBook).save()
      return response
    } catch (err) {
      throw new Error(`Unable to create book: ${id}: ${err}`)
    }
  };

  static deleteBookById = async (id) => {
    try {
      const deletedResponse = await Book.findByIdAndDelete(id)
      return deletedResponse
    } catch (err) {
      throw new Error(`Unable to delete book ID: ${id}: ${err}`)
    }
  };
};
