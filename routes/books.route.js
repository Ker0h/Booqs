const routes = require('express').Router()
const controller = require('../controllers/books.controller')

routes.get('/', controller.getAllBooks)
routes.get('/:id', controller.getBookByID)

module.exports = routes