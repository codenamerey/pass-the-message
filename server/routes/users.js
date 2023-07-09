var express = require('express');
var router = express.Router();

const {
  get_user,
  check_user_exist,
  get_user_unanswered_questions,
  get_user_answered_questions,
  get_user_single_answered_question,
  create_user,
  create_question
} = require('../controllers/userController');
const requireJwtAuth = require('../middleware/requireJwtAuth');

router.post('/', create_user);

router.get('/me', requireJwtAuth, get_user);
// Check if user exists
router.get('/single/:username', check_user_exist);

// Gets currently signed in user (Right now gets 'Random User')

// Questions
router.get('/questions', get_user_unanswered_questions);
router.get('/:username/questions', get_user_answered_questions);
router.get('/:username/questions/:id', get_user_single_answered_question)

router.post('/:username/questions', create_question);

router.param('username', (req, res, next, username) => {
  req.username = username;
  next()
})
module.exports = router;
