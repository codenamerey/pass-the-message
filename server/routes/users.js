var express = require('express');
var router = express.Router();

const {
  get_user,
  get_user_unanswered_questions
} = require('../controllers/userController');

// Gets currently signed in user (Right now gets 'Random User')
router.get('/me', get_user);

// Questions
router.get('/questions', get_user_unanswered_questions);

module.exports = router;
