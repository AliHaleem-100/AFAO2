const Controller = require("../../controllers/controller.js");
const PROGRAMS_MODEL = require("../programs/program.model.js")
class homeController extends Controller {
  constructor() {
    super();
  }

  async home(req, res, next) {
    try {
      let programList = await PROGRAMS_MODEL.find({});


      res.render("home/home", {
        programList,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new homeController();
