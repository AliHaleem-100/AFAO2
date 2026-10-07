const Controller = require("../../controllers/controller.js");

class homeController extends Controller {
  constructor() {
    super();
  }

  home(req, res, next) {
    try {
      res.render("home/home");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new homeController();
