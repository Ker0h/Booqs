// Response Objects
const ApiResponse = require('../models/responses/api.response')
const NotFoundResponse = require('../models/responses/notFound.response')
const PreConditionFailedResponse = require('../models/responses/preconditionFailed.response')

let getAllBooks = (req, res) => {
   new ApiResponse(res, req, "All Books")
}

let getBookByID = (req, res) => {

    let id = req.params.id || ''

    // Check for params
    if (id == '') return new PreConditionFailedResponse(req, res)

    // Return Book
   return  new ApiResponse(res, req, "book object")
}

module.exports = {
    getAllBooks,
    getBookByID
}