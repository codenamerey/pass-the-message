var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/me', async function(req, res, next) {
  const failJSON = {
    message: 'User not logged in'
  }

  try {
    const user = await User.findById('64210958b7d2a96badeebd7a')
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

});

module.exports = router;
