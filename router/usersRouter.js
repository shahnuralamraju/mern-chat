const express = require("express");
const getUsers = require("../controller/usersController");
const titleHanler = require("../middlewares/common/titleHandler");

const router = express.Router();

//login page
router.get("/",titleHanler("Users"), getUsers);

module.exports = router