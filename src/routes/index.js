const EXPRESS = require("express");
const APP = EXPRESS.Router();


APP.use("/", require("../modules/home/home.routes.js"))


module.exports = APP;
