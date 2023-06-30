const { Router } = require("express");
const { localLogIn, logOut } = require("../controllers/authController.js");

const router = Router();

router.post('/local', localLogIn);

// Log out
router.get('/logout', logOut);

module.exports = router