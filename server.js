require("dotenv").config();


const ENV = require("./src/config/env");
const APP = require("./app");

const PORT = ENV.PORT;
APP.listen(PORT, () => console.log(`listening to port ${PORT}`));
