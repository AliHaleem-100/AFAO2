
module.exports = (function () {
    const ENV = require("./env")
    const MONGOOSE = require("mongoose");
    MONGOOSE.connect(ENV.MONGO_DB_URI).then(() => console.log("Connected to Mongodb")).catch(e => console.log("Failed Databse Connection" || e))

})