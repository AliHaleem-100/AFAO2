const EXPRESS = require("express");
const APP = EXPRESS.Router();

const homeController = require("./home.controller");

APP.get("/", homeController.home);

module.exports = APP;
