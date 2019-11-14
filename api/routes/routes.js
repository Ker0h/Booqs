const routes = require('express').Router()
const books_routes = require('./books.routes')

const NotFoundResponse = require('../models/responses/notFound.response')

routes.get('/', (req, res) => res.status(200).json({"message": "Hello World!"}))
routes.use('/books', books_routes)
routes.use('*', (req, res) => new NotFoundResponse(res))

module.exports = routes