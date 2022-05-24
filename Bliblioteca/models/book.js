const conn = require('../db/conn')

class Book {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    save() {
        const book = conn.db().collection('books').insertOne({
          name: this.name,
          price: this.price,
        })
    
        return book
      }

    static getBooks() {
        const books = conn.db().collection('books').find().toArray()

        return books
    }
}

module.exports = Book