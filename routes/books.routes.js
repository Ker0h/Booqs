const routes = require('express').Router()
const controller = require('../api/controllers/books.controller')

routes.post('/', controller.createBook)
routes.put('/:id', controller.updateBook)
routes.delete('/:id', controller.deleteBook)
routes.get('/', controller.getAllBooks)
routes.get('/:id', controller.getBookByID)
routes.get('/title/:title', controller.getBooksByTitle)
routes.get('/genre/:genre', controller.getBooksByGenre)
routes.get('/author/:author', controller.getBooksByAuthor)
routes.get('/publisher/:publisher', controller.getBooksByPublisher)

module.exports = routes