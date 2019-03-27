const routes = require('express').Router()
const controller = require('../controllers/books.controller')

routes.post('/', controller.createBook)
routes.get('/', controller.getAllBooks)
routes.get('/:id', controller.getBookByID)
routes.get('/:title', controller.getBookByTitle)

module.exports = routes