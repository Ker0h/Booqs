// Response Objects
const ApiResponse = require('../models/responses/api.response')
const NotFoundResponse = require('../models/responses/notFound.response')
const PreConditionFailedResponse = require('../models/responses/preconditionFailed.response')
const InternalServerErrorResponse = require('../models/responses/internalServerError.response')

//Schemas
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

let updateBook = (req, res) => {

    let id = req.params.id || ''
    
    let isbn = req.body.isbn || ''
    let alternativeIdentifier = req.body.alternativeIdentifier || ''
    let title = req.body.title || ''
    let description = req.body.description || ''
    let author = req.body.author || null
    let genre = req.body.genre || null
    let publishedDate = req.body.publishedDate || null
    let publisher = req.body.publisher || null

    if(id == '') return new PreConditionFailedResponse(req, res)

    Book.findByIdAndUpdate(id, {isbn: isbn, alternativeIdentifier: alternativeIdentifier, title: title, description: description,
        author: author, genre: genre, publishedDate: publishedDate, publisher: publisher})
        .then((book) => {
            return new ApiResponse(req, res, book) 
        })
        .catch((error) => {
            return new InternalServerErrorResponse(req, res, error)
        })
}

let deleteBook = (req, res) => {

    let id = req. params.id || ''

    if(id == '') return new PreConditionFailedResponse(req, res)

    Book.findByIdAndDelete(id)
        .then((book) => {
            return new ApiResponse(req, res, book)
        })
        .catch((error) => {
            return new InternalServerErrorResponse(req, res)
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

let getBooksByTitle = (req, res) => {

    let title = req.params.title || ''
    
    //Check for params
    if(title == '') return new PreConditionFailedResponse(req, res)

    //Return Book
   Book.find({title: title})
    .then((books) => {
        return new ApiResponse(req, res, books)
    })

}

let getBooksByAuthor = (req, res) => {

    let genre = req.params.author || ''
    
    //Check for params
    if(author == '') return new PreConditionFailedResponse(req, res)

    //Return Book
   Book.find({ "author.name": author })
    .then((books) => {
        return new ApiResponse(req, res, books)
    })

}

let getBooksByPublisher = (req, res) => {

    let publisher = req.params.publisher || ''
    
    //Check for params
    if(publisher == '') return new PreConditionFailedResponse(req, res)

    //Return Book
   Book.find({ "publisher.name": publisher })
    .then((books) => {
        return new ApiResponse(req, res, books)
    })

}

let getBooksByGenre = (req, res) => {

    let genre = req.params.genre || ''
    
    //Check for params
    if(genre == '') return new PreConditionFailedResponse(req, res)

    //Return Book
   Book.find({ "genre.name": genre })
    .then((books) => {
        return new ApiResponse(req, res, books)
    })

}


module.exports = {
    createBook,
    updateBook,
    deleteBook,
    getAllBooks,
    getBookByID,
    getBooksByTitle,
    getBooksByGenre,
    getBooksByAuthor,
    getBooksByPublisher
}