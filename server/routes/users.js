var express = require('express');
var router = express.Router();

const userDetail = {
  fullname: 'Tofu Chan',
  email: 'tofuchan@gmail.com',
  username: 'itstofuchan'
}

/* GET users listing. */
router.get('/me', function(req, res, next) {
  const failJSON = {
    message: 'User not logged in'
  }
  
  res.status(403).json(failJSON);
});

module.exports = router;
