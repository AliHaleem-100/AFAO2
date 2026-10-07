// title is for big font and message is a little detail for the user
class CustomError extends Error {
  constructor(statusCode = 500, title, message) {
    super(message);
    this.statusCode = statusCode;
    this.title = title;
    this.message = this.message = message;
    this.status = statusCode > 400 && statusCode < 500 ? "fail" : "error";

    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
