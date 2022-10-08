const express = require("express");
const getInbox = require("../controller/inboxController");
const titleHanler = require("../middlewares/common/titleHandler");

const router = express.Router();

//login page
router.get("/",titleHanler("Inbox"),  getInbox);

module.exports = router