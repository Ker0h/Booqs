// Response Objects
const ApiResponse = require('../models/responses/api.response')
const NotFoundResponse = require('../models/responses/notFound.response')
const PreConditionFailedResponse = require('../models/responses/preconditionFailed.response')
const InternalServerErrorResponse = require('../models/responses/internalServerError.response')

//Schema
const Book = require('../models/schemas/book.schema').Book

let createBook = (req, res) => {
    
    let isbn = req.body.isbn || ''
    let alternativeIdentifier = req.body.alternativeIdentifier || ''
    let title = req.body.title || ''
    let description = req.body.description || ''
    let author = req.body.author || null
    let genre = req.body.genre || null
    let publishedDate = req.body.publishedDate || null
    let publisher = req.body.publisher || null

    const book = new Book({
        isbn: isbn,
        alternativeIdentifier: alternativeIdentifier,
        title: title,
        description: description,
        author: author,
        genre: genre,
        publishedDate: publishedDate,
        publisher: publisher
    })

    book.save()
        .then((book) => {
            return new ApiResponse(req, res, book)
        }).catch((error) => {
            return new InternalServerErrorResponse(req, res, error)
        })
}

let getAllBooks = (req, res) => {
    Book.find({})
        .then((books) => {
            return new ApiResponse(req, res, books)
        })
}

let getBookByID = (req, res) => {

    let id = req.params.id || ''

    // Check for params
    if (id == '') return new PreConditionFailedResponse(req, res)

    // Return Book
   Book.findById(id)
    .then((book) => {
        return new ApiResponse(req, res, book)
    })

}

let getBookByTitle = (req, res) => {

    let title = req.params.title || ''
    
    //Check for params
    if(title == '') return new PreConditionFailedResponse(req, res)

    //Return Book
   Book.find({title: title})
    .then((book) => {
        return new ApiResponse(req, res, book)
    })

}

module.exports = {
    createBook,
    getAllBooks,
    getBookByID,
    getBookByTitle
}