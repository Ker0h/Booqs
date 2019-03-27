class NotFoundResponse {

  constructor(res) {

    this.status = 404
    this.result = "Endpoint not found"
    this.datetime = new Date().toISOString()

    res.status(this.status).json(this).end()
}

}

module.exports = NotFoundResponse