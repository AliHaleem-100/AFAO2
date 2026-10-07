const autoBind = require("auto-bind");
module.exports = class controller {
  constructor() {
    autoBind.default(this);
    this.baseUrl = "https://allforall-afao.org/";
  }
};
