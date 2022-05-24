const Book = require("../models/book")

module.exports = class BookController {
    static async showBooks(re, res) {
        const books = await Book.getBooks()
        res.render("books/all", { books })
    }

    static createBook(req, res) {
        res.render('books/create')
    }

    static createBookPost(req, res) {
        const name = req.body.name
        const price = req.body.price
    
        const book = new Book(name, price)
    
        book.save()
    
        res.redirect('/')
      }
}