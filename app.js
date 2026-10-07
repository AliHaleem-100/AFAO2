const EXPRESS = require("express");
const APP = EXPRESS();
const CUSTOM_ERROR = require("./src/shared/utilities/customError");
const ERROR_MIDDLEWARE = require("./src/middlewares/error.middleware");
const path = require("path");
const ENV_NODE = require("./src/config/env").ENV_NODE;

APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.static(path.join(__dirname, "public")));

APP.set("views", path.join(__dirname, "src", "views"));
APP.set("view engine", "ejs");

APP.locals.ENV_NODE = ENV_NODE;

// routes
APP.use("/", require("./src/routes"));

// error handing
// "*" deprecated and uses "/*splat" for universal selection
APP.use("/*splat", (req, res, next) => {
  try {
    let pgNotFoundErr = new CUSTOM_ERROR(
      404,
      "Page Not Found",
      "They Page You are Looking For is not Exists.",
    );
    throw pgNotFoundErr;
  } catch (err) {
    next(err);
  }
});

APP.use(ERROR_MIDDLEWARE);
module.exports = APP;
