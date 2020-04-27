const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookNoteSchema = new Schema({
  name: String,
  bookId: String,
  pageNumber: Number,
  text: String,
  createdAt: String,
  updatedAt: String,
});

module.exports = mongoose.model('BookNote', bookNoteSchema);
