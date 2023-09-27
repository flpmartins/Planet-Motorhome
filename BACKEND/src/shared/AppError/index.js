class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message)

    this.message = message
    this.status = statusCode
  }
}

module.exports = AppError
