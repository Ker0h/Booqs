const app = require('../server.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// Accept JSON
app.use(bodyParser.json({
    extended: true
}))

//Accept CORS
app.use(cors())

// Accept URL Encoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// Log Requests with Morgan
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
