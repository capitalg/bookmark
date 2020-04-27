const { MongoDataSource } = require('apollo-datasource-mongodb')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookNoteSchema = new Schema({
  bookId: String,
  pageNumber: Number,
  text: String,
  createdAt: String,
  updatedAt: String,
});

const BookNoteModel = mongoose.model('BookNote', bookNoteSchema);

class BookNotesDataSource extends MongoDataSource {
  constructor() {
    super(BookNoteModel)
  }

  getBookNotes() {
    return this.collection.find({}).toArray()
  }

  getBookNote(bookNoteId) {
    return this.model.findById(bookNoteId)
  }

  getByBookId(bookId) {
    return this.collection.find({ bookId }).toArray()
  }

  addBookNote(args) {
    const bookNote = new BookNoteModel(args)
    return bookNote.save()
  }
}

module.exports = BookNotesDataSource
