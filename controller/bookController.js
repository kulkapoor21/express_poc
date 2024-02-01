import BookService from "../service/bookService.js";

export default class BookController {
  static findAll = async (req, res) => {
    try {
      const allBook = await BookService.findAllBooks();
      if (!allBook) {
        res.status(404).json("There's no book published yet");
      }
      res.status(200).json(allBook)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static findBookById = async (req, res) => {
    try {
      const book = await BookService.findBookById(req.params.id);
      res.status(200).json(book)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static updateBook = async (req, res) => {
    try {
      const updatedBook = await BookService.updateBook(req.params.id, req.body)
      if (!updatedBook) {
        res.status(404).json(`Unable to update Book`);
      }
      res.status(200).json(updatedBook)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static createBook = async (req, res) => {
    try {
      const book = await BookService.createBook(req.body)
      res.status(200).json(book)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }

  static deleteBookById = async (req, res) => {
    try {
      const deletedResponse = await BookService.deleteBookById(req.params.id)
      res.status(200).json(deletedResponse)
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
}
