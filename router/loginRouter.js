const express = require("express");
const getLogin = require("../controller/loginController");
const titleHanler = require("../middlewares/common/titleHandler");

const router = express.Router();

//login page
router.get("/",titleHanler("Login"), getLogin);

module.exports = router