const { Router } = require("express");
const { localLogIn } = require("../controllers/authController.js");

const router = Router();

router.post('/local', localLogIn);

module.exports = router