const User = require('../models/User');
const Question = require('../models/Question');
const Answer = require('../models/Answer');

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
      res.status(403).json(failJSON);
    }
}

exports.check_user_exist = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.params.username
    })
    const {
      fullname,
      ...userDetails
    } = user.toJSON()
    res.status(200).json(fullname);
  }

  catch(err) {
    const failJSON = {
      message: 'User not found!'
    }

    res.status(404).json(failJSON);
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


// Does not require auth, everyone is supposed to see this
exports.get_user_answered_questions = async(req, res, next) => {
  try {
    const questions = await Question.find({
      answered: true,
    }, 'question answer user').populate(['user', 'answer'])
    const user_questions = questions.filter((question) => {
      return question.user.username === req.params.username
    })
    res.status(200).json(user_questions)
  }
  catch (err) {
    const failJSON = {
      message: err
    }

    res.status(502).json(failJSON)
  }
}