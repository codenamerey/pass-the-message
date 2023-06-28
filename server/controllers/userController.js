const User = require('../models/User');
const Question = require('../models/Question');
const Answer = require('../models/Answer');

// #region GET functions

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

exports.get_user_single_answered_question = async(req, res, next) => {
  try {
    const question = await Question.findOne({
      id: req.params.id,
      answered: true
    }).populate(['question', 'user', 'answer'])

    const {
      user,
      ...questionDetails
    } = question.toJSON()
    console.log(questionDetails)
    question.user.username == req.params.username ?
                              res.status(200).json(questionDetails) :
                              res.status(404).json({message: "Question not found"})
  }

  catch(err) {
    const failJSON = {
      message: err
    }
    res.status(502).json(failJSON)
  }

}

// #endregion

// #region POST functions
exports.create_user = async(req, res) => {
  const {
    first_name,
    last_name,
    username,
    email
  } = req.body;

  try {
    const user = new User({
      first_name,
      last_name,
      username,
      email
    })

    await user.save();
    res.status(200).json(user.toJSON())

  } catch(err) {
    res.status(500).json({ message: "Error creating new user" })
  }

}
// #endregion