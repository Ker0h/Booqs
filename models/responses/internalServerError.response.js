class InternalServerErrorResponse {

  constructor(req, res, error) {

    this.status =  500
    this.endpoint = req.originalUrl
    this.result = `Internal Server Error - ${error}`
    this.datetime = new Date().toISOString()

    res.status(this.status).json(this).end()
}

}

module.exports = InternalServerErrorResponse