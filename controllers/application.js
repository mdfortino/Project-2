// a controller is just an object of methods(called actions)
//the following shows the list of questions
const { Question } = require("../models/Question")
module.exports = {
    index: (req, res) => {
      Question.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(questions => {
        res.render("app/index", { questions });
      })
    }
  };
