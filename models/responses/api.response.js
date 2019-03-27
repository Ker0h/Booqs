class ApiResponse {

  constructor(res, req, result) {
      this.status = res.statusCode
      this.result = result
      this.datetime = new Date().toISOString()

      res.status(this.status).json(this).end()
  }

}

module.exports = ApiResponse