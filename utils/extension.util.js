const app = require('../server.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Accept JSON
app.use(bodyParser.json({
    extended: true
}))

//Accept CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Accept URL Encoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// Log Requests with Morgan
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'))
