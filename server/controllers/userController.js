const User = require('../models/User');
const Question = require('../models/Question');

exports.get_user = async function(req, res, next) {
    const failJSON = {
      message: 'User not logged in'
    }
  
    try {
      const user = await User.findById(req.id)
      const {
        password,
        ...userDetails
      } = user.toJSON();
  
      res.status(200).json(userDetails);
    }
  
    catch(err) {
      console.log(err);
      res.status(403).json(failJSON);
    }
}

exports.get_user_unanswered_questions = async (req, res, next) => {

    try {
        const questions = await Question.find({
            user: req.id,
            answered: false
        });

        res.status(200).json(questions);
    }
    catch (err) {
        const failJSON = {
            message: err
        }
        res.json(failJSON);
    }

}