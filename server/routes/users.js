var express = require('express');
var router = express.Router();

const {
  get_user,
  check_user_exist,
  get_user_unanswered_questions,
  get_user_answered_questions,
  get_user_single_answered_question,
  create_user
} = require('../controllers/userController');

router.post('/', create_user);

// Check if user exists
router.get('/:username', check_user_exist);

// Gets currently signed in user (Right now gets 'Random User')
router.get('/me', get_user);

// Questions
router.get('/questions', get_user_unanswered_questions);
router.get('/:username/questions', get_user_answered_questions);
router.get('/:username/questions/:id', get_user_single_answered_question)
module.exports = router;
