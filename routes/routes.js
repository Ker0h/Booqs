const routes = require('express').Router()
const books_route = require('./books.route')

const NotFoundResponse = require('../models/responses/notFound.response')

routes.get('/', (req, res) => res.status(200).json({"messsage": "Hello World!"}))
routes.use('/books', books_route)
routes.use('*', (req, res) => new NotFoundResponse(res))

module.exports = routes