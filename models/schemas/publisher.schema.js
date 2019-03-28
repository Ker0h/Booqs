const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId
const BookSchema = require('./book.schema').BookSchema

var PublisherSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: false }
})

const Publisher = mongoose.model('Publisher', PublisherSchema)

module.exports = {
  Publisher,
  PublisherSchema
}