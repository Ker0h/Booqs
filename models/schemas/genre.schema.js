const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
const BookSchema = require('./book.schema').BookSchema


var GenreSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  subgenre: {type: this, required: false }
})

const Genre = mongoose.model('Genre', GenreSchema)

module.exports = {
  Genre,
  GenreSchema
}