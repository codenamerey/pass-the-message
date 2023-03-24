var express = require('express');
var router = express.Router();

const userDetail = {
  fullname: 'Tofu Chan',
  email: 'tofuchan@gmail.com',
  username: 'itstofuchan'
}

/* GET users listing. */
router.get('/me', function(req, res, next) {
  res.json(userDetail);
});

module.exports = router;
