const ENV = require("../config/env");
module.exports = (error, req, res, next) => {
  if (error.isOperational) {
    res.render("errors/error", {
      status: error.status,
      title: error.title,
      statusCode: error.statusCode,
      message: error.message,
      stack: ENV.ENV_NODE == "development" ? error.stack : "",
    });
  } else {
    res.render("errors/error", {
      status: "error",
      title: "Internal Error.",
      statusCode: error.code,
      message: "Something went wrong on our end. Please try again later.",
      stack: error.stack,
    });
  }
};
