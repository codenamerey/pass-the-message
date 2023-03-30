var express = require('express');
var router = express.Router();

const {
  get_user,
  check_user_exist,
  get_user_unanswered_questions,
  get_user_answered_questions
} = require('../controllers/userController');

// Check if user exists
router.get('/:username', check_user_exist);

// Gets currently signed in user (Right now gets 'Random User')
router.get('/me', get_user);

// Questions
router.get('/questions', get_user_unanswered_questions);
router.get('/:id/questions', get_user_answered_questions);
module.exports = router;
