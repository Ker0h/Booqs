class PreconditionFailedResponse {

  constructor(req, res) {
      this.status = 412
      this.endpoint = req.originalUrl
      this.result = "Preconditions Failed. Please provide required parameters"
      this.datetime = new Date().toISOString()

      res.status(this.status).json(this).end()
  }

}

module.exports = PreconditionFailedResponse