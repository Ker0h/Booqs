const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
const BookSchema = require('./book.schema').BookSchema

var AuthorSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String, required: false },
  dob: { type: Date, required: false }
})

const Author = mongoose.model('Author', AuthorSchema)

module.exports = {
  Author,
  AuthorSchema
}