class ApiResponse {

  constructor(req, res, result) {
      this.status = res.statusCode
      this.endpoint = req.originalUrl
      this.result = result
      this.datetime = new Date().toISOString()

      res.status(this.status).json(this).end()
  }

}

module.exports = ApiResponse