require("dotenv").config();

const APP = require("./app");
const env = require("./src/config/env");

const PORT = env.PORT;
APP.listen(PORT, () => console.log(`listening to port ${PORT}`));
