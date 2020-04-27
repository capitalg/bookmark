const { MongoDataSource } = require('apollo-datasource-mongodb')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
})

const BookModel = mongoose.model('Book', bookSchema)

class BooksDataSource extends MongoDataSource {
  constructor() {
    super(BookModel)
  }

  getBooks() {
    return this.collection.find({}).toArray()
  }

  getBook(bookId) {
    return this.model.findById(bookId)
  }

  addBook(args) {
    const book = new BookModel(args)
    return book.save()
  }
}

module.exports = BooksDataSource
