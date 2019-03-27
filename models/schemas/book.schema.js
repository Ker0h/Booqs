const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
const GenreSchema = require('./genre.schema.js').GenreSchema

var BookSchema = new Schema({
  isbn: { type: String, required: false },
  alternativeIdentifier: { type: String, required: false },
  title: { type: String, required: true },
  description: { type: String, required: false },
  author: { type: ObjectId, ref: 'Author', required: false },
  genre: GenreSchema,
  publishedDate: { type: Date, required: false },
  publisher: { type: ObjectId, ref: 'Publisher', required: false }
})

const Book = mongoose.model('Book', BookSchema)

module.exports = {
  Book,
  BookSchema
}